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

const Home = () => {
  const { AmbassadorsData, fixedImages, marqueesData, cardsData, screenWidth } =
    useContext(Info);

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
    setTheme(l >= 0.1 ? "white" : "black");
  });
  useMotionValueEvent(scrollYProgressExpander, "change", (l) => {
    setTheme(l >= 0.9 ? "black" : "white");
  });

  // For Image Holder
  const imageHolder = useRef(null);

  const { scrollYProgress: imageHolderScrolled } = useScroll({
    target: imageHolder,
    offset: ["start end", "end start"],
  });

  const LeftAndRightImgY = useTransform(imageHolderScrolled, [0, 1], [0, -75]);
  const MidImgY = useTransform(imageHolderScrolled, [0, 1], [0, 150]);

  // For Dragging Cards
  const DragConstraintRef = useRef(null);
  const cardsRef = useRef(null);
  const [isDragging, setDragging] = useState(false);
  const { scrollYProgress: cardsRefX } = useScroll({
    target: cardsRef,
    offset: ["start end", "end start"],
  });
  const cardsRefXValue = useTransform(cardsRefX, [0, 1], [0, -200]);

  // For Moving Marquee with scroll
  const MarqueeContainer = useRef(null);
  const { scrollYProgress: scrollMarquee } = useScroll({
    target: MarqueeContainer,
    offset: ["start end", "end start"],
  });
  const forwardMarqueeX = useTransform(scrollMarquee, [0, 1], ["0%", "-40%"]);
  const reverseMarqueeX = useTransform(scrollMarquee, [0, 1], ["0%", "40%"]);

  return (
    <section>
      {/* This below div will act as a background */}
      <div
        style={{
          backgroundColor: theme,
          transition: "background-color 0.6s cubic-bezier(0.11, 0, 0.5, 0)",
        }}
        className="fixed inset-0 z-[-99]"
      ></div>
      {/* Expander */}
      <motion.div ref={ExpanderRef}>
        <Expander />
      </motion.div>
      {/* About US */}
      <div className="pt-64 pb-28">
        <p className="text-[#BF1826] text-center text-base font-[400] font-['Inter'] tracking-widest">
          ABOUT US
        </p>
        <div className="w-[50%] mx-auto mt-20 relative">
          <img
            className="object-cover opacity-40"
            src="/images/Home/caratula_video_abene_new.webp"
            alt=""
          />
          <div className="h-[72px] w-[72px] border-2 border-[#D6D6D6] rounded-full absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <IoPlay className="text-white h-5 " />
          </div>
        </div>
        <div className="mt-10 text-white">
          <p className="text-center text-xl">Abene Mendizabal</p>
          <p className="text-center">Founder & CEO Spain Collection</p>
        </div>
      </div>
      {/* Ambassadors */}
      <motion.div ref={AmbassadorsRef} className="pb-44">
        <p className="text-[#BF1826] text-center text-base font-[400] font-['Inter'] tracking-widest uppercase">
          Ambassadors
        </p>
        <div
          style={{
            transition: "color 0.6s linear",
          }}
          className="mt-20 flex justify-evenly"
        >
          {AmbassadorsData.map((item) => (
            <Ambassadords key={item.id} {...item} />
          ))}
        </div>
      </motion.div>
      {/* Why Choose Us */}
      <div className="pt-[68vh] relative">
        {/* Text */}
        <div
          style={{
            lineHeight: "0.9",
          }}
          className="text-center text-[170px] w-full absolute top-0 z-[2]"
        >
          <p className="text-red-600 italic">Why</p>
          <p>CHOOSE</p>
          <p>SPAIN</p>
          <p>COLLEC-</p>
          <p>TION?</p>
        </div>
        {/* ImagesHolder */}
        <div ref={imageHolder} className="flex justify-evenly">
          <motion.div
            style={{
              y: LeftAndRightImgY,
            }}
          >
            <FixedImages
              key={fixedImages[0].id}
              {...fixedImages[0]}
              imageHolderScrolled={imageHolderScrolled}
              height={510}
              width={310}
            />
          </motion.div>
          <motion.div
            style={{
              y: MidImgY,
            }}
          >
            <FixedImages
              key={fixedImages[1].id}
              {...fixedImages[1]}
              imageHolderScrolled={imageHolderScrolled}
              height={510}
              width={310}
            />
          </motion.div>
          <motion.div
            style={{
              y: LeftAndRightImgY,
            }}
          >
            <FixedImages
              key={fixedImages[2].id}
              {...fixedImages[2]}
              imageHolderScrolled={imageHolderScrolled}
              height={510}
              width={310}
            />
          </motion.div>
        </div>
      </div>
      {/* Marquee Animation */}
      <div
        ref={MarqueeContainer}
        className="mt-[360px] flex flex-col gap-10 overflow-x-clip"
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
        ref={DragConstraintRef}
        className="h-[120vh] w-full px-[10%] py-40 mt-16 mb-96 mx-auto bg-black text-white text-5xl relative overflow-x-clip"
      >
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
        <motion.div
          drag="x"
          dragConstraints={DragConstraintRef}
          dragMomentum={false}
          dragTransition={{ bounceStiffness: 150, bounceDamping: 10 }}
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
          ref={cardsRef}
          style={{
            top: "50%",
            left: cardsRefXValue,
          }}
          className="h-[550px] flex flex-nowrap gap-7 pl-52 pr-36 absolute"
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
