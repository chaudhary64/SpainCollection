import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [properties, setProperties] = useState({
    x: 0,
    y: 0,
    scale: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setProperties((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    const windowMouseEnterHandler = () => {
      setProperties((prev) => ({ ...prev, scale: 1 }));
    };

    const windowMouseLeaveHandler = () => {
      setProperties((prev) => ({ ...prev, scale: 0 }));
    };

    const magnetMouseEnterHandler = () => {
      setProperties((prev) => ({ ...prev, scale: 0 }));
    };

    const magnetMouseLeaveHandler = () => {
      setProperties((prev) => ({ ...prev, scale: 1 }));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", windowMouseEnterHandler);
    document.addEventListener("mouseleave", windowMouseLeaveHandler);
    document.querySelectorAll(`[data_target="magnet"]`).forEach((el) => {
      el.addEventListener("mouseenter", magnetMouseEnterHandler);
      el.addEventListener("mouseleave", magnetMouseLeaveHandler);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", windowMouseEnterHandler);
      document.removeEventListener("mouseleave", windowMouseLeaveHandler);
      document.querySelectorAll(`[data_target="magnet"]`).forEach((el) => {
        el.removeEventListener("mouseenter", magnetMouseEnterHandler);
        el.removeEventListener("mouseleave", magnetMouseLeaveHandler);
      });
    };
  }, []);

  return (
    <motion.div
      id="cursor"
      initial={{ scale: 0, x: "-50%", y: "-50%" }}
      animate={{
        x: "-50%",
        y: "-50%",
        left: properties.x,
        top: properties.y,
        scale: properties.scale,
        transition: {
          scale: { duration: 0.3 },
        },
      }}
      transition={{
        type: "spring", // Smooth spring animation
        stiffness: 500, // Controls speed
        damping: 30, // Controls bounce effect
      }}
      className="h-2.5 w-2.5 flex justify-center items-center fixed z-[999] rounded-full bg-[#BF1826] pointer-events-none"
    ></motion.div>
  );
};

export default Cursor;
