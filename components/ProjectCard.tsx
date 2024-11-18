"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  imageSrc: StaticImageData;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  imageSrc,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={githubLink} target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
          <div className="relative h-48 sm:h-56 md:h-64">
            <Image
              src={imageSrc}
              alt={`${title} project thumbnail`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm mb-2 line-clamp-2 text-white font-bold">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-white/20 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
