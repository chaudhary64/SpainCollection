import React, { useContext, useRef } from "react";
import DescriptionCard from "./DescriptionCard";
import DateCard from "./DateCard";
import Footer from "../Footer/Footer";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Info } from "../Context/Context";

const Journal = () => {
  const { leftStripData, middleStripData, rightStripData } = useContext(Info);

  // Scroll Animation for the strips
  const leftStrip = useRef(null);
  const middleStrip = useRef(null);
  const rightStrip = useRef(null);
  const { scrollYProgress: scrollYProgressLeft } = useScroll({
    target: leftStrip,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgressMiddle } = useScroll({
    target: middleStrip,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgressRight } = useScroll({
    target: rightStrip,
    offset: ["start end", "end start"],
  });

  const leftStripY = useTransform(scrollYProgressLeft, [0, 1], [0, -100]);
  const middleStripY = useTransform(scrollYProgressMiddle, [0, 1], [0, 200]);
  const rightStripY = useTransform(scrollYProgressRight, [0, 1], [0, -100]);
  return (
    <div>
      {/* Text */}
      <div className="mt-36 text-center text-[40px] font-[SaolDisplay-Light] leading-none">
        <p>Spain Collection has selected the best places and traditions</p>
        <p>to turn your luxury trip into an unforgettable memory</p>
      </div>
      {/* Grid Layout */}
      {/* A padding of 200px has been applied to ensure that as the strips move downward, any whitespace is fully covered, maintaining a seamless visual flow */}
      <div className="w-[92%] mx-auto mt-24 mb-40 pb-[200px] grid grid-cols-[35%_25%_35%] justify-between">
        {/* Left Strip */}
        <motion.div
          ref={leftStrip}
          style={{
            y: leftStripY,
          }}
          className="h-full flex flex-col gap-8"
        >
          {leftStripData.map((item) => (
            <DateCard key={item.id} {...item} />
          ))}
        </motion.div>
        {/* Middle Strip */}
        <motion.div
          ref={middleStrip}
          style={{
            y: middleStripY,
          }}
          className="h-full flex flex-col gap-8"
        >
          {middleStripData.map((item) => (
            <DescriptionCard key={item.id} {...item} />
          ))}
        </motion.div>
        {/* Right Strip */}
        <motion.div
          ref={rightStrip}
          style={{
            y: rightStripY,
          }}
          className="h-full flex flex-col gap-8"
        >
          {rightStripData.map((item) => (
            <DateCard key={item.id} {...item} />
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Journal;
