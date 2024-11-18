"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import { AnimatePresence, motion } from "motion/react";

import Boyd from "@/public/testimonials/boyd.jpeg";
import Henro from "@/public/testimonials/henro.jpeg";
import Manon from "@/public/testimonials/manon.jpeg";
import Rano from "@/public/testimonials/rano.jpeg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    avatar: Manon,
    name: "Manon van Keulen",
    role: "Frontend Developer",
    content:
      "I got to know Mike as a driven Lead Frontend Developer. It is a pleasure to work with him. He has an eye for what it takes to grow his team, both as a whole and individually, with understanding for the person behind the developer. Mike has expertise in his field, but also offers room for his own input to jointly develop a great product. I have already learned a lot from him in the field of Frontend Development and I am very grateful to him for that. He is a valuable asset to any project or team!",
  },
  {
    id: 2,
    avatar: Boyd,
    name: "Boyd Boom",
    role: "Recruitment Specialist",
    content:
      "The combination of the right technical skills and his personal approach makes Mike a very good lead developer. Mike knows where he wants to go with his team and clearly explains what he needs. This ensured that the recruitment for the frontend team went smoothly and with the desired results. For a lead developer who can take an environment to the next level, Mike is the right place for you!",
  },
  {
    id: 3,
    avatar: Rano,
    name: "Rano Hardjosemito",
    role: "FullStack Developer",
    content:
      "Mike is a great addition to any team. His problem solving and critical thinking have been of great value to the project(s) we have worked on together. Moreover, his implementations and code formatting will leave a lasting mark in a good way.",
  },
  {
    id: 4,
    avatar: Henro,
    name: "Henro Veijer",
    role: "Data Specialist",
    content:
      "Mike is a cheerful guy who, despite all his light-heartedness, is serious about his work. As a BI Analyst I regularly needed his knowledge of the systems and he was always able to help me. Mike always seems to be seeking knowledge: Why are you doing this this way? What's the benefit? In this way he tries to learn and understand more and more. In addition, a pleasant guy to work with.",
  },
];

export default function TestimonialAccordionInteractive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startInterval();
    }
    return () => stopInterval();
  }, [isHovered]);

  const handleTestimonialClick = (index: number) => {
    setActiveIndex(index);
    stopInterval();
    startInterval();
  };

  return (
    <div
      className="w-full max-w-3xl mx-auto space-y-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2>What people say about me</h2>
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={false}
          animate={{
            height: index === activeIndex ? "auto" : "80px",
            boxShadow:
              index === activeIndex
                ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`bg-[#262626]/05 dark:bg-[#262626] rounded-2xl border border-[#262626]/[.3] dark:border-[#FFFFFF]/[.16] overflow-hidden cursor-pointer ${
            index === activeIndex ? "ring-2 ring-primary" : ""
          }`}
          onClick={() => handleTestimonialClick(index)}
        >
          <div className="p-4 flex items-center">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <div className="flex-grow">
              <h3 className="font-bold text-lg m-0">{testimonial.name}</h3>
              <p className="text-50 text-sm m-0">{testimonial.role}</p>
            </div>
          </div>
          <AnimatePresence initial={false}>
            {index === activeIndex && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 pb-4"
              >
                <p className="text-black dark:text-white text-sm italic font-medium">
                  &quot;{testimonial.content}&quot;
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
