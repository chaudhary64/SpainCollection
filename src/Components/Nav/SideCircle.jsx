import React, { useContext, useEffect } from "react";
import { useLenis } from "lenis/react";
import { motion, useAnimation } from "framer-motion";
import { Info } from "../Context/Context";

const SideCircle = () => {
  const gapController = useAnimation();
  const rotateControllerUp = useAnimation();
  const rotateControllerDown = useAnimation();
  const lenis = useLenis();
  const { isAppearing, setIsAppearing, clicked } = useContext(Info);

  useEffect(() => {
    if (isAppearing) {
      lenis.stop();
      gapController.start({
        gap: 0,
        transition: { duration: 0.1, ease: "easeInOut" },
      });
      rotateControllerUp.start({
        rotate: 45,
        transition: { delay: 0.1, ease: "easeInOut" },
      });
      rotateControllerDown.start({
        rotate: -45,
        transition: { delay: 0.1, ease: "easeInOut" },
      });
    } else {
      lenis.start();
      gapController.start({
        gap: window.innerWidth < 1024 ? "12px" : "20px",
        transition: { duration: 0.1, ease: "easeInOut" },
      });
      rotateControllerUp.start({
        rotate: 0,
        transition: { delay: 0.1, ease: "easeInOut" },
      });
      rotateControllerDown.start({
        rotate: 0,
        transition: { delay: 0.1, ease: "easeInOut" },
      });
    }
  }, [isAppearing]);
  return (
    <motion.div
      id="This is the side circle"
      onClick={() => setIsAppearing((prev) => !prev)}
      style={{
        transition: "gap 0.35s ease-in-out",
      }}
      animate={gapController}
      className="h-12 w-12 rounded-full cursor-pointer flex flex-col justify-center items-center gap-3 xl:gap-5 hover:gap-2 relative"
    >
      {/* Lines */}
      <motion.div
        animate={rotateControllerUp}
        initial={{
          rotate: 0,
        }}
        className="w-1/2 border border-white"
      ></motion.div>
      <motion.div
        animate={rotateControllerDown}
        initial={{
          rotate: 0,
        }}
        className="w-1/2 border border-white"
      ></motion.div>
    </motion.div>
  );
};

export default SideCircle;
