// components/ProjectCard.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="bg-white/5 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
      whileHover={{ scale: 1.03 }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={450}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-left">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm mt-2">{project.description}</p>
        <Link
          href={project.link}
          target="_blank"
          className="text-teal-400 mt-4 inline-block hover:underline"
        >
          Ver proyecto →
        </Link>
      </div>
    </motion.div>
  );
}
