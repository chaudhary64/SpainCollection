import React from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

const Loader = ({ children }) => {
  // Accepting the component that is passed to it from children prop
  const lenis = useLenis();
  return (
    <>
      {/* Removing The Previous Component from DOM */}
      <motion.div
        // Animations
        exit={{
          display: "none",
          opacity: 0,
          transition: { delay: 1.75, duration: 0 },
        }}
      >
        {children} {/* Displaying the Component which is wrapped in it */}
      </motion.div>

      {/* Loader Component */}
      <motion.span
        // Stopping the scrolling of the page when the loader is displayed
        onAnimationStart={() => {
          lenis.stop();
        }}
        // Starting the scrolling of the page when the loader is removed
        onAnimationComplete={() => lenis.start()}
        // Animations
        initial={{ y: "-100%" }}
        exit={{
          y: ["-100%", "0%", "0%", "100%"],
          transition: { duration: 3.5, times: [0, 0.45, 0.55, 1] },
        }}
        className="fixed inset-0 z-[99999999999] bg-[#C01827]"
      ></motion.span>
    </>
  );
};

export default Loader;
