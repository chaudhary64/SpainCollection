// AssetLoader.js
import React, { useState, useEffect } from "react";

const AssetLoader = ({ assets, children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); // Track progress

  useEffect(() => {
    const loadAssets = async () => {
      const totalAssets = assets.length; // Total number of assets
      let loadedAssets = 0; // Counter for loaded assets

      const updateProgress = () => {
        loadedAssets += 1;
        setProgress(Math.round((loadedAssets / totalAssets) * 100)); // Calculate percentage
      };

      const promises = assets.map(async (asset) => {
        if (asset.type === "image") {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = asset.src;
            img.onload = () => {
              updateProgress();
              resolve();
            };
            img.onerror = () => {
              updateProgress();
              resolve();
            };
          });
        } else if (asset.type === "video") {
          return new Promise((resolve) => {
            const video = document.createElement("video");
            video.src = asset.src;
            video.onloadeddata = () => {
              updateProgress();
              resolve();
            };
            video.onerror = () => {
              updateProgress();
              resolve();
            };
          });
        } else if (asset.type === "font") {
          return new FontFace(asset.family, `url(${asset.src})`)
            .load()
            .then((font) => {
              document.fonts.add(font);
              updateProgress();
            });
        }
        updateProgress();
        return Promise.resolve();
      });

      await Promise.all(promises);
      setLoading(false);
    };

    loadAssets();
  }, [assets]);

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black">
          <div>
            <div className="h-20 w-20 relative rounded-full">
              <div
                style={{
                  backgroundImage: `conic-gradient(from 0deg at 50% 50%, red 0% ${progress}%, #10182B ${progress}% 100%)`,
                }}
                className="absolute inset-0 z-[1] rounded-full"
              ></div>
              <div className="absolute h-[95%] w-[95%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] rounded-full bg-black"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                className="h-16 absolute z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
      ) : (
        children
      )}
    </>
  );
};

export default AssetLoader;
