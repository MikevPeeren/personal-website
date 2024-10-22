"use client";

import { useEffect, useState } from "react";

import { motion, useAnimationControls } from "framer-motion";

interface TypewriterTextProps {
  text?: string;
  typingSpeed?: number; // milliseconds per character
}

export default function TypewriterText({
  text = "I'm Mike van Peeren, Passionate About Exceptional User Experiences & High-Quality Code",
  typingSpeed = 80, // Default to 120ms per character
}: TypewriterTextProps) {
  const controls = useAnimationControls();
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= text.length; i++) {
        setDisplayedText(text.slice(0, i));
        await controls.start({ opacity: 1 });
        // Add a random variation to the typing speed
        const randomDelay = typingSpeed + (Math.random() * 50 - 25);
        await new Promise((resolve) => setTimeout(resolve, randomDelay));
      }
    };

    typeText();
  }, [text, controls, typingSpeed]);

  return (
    <motion.h1 initial={{ opacity: 0 }} animate={controls}>
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }} // Slower blink
      >
        |
      </motion.span>
    </motion.h1>
  );
}
