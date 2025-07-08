import { motion } from "framer-motion";

const StaggeredAnimation = () => {
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
      className="flex flex-col justify-center items-center text-[2.7pc] xs:text-[3.5pc] sm:text-[4.5pc] lg:text-[5pc] xl:text-[7pc] 3xl:text-[12pc] uppercase"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the parent is visible
      variants={containerVariants}
    >
      {/* Child 1 */}
      <motion.div
        className="overflow-clip"
        variants={childVariants} // Each child uses the same variants
      >
        <p>Contact</p>
      </motion.div>

      {/* Child 2 */}
      <motion.div
        className="overflow-clip"
        variants={childVariants} // Each child uses the same variants
      >
        <p>
          <span className="text-[#D24B4B] font-['SaolDisplay-Italic']">
            With{" "}
          </span>
          <span>Spain</span>
        </p>
      </motion.div>

      {/* Child 3 */}
      <motion.div
        className="overflow-clip"
        variants={childVariants} // Each child uses the same variants
      >
        <p>Collection</p>
      </motion.div>
    </motion.div>
  );
};

export default StaggeredAnimation;
