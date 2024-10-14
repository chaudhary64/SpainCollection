import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FixedImages = ({ src, number, text }) => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const positionY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  return (
    <div ref={imageRef} className="w-[310px] text-lg">
      <div className="h-[70vh] w-full overflow-clip">
        <motion.img style={{ y: positionY }} src={src} alt="" />
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
