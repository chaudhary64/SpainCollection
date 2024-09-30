import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const FixedImages = ({ src, number, text }) => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const positionY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  return (
    <div ref={imageRef} className="w-[310px] text-lg">
      <div className="h-[420px] w-full overflow-clip">
        <motion.img style={{ y: positionY }} src={src} alt="" />
      </div>
      <div className="mt-5">
        <p className="text-lg">{number}</p>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};

export default FixedImages;
