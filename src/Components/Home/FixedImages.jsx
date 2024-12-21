import { useContext, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Info } from "../Context/Context";

const FixedImages = ({
  src,
  number,
  text,
  imageHolderScrolled: scrollYProgress,
  theme = "black",
}) => {
  const { screenWidth, setMiddleFixedImageHeight } = useContext(Info);
  const imageRef = useRef(null);

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
        positionY: useTransform(scrollYProgress, [0, 1], ["0%", "0%"]),
        positionYBottom: useTransform(scrollYProgress, [0, 1], ["0%", "0%"]),
      };
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // For Tablet
      return {
        positionY: useTransform(scrollYProgress, [0, 1], ["0%", "0%"]),
        positionYBottom: useTransform(scrollYProgress, [0, 1], ["0%", "0%"]),
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
      <div className="hidden lg:block h-[51vh] xl:h-[66vh] w-full relative overflow-clip">
        <motion.img
          style={{
            position: "absolute",
            bottom: positionYBottom,
            y: positionY,
            scale: 1.12,
          }}
          className="object-cover w-full absolute"
          src={src}
          alt=""
        />
      </div>
      {/* Text Container */}
      <div className="lg:mt-0 border lg:border-0 border-black/65 pt-2 lg:pt-[1.25vw] px-3.5 lg:px-0 rounded-2xl">
        {theme == "black" ? (
          <>
            <div
              style={{
                lineHeight: "1.5",
              }}
              className="text-xs lg:text-[1.25vw]"
            >
              <p className="text-[#0E0E0D]/100">{number}</p>
              <p className="text-[#0E0E0D]/95 tracking-wider">{text}</p>
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

export default FixedImages;
