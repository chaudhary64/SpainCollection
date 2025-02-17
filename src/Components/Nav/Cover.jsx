import React, { useContext, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import { Info } from "../Context/Context";

const Cover = () => {
  const location = useLocation();
  const coverControls = useAnimation();
  const lenis = useLenis();
  const { isAppearing, clicked, setClicked, setIsVisible, setIsAppearing } =
    useContext(Info);
  const [asthetics, setAsthetics] = useState([
    { home: "#C42A37" },
    { collections: "black" },
    { curators: "black" },
    { journal: "black" },
    { defaultTheme: "black" },
    { bgColor: "white" },
  ]);

  const mouseLeaveColorAdjuster = () => {
    setAsthetics([
      { home: location.pathname === "/" ? "#C42A37" : "black" },
      {
        collections: location.pathname === "/collections" ? "#C42A37" : "black",
      },
      {
        curators: location.pathname === "/curators" ? "#C42A37" : "black",
      },
      {
        journal: location.pathname === "/journal" ? "#C42A37" : "black",
      },
      { defaultTheme: "black" },
      { bgColor: "white" },
    ]);
  };

  const onClickAnimationHandler = () => {
    setClicked(true);
    setIsVisible(false);
    setIsAppearing(false);
  };

  useEffect(() => {
    if (isAppearing) {
      coverControls.start({
        top: ["-100%", "0%"],
        display: "block",
        visibility: "visible",
        transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
      });
    } else if (clicked) {
      coverControls
        .start({
          top: "100%",
          display: "none",
          visibility: "hidden",
          transition: { delay: 1.15, duration: 0 },
        })
        .then(() =>
          lenis.scrollTo("top", {
            immediate: true,
          })
        )
        .then(() => setClicked(false));
    } else {
      coverControls.start({
        top: "100%",
        display: "none",
        visibility: "hidden",
        transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
      });
    }
  }, [isAppearing]);

  return (
    <motion.div
      initial={{
        top: "-100%",
      }}
      animate={coverControls}
      style={{
        backgroundColor: asthetics[5].bgColor,
        transition: "background-color 0.6s ease-out",
      }}
      className="fixed h-dvh w-full z-[998]"
    >
      <div className="flex flex-col items-center">
        {/* Navigation Links */}
        <div
          style={{
            lineHeight: 1,
          }}
          className="flex flex-col gap-6 items-center text-4xl md:text-5xl xl:text-6xl 3xl:text-8xl font-[SaolDisplay-Light] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <NavLink
            to="/"
            onMouseEnter={() => {
              setAsthetics([
                { home: "#C42A37" },
                {
                  collections:
                    location.pathname === "/collections" ? "#C42A37" : "black",
                },
                {
                  curators:
                    location.pathname === "/curators" ? "#C42A37" : "black",
                },
                {
                  journal:
                    location.pathname === "/journal" ? "#C42A37" : "black",
                },
                { defaultTheme: "black" },
                { bgColor: "white" },
              ]);
            }}
            onMouseLeave={mouseLeaveColorAdjuster}
            onClick={onClickAnimationHandler}
            style={{
              color: asthetics[0].home,
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/collections"
            onMouseEnter={() => {
              setAsthetics([
                { home: location.pathname === "/" ? "#C42A37" : "white" },
                {
                  collections: "#C42A37",
                },
                {
                  curators:
                    location.pathname === "/curators" ? "#C42A37" : "white",
                },
                {
                  journal:
                    location.pathname === "/journal" ? "#C42A37" : "white",
                },
                { defaultTheme: "white" },
                { bgColor: "black" },
              ]);
            }}
            onMouseLeave={mouseLeaveColorAdjuster}
            onClick={onClickAnimationHandler}
            style={{
              color: asthetics[1].collections,
            }}
          >
            Collections
          </NavLink>
          <NavLink
            to="/curators"
            onMouseEnter={() => {
              setAsthetics([
                { home: location.pathname === "/" ? "white" : "black" },
                {
                  collections:
                    location.pathname === "/collections" ? "white" : "black",
                },
                {
                  curators: "white",
                },
                {
                  journal: location.pathname === "/journal" ? "white" : "black",
                },
                { defaultTheme: "white" },
                { bgColor: "#C42A37" },
              ]);
            }}
            onMouseLeave={mouseLeaveColorAdjuster}
            onClick={onClickAnimationHandler}
            style={{
              color: asthetics[2].curators,
            }}
          >
            Curators
          </NavLink>
          <NavLink
            to="/journal"
            onMouseEnter={() => {
              setAsthetics([
                { home: location.pathname === "/" ? "#C42A37" : "black" },
                {
                  collections:
                    location.pathname === "/collections" ? "#C42A37" : "black",
                },
                {
                  curators:
                    location.pathname === "/curators" ? "#C42A37" : "black",
                },
                {
                  journal: "#C42A37",
                },
                { defaultTheme: "black" },
                { bgColor: "white" },
              ]);
            }}
            onMouseLeave={mouseLeaveColorAdjuster}
            onClick={onClickAnimationHandler}
            style={{
              color: asthetics[3].journal,
            }}
          >
            Journal
          </NavLink>
        </div>
        {/* Social Media Handles */}
        <div className="w-full absolute bottom-20 flex justify-center text-xs lg:text-sm 2xl:text-lg 3xl:text-3xl font-thin font-[Inter]">
          <div
            style={{
              color: asthetics[4].defaultTheme,
            }}
            className="flex gap-4 md:gap-6 xl:gap-7 3xl:gap-9 underline decoration-1 underline-offset-2 3xl:underline-offset-[6px]"
          >
            <div>Instagram</div>
            <div className="flex items-center gap-2">
              <div
                style={{ backgroundColor: asthetics[4].defaultTheme }}
                className="h-1 3xl:h-1.5 w-1 3xl:w-1.5 rounded-full"
              ></div>{" "}
              Facebook
            </div>
            <div className="flex items-center gap-2">
              <div
                style={{ backgroundColor: asthetics[4].defaultTheme }}
                className="h-1 3xl:h-1.5 w-1 3xl:w-1.5 rounded-full"
              ></div>{" "}
              Youtube
            </div>
            <div className="flex items-center gap-2">
              <div
                style={{ backgroundColor: asthetics[4].defaultTheme }}
                className="h-1 3xl:h-1.5 w-1 3xl:w-1.5 rounded-full"
              ></div>{" "}
              Linkedin
            </div>
          </div>
        </div>
        {/* Video Links */}
        {/* Home */}
        {/* <div className="h-36 apect-[3/2] bg-red-500 absolute right-[5vw] top-1/4">
          <video
            className="object-cover h-full w-full"
            src="/public/videoes/Nav/ezgif.com-gif-maker-5.mp4"
          ></video>
        </div>
        <div className="h-24 aspect-square bg-red-500 absolute left-[10vw] bottom-20">
          <video
            className="object-cover h-full w-full"
            src="/public/videoes/Nav/ezgif.com-gif-maker.mp4"
          ></video>
        </div> */}
        {/* Collections */}
        {/* <div className="h-36 apect-[5/4] bg-red-500 absolute left-[5vw] top-1/4">
          <video
            className="object-cover h-full w-full"
            src="/public/videoes/Nav/ezgif.com-gif-maker-6.mp4"
          ></video>
        </div>
        <div className="h-28 aspect-square bg-red-500 absolute right-[15vw] bottom-1/4">
          <video
            className="object-cover h-full w-full"
            src="/public/videoes/Nav/ezgif.com-gif-maker-1.mp4"
          ></video>
        </div> */}
        {/* Curators */}
        {/* <div className="h-28 aspect-square bg-red-500 absolute left-[15vw] top-1/4">
          <video
            className="object-cover h-full w-full"
            src="/public/videoes/Nav/ezgif.com-gif-maker-2.mp4"
          ></video>
        </div>
        <div className="h-36 apect-[5/4] bg-red-500 absolute right-[5vw] bottom-1/4">
          <video
            className="object-cover h-full w-full"
            src="/public/videoes/Nav/ezgif.com-gif-maker-7.mp4"
          ></video>
        </div> */}
        {/* Journal */}
        {/* <div className="h-36 apect-[5/4] bg-red-500 absolute left-[5vw] bottom-20">
          <video
            className="object-cover h-full w-full"
            src="/public/videoes/Nav/ezgif.com-gif-maker-8.mp4"
          ></video>
        </div>
        <div className="h-28 aspect-square bg-red-500 absolute right-[15vw] top-1/4">
          <video
            className="object-cover h-full w-full"
            src="/public/videoes/Nav/ezgif.com-gif-maker-3.mp4"
          ></video>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Cover;
