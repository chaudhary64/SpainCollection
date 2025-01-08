import { useContext, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Info } from "../Context/Context";

const ParallaxImages_Dark = ({
  src,
  heading,
  text,
  imageHolderScrolled: scrollYProgress,
}) => {
  const { screenWidth, setMiddleParallaxImage_Dark_Height } = useContext(Info);
  const imageRef = useRef(null);
  const { scrollYProgress: scrollYProgressSmallerDevices } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    if (heading == "Vision") {
      const heightAdjuster = () => {
        setMiddleParallaxImage_Dark_Height(
          imageRef.current.getBoundingClientRect().height * 0.35
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
    <div ref={imageRef} id={heading + "_wrapper"}>
      {/* Image Conatiner */}
      <div
        className={`${
          heading == "Values"
            ? "aspect-[1/1] xs:aspect-[4/3] "
            : "aspect-[4/5] xs:aspect-[9/16] "
        }w-full relative overflow-clip`}
      >
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
      <div>
        <p className="mt-[0.6pc] xl:my-[0.8pc] 3xl:my-[2pc] text-white/95 text-[1.55pc] sm:text-[1.75pc] lg:text-[2.25vw]">
          {heading}
        </p>
        <p
          style={{
            lineHeight: 1.3,
          }}
          className="text-white/90 tracking-wider text-[0.85pc] sm:text-[0.9pc] lg:text-[1.1vw]"
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default ParallaxImages_Dark;
