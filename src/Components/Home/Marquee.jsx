import { motion, MotionConfig } from "framer-motion";

const Marquee = ({ data, reverse = false }) => {
  return (
    // For reverse = true prop
    <motion.section
      style={{
        fontFamily: "SaolDisplay-Regular",
        fontWeight: "300",
        lineHeight: "1",
      }}
      key="reverse"
      className="w-fit flex text-[2.5pc] lg:text-[6.5vw] uppercase text-[#242422f3]"
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
                <div className="shrink-0 h-[1px] lg:h-0.5 3xl:h-1.5 w-10 xs:w-12 lg:w-16 xl:w-24 3xl:w-40 mx-2 sm:mx-3 lg:mx-4 xl:mx-6 3xl:mx-10 bg-black"></div>
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
                <div className="shrink-0 h-[1px] lg:h-0.5 3xl:h-1.5 w-10 xs:w-12 lg:w-16 xl:w-24 3xl:w-40 mx-2 sm:mx-3 lg:mx-4 xl:mx-6 3xl:mx-10 bg-black"></div>
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
                <div className="shrink-0 h-[1px] lg:h-0.5 3xl:h-1.5 w-10 xs:w-12 lg:w-16 xl:w-24 3xl:w-40 mx-2 sm:mx-3 lg:mx-4 xl:mx-6 3xl:mx-10 bg-black"></div>
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
                <div className="shrink-0 h-[1px] lg:h-0.5 3xl:h-1.5 w-10 xs:w-12 lg:w-16 xl:w-24 3xl:w-40 mx-2 sm:mx-3 lg:mx-4 xl:mx-6 3xl:mx-10 bg-black"></div>
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
                <div className="shrink-0 h-[1px] lg:h-0.5 3xl:h-1.5 w-10 xs:w-12 lg:w-16 xl:w-24 3xl:w-40 mx-2 sm:mx-3 lg:mx-4 xl:mx-6 3xl:mx-10 bg-black"></div>
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
                <div className="shrink-0 h-[1px] lg:h-0.5 3xl:h-1.5 w-10 xs:w-12 lg:w-16 xl:w-24 3xl:w-40 mx-2 sm:mx-3 lg:mx-4 xl:mx-6 3xl:mx-10 bg-black"></div>
              </div>
            ))}
          </motion.div>
          <motion.div className="w-fit flex justify-around">
            {data.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <span className="shrink-0">{item.text}</span>
                <div className="shrink-0 h-[1px] lg:h-0.5 3xl:h-1.5 w-10 xs:w-12 lg:w-16 xl:w-24 3xl:w-40 mx-2 sm:mx-3 lg:mx-4 xl:mx-6 3xl:mx-10 bg-black"></div>
              </div>
            ))}
          </motion.div>
          <motion.div className="w-fit flex justify-around">
            {data.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <span className="shrink-0">{item.text}</span>
                <div className="shrink-0 h-[1px] lg:h-0.5 3xl:h-1.5 w-10 xs:w-12 lg:w-16 xl:w-24 3xl:w-40 mx-2 sm:mx-3 lg:mx-4 xl:mx-6 3xl:mx-10 bg-black"></div>
              </div>
            ))}
          </motion.div>
          <motion.div className="w-fit flex justify-around">
            {data.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <span className="shrink-0">{item.text}</span>
                <div className="shrink-0 h-[1px] lg:h-0.5 3xl:h-1.5 w-10 xs:w-12 lg:w-16 xl:w-24 3xl:w-40 mx-2 sm:mx-3 lg:mx-4 xl:mx-6 3xl:mx-10 bg-black"></div>
              </div>
            ))}
          </motion.div>
          <motion.div className="w-fit flex justify-around">
            {data.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <span className="shrink-0">{item.text}</span>
                <div className="shrink-0 h-[1px] lg:h-0.5 3xl:h-1.5 w-10 xs:w-12 lg:w-16 xl:w-24 3xl:w-40 mx-2 sm:mx-3 lg:mx-4 xl:mx-6 3xl:mx-10 bg-black"></div>
              </div>
            ))}
          </motion.div>
        </MotionConfig>
      )}
    </motion.section>
  );
};

export default Marquee;
