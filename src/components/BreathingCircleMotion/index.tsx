"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BreathingCircleProps {
  magnifyingDuration: number;
  pauseDuration: number;
}

export const BreathingCircleMotion = ({
  magnifyingDuration,
  pauseDuration,
}: BreathingCircleProps) => {
  const [breathingText, setBreathingText] = useState("Inhale");

  useEffect(() => {
    const timer = setInterval(
      () => {
        setBreathingText((prevText) =>
          prevText === "Inhale" ? "Exhale" : "Inhale",
        );
        // 1/4 duration of the magnifying circle, change the text
        // plus 1/2 of the repeatDelay
      },
      (magnifyingDuration / 4 + pauseDuration / 2) * 1000,
    );

    return () => {
      setBreathingText("Inhale");
      return clearInterval(timer);
    };
  }, [magnifyingDuration]);

  return (
    <motion.div
      key={magnifyingDuration}
      className="flex h-64 w-64 items-center justify-center rounded-full border-4 border-purple-800 bg-purple-400 md:h-96 md:w-96"
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: magnifyingDuration / 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: pauseDuration,
      }}
    >
      <motion.div
        className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-purple-800 bg-purple-400 md:h-64 md:w-64"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: magnifyingDuration / 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: pauseDuration,
        }}
      >
        <motion.div
          className="cursor-pointer text-2xl text-purple-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {breathingText}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
