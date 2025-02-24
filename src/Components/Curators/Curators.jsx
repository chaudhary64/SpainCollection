import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxImages_Dark from "./ParallaxImages_Dark";
import OverlapingCards from "./OverlapingCards";
import InfoCards from "./InfoCards";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { Info } from "../Context/Context";
import StaggeredAnimation from "./StaggeredAnimation";

const Curators = () => {
  const {
    fixedImagesDataCurators,
    overlappingCardsData,
    cardsDataCurators,
    middleParallaxImage_Dark_Height,
    InfoImageHeight,
    setInfoImageHeight,
    screenWidth,
  } = useContext(Info);

  const imageHolder = useRef(null);

  const { scrollYProgress: imageHolderScrolled } = useScroll({
    target: imageHolder,
    offset: ["start end", "end start"],
  });

  // For Image inside Our Outstanding Team
  const imageRef = useRef(null);
  const { scrollYProgress: ImgYScroll } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // For Dragging Cards
  const DragConstraintRef = useRef(null);
  const cardsRef = useRef(null);
  const [isDragging, setDragging] = useState(false);
  const { scrollYProgress: cardsRefX } = useScroll({
    target: cardsRef,
    offset: ["start end", "end start"],
  });

  const getTransforms = () => {
    // For Mobile
    if (screenWidth < 768) {
      return {
        MidImgY: useTransform(imageHolderScrolled, [0, 1], [0, 0]),
        ImgY: useTransform(ImgYScroll, [0, 1], [0, 50]),
        cardsRefXValue: useTransform(cardsRefX, [0, 1], ["0%", "0%"]),
      };
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // For Tablet
      return {
        MidImgY: useTransform(imageHolderScrolled, [0, 1], [0, 0]),
        ImgY: useTransform(ImgYScroll, [0, 1], [0, 50]),
        cardsRefXValue: useTransform(cardsRefX, [0, 1], ["0%", "0%"]),
      };
    } else if (screenWidth >= 1024 && screenWidth < 2000) {
      // For any other large screen size screenWidth >= 1024
      return {
        MidImgY: useTransform(imageHolderScrolled, [0, 1], ["0%", "35%"]),
        ImgY: useTransform(ImgYScroll, [0, 1], [0, 50]),
        cardsRefXValue: useTransform(cardsRefX, [0, 1], ["-20%", "0%"]),
      };
    } else {
      // For any other large screen size screenWidth >= 2000
      return {
        MidImgY: useTransform(imageHolderScrolled, [0, 1], ["0%", "35%"]),
        ImgY: useTransform(ImgYScroll, [0, 1], [0, 50]),
        cardsRefXValue: useTransform(cardsRefX, [0, 1], ["-20%", "0%"]),
      };
    }
  };

  const { MidImgY, ImgY, cardsRefXValue } = getTransforms();

  useEffect(() => {
    const heightAdjuster = () => {
      setInfoImageHeight(imageRef.current.getBoundingClientRect().height * 0.5);
    };

    heightAdjuster();

    window.addEventListener("resize", heightAdjuster);

    // Check if the `imageRef.current` is an <img> element and attach the "load" event conditionally
    if (imageRef.current?.tagName === "IMG" && !imageRef.current.complete) {
      imageRef.current.addEventListener("load", heightAdjuster);
    }

    return () => {
      if (imageRef.current?.tagName === "IMG") {
        imageRef.current.removeEventListener("load", heightAdjuster);
      }
      window.removeEventListener("resize", heightAdjuster);
    };
  }, [screenWidth]);

  return (
    <div className="bg-black">
      {/* Text */}
      <section
        style={{
          lineHeight: 1,
        }}
        className='pt-[4pc] w-[90%] mx-auto text-center uppercase text-white text-[2.45pc] xs:text-[3.3pc] sm:text-[4.6pc] lg:text-[6pc] xl:text-[8pc] 3xl:text-[12pc] font-["SaolDisplay-Regular"] font-[300]'
      >
        <p>We work</p>
        <p>tirelessly to</p>
        <p>make your trip an</p>
        <p className='text-[#BF1826] font-["SaolDisplay-Italic"]'>
          unforgettable
        </p>
        <p>experience</p>
      </section>
      {/* ImagesHolder */}
      <section ref={imageHolder} className="mt-[3pc] relative">
        {/* Vertical Line */}
        <div
          id="vertical_line"
          className="h-[6pc] sm:h-[9pc] xl:h-[10pc] 3xl:h-[15pc] w-[1px] bg-white mx-auto mb-[3pc]"
        ></div>
        {/* ImagesHolder */}
        <div
          ref={imageHolder}
          id="images_holder"
          style={{
            paddingBottom:
              screenWidth >= 1024 ? middleParallaxImage_Dark_Height + "px" : 0,
          }}
          className="w-[85%] lg:w-full mx-auto flex flex-wrap lg:flex-nowrap justify-evenly gap-[4pc]"
        >
          <div
            id={fixedImagesDataCurators[0].heading + "_container"}
            className="shrink-0 h-fit w-[85%] xxs:w-[80%] xs:w-[65%] sm:w-[45%] md:w-[45%] lg:w-[21%] xl:w-[22%] 2xl:w-[23%] 3xl:w-[27%] mr-auto lg:mr-0"
          >
            <ParallaxImages_Dark
              key={fixedImagesDataCurators[0].id}
              {...fixedImagesDataCurators[0]}
              imageHolderScrolled={imageHolderScrolled}
            />
          </div>
          <motion.div
            id={fixedImagesDataCurators[1].heading + "_container"}
            style={{
              y: MidImgY,
            }}
            className="shrink-0 h-fit w-[85%] xxs:w-[80%] xs:w-[65%] sm:w-[45%] md:w-[45%] lg:w-[21%] xl:w-[22%] 2xl:w-[23%] 3xl:w-[27%] ml-auto lg:ml-0"
          >
            <ParallaxImages_Dark
              key={fixedImagesDataCurators[1].id}
              {...fixedImagesDataCurators[1]}
              imageHolderScrolled={imageHolderScrolled}
            />
          </motion.div>
          <div
            id={fixedImagesDataCurators[2].heading + "_container"}
            className="shrink-0 h-fit w-[85%] xxs:w-[80%] xs:w-[65%] sm:w-[45%] md:w-[45%] lg:w-[21%] xl:w-[22%] 2xl:w-[23%] 3xl:w-[27%] mr-auto md:mx-auto lg:mx-0"
          >
            <ParallaxImages_Dark
              key={fixedImagesDataCurators[2].id}
              {...fixedImagesDataCurators[2]}
              imageHolderScrolled={imageHolderScrolled}
            />
          </div>
        </div>
      </section>
      {/* Our outstanding team */}
      <section>
        {/* Text */}
        <StaggeredAnimation textArray={["Our", "Outstanding", "Team"]} />
        {/* Info */}
        <div
          style={{
            marginTop: InfoImageHeight + "px",
            paddingTop: InfoImageHeight + 50 + "px",
          }}
          className="bg-[#BF1826] relative"
        >
          {/* Image Container */}
          <div
            id="image_container"
            className="w-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Vertical Line */}
            <div
              id="vertical_line"
              className="h-[6pc] sm:h-[9pc] xl:h-[10pc] 3xl:h-[15pc] w-[1px] bg-[#7A121A] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            ></div>
            {/* Image */}
            <motion.img
              ref={imageRef}
              style={{
                y: ImgY,
              }}
              src="/images/Curators/gurus_abene.webp"
              className="w-[70%] xs:w-[60%] sm:w-1/2 xl:w-[30%] mx-auto"
              alt=""
            />
          </div>
          {/* Text */}
          <div className="text-white text-xl xs:text-2xl lg:text-3xl xl:text-5xl 3xl:text-8xl text-center font-[300] tracking-wider">
            <p>&nbsp;</p>
            <div>
              <p>One of the things I learned about being leader is that some</p>
              <p>people are only motivated by money, or they are only</p>
              <p>motivated by power or some kind of incentive. But people</p>
              <p>
                also get inspired by stories. Here I share just a few thoughts
              </p>
              <p>from my team about Spain & Portugal Collection…</p>
            </div>
            <p>&nbsp;</p>
            <p>We really appreciate your considering us as partners!</p>
            <p>&nbsp;</p>
            <div className="flex flex-col font-[Inter]">
              <span className="text-base xs:text-lg lg:text-base xl:text-2xl 3xl:text-5xl font-[400]">
                Abene Mendizabal
              </span>
              <span className="text-xs xs:text-sm lg:text-base xl:text-xl 3xl:text-4xl tracking-wider">
                Founder and CEO Spain Collection
              </span>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <img
              src="/images/Curators/gurus_sign.webp"
              className="mx-auto w-[60%] xs:w-1/2 lg:w-[40%] xl:w-[20%] 3xl:w-[25%]"
              alt=""
            />
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </section>
      {/* Team */}
      <section className="py-[5pc] md:py-[6pc] bg-white">
        <p className="text-center font-[Inter] uppercase tracking-widest text-[#C42C39] text-xs xs:text-[0.9pc] md:text-[1.1pc] lg:text-[1vw] xl:text-[1.2vw] 3xl:text-3xl">
          Team
        </p>
        <div className="w-[90%] mx-auto mt-[4pc] md:mt-[5pc] flex flex-wrap sm:justify-between lg:justify-start gap-[3pc] xl:gap-[5pc]">
          {overlappingCardsData.map((data) => (
            <OverlapingCards key={data.id} {...data} />
          ))}
        </div>
      </section>
      {/* Ambassadors */}
      <section
        ref={DragConstraintRef}
        className="w-full mx-auto pt-[5pc] md:pt-[6pc] mb-[20vh] xs:mb-[25vh] sm:mb-[32vh] md:mb-[15pc] xl:mb-[22pc] 3xl:mb-[35pc] bg-black text-white text-xl overflow-x-clip"
      >
        <p className="text-center font-[Inter] uppercase text-[#BF1826] tracking-widest text-xs xs:text-[0.9pc] md:text-[1.1pc] lg:text-[1vw] xl:text-[1.2vw] 3xl:text-3xl">
          Ambassadors
        </p>
        <motion.div
          data_target="drag-container"
          // Conditionally apply drag attributes
          drag={screenWidth >= 1024 ? "x" : false}
          dragConstraints={screenWidth >= 1024 ? DragConstraintRef : undefined}
          dragMomentum={screenWidth >= 1024 ? false : undefined}
          dragTransition={
            screenWidth >= 1024
              ? { bounceStiffness: 150, bounceDamping: 10 }
              : undefined
          }
          onDragStart={
            screenWidth >= 1024 ? () => setDragging(true) : undefined
          }
          onDragEnd={screenWidth >= 1024 ? () => setDragging(false) : undefined}
          ref={cardsRef}
          style={{
            left: cardsRefXValue,
            overflowX: screenWidth >= 1024 ? "visible" : "scroll",
            width: screenWidth >= 1024 ? "fit-content" : "auto",
          }}
          className="no-scrollbar flex flex-nowrap gap-4 md:gap-5 xl:gap-7 mt-[4pc] md:mt-[5pc] pl-[9vw] xs:pl-[6vw] sm:pl-[5vw] md:pl-[7.5vw] xl:pl-[10pc] 3xl:pl-[15pc] pr-2 xs:pr-3 md:pr-5 lg:pr-[20pc] relative"
        >
          {cardsDataCurators.map((item) => (
            <InfoCards key={item.id} {...item} isDragging={isDragging} />
          ))}
        </motion.div>
      </section>
      {/* Footer */}
      <Footer dark="true" />
    </div>
  );
};

export default Curators;
