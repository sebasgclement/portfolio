// components/ProjectsSection.tsx
"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Personal",
    description:
      "Mi sitio web personal donde muestro quién soy y qué hago como desarrollador.",
    image: "/projects/portfolio.jpg",
    link: "https://tusitio.dev",
  },
  {
    title: "Panel de Administración",
    description:
      "Dashboard hecho con Symfony + Vue, con control de usuarios y visualizaciones.",
    image: "/projects/dashboard.jpg",
    link: "#",
  },
  {
    title: "E-commerce Full Stack",
    description:
      "Plataforma de ventas hecha con Next.js y Stripe, integrada con base de datos.",
    image: "/projects/ecommerce.jpg",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="snap-start min-h-screen py-36 px-4 bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * idx, duration: 0.6 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
