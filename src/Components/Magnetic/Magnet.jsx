import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoPlay } from "react-icons/io5";

export default function Magnet() {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 10, mass: 0.1 }}
      className="p-4"
    >
      <div className="h-16 xl:h-20 3xl:h-28 w-16 xl:w-20 3xl:w-28 border-2 border-white rounded-full flex justify-center items-center">
        <IoPlay className="h-4 xl:h-5 3xl:h-7 text-white" />
      </div>
    </motion.div>
  );
}