import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

const NavigatorLink = ({ to, defaultAsthetics, routeName }) => {
  const controls = useAnimation();
  const location = window.location.pathname;
  return (
    <div
      onMouseEnter={() =>
        to === location ||
        controls.start({
          scaleX: 1,
          transformOrigin: "left",
          transition: { duration: 0.4 },
        })
      }
      onMouseLeave={() =>
        to === location ||
        controls.start({
          scaleX: 0,
          transformOrigin: "right",
          transition: { duration: 0.4 },
        })
      }
      className="w-fit py-[1px] relative cursor-pointer"
    >
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "#C42A37" : defaultAsthetics.color,
          };
        }}
        to={to}
      >
        {routeName}
      </NavLink>
      <motion.div
        animate={controls}
        initial={{
          scaleX: to === location ? 1 : 0,
        }}
        className="absolute top-full h-[1.5px] w-full bg-[#BF1826]"
      ></motion.div>
    </div>
  );
};

export default NavigatorLink;
