import { motion } from "framer-motion";

const AnimatedButton = ({ content }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative overflow-hidden px-8 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow-lg"
    >
      {/* Shine Effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      <span className="relative z-10">{content}</span>
    </motion.button>
  );
};

export default AnimatedButton;
