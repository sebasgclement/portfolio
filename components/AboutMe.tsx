// components/AboutMe.tsx
"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="snap-start min-h-screen py-40 px-4 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre mí
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Soy un desarrollador Full Stack con pasión por construir aplicaciones
          web limpias, accesibles y bien diseñadas. Disfruto resolver problemas
          complejos y trabajar en interfaces modernas con tecnologías actuales.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-200 justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            "JavaScript",
            "Python",
            "PHP",
            "HTML / CSS",
            "Tailwind CSS",
            "Sass / SCSS",
            "Bootstrap",
            "Material UI",
            "TypeScript",
            "React / Next.js",
            "Node.js",
            "Symfony",
            "Django",
            "Express.js",
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "GraphQL",
            "REST APIs",
            "Figma",
            "Tailwind CSS",
            "Framer Motion",
            "Git / GitHub",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="bg-white/10 px-4 py-2 rounded-full shadow-sm hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
