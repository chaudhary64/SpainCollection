import React from "react";
import { motion } from "framer-motion";

const StaggeredAnimation = ({ textArray }) => {
  const containerVariants = {
    hidden: { opacity: 1 }, // Maintain opacity during stagger animation
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation for child elements
      },
    },
  };

  const childVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      style={{ lineHeight: 1 }}
      className="mt-[10pc] pb-[5pc] sm:pb-[7pc] xl:pb-[9pc] 3xl:pb-[11pc] flex flex-col justify-center items-center text-[2.7pc] xs:text-[3.5pc] sm:text-[4.5pc] lg:text-[5pc] xl:text-[7pc] 3xl:text-[12pc] text-white uppercase"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the parent is visible
      variants={containerVariants}
    >
      {textArray.map((text, index) => (
        <motion.div
          key={index}
          className="overflow-clip"
          variants={childVariants} // Each child uses the same variants
        >
          <motion.p
            className={
              text === "Outstanding"
                ? "text-[#BF1826] font-[SaolDisplay-Italic]"
                : ""
            }
          >
            {text}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredAnimation;
