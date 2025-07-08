import { motion, useAnimation } from "framer-motion";

const HoverCover = ({ src, text }) => {
  const controls = useAnimation();
  const AnimationStart = () => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 2, ease: [0.05, 0.76, 0.38, 1.015] },
    });
  };
  const AnimationEnd = () => {
    controls.start({
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.9, ease: [0.05, 0.76, 0.38, 1.015] },
    });
  };
  return (
    <div className="flex justify-center items-center">
      <motion.div
        animate={controls}
        initial={{ opacity: 0, scale: 1.2 }}
        className="fixed top-0 left-0 -z-40"
      >
        <img src={src} className="h-screen w-screen object-cover" alt="" />
        <div className="inset-0 bg-black/60 absolute"></div>
      </motion.div>
      <span
        onMouseEnter={AnimationStart}
        onMouseLeave={AnimationEnd}
        className="text-[1pc] xl:text-[1.5pc] 3xl:text-[2.5pc] tracking-wider hover:cursor-pointer"
      >
        {text}
      </span>
      <div className="h-[1px] w-10 bg-white"></div>
    </div>
  );
};

export default HoverCover;
