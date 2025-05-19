"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  images: string[];
  link: string;
  techs: { label: string; icon: React.ReactNode }[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-teal-500/30 transition transform hover:-translate-y-1"
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.images[currentImage]}
          alt={`${project.title} - ${currentImage + 1}`}
          fill
          className="object-cover transition-opacity duration-700"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((tech, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs text-white bg-white/10 px-2 py-1 rounded-full"
            >
              <span className="text-teal-400">{tech.icon}</span>
              {tech.label}
            </span>
          ))}
        </div>

        <Link
          href={project.link}
          target="_blank"
          className="text-teal-400 hover:underline font-semibold text-sm"
        >
          Ver proyecto →
        </Link>
      </div>
    </motion.div>
  );
}
