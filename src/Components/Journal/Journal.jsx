import React, { useContext, useRef } from "react";
import DescriptionCard from "./DescriptionCard";
import DateCard from "./DateCard";
import Footer from "../Footer/Footer";
import {
  motion,
  // useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Info } from "../Context/Context";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Journal = () => {
  const { leftStripData, middleStripData, rightStripData, screenWidth } =
    useContext(Info);

  // Scroll Animation for the strips
  const leftStrip = useRef(null);
  const middleStrip = useRef(null);
  const rightStrip = useRef(null);
  const { scrollYProgress: scrollYProgressLeft } = useScroll({
    target: leftStrip,
    offset: ["start 20%", "end start"],
  });
  const { scrollYProgress: scrollYProgressMiddle } = useScroll({
    target: middleStrip,
    offset: ["start 20%", "end start"],
  });
  const { scrollYProgress: scrollYProgressRight } = useScroll({
    target: rightStrip,
    offset: ["start 20%", "end start"],
  });

  const getTransforms = () => {
    // For Mobile
    if (screenWidth < 768) {
      return {
        leftStripY: useTransform(scrollYProgressLeft, [0, 1], [0, 0]),
        middleStripY: useTransform(scrollYProgressMiddle, [0, 1], [0, 0]),
        rightStripY: useTransform(scrollYProgressRight, [0, 1], [0, 0]),
      };
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // For Tablet
      return {
        leftStripY: useTransform(scrollYProgressLeft, [0, 1], [0, 0]),
        middleStripY: useTransform(scrollYProgressMiddle, [0, 1], [0, 0]),
        rightStripY: useTransform(scrollYProgressRight, [0, 1], [0, 0]),
      };
    } else if (screenWidth >= 1024 && screenWidth < 2000) {
      // For any other large screen size screenWidth >= 1024
      return {
        leftStripY: useTransform(scrollYProgressLeft, [0, 1], [0, -100]),
        middleStripY: useTransform(scrollYProgressMiddle, [0, 1], [0, 200]),
        rightStripY: useTransform(scrollYProgressRight, [0, 1], [0, -100]),
      };
    } else {
      // For any other large screen size screenWidth >= 2000
      return {
        leftStripY: useTransform(scrollYProgressLeft, [0, 1], [0, -100]),
        middleStripY: useTransform(scrollYProgressMiddle, [0, 1], [0, 200]),
        rightStripY: useTransform(scrollYProgressRight, [0, 1], [0, -100]),
      };
    }
  };

  const { leftStripY, middleStripY, rightStripY } = getTransforms();
  return (
    <div>
      {/* Text */}
      <div className="mt-[3pc] text-center text-[2.4pc] xl:text-[40px] font-[SaolDisplay-Light] leading-none">
        <p>Spain Collection has selected the best places and traditions</p>
        <p>to turn your luxury trip into an unforgettable memory</p>
      </div>
      {/* Grid Layout */}
      {/* A padding of 200px has been applied to ensure that as the strips move downward, any whitespace is fully covered, maintaining a seamless visual flow */}
      <div className="w-[92%] mx-auto mt-[3pc] mb-[16vh] xs:mb-[21vh] md:mb-[11pc] lg:mb-[6pc] xl:mb-[16pc] 3xl:mb-[26pc] 3xl:pb-[200px] lg:grid lg:grid-cols-[35%_25%_35%] lg:justify-between">
        {/* Left Strip */}
        <motion.div
          ref={leftStrip}
          style={{
            y: leftStripY,
          }}
          className="h-full flex flex-col gap-6 md:gap-8 lg:gap-2 xl:gap-4 3xl:gap-[1.5pc]"
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
          className="mt-[2.5pc] mb-[3.5pc] lg:my-0 h-full flex flex-col gap-6 md:gap-8 lg:gap-2 xl:gap-4 3xl:gap-[1.5pc]"
        >
          {screenWidth >= 1024 ? (
            middleStripData.map((item) => (
              <DescriptionCard key={item.id} {...item} />
            ))
          ) : (
            <Swiper
              ref={middleStrip}
              spaceBetween={25}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper h-fit w-[75%] sm:w-[50%] md:w-[55%] mt-[1.5pc] xs:mt-[1.75pc] overflow-visible"
            >
              {middleStripData.map((item) => (
                <SwiperSlide key={item.text}>
                  <DescriptionCard key={item.id} {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </motion.div>
        {/* Right Strip */}
        <motion.div
          ref={rightStrip}
          style={{
            y: rightStripY,
          }}
          className="h-full flex flex-col gap-6 md:gap-8 lg:gap-2 xl:gap-4 3xl:gap-[1.5pc]"
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
