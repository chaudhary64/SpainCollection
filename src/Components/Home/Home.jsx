import { useState, useRef, useEffect, useContext } from "react";
import { IoPlay } from "react-icons/io5";
import Expander from "./Expander";
import Ambassadords from "./Ambassadors";
import FixedImages from "./FixedImages";
import Marquee from "./Marquee";
import Footer from "../Footer/Footer";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Cards from "./Cards";
import { Info } from "../Context/Context";
import { s } from "framer-motion/client";

const Home = () => {
  const {
    AmbassadorsData,
    fixedImages,
    marqueesData,
    cardsData,
    screenWidth,
    middleFixedImageHeight,
  } = useContext(Info);

  const AmbassadorsRef = useRef(null);
  const ExpanderRef = useRef(null);
  const [theme, setTheme] = useState("white");
  const { scrollYProgress: scrollYProgressAmbassador } = useScroll({
    target: AmbassadorsRef,
    offset: ["start 10%", "end start"],
  });
  const { scrollYProgress: scrollYProgressExpander } = useScroll({
    target: ExpanderRef,
    offset: screenWidth < 768 ? [`start 30%`, "start"] : [`start`, "end"],
  });

  useEffect(() => {
    if (scrollYProgressAmbassador.get() >= 0.1) setTheme("white");
  }, []);

  useMotionValueEvent(scrollYProgressAmbassador, "change", (l) => {
    if (screenWidth >= 1024) {
      setTheme(l >= 0.1 ? "white" : "black");
    }
  });
  useMotionValueEvent(scrollYProgressExpander, "change", (l) => {
    if (screenWidth >= 1024) {
      setTheme(l >= 0.9 ? "black" : "white");
    }
  });

  // For Dragging Cards
  const DragConstraintRef = useRef(null);
  const cardsRef = useRef(null);
  const [isDragging, setDragging] = useState(false);
  const { scrollYProgress: cardsRefX } = useScroll({
    target: cardsRef,
    offset: ["start end", "end start"],
  });

  // For Image Holder
  const imageHolder = useRef(null);
  const { scrollYProgress: imageHolderScrolled } = useScroll({
    target: imageHolder,
    offset: ["start end", "end start"],
  });

  const getTransforms = () => {
    // For Mobile
    if (screenWidth < 768) {
      return {
        MidImgY: useTransform(imageHolderScrolled, [0, 1], [0, 0]),
        cardsRefXValue: useTransform(cardsRefX, [0, 1], ["0%", "0%"]),
      };
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // For Tablet
      return {
        MidImgY: useTransform(imageHolderScrolled, [0, 1], [0, 0]),
        cardsRefXValue: useTransform(cardsRefX, [0, 1], ["0%", "0%"]),
      };
    } else if (screenWidth >= 1024 && screenWidth < 2000) {
      // For any other large screen size screenWidth >= 1024
      return {
        MidImgY: useTransform(imageHolderScrolled, [0, 1], ["0%", "35%"]),
        cardsRefXValue: useTransform(cardsRefX, [0, 1], ["-20%", "0%"]),
      };
    } else {
      // For any other large screen size screenWidth >= 2000
      return {
        MidImgY: useTransform(imageHolderScrolled, [0, 1], ["0%", "35%"]),
        cardsRefXValue: useTransform(cardsRefX, [0, 1], ["-20%", "0%"]),
      };
    }
  };

  const { MidImgY, cardsRefXValue } = getTransforms();

  // For Moving Marquee with scroll
  const MarqueeContainer = useRef(null);
  const { scrollYProgress: scrollMarquee } = useScroll({
    target: MarqueeContainer,
    offset: ["start end", "end start"],
  });
  const forwardMarqueeX = useTransform(scrollMarquee, [0, 1], ["0%", "-40%"]);
  const reverseMarqueeX = useTransform(scrollMarquee, [0, 1], ["0%", "40%"]);

  return (
    <section id="HomePage">
      {/* This below div will act as a background */}
      <div
        id="mask"
        style={{
          backgroundColor: theme,
          transition: "background-color 0.6s cubic-bezier(0.11, 0, 0.5, 0)",
        }}
        className="fixed h-lvh w-full top-0 left-0 z-[-99]"
      ></div>
      {/* Expander */}
      <motion.div id="Expander" ref={ExpanderRef}>
        <Expander />
      </motion.div>
      {/* About US */}
      <div id="AboutUs" className="pt-14 xl:pt-52 pb-14 xl:pb-32 3xl:pb-40">
        {/* Heading */}
        <p className="text-[#BF1826] text-center text-xs xs:text-[0.9pc] lg:text-[0.9vw] xl:text-[1vw] 3xl:text-3xl font-[400] font-['Inter'] tracking-widest">
          ABOUT US
        </p>
        {/* Image */}
        <div className="w-[75%] sm:w-[65%] md:w-[70%] lg:w-[55%] xl:w-[50%] mx-auto mt-10 xl:mt-20 relative bg-black">
          <img
            className="object-cover opacity-40"
            src="/images/Home/caratula_video_abene_new.webp"
            alt=""
          />
          <div className="h-[72px] w-[72px] border-2 border-[#D6D6D6] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <IoPlay className="h-5 text-white" />
          </div>
        </div>
        {/* Text */}
        <div className="mt-8 xl:mt-10 3xl:mt-14 text-white mix-blend-difference">
          <p className="text-center text-sm xs:text-base md:text-[2.5vw] xl:text-2xl 3xl:text-4xl">
            Abene Mendizabal
          </p>
          <p className="text-center text-xs xs:text-sm md:text-[2vw] xl:text-lg 3xl:text-2xl">
            Founder & CEO Spain Collection
          </p>
        </div>
      </div>
      {/* Ambassadors */}
      <motion.div
        id="Ambassadors"
        ref={AmbassadorsRef}
        className="pb-16 xs:pb-20 sm:pb-24 md:pb-24 lg:pb-32 xl:pb-36 3xl:pb-40"
      >
        {/* Heading */}
        <p className="text-[#BF1826] text-center text-xs xs:text-[0.9pc] lg:text-[0.9vw] xl:text-[1vw] 3xl:text-3xl font-[400] font-['Inter'] tracking-widest uppercase">
          Ambassadors
        </p>
        {/* Images */}
        <div
          style={{
            transition: "color 0.6s linear",
          }}
          className="mt-12 xl:mt-32 3xl:mt-40 flex flex-wrap justify-center sm:justify-evenly gap-8 sm:gap-0"
        >
          {AmbassadorsData.map((item) => (
            <Ambassadords key={item.id} {...item} />
          ))}
        </div>
      </motion.div>
      {/* Why Choose Us */}
      <div id="whyChooseUs" className="relative ">
        {/* Text */}
        <div
          style={{
            lineHeight: "0.9",
          }}
        >
          {/* For smaller screen */}
          <div className="w-full flex flex-wrap lg:hidden gap-[6px_12px] justify-center text-[1.8pc] xs:text-[2.2pc]">
            <span className="text-red-600 italic">Why</span>
            <span className="text-white mix-blend-difference">CHOOSE</span>
            <span className="text-white mix-blend-difference">SPAIN</span>
            <span className="text-white mix-blend-difference">COLLECTION?</span>
          </div>
          {/* For bigger screen */}
          <div
            style={{
              lineHeight: "0.85",
            }}
            className="w-full hidden lg:block text-center text-[14vw] relative z-[2]"
          >
            <p className="text-red-600 italic">Why</p>
            <p>CHOOSE</p>
            <p>SPAIN</p>
            <p>COLLEC-</p>
            <p>TION?</p>
          </div>
        </div>
        {/* ImagesHolder */}
        <div
          ref={imageHolder}
          style={{
            paddingBottom: middleFixedImageHeight + "px",
          }}
          className="md:mt-5 lg:-mt-[25%] pt-6 flex flex-wrap lg:flex-nowrap justify-evenly gap-5"
        >
          <div className="shrink-0 h-fit w-[85%] lg:w-[21%] xl:w-[21.5%] 2xl:w-[23%]">
            <FixedImages
              key={fixedImages[0].id}
              {...fixedImages[0]}
              imageHolderScrolled={imageHolderScrolled}
            />
          </div>
          <motion.div
            style={{
              y: MidImgY,
            }}
            className="shrink-0 h-fit w-[85%] lg:w-[21%] xl:w-[21.5%] 2xl:w-[23%]"
          >
            <FixedImages
              key={fixedImages[1].id}
              {...fixedImages[1]}
              imageHolderScrolled={imageHolderScrolled}
            />
          </motion.div>
          <div className="shrink-0 h-fit w-[85%] lg:w-[21%] xl:w-[21.5%] 2xl:w-[23%]">
            <FixedImages
              key={fixedImages[2].id}
              {...fixedImages[2]}
              imageHolderScrolled={imageHolderScrolled}
            />
          </div>
        </div>
      </div>
      {/* Marquee Animation */}
      <div
        id="MarqueeContainer"
        ref={MarqueeContainer}
        className="pt-4 sm:pt-6 md:pt-8 lg:pt-12 xl:pt-14 3xl:pt-20 flex flex-col gap-3 md:gap-4 xl:gap-6 overflow-x-clip"
      >
        <motion.div
          style={{
            x: forwardMarqueeX,
          }}
        >
          <Marquee key={"forwardMarquee"} data={marqueesData[0]} />
        </motion.div>
        <motion.div
          style={{
            x: reverseMarqueeX,
          }}
        >
          <Marquee
            key={"ReverseMarquee"}
            data={marqueesData[1]}
            reverse={true}
          />
        </motion.div>
      </div>
      {/* Discover the Luxury */}
      <div
        id="DiscoverTheLuxury"
        ref={DragConstraintRef}
        style={{
          lineHeight: "1",
        }}
        className="w-full mt-16 mb-[20vh] xs:mb-[26vh] sm:mb-[32vh] md:mb-[18pc] xl:mb-[25pc] 3xl:mb-[40pc] pt-[9%] xs:pt-[6%] sm:pt-[5%] md:pt-[6%] bg-black relative overflow-x-clip text-white"
      >
        {/* Text */}
        <div className="mx-auto w-[82%] xs:w-[88%] sm:w-[90%] md:w-[85%] text-[1.6pc] xs:text-[1.8pc] sm:text-[2pc] md:text-[2.5pc] xl:text-[3.4pc] 3xl:text-[5.5pc]">
          <p>Discover the</p>
          <p>
            <span
              style={{
                fontFamily: "SaolDisplay-Italic",
              }}
              className="text-red-700"
            >
              luxury
            </span>{" "}
            of
          </p>
          <p>traveling with</p>
          <p>us</p>
        </div>
        {/* Cards */}
        <motion.div
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
            y: "25%",
            left: cardsRefXValue,
            overflowX: screenWidth >= 1024 ? "visible" : "scroll",
            width: screenWidth >= 1024 ? "fit-content" : "auto",
          }}
          className="no-scrollbar flex flex-nowrap gap-2 xs:gap-3 md:gap-5 xl:gap-7 pl-[9vw] xs:pl-[6vw] sm:pl-[5vw] md:pl-[7.5vw] xl:pl-[10pc] 3xl:pl-[15pc] pr-2 xs:pr-3 md:pr-5 lg:pr-[20pc] relative"
        >
          {cardsData.map((item) => (
            <Cards key={item.id} {...item} isDragging={isDragging} />
          ))}
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
