import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FixedImages = ({ src, number, text }) => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const positionY = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const positionYBottom = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  return (
    <div ref={imageRef} className="w-[310px] text-lg">
      <div className="h-[510px] w-full overflow-clip relative bg-red-500">
        <motion.img
          style={{
            position: "absolute",
            bottom: positionYBottom,
            y: positionY,
          }}
          className="absolute"
          src={src}
          alt=""
        />
      </div>
      <div className="mt-5">
        <p className="text-2xl text-[#0E0E0D]/95">{number}</p>
        <p className="mt-0.5 text-xl text-[#0E0E0D]/90 tracking-wider">
          {text}
        </p>
      </div>
    </div>
  );
};

export default FixedImages;
