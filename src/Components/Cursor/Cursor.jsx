import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Info } from "../Context/Context";

const Cursor = () => {
  const { screenWidth } = useContext(Info);

  const [properties, setProperties] = useState({
    x: 0,
    y: 0,
    height_width: 0,
    blend: false,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setProperties((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    const windowMouseEnterHandler = () => {
      setProperties((prev) => ({ ...prev, height_width: "9px" }));
    };
    const windowMouseLeaveHandler = () => {
      setProperties((prev) => ({
        ...prev,
      }));
    };

    const magnetMouseEnterHandler = () => {
      setProperties((prev) => ({
        ...prev,
        height_width:
          screenWidth > 2000 ? "112px" : screenWidth > 1280 ? "80px" : "64px",
        blend: true,
      }));
    };

    const magnetMouseLeaveHandler = () => {
      setProperties((prev) => ({ ...prev, height_width: "9px", blend: false }));
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
      initial={{ x: "-50%", y: "-50%", height: "9px", width: "9px" }}
      style={{
        mixBlendMode: properties.blend ? "difference" : "normal",
      }}
      animate={{
        x: "-50%",
        y: "-50%",
        left: properties.x,
        top: properties.y,
        height: properties.height_width,
        width: properties.height_width,
        backgroundColor: properties.blend ? "#FDF6F7" : "#BF1826",
        transition: {
          scale: { duration: 0.3 },
          type: "spring", // Smooth spring animation
          stiffness: properties.blend ? 150 : 700, // Controls speed
          damping: properties.blend ? 10 : 40, // Controls bounce effect
          mass: 0.1, // Controls weight
        },
      }}
      className="justify-center items-center fixed z-[999] rounded-full bg-[#BF1826] pointer-events-none"
    ></motion.div>
  );
};

export default Cursor;
