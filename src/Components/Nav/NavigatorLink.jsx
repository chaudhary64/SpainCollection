import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

const NavigatorLink = ({ to, defaultAsthetics, routeName }) => {
  const controls = useAnimation();
  const linkControls = useAnimation();
  const location = window.location.pathname;

  useEffect(() => {
    linkControls.start({
      color: to === location ? "#C42A37" : defaultAsthetics.color,
      transition: { delay: 1.15, duration: 0 },
    });
  }, [defaultAsthetics]);

  useEffect(() => {
    controls.set({ transformOrigin: to === location ? "left" : "right" });
    controls.start({
      scaleX: to === location ? 1 : 0,
    });
  }, [location, to, controls]);

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
      <motion.div animate={linkControls}>
        <NavLink to={to}>{routeName}</NavLink>
      </motion.div>
      <motion.div
        animate={controls}
        initial={{
          scaleX: 0,
        }}
        className="absolute top-full h-[1.5px] w-full bg-[#BF1826]"
      ></motion.div>
    </div>
  );
};

export default NavigatorLink;
