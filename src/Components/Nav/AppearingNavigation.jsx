import React, { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useLenis } from "lenis/react";
import Cover from "./Cover";

const AppearingNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAppearing, setIsAppearing] = useState(false);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", () => {
    const latest = scrollY.get();
    const prev = scrollY.getPrevious();
    if (latest < prev && latest > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        scale: 1,
        top: "10%",
        visibility: "visible",
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        scale: 0.5,
        top: "0%",
        visibility: "hidden",
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [isVisible, controls]);

  useEffect(() => {
    isAppearing ? lenis.stop() : lenis.start();
  }, [isAppearing]);

  return (
    <>
      <motion.div
        animate={controls}
        initial={{
          scale: 0.5,
          opacity: 0,
          top: "0%",
          x: "-50%",
          left: "50%",
          visibility: "hidden",
        }}
        style={{
          transition: "gap 0.35s ease-in-out",
        }}
        onClick={() => setIsAppearing((prev) => !prev)}
        className="h-20 w-20 fixed z-[999] bg-[#FAFAFA] rounded-full flex flex-col justify-center items-center gap-5 hover:gap-2 cursor-pointer"
      >
        <div className="w-1/2 border border-black"></div>
        <div className="w-1/2 border border-black"></div>
      </motion.div>
      <AnimatePresence>{isAppearing && <Cover />}</AnimatePresence>
    </>
  );
};

export default AppearingNavigation;
