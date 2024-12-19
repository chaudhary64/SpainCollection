import { useContext, useRef } from "react";
import { IoPlay } from "react-icons/io5";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Info } from "../Context/Context";

const Expander = () => {
  const { screenWidth } = useContext(Info);
  const ColumnsHolder = useRef(null);
  const thirdColumn = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ColumnsHolder,
    offset: screenWidth < 768 ? [`start 30%`, "start"] : [`start`, "end"],
  });

  const getTransforms = () => {
    // For Mobile
    if (screenWidth < 768) {
      return {
        width: useTransform(scrollYProgress, [0.2, 1], ["95%", "100%"]),
        top: useTransform(scrollYProgress, [0, 0.3], ["0%", "0%"]),
        textTop: useTransform(scrollYProgress, [0, 0.8], ["-50%", "-110%"]),
        textThirdColumn: useTransform(
          scrollYProgress,
          [0, 0.8, 1],
          ["115%", "115%", "50%"]
        ),
      };
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // For Tablet
      return {
        width: useTransform(scrollYProgress, [0.3, 1], ["30%", "100%"]),
        top: useTransform(scrollYProgress, [0, 0.3], ["35%", "0%"]),
        textTop: useTransform(scrollYProgress, [0, 0.3], ["-50%", "-110%"]),
        textThirdColumn: useTransform(
          scrollYProgress,
          [0, 0.55, 1],
          ["115%", "115%", "50%"]
        ),
      };
    } else if (screenWidth >= 1024 && screenWidth < 2000) {
      // For any other large screen size screenWidth >= 1024
      return {
        width: useTransform(scrollYProgress, [0.3, 1], ["30%", "100%"]),
        top: useTransform(scrollYProgress, [0, 0.3], ["25%", "0%"]),
        textTop: useTransform(scrollYProgress, [0, 0.3], ["-50%", "-110%"]),
        textThirdColumn: useTransform(
          scrollYProgress,
          [0, 0.55, 1],
          ["115%", "115%", "40%"]
        ),
      };
    } else {
      // For any other large screen size screenWidth >= 2000
      return {
        width: useTransform(scrollYProgress, [0.3, 1], ["30%", "100%"]),
        top: useTransform(scrollYProgress, [0, 0.3], ["26%", "0%"]),
        textTop: useTransform(scrollYProgress, [0, 0.3], ["-50%", "-110%"]),
        textThirdColumn: useTransform(
          scrollYProgress,
          [0, 0.55, 1],
          ["115%", "115%", "50%"]
        ),
      };
    }
  };

  const { top, textTop, width, textThirdColumn } = getTransforms();

  return (
    <section
      ref={ColumnsHolder}
      className="md:h-[300vh] relative mt-32 md:mt-0 lg:mt-10 xl:mt-20 2xl:mt-10"
    >
      <motion.div className="md:h-screen flex justify-center items-center flex-nowrap gap-6 xl:gap-10 sticky top-0 overflow-x-clip">
        {/*  1st Column */}
        <div className="shrink-0 hidden md:block h-[60%] lg:h-[50%] w-[15%]">
          <video
            className="object-cover h-full"
            autoPlay
            muted
            loop
            src="/videoes/Home/Flamenca-2.mp4"
          ></video>
        </div>
        {/* 2nd Column */}
        <div className="shrink-0 w-[22%] hidden md:flex flex-col justify-center gap-10">
          <div className="w-full">
            <video
              className="object-cover h-full"
              autoPlay
              muted
              loop
              src="/videoes/Home/Secuencia-01_6-1.mp4"
            ></video>
          </div>
          <div className="w-full">
            <video
              className="object-cover h-full"
              autoPlay
              muted
              loop
              src="/videoes/Home/Secuencia-01-1.mp4"
            ></video>
          </div>
        </div>
        {/* 3rd Column */}
        <motion.div
          ref={thirdColumn}
          style={{ width, y: top, willChange: "width, transform" }}
          initial={{ width: screenWidth < 768 ? "95%" : "30%" }}
          className="shrink-0 max-md:w-full md:h-full relative"
        >
          {/* Text to disappear */}
          <motion.div
            style={{
              y: textTop,
              x: "-50%",
            }}
            className="w-screen text-sm xs:text-lg sm:text-xl md:text-2xl xl:text-4xl 2xl:text-5xl 3xl:text-7xl font-light flex flex-col items-center absolute top-0 left-1/2 z-[1]"
          >
            <div className="text-center text-black/75">
              <p>Spain Collection is your expert partner for deluxe</p>
              <p>bespoke travel experiences in</p>
            </div>
            <div
              style={{
                fontFamily: "SaolDisplay-Italic",
                lineHeight: "1",
              }}
              className="mt-1 md:mt-8 text-5xl xs:text-6xl sm:text-7xl md:text-8xl xl:text-9xl 2xl:text-[160px] 3xl:text-[200px] text-center text-black/90 uppercase"
            >
              <p>Spain &</p>
              <p>Portugal</p>
            </div>
          </motion.div>
          {/* Text to appear */}
          <motion.div
            style={{
              lineHeight: "0.9",
              top: textThirdColumn,
              left: "50%",
              transform: "translateX(-50%) translateY(-25%)",
            }}
            className="w-fit hidden md:block absolute text-6xl xl:text-8xl 3xl:text-[180px] text-white uppercase text-center"
          >
            <p>Live Your</p>
            <p className="text-nowrap">
              own <span className="italic text-red-700">UNIQUE</span>
            </p>
            <p>Adventure</p>
            <div className="mx-auto mt-8 h-[72px] w-[72px] border-2 border-white rounded-full flex justify-center items-center">
              <IoPlay className="text-white h-5 " />
            </div>
          </motion.div>
          <video
            className="object-cover h-full w-full"
            autoPlay
            muted
            loop
            src="/videoes/Home/Bg_Home.mp4"
          ></video>
        </motion.div>
        {/* 4th Column */}
        <div className="shrink-0 w-[22%] hidden md:flex flex-col justify-center gap-10">
          <div className="w-full">
            <video
              className="object-cover h-full"
              autoPlay
              muted
              loop
              src="/videoes/Home/Secuencia-01_2-1.mp4"
            ></video>
          </div>
          <div className="w-full">
            <video
              className="object-cover h-full"
              autoPlay
              muted
              loop
              src="/videoes/Home/Secuencia-01_8-1.mp4"
            ></video>
          </div>
        </div>
        {/* 5th Column */}
        <div className="shrink-0 hidden md:block h-[60%] lg:h-[50%] w-[15%]">
          <video
            className="object-cover h-full"
            autoPlay
            muted
            loop
            src="/videoes/Home/Secuencia-01_7-1.mp4"
          ></video>
        </div>
      </motion.div>
    </section>
  );
};

export default Expander;
