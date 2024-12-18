import React, { useContext, useEffect } from "react";
import { useLenis } from "lenis/react";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Info } from "../Context/Context";

const Circle = () => {
  const controls = useAnimation();
  const gradientController = useAnimation();
  const rotateControllerUp = useAnimation();
  const rotateControllerDown = useAnimation();
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const { isVisible, setIsVisible, isAppearing, setIsAppearing, clicked } =
    useContext(Info);

  // Scroll Event
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
        transition: { delay: 1.155, ease: "easeInOut" },
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
      rotateControllerUp.start({
        rotate: 45,
        x: "-50%",
        y: "-50%",
        top: "50%",
        transition: { delay: 0.1, ease: "easeInOut" },
      });
      rotateControllerDown.start({
        rotate: -45,
        x: "-50%",
        y: "-50%",
        top: "50%",
        transition: { delay: 0.1, ease: "easeInOut" },
      });
    } else {
      lenis.start();
      gradientController.start({
        background: `conic-gradient(from 0deg at 50% 50%, black 0% 0%, white 0% 100%)`,
        transition: { duration: 0.7, ease: "easeInOut" },
      });
      rotateControllerUp.start({
        rotate: 0,
        x: "-50%",
        y: "-50%",
        top: "35%",
        transition: { delay: 0.1, ease: "easeInOut" },
      });
      rotateControllerDown.start({
        rotate: 0,
        x: "-50%",
        y: "-50%",
        top: "65%",
        transition: { delay: 0.1, ease: "easeInOut" },
      });
    }
  }, [isAppearing]);

  return (
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
      <motion.div
        style={{
          transition: "gap 0.35s ease-in-out",
        }}
        className="h-[97%] w-[97%] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white"
      >
        <motion.div
          animate={rotateControllerUp}
          initial={{
            rotate: 0,
            x: "-50%",
            y: "-50%",
            top: "35%",
          }}
          className="w-1/2 border border-black absolute left-1/2"
        ></motion.div>
        <motion.div
          animate={rotateControllerDown}
          initial={{
            rotate: 0,
            x: "-50%",
            y: "-50%",
            top: "65%",
          }}
          className="w-1/2 border border-black absolute left-1/2"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Circle;
