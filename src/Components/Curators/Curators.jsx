import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxImages_Dark from "./ParallaxImages_Dark";
import OverlapingCards from "./OverlapingCards";
import InfoCards from "./InfoCards";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { Info } from "../Context/Context";

const Curators = () => {
  const {
    fixedImagesDataCurators,
    overlappingCardsData,
    cardsDataCurators,
    middleParallaxImage_Dark_Height,
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
        cardsRefXValue: useTransform(cardsRefX, [0, 1], [0, -200]),
      };
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // For Tablet
      return {
        MidImgY: useTransform(imageHolderScrolled, [0, 1], [0, 0]),
        ImgY: useTransform(ImgYScroll, [0, 1], [0, 50]),
        cardsRefXValue: useTransform(cardsRefX, [0, 1], [0, -200]),
      };
    } else if (screenWidth >= 1024 && screenWidth < 2000) {
      // For any other large screen size screenWidth >= 1024
      return {
        MidImgY: useTransform(imageHolderScrolled, [0, 1], ["0%", "35%"]),
        ImgY: useTransform(ImgYScroll, [0, 1], [0, 50]),
        cardsRefXValue: useTransform(cardsRefX, [0, 1], [0, -200]),
      };
    } else {
      // For any other large screen size screenWidth >= 2000
      return {
        MidImgY: useTransform(imageHolderScrolled, [0, 1], ["0%", "35%"]),
        ImgY: useTransform(ImgYScroll, [0, 1], [0, 50]),
        cardsRefXValue: useTransform(cardsRefX, [0, 1], [0, -200]),
      };
    }
  };

  const { MidImgY, ImgY, cardsRefXValue } = getTransforms();

  return (
    <div className="bg-black">
      {/* Text */}
      <div
        style={{
          lineHeight: 1,
        }}
        className='pt-[3pc] text-center uppercase text-white text-[2.4pc] xs:text-[3.2pc] sm:text-[4.5pc] lg:text-[5pc] xl:text-[7pc] 3xl:text-[12pc] font-["SaolDisplay-Regular"] font-[300]'
      >
        <p>We work</p>
        <p>tirelessly to</p>
        <p>make your trip an</p>
        <p className='text-[#BF1826] font-["SaolDisplay-Italic"]'>
          unforgettable
        </p>
        <p>experience</p>
      </div>
      {/* ImagesHolder */}
      <div ref={imageHolder} className="mt-[3pc] relative">
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
      </div>
      {/* Our outstanding team */}
      <div
        style={{
          lineHeight: "1",
        }}
        // The pb-14 class is applied to ensure that the extra space created by the downward shift of ImgY is effectively covered.
        className="mt-32 pb-14 flex flex-col justify-center items-center text-[107px] text-white uppercase"
      >
        <div className="overflow-clip">
          <motion.p
            initial={{
              transform: "translateY(100%)",
            }}
            whileInView={{
              transform: "translateY(0%)",
            }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
          >
            Our
          </motion.p>
        </div>
        <div className="overflow-clip">
          <motion.p
            initial={{
              transform: "translateY(100%)",
            }}
            whileInView={{
              transform: "translateY(0%)",
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="text-[#BF1826] font-[SaolDisplay-Italic]"
          >
            Outstanding
          </motion.p>
        </div>
        <div className="overflow-clip">
          <motion.p
            initial={{
              transform: "translateY(100%)",
            }}
            whileInView={{
              transform: "translateY(0%)",
            }}
            transition={{
              duration: 0.75,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
          >
            Team
          </motion.p>
        </div>
        <div className="mt-10 h-40 w-[1px] bg-[#7A121A] relative z-10"></div>
        <motion.img
          ref={imageRef}
          style={{
            y: ImgY,
          }}
          src="/images/Curators/gurus_abene.webp"
          // The -mt-20 is applied so that the center of the line is aligned with the center of the image
          className="w-96 -mt-20"
          alt=""
        />
      </div>
      {/* Info */}
      {/* The -mt-60 margin is applied to ensure that, as the image scrolls downward, it partially overlaps the red background div. This approach creates a layered effect, adding depth and visual cohesion to the design */}
      <div className="-mt-60 pt-72 pb-16 bg-[#BF1826] text-white text-4xl text-center font-[300] tracking-wider">
        <div>
          <p>One of the things I learned about being leader is that some</p>
          <p>people are only motivated by money, or they are only</p>
          <p>motivated by power or some kind of incentive. But people</p>
          <p>also get inspired by stories. Here I share just a few thoughts</p>
          <p>from my team about Spain & Portugal Collection…</p>
        </div>
        <p className="mt-10">
          We really appreciate your considering us as partners!
        </p>
        <div className="mt-16 flex flex-col font-[Inter]">
          <span className="text-xl font-[400]">Abene Mendizabal</span>
          <span className="text-sm tracking-wider">
            Founder and CEO Spain Collection
          </span>
        </div>
        <img
          src="/images/Curators/gurus_sign.webp"
          className="mx-auto mt-16 w-72"
          alt=""
        />
      </div>
      {/* Team */}
      <div className="bg-white p-28">
        <p className="text-center font-[Inter] uppercase tracking-widest text-[#C42C39]">
          Team
        </p>
        <div className="w-[90%] mx-auto mt-20 flex gap-40">
          {overlappingCardsData.map((data) => (
            <OverlapingCards key={data.id} {...data} />
          ))}
        </div>
      </div>
      {/* Ambassadors */}
      <div
        ref={DragConstraintRef}
        className="w-full px-[10%] py-28 mx-auto mb-40 bg-black text-white text-xl overflow-x-clip"
      >
        <p className="text-center text-[#BF1826] tracking-widest">
          Ambassadors
        </p>
        <motion.div
          drag="x"
          dragConstraints={DragConstraintRef}
          dragMomentum={false}
          dragTransition={{ bounceStiffness: 150, bounceDamping: 10 }}
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
          ref={cardsRef}
          style={{
            left: cardsRefXValue,
          }}
          className="w-fit mt-16 pl-52 pr-44 flex flex-nowrap gap-32 relative"
        >
          {cardsDataCurators.map((item) => (
            <InfoCards key={item.id} {...item} isDragging={isDragging} />
          ))}
        </motion.div>
      </div>
      {/* Footer */}
      <Footer dark="true" />
    </div>
  );
};

export default Curators;
