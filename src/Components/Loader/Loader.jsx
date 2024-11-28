import React from "react";
import { motion } from "framer-motion";

const Loader = ({ children }) => {
  // Accepting the component that is passed to it from children prop

  return (
    <>
      {/* Removing The Previous Component from DOM */}
      <motion.div
        // Animations
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2, delay: 1.5 } }}
        exit={{ display: "none", transition: { duration: 1.5 } }}
      >
        {children} {/* Displaying the Component which is wrapped in it */}
      </motion.div>

      {/* Loader Component */}
      <motion.span
        onAnimationStart={() => {
          document.body.style.overflow = "hidden";
        }}
        onAnimationComplete={() => (document.body.style.overflow = "auto")}
        // Animations
        initial={{ y: "-100%" }}
        exit={{ y: ["-100%", "0%", "100%"], transition: { duration: 3 } }}
        className="fixed inset-0 z-[99999999999] bg-[#C01827] text-[250px] text-white     flex justify-center items-center pointer-events-none"
      ></motion.span>
    </>
  );
};

export default Loader;
