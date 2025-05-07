// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TechDecorations from "./TechDecorations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden px-6"
    >
      {/* Logo ficticio arriba a la izquierda */}
      <div className="absolute top-6 left-6 w-32 h-auto padding-10 mb-50">
        <Image
          src="/images/logo.png"
          alt="Logo de Sebas"
          width={128}
          height={40}
          className="object-contain"
          priority
        />
      </div>

      {/* Decoraciones tech */}
      <div className="absolute top-20 left-1/3 w-16 h-16 border-2 border-teal-400 rotate-12 opacity-20 hidden lg:block" />
      <div className="absolute bottom-16 right-1/4 w-10 h-10 border border-white rounded-full opacity-10 hidden lg:block" />
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-white rounded-sm opacity-10 hidden lg:block" />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda: texto */}
        <div className="text-left">
          {/* Título y descripción con animaciones suaves */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
          >
            Full Stack <span className="text-teal-400">Developer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg"
          >
            Me gusta construir productos web sólidos y escalables con
            experiencias de usuario modernas y eficientes.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.7,
                },
              },
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {[
              { href: "#about", label: "Sobre mí", teal: true },
              { href: "#projects", label: "Proyectos" },
              { href: "#contact", label: "Contacto" },
            ].map(({ href, label, teal }) => (
              <motion.div
                key={href}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={href}
                  className={`border ${
                    teal
                      ? "border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black"
                      : "border-white text-white hover:bg-white hover:text-black"
                  } px-6 py-2 rounded-full transition`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Imagen tech con decorado animado estilo Olaolu */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mx-auto w-[280px] h-[280px] rounded-2xl shadow-xl overflow-hidden"
        >
          <Image
            src="/images/perfil.png"
            alt="Sebas Clement"
            fill
            className="object-cover rounded-2xl"
          />

          {/* Decorado animado en esquinas */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
            {/* Esquina superior izquierda */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-0 left-0 h-[2px] bg-white/30"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 40 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute top-0 left-0 w-[2px] bg-white/30"
            />

            {/* Esquina inferior derecha */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-0 right-0 h-[2px] bg-white/30"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 40 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="absolute bottom-0 right-0 w-[2px] bg-white/30"
            />
          </div>
        </motion.div>
      </div>
      {/* Decoraciones de tecnología */}
      <TechDecorations />
    </section>
  );
}
