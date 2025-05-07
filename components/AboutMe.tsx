"use client";
import type { ReactElement } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript, SiPython, SiPhp, SiHtml5, SiNextdotjs, SiSymfony, SiDjango, SiExpress, SiNodedotjs,
  SiTailwindcss, SiSass, SiBootstrap, SiMui, SiMongodb, SiMysql, SiPostgresql, SiGraphql,
  SiFigma, SiFramer, SiGithub,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import AboutDecorations from "./AboutDecorations";

export default function AboutMe() {
  const languages: [string, ReactElement][] = [
    ["JavaScript", <SiJavascript />],
    ["Python", <SiPython />],
    ["PHP", <SiPhp />],
    ["HTML / CSS", <SiHtml5 />],
  ];

  const frameworks: [string, ReactElement][] = [
    ["React / Next.js", <SiNextdotjs />],
    ["Symfony", <SiSymfony />],
    ["Django", <SiDjango />],
    ["Express.js", <SiExpress />],
    ["Node.js", <SiNodedotjs />],
    ["Kivy", <FaCode />],
  ];

  const tools: [string, ReactElement][] = [
    ["Tailwind CSS", <SiTailwindcss />],
    ["Sass / SCSS", <SiSass />],
    ["Bootstrap", <SiBootstrap />],
    ["Material UI", <SiMui />],
    ["MongoDB", <SiMongodb />],
    ["MySQL", <SiMysql />],
    ["PostgreSQL", <SiPostgresql />],
    ["GraphQL", <SiGraphql />],
    ["Figma", <SiFigma />],
    ["Framer Motion", <SiFramer />],
    ["Git / GitHub", <SiGithub />],
  ];

  const renderCategory = (title: string, items: [string, ReactElement][]) => (
    <motion.div
      className="backdrop-blur-sm bg-white/5 p-4 rounded-xl shadow-md border border-white/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.05 }
        }
      }}
    >
      <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2 tracking-wide">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {items.map(([label, icon]) => (
          <motion.span
            key={label}
            className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-sm hover:scale-105 transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-lg">{icon}</span> {label}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id="about"
      className="snap-start relative min-h-screen py-16 px-4 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white overflow-hidden"
    >
      {/* Iluminación central animada */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-400 opacity-10 rounded-full blur-3xl z-0 pointer-events-none animate-glow" />

      {/* SVG decorativo */}
      <AboutDecorations />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
        >
          Sobre mí
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Soy un desarrollador Full Stack con pasión por construir aplicaciones
          web limpias, accesibles y bien diseñadas. Disfruto resolver problemas
          complejos y trabajar en interfaces modernas con tecnologías actuales.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3 text-sm text-gray-200">
          {renderCategory("Lenguajes", languages)}
          {renderCategory("Frameworks", frameworks)}
          {renderCategory("Herramientas y más", tools)}
        </div>
      </div>
    </section>
  );
}
