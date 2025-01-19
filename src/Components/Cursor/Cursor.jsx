import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [properties, setProperties] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setProperties((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    const mouseEnter = () => {
      console.log("enter");
      setProperties((prev) => ({ ...prev, scale: 1 }));
    };

    const mouseLeave = () => {
      console.log("leave");
      setProperties((prev) => ({ ...prev, scale: 0 }));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", mouseEnter);
      document.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <motion.div
      id="cursor"
      animate={{
        x: properties.x - 8, // Adjust for centering (half of cursor size)
        y: properties.y - 8,
        scale: properties.scale,
      }}
      transition={{
        type: "spring", // Smooth spring animation
        stiffness: 500, // Controls speed
        damping: 30, // Controls bounce effect
      }}
      className="h-3.5 w-3.5 fixed z-[999] rounded-full bg-[#BF1826] pointer-events-none"
    />
  );
};

export default Cursor;
