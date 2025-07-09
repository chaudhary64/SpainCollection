import { motion } from "framer-motion";
import { useState, useCallback, useMemo } from "react";

const HoverCover = ({ src, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Memoize animation variants to prevent recreation on every render
  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 1.2 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 2, ease: [0.05, 0.76, 0.38, 1.015] },
      },
      exit: {
        opacity: 0,
        scale: 1.2,
        transition: { duration: 0.9, ease: [0.05, 0.76, 0.38, 1.015] },
      },
    }),
    []
  );

  // Memoize event handlers to prevent recreation
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isHovered ? "visible" : "exit"}
        className="fixed top-0 left-0 -z-40"
      >
        <img
          src={src}
          className="h-screen w-screen object-cover"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div className="inset-0 bg-black/60 absolute" />
      </motion.div>
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-[1rem] xl:text-[1.5rem] 3xl:text-[2.5rem] tracking-wider hover:cursor-pointer"
      >
        {text}
      </span>
      <div className="h-[1px] w-10 bg-white" />
    </div>
  );
};

export default HoverCover;
