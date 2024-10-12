import React from "react";
import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const NavigateTransition = () => {
  return (
    <motion.div
      className="relative z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    />
  );
};

export default NavigateTransition;
