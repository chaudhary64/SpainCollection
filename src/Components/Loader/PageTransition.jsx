import React from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

const PageTransition = ({ children }) => {
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
          transition: { delay: 1.25, duration: 0 },
        }}
      >
        {children} {/* Displaying the Component which is wrapped in it */}
      </motion.div>

      {/* PageTransition Component */}
      <motion.span
        // Stopping the scrolling of the page when the PageTransition is displayed
        onAnimationStart={() => {
          lenis.stop();
        }}
        // Starting the scrolling of the page when the PageTransition is removed
        onAnimationComplete={() => lenis.start()}
        // Animations
        initial={{ y: "-100%" }}
        exit={{
          y: ["-100%", "0%", "0%", "100%"],
          transition: { duration: 2.75, times: [0, 0.45, 0.55, 1] },
        }}
        className="fixed inset-0 z-[99999999999] bg-[#C01827] cursor-wait"
      ></motion.span>
      {/* This will act as a blocker which will block the user to interact with the navbar until one page transition animation is over */}
      <motion.span
        // Animations
        initial={{ y: "-200%" }}
        exit={{
          y: ["-200%", "0%"],
          transition: { duration: 1.5125 },
        }}
        className="fixed inset-0 z-[99999999999] cursor-wait"
      ></motion.span>
    </>
  );
};

export default PageTransition;
