import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Info } from "../Context/Context";

const Cursor = () => {
  const { screenWidth } = useContext(Info);

  const [properties, setProperties] = useState({
    x: 0,
    y: 0,
    height_width: 0,
    blend: false,
    text: "",
    drag: false,
    player: false,
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
        text: "PLAY",
        player: true,
      }));
    };

    const magnetMouseLeaveHandler = () => {
      setProperties((prev) => ({
        ...prev,
        height_width: "9px",
        blend: false,
        player: false,
      }));
    };

    const dragContainerMouseEnterHandler = () => {
      setProperties((prev) => ({
        ...prev,
        height_width:
          screenWidth > 2000 ? "112px" : screenWidth > 1280 ? "80px" : "64px",
        text: "DRAG",
        drag: true,
      }));
    };

    const dragContainerMouseLeaveHandler = () => {
      setProperties((prev) => ({
        ...prev,
        height_width: "9px",
        drag: false,
      }));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", windowMouseEnterHandler);
    document.addEventListener("mouseleave", windowMouseLeaveHandler);
    document.querySelectorAll(`[data_target="magnet"]`).forEach((el) => {
      el.addEventListener("mouseenter", magnetMouseEnterHandler);
      el.addEventListener("mouseleave", magnetMouseLeaveHandler);
    });
    document
      .querySelectorAll(`[data_target="drag-container"]`)
      .forEach((el) => {
        el.addEventListener("mouseenter", dragContainerMouseEnterHandler);
        el.addEventListener("mouseleave", dragContainerMouseLeaveHandler);
      });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", windowMouseEnterHandler);
      document.removeEventListener("mouseleave", windowMouseLeaveHandler);
      document.querySelectorAll(`[data_target="magnet"]`).forEach((el) => {
        el.removeEventListener("mouseenter", magnetMouseEnterHandler);
        el.removeEventListener("mouseleave", magnetMouseLeaveHandler);
      });
      document
        .querySelectorAll(`[data_target="drag-container"]`)
        .forEach((el) => {
          el.removeEventListener("mouseenter", dragContainerMouseEnterHandler);
          el.removeEventListener("mouseleave", dragContainerMouseLeaveHandler);
        });
    };
  }, []);

  return (
    <motion.div
      id="cursor"
      initial={{ x: "-50%", y: "-50%", height: "9px", width: "9px" }}
      animate={{
        x: "-50%",
        y: "-50%",
        left: properties.x,
        top: properties.y,
        height: properties.height_width,
        width: properties.height_width,
        backgroundColor:
          properties.blend || properties.drag ? "#FDF6F7" : "#BF1826",
        transition: {
          scale: { duration: 0.3 },
          type: "spring", // Smooth spring animation
          stiffness: properties.player ? 150 : properties.drag ? 1400 : 700, // Controls speed
          damping: properties.blend ? 10 : 40, // Controls bounce effect
          mass: 0.1, // Controls weight
        },
      }}
      className="justify-center items-center fixed z-[999] rounded-full bg-[#BF1826] grid place-items-center pointer-events-none overflow-clip"
    >
      <AnimatePresence>
        {(properties.blend || properties.drag) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.05,
              },
            }}
            exit={{ opacity: 0 }}
            style={{
              color:
                properties.blend || properties.drag ? "#000000" : "#FFFFFF",
            }}
            className="text-sm tracking-widest"
          >
            {properties.text}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cursor;
