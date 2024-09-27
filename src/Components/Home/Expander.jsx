import React, { useRef, useState } from "react";
import { IoPlay } from "react-icons/io5";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const Expander = () => {
  const ColumnsHolder = useRef(null);
  const thirdColumn = useRef(null);
  const [bgColor, setBgColor] = useState("white");
  const { scrollYProgress } = useScroll({
    target: ColumnsHolder,
    offset: [`start`, "end"],
  });
  const width = useTransform(scrollYProgress, [0.3, 1], ["40%", "100%"]);
  const textThirdColumn = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    ["115%", "115%", "50%"]
  );
  const top = useTransform(scrollYProgress, [0, 0.3], ["25%", "0%"]);
  const textTop = useTransform(scrollYProgress, [0, 0.3], ["0", "-110%"]);
  useMotionValueEvent(scrollYProgress, "change", (l) =>
    l >= 0.94 ? setBgColor("black") : setBgColor("white")
  );
  return (
    <section
      ref={ColumnsHolder}
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.6s cubic-bezier(0.11, 0, 0.5, 0)",
      }}
      className="h-[300vh] border-4 border-blue-500 relative mt-20"
    >
      <motion.div className="h-screen flex justify-center items-center flex-nowrap gap-10 sticky top-0 overflow-clip border-4 border-black">
        {/* Text */}
        <motion.div
          style={{
            y: textTop,
          }}
          className="w-full text-4xl font-light flex flex-col items-center absolute top-0 z-[1]"
        >
          <div className="text-center">
            <p>Spain Collection is your expert partner for deluxe</p>
            <p>bespoke travel experiences in</p>
          </div>
          <p className="mt-28 text-8xl italic">
            Spain & <br /> Portugal
          </p>
        </motion.div>
        {/*  1st Column */}
        <div className="shrink-0 h-[50%] w-[14%]">
          <video
            className="object-cover h-full"
            autoPlay
            muted
            loop
            src="/videoes/Home/Flamenca-2.mp4"
          ></video>
        </div>
        {/* 2nd Column */}
        <div className="shrink-0 w-[21%] flex flex-col justify-center gap-10">
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
          style={{ width, willChange: "width", y: top }}
          className="shrink-0 h-full relative"
        >
          {/* Text */}
          <motion.div
            style={{
              lineHeight: "0.9",
              top: textThirdColumn,
              left: "50%",
              transform: "translateX(-50%) translateY(-25%)",
            }}
            className="w-fit absolute text-8xl text-white uppercase text-center"
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
        <div className="shrink-0 w-[21%] flex flex-col justify-center gap-10">
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
        <div className="shrink-0 h-[50%] w-[14%]">
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
