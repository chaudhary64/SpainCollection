import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Cursor = ({ position }) => {
  //   const controls = useAnimation();
  //   useEffect(() => {
  //     controls.set({
  //       top: position.y,
  //       left: position.x,
  //     });
  //   }, [position]);

  return (
    <motion.div
      //   animate={controls}
      style={{
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
      }}
      className="h-2.5 w-2.5 fixed z-[999] top-0 left-0 rounded-full bg-[#BF1826] pointer-events-none"
    ></motion.div>
  );
};

export default Cursor;
