import { motion, MotionConfig } from "framer-motion";

const Marquee = ({ data, reverse = false }) => {
  return (
    // For reverse = true prop
    <motion.section
      style={{
        fontFamily: "IbarraRealNova_Italic",
        lineHeight: "1",
      }}
      key="reverse"
      className="w-fit flex text-[85px] text-[#242422f3]"
    >
      {reverse ? (
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
          <motion.div
            initial={{
              x: "-200%",
            }}
            className="w-fit flex justify-around"
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
              x: "-200%",
            }}
            className="w-fit flex justify-around"
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
              x: "-200%",
            }}
            className="w-fit flex justify-around"
          >
            {data.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <span className="shrink-0">{item.text}</span>
                <div className="shrink-0 h-0.5 w-14 mx-5 bg-black"></div>
              </div>
            ))}
          </motion.div>
        </MotionConfig>
      ) : (
        // For reverse = false prop
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
      )}
    </motion.section>
  );
};

export default Marquee;
