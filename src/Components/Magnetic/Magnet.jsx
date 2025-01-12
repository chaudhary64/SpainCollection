import { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoPlay } from "react-icons/io5";
import { Info } from "../Context/Context";

export default function Magnet() {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { screenWidth } = useContext(Info);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={screenWidth > 1024 ? handleMouse : null}
      onMouseLeave={screenWidth > 1024 ? reset : null}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 10, mass: 0.1 }}
      className="p-4"
    >
      <div className="h-12 xxs:h-14 lg:h-16 xl:h-20 3xl:h-28 w-12 xxs:w-14 lg:w-16 xl:w-20 3xl:w-28 border lg:border-2 border-white rounded-full flex justify-center items-center cursor-pointer">
        <IoPlay className="h-4 lg:h-4 xl:scale-125 3xl:scale-150 text-white" />
      </div>
    </motion.div>
  );
}
