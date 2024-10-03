import React from "react";
import { motion, MotionConfig, transform } from "framer-motion";

const Marquee = ({ data, reverse = false }) => {
  return reverse ? (
    // For reverse = true prop
    <section
      style={{
        fontFamily: "IbarraRealNova_Italic",
      }}
      key="reverse"
      className="w-fit flex text-[100px] text-[#242422]"
    >
      <MotionConfig
        animate={{
          transform: "translateX(0%)",
          transition: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <motion.div
          initial={{
            transform: "translateX(-100%)",
          }}
          className="w-fit flex justify-around"
          key={Math.random()}
        >
          {data.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <span className="shrink-0">{item.text}</span>
              <div className="shrink-0 h-0.5 w-14 mx-5 bg-black"></div>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{
            transform: "translateX(-100%)",
          }}
          className="w-fit flex justify-around"
          key={Math.random()}
        >
          {data.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <span className="shrink-0">{item.text}</span>
              <div className="shrink-0 h-0.5 w-14 mx-5 bg-black"></div>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{
            transform: "translateX(-100%)",
          }}
          className="w-fit flex justify-around"
          key={Math.random()}
        >
          {data.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <span className="shrink-0">{item.text}</span>
              <div className="shrink-0 h-0.5 w-14 mx-5 bg-black"></div>
            </div>
          ))}
        </motion.div>
      </MotionConfig>
    </section>
  ) : (
    // For reverse = false prop
    <section
      style={{
        fontFamily: "IbarraRealNova_Italic",
      }}
      key="forward"
      className="w-fit flex text-[100px] text-[#242422]"
    >
      <MotionConfig
        animate={{
          x: "-100%",
          transition: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <motion.div className="w-fit flex justify-around">
          {data.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <span className="shrink-0">{item.text}</span>
              <div className="shrink-0 h-0.5 w-14 mx-5 bg-black"></div>
            </div>
          ))}
        </motion.div>
        <motion.div className="w-fit flex justify-around">
          {data.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <span className="shrink-0">{item.text}</span>
              <div className="shrink-0 h-0.5 w-14 mx-5 bg-black"></div>
            </div>
          ))}
        </motion.div>
        <motion.div className="w-fit flex justify-around">
          {data.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <span className="shrink-0">{item.text}</span>
              <div className="shrink-0 h-0.5 w-14 mx-5 bg-black"></div>
            </div>
          ))}
        </motion.div>
      </MotionConfig>
    </section>
  );
};

export default Marquee;
