"use client";

import { useEffect, useRef, useState } from "react";

import { motion, useAnimationControls } from "motion/react";

interface TypewriterTextProps {
  text?: string;
  typingSpeed?: number; // milliseconds per character
}

export default function TypewriterText({
  text = "I'm Mike van Peeren, Passionate About Exceptional User Experiences & High-Quality Code",
  typingSpeed = 80, // Default to 80ms per character
}: TypewriterTextProps) {
  const controls = useAnimationControls();
  const [displayedText, setDisplayedText] = useState("");
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    const typeText = async () => {
      if (!isMounted.current) return;

      for (let i = 0; i <= text.length; i++) {
        if (!isMounted.current) return;
        setDisplayedText(text.slice(0, i));
        await controls.start({ opacity: 1 });
        // Add a random variation to the typing speed
        const randomDelay = typingSpeed + (Math.random() * 50 - 25);
        await new Promise((resolve) => setTimeout(resolve, randomDelay));
      }
    };

    typeText();

    return () => {
      isMounted.current = false;
    };
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
