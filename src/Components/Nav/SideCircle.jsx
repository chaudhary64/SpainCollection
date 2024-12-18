import React, { useContext, useEffect } from "react";
import { useLenis } from "lenis/react";
import { motion, useAnimation } from "framer-motion";
import { Info } from "../Context/Context";

const SideCircle = () => {
  const rotateControllerUp = useAnimation();
  const rotateControllerDown = useAnimation();
  const lenis = useLenis();
  const { isAppearing, setIsAppearing, clicked } = useContext(Info);

  useEffect(() => {
    if (isAppearing) {
      lenis.stop();
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
      id="This is the side circle"
      onClick={() => setIsAppearing((prev) => !prev)}
      style={{
        transition: "gap 0.35s ease-in-out",
      }}
      className="h-12 w-12 rounded-full cursor-pointer relative"
    >
      {/* Lines */}
      <motion.div
        animate={rotateControllerUp}
        initial={{
          rotate: 0,
          x: "-50%",
          y: "-50%",
          top: "35%",
        }}
        className="w-1/2 border border-white absolute left-1/2"
      ></motion.div>
      <motion.div
        animate={rotateControllerDown}
        initial={{
          rotate: 0,
          x: "-50%",
          y: "-50%",
          top: "65%",
        }}
        className="w-1/2 border border-white absolute left-1/2"
      ></motion.div>
    </motion.div>
  );
};

export default SideCircle;
