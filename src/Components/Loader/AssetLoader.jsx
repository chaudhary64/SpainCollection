import { useState, useEffect, useRef } from "react";

// Safety net: never keep the visitor on the loader longer than this, even if an
// asset stalls or the connection drops.
const MAX_WAIT_MS = 8000;

// Give the brand fill enough time to read. Together with the hold, the slide
// delay and the slide, this holds the loader for about six seconds.
const MIN_DISPLAY_MS = 3600;

// Brief hold at the end of the fill before the page mounts and the exit starts.
const COMPLETE_HOLD_MS = 300;

// The exit matches the original site: a pause while the page mounts, then an
// 0.85s slide. The slide is a CSS transform so it runs on the compositor and
// cannot be stalled by page-mount work on the main thread.
const SLIDE_DELAY_MS = 1200;
const SLIDE_DURATION_MS = 850;

// Mount the page behind the opaque overlay early, so its media, layout and
// rasterisation are done long before the curtain moves. Mounting it only when
// the exit starts left that work competing with the slide.
const PAGE_MOUNT_MS = 1200;

// While assets are still loading, advance the ring so it never looks frozen at
// a partial percentage.
const WAIT_PROGRESS_CAP = 96;

// Pace the ring over this long instead of jumping straight to the asset count.
// With a small, cached asset list the real count settles in a few hundred ms,
// which made the only animation on screen look instant.
const RING_FILL_MS = 3600;

// The ring is animated on every frame towards a moving target. A time constant
// (rather than a fixed-duration CSS transition) keeps the motion continuous:
// the eased value never stops and restarts, so the arc glides even while the
// target keeps moving, and it stays identical at 60Hz, 120Hz or after a hitch.
const RING_EASE_MS = 170;

// Ignore absurd frame deltas (background tab, long task) so the ring does not
// teleport after the tab becomes visible again.
const MAX_FRAME_MS = 64;

// Hard cap on how fast the arc may travel, in circumference pixels per
// millisecond. Mounting the page under the overlay can block the main thread for
// a couple of hundred milliseconds; without this the eased value lands in one
// big leap once frames resume, which reads as a lurch.
const RING_MAX_PX_PER_MS = 0.12;

// The cap is measured against a short lookahead window rather than the whole
// frame delta: a stalled frame would otherwise buy itself a big allowance and
// jump anyway. Still well above the fill pace (41%/s vs 27%/s), so steady motion
// never touches the cap at any refresh rate.
const RING_STEP_WINDOW_MS = 20;

const SNAP_EPSILON = 0.05;

const RING_RADIUS = 46;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

// Fonts declared with @font-face in index.css. They are not in the DOM until the
// page renders, so they are loaded explicitly here to avoid a font swap after the
// preloader is gone. Each entry follows the CSS font shorthand syntax.
const CSS_FONT_REQUESTS = [
  '400 1em "Inter"',
  '300 1em "SaolDisplay"',
  '400 1em "SaolDisplay"',
  'italic 300 1em "SaolDisplay"',
];

const preloadImage = (src, onSettled) => {
  let settled = false;
  const settle = () => {
    if (settled) return;
    settled = true;
    onSettled();
  };

  const img = new Image();

  // Handlers must be attached before src, otherwise a cached image can finish
  // loading before we start listening.
  img.onload = () => {
    // decode() ensures the image is ready to paint, not just downloaded.
    (img.decode ? img.decode() : Promise.resolve()).catch(() => {}).finally(settle);
  };
  img.onerror = () => {
    console.warn(`Preloader: image failed to load - ${src}`);
    settle();
  };

  img.src = src;

  return () => {
    img.onload = null;
    img.onerror = null;
  };
};

const preloadVideo = (src, onSettled) => {
  let settled = false;
  const settle = () => {
    if (settled) return;
    settled = true;
    onSettled();
  };

  const video = document.createElement("video");
  video.preload = "auto";
  video.muted = true;
  video.playsInline = true;

  // Get to the first usable frame instead of buffering the whole file. This is a
  // muted, looping background video, so waiting for canplaythrough can pin the
  // loader at a partial percentage on slow connections.
  video.onloadeddata = settle;
  video.oncanplay = settle;
  video.oncanplaythrough = settle;
  video.onerror = () => {
    console.warn(`Preloader: video failed to load - ${src}`);
    settle();
  };

  video.src = src;
  video.load();

  return () => {
    video.onloadeddata = null;
    video.oncanplay = null;
    video.oncanplaythrough = null;
    video.onerror = null;
    video.removeAttribute("src");
    video.load();
  };
};

const preloadFont = async (asset, onSettled) => {
  try {
    const fontFace = new FontFace(asset.family, `url("${asset.src}")`, {
      style: asset.style || "normal",
      weight: asset.weight || "normal",
    });
    await fontFace.load();
    document.fonts.add(fontFace);
  } catch (error) {
    console.warn(`Preloader: font failed to load - ${asset.family}`, error);
  } finally {
    onSettled();
  }
};

const loadCssFonts = () => {
  if (!document.fonts) return Promise.resolve();

  try {
    return Promise.allSettled(
      CSS_FONT_REQUESTS.map((font) => document.fonts.load(font))
    ).then(() => document.fonts.ready);
  } catch {
    // A malformed font shorthand must not leave the preloader running forever.
    return Promise.resolve();
  }
};

const AssetLoader = ({ assets = [], children }) => {
  const [pageMounted, setPageMounted] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const overlayRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let exitScheduled = false;
    let assetsReady = false;
    let finishing = false;
    let targetProgress = 0;
    let shownProgress = 0;
    let announcedProgress = -1;
    let frameId = 0;
    let lastFrameAt = performance.now();
    let exitTimer;
    let unmountTimer;
    let pageMountTimer;
    let timeoutId;
    const cleanups = [];
    const startedAt = performance.now();

    const reducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    pageMountTimer = setTimeout(() => {
      if (!cancelled) setPageMounted(true);
    }, PAGE_MOUNT_MS);

    // The ring is painted straight to the DOM from the animation frame. Driving
    // it through React state re-rendered the loader (and the whole page mounted
    // underneath it) many times a second, which is what made the arc stutter.
    const paintRing = (value) => {
      const ring = ringRef.current;
      if (ring) {
        ring.style.strokeDashoffset = String(
          RING_CIRCUMFERENCE * (1 - value / 100)
        );
      }

      const overlay = overlayRef.current;
      const rounded = Math.round(value);
      if (overlay && rounded !== announcedProgress) {
        announcedProgress = rounded;
        overlay.setAttribute("aria-valuenow", String(rounded));
      }
    };

    const frame = (now) => {
      const delta = Math.min(now - lastFrameAt, MAX_FRAME_MS);
      lastFrameAt = now;

      if (!finishing) {
        // Time-based but monotonic, so a slow frame never rewinds the ring.
        const timed = ((now - startedAt) / RING_FILL_MS) * WAIT_PROGRESS_CAP;
        targetProgress = Math.max(
          targetProgress,
          Math.min(WAIT_PROGRESS_CAP, timed)
        );
      } else {
        targetProgress = 100;
      }

      if (reducedMotion) {
        shownProgress = targetProgress;
      } else {
        const eased =
          shownProgress +
          (targetProgress - shownProgress) * (1 - Math.exp(-delta / RING_EASE_MS));
        const maxStep =
          ((RING_MAX_PX_PER_MS * Math.min(delta, RING_STEP_WINDOW_MS)) /
            RING_CIRCUMFERENCE) *
          100;
        shownProgress = Math.min(eased, shownProgress + maxStep);
      }

      if (targetProgress >= 100 && 100 - shownProgress <= SNAP_EPSILON) {
        // Land exactly on a closed ring, then stop scheduling frames so the
        // page is not animating a hidden SVG for the rest of the session.
        paintRing(100);
        frameId = 0;
        return;
      }

      paintRing(shownProgress);
      frameId = requestAnimationFrame(frame);
    };

    const scheduleExit = (now) => {
      if (cancelled || exitScheduled) return;
      exitScheduled = true;

      clearTimeout(timeoutId);

      const elapsed = now - startedAt;
      const remainingMinimum = Math.max(MIN_DISPLAY_MS - elapsed, 0);
      exitTimer = setTimeout(() => {
        if (cancelled) return;

        // Whatever percentage the ring reached, glide it to a full circle
        // before revealing the page. The animation frame finishes the arc on
        // its own easing curve, so this never snaps.
        finishing = true;

        // The page is already mounted and painted underneath; just start the
        // curtain after the pause that lets the final media settle.
        setExiting(true);

        unmountTimer = setTimeout(() => {
          if (!cancelled) setOverlayVisible(false);
        }, SLIDE_DELAY_MS + SLIDE_DURATION_MS + 100);
      }, remainingMinimum + COMPLETE_HOLD_MS);
    };

    const markAssetsReady = () => {
      if (cancelled || assetsReady) return;
      assetsReady = true;
      scheduleExit(performance.now());
    };

    const assetPromises = assets.map(
      (asset) =>
        new Promise((resolve) => {
          const onSettled = () => resolve();

          if (asset.type === "image") {
            cleanups.push(preloadImage(asset.src, onSettled));
          } else if (asset.type === "video") {
            cleanups.push(preloadVideo(asset.src, onSettled));
          } else if (asset.type === "font") {
            preloadFont(asset, onSettled);
          } else {
            console.warn(`Preloader: unknown asset type - ${asset.type}`);
            onSettled();
          }
        })
    );

    // Give up waiting for the remaining assets after MAX_WAIT_MS. The timeout
    // resolves (never rejects), so the loader always leaves.
    const timeoutPromise = new Promise((resolve) => {
      timeoutId = setTimeout(() => {
        if (!cancelled) {
          console.warn(
            `Preloader: assets still not ready after ${MAX_WAIT_MS}ms, continuing.`
          );
        }
        resolve();
      }, MAX_WAIT_MS);
    });

    paintRing(0);
    frameId = requestAnimationFrame(frame);

    Promise.race([
      Promise.all([...assetPromises, loadCssFonts()]),
      timeoutPromise,
    ])
      .then(markAssetsReady)
      .catch(markAssetsReady);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
      clearTimeout(pageMountTimer);
      clearTimeout(timeoutId);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [assets]);

  return (
    <>
      {pageMounted && children}
      {overlayVisible && (
          <div
            ref={overlayRef}
            role="progressbar"
            aria-label="Loading site"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={0}
            style={{
              // A CSS animation on a 3D transform keeps the slide on the
              // compositor. A transition here could be starved by the page
              // mount/rasterisation work happening underneath.
              transform: "translate3d(0, 0, 0)",
              animation: exiting
                ? `loader-slide-down ${SLIDE_DURATION_MS}ms ease-in-out ${SLIDE_DELAY_MS}ms forwards`
                : "none",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]"
          >
            <div>
              <div className="h-16 sm:h-[70px] md:h-20 3xl:h-28 w-16 sm:w-[70px] md:w-20 3xl:w-28 relative rounded-full">
                <svg
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                  className="absolute inset-0 z-[1] h-full w-full -rotate-90"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r={RING_RADIUS}
                    fill="none"
                    stroke="#10182B"
                    strokeWidth="3"
                  />
                  <circle
                    ref={ringRef}
                    cx="50"
                    cy="50"
                    r={RING_RADIUS}
                    fill="none"
                    stroke="#C01827"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{
                      // Set as a CSS property, not a presentation attribute, so
                      // the frame loop can update it without React re-rendering.
                      strokeDasharray: String(RING_CIRCUMFERENCE),
                      strokeDashoffset: String(RING_CIRCUMFERENCE),
                    }}
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  className="h-14 sm:h-[60px] md:h-16 3xl:h-24 absolute z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      style={{ fill: "#FFFFFF" }}
                      d="M225.9,161.5l66.5,7c7.7,0.7,19.6-3.5,25.2-12.6l0,0c-4.9,2.8-13.3,4.2-20.3,3.5l-65.1-7   c-7.7-0.7-19.6,3.5-25.2,12.6C211.2,162.2,219.6,160.8,225.9,161.5"
                    />
                    <path
                      style={{ fill: "#FFFFFF" }}
                      d="M214,179.7l66.5,7c7.7,0.7,19.6-3.5,25.2-12.6l0,0c-4.9,2.8-13.3,4.2-20.3,3.5l-65.1-7   c-7.7-0.7-19.6,3.5-25.2,12.6C199.3,180.4,207,179,214,179.7"
                    />
                    <path
                      style={{ fill: "#FFFFFF" }}
                      d="M303.6,218.2v68.6l0,0v0.7c0,7-2.1,13.3-5.6,19.6l15.4,26.6V224.5v-2.1c0.7-5.6,2.1-11.2,4.2-16.1l2.1-4.2   C310.6,202.8,303.6,209.8,303.6,218.2"
                    />
                    <path
                      style={{ fill: "#FFFFFF" }}
                      d="M305.7,344.9L305.7,344.9L256,249l0,0l-23.8-46.9H221l35,67.9l0,0l46.2,89.6h17.5   C314.1,356.1,308.5,351.2,305.7,344.9"
                    />
                    <path
                      style={{ fill: "#FFFFFF" }}
                      d="M256,291.7l-46.2-89.6h-17.5c5.6,3.5,10.5,8.4,14,14.7v0.7l49.7,95.9l0,0l23.8,46.9H291L256,291.7L256,291.7z"
                    />
                    <path
                      style={{ fill: "#FFFFFF" }}
                      d="M208.4,343.5v-68.6l0,0v-0.7c0-7,2.1-13.3,5.6-19.6L198.6,228v109.2v2.1c-0.7,5.6-2.1,11.2-4.2,16.1l-2.1,4.2   C201.4,359.6,208.4,352.6,208.4,343.5"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
      )}
    </>
  );
};

export default AssetLoader;
