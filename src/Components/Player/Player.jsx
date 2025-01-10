import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import { Info } from "../Context/Context";

const Player = () => {
  const { playerInfo, setPlayerInfo } = useContext(Info);
  const coverControls = useAnimation();

  useEffect(() => {
    if (playerInfo.isPlaying) {
      coverControls.start({
        top: ["-100%", "0%"],
        display: "flex",
        visibility: "visible",
        transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
      });
    } else {
      coverControls.start({
        top: "100%",
        display: "none",
        visibility: "hidden",
        transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
      });
    }
  }, [playerInfo]);

  return (
    <motion.div
      id="video_player"
      initial={{
        top: "-100%",
        display: "none",
        visibility: "hidden",
      }}
      animate={coverControls}
      className="fixed h-dvh w-full z-[700] flex items-center justify-center bg-black/95"
    >
      <div id="custom_player_wrapper" className="lg:w-1/2">
        <MediaPlayer src={playerInfo.src}>
          <MediaProvider />
          <PlyrLayout icons={plyrLayoutIcons} />
        </MediaPlayer>
      </div>
      {/* Cross_Symbol */}
      <RxCross1
        onClick={() =>
          setPlayerInfo((prev) => {
            return { ...prev, isPlaying: false };
          })
        }
        className="text-white text-xl absolute top-10 right-10 cursor-pointer"
      />
    </motion.div>
  );
};

export default Player;
