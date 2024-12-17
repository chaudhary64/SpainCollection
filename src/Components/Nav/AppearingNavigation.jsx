import React, { useState, useEffect } from "react";
import {
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
  const [clicked, setClicked] = useState(false);
  const controls = useAnimation();
  const gradientController = useAnimation();
  const { scrollY } = useScroll();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", () => {
    const latest = scrollY.get();
    const prev = scrollY.getPrevious();
    if (latest < prev && latest > 300) {
      setIsVisible(true);
    } else if (!isAppearing) {
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
    } else if (clicked) {
      controls.start({
        opacity: 0,
        scale: 0.5,
        top: "0%",
        visibility: "hidden",
        transition: { delay: 1.25, ease: "easeInOut" },
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
    if (isAppearing) {
      lenis.stop();
      gradientController.start({
        background: `conic-gradient(from 0deg at 50% 50%, black 0% 100%, white 100% 100%)`,
        transition: { duration: 0.7, ease: "easeInOut" },
      });
    } else {
      lenis.start();
      gradientController.start({
        background: `conic-gradient(from 0deg at 50% 50%, black 0% 0%, white 0% 100%)`,
        transition: { duration: 0.7, ease: "easeInOut" },
      });
    }
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
        onClick={() => setIsAppearing((prev) => !prev)}
        className="h-14 md:h-16 xl:h-[70px] 2xl:h-20 w-14 md:w-16 xl:w-[70px] 2xl:w-20 fixed z-[999] bg-[#FAFAFA] rounded-full cursor-pointer"
      >
        <motion.div
          initial={{
            background: `conic-gradient(from 0deg at 50% 50%, black 0% 50%, white 0% 100%)`,
          }}
          animate={gradientController}
          className="absolute inset-0 rounded-full z-[0]"
        ></motion.div>
        <div
          style={{
            transition: "gap 0.35s ease-in-out",
          }}
          className="h-[97%] w-[97%] rounded-full flex flex-col justify-center items-center gap-3 xl:gap-5 hover:gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white"
        >
          <div className="w-1/2 border border-black"></div>
          <div className="w-1/2 border border-black"></div>
        </div>
      </motion.div>
      <Cover
        isAppearing={isAppearing}
        clicked={clicked}
        setClicked={setClicked}
        setIsAppearing={setIsAppearing}
        setIsVisible={setIsVisible}
      />
    </>
  );
};

export default AppearingNavigation;
