import { useContext, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Info } from "../Context/Context";

const ParallaxImages_Light = ({
  src,
  number,
  text,
  imageHolderScrolled: scrollYProgress,
  theme = "black",
}) => {
  const { screenWidth, setMiddleFixedImageHeight } = useContext(Info);
  const imageRef = useRef(null);
  const { scrollYProgress: scrollYProgressSmallerDevices } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    if (number == "02/") {
      const heightAdjuster = () => {
        // Subtracting 1.25vw from the height as it is from the text container lg:pt-[1.25vw]
        setMiddleFixedImageHeight(
          imageRef.current.getBoundingClientRect().height * 0.35 -
            window.innerWidth * 0.0125
        );
      };

      heightAdjuster();

      window.addEventListener("resize", heightAdjuster);

      return () => {
        window.removeEventListener("resize", heightAdjuster);
      };
    }
  }, []);

  const getTransforms = () => {
    // For Mobile
    if (screenWidth < 768) {
      return {
        positionY: useTransform(
          scrollYProgressSmallerDevices,
          [0, 1],
          ["0%", "100%"]
        ),
        positionYBottom: useTransform(
          scrollYProgressSmallerDevices,
          [0, 1],
          ["0%", "100%"]
        ),
      };
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // For Tablet
      return {
        positionY: useTransform(
          scrollYProgressSmallerDevices,
          [0, 1],
          ["0%", "100%"]
        ),
        positionYBottom: useTransform(
          scrollYProgressSmallerDevices,
          [0, 1],
          ["0%", "100%"]
        ),
      };
    } else if (screenWidth >= 1024 && screenWidth < 2000) {
      // For any other large screen size screenWidth >= 1024
      return {
        positionY: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
        positionYBottom: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
      };
    } else {
      // For any other large screen size screenWidth >= 2000
      return {
        positionY: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
        positionYBottom: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
      };
    }
  };

  const { positionY, positionYBottom } = getTransforms();

  return (
    <div ref={imageRef} className="text-lg mx-auto">
      {/* Image Conatiner */}
      <div className="aspect-[9/16] w-full relative overflow-clip">
        <motion.img
          style={{
            position: "absolute",
            bottom: positionYBottom,
            y: positionY,
            scale: 1.15,
          }}
          className="object-cover w-full absolute"
          src={src}
          alt=""
        />
      </div>
      {/* Text Container */}
      <div className="pt-3.5 md:pt-4 lg:pt-[1.25vw] rounded-2xl">
        {theme == "black" ? (
          <>
            <div
              style={{
                lineHeight: "1.2",
              }}
            >
              <p className="text-[#0E0E0D]/100 text-[1.1pc] md:text-[1.2pc] lg:text-[1.6vw]">
                {number}
              </p>
              <p className="md:mt-1.5 text-[#0E0E0D]/95 tracking-wider text-[1pc] md:text-[1.1pc] lg:text-[1.5vw]">
                {text}
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="text-5xl text-white/95">{number}</p>
            <p className="mt-3 text-lg text-white/90 tracking-wider">{text}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ParallaxImages_Light;
