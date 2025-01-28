import { useContext, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoPlay } from "react-icons/io5";
import { Info } from "../Context/Context";

export default function Magnet() {
  const ref = useRef(null);
  const [properties, setProperties] = useState({
    x: 0,
    y: 0,
    visibile: false,
    svgOpacity: 1,
  });
  const { screenWidth } = useContext(Info);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setProperties((prev) => ({
      x: middleX,
      y: middleY,
      visibile: true,
      svgOpacity: 0,
    }));
  };

  const reset = () => {
    setProperties((prev) => ({ x: 0, y: 0, visibile: false, svgOpacity: 1 }));
  };

  const { x, y, visibile, svgOpacity } = properties;

  return (
    <motion.div
      data_target="magnet"
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={screenWidth > 1024 ? handleMouse : null}
      onMouseLeave={screenWidth > 1024 ? reset : null}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 10, mass: 0.1 }}
    >
      <div className="h-12 xxs:h-14 lg:h-16 xl:h-20 3xl:h-28 w-12 xxs:w-14 lg:w-16 xl:w-20 3xl:w-28 border lg:border-2 border-white rounded-full flex justify-center items-center cursor-pointer pointer-events-none relative">
        <IoPlay
          style={{
            opacity: svgOpacity,
            transition: "opacity 0.2s",
          }}
          className="h-4 lg:scale-105 xl:scale-125 3xl:scale-150 text-white"
        />
        <AnimatePresence>
          {visibile && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ left: x, top: y, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
                mass: 0.1,
              }}
              exit={{ scale: 0, transition: { duration: 0.3 } }}
              className="h-full w-full bg-white rounded-full text-base text-black grid place-items-center absolute"
            >
              Play
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
