// components/ContactSection.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "sebasclement.sc@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* SVG decorativo (transición suave desde sección anterior) */}
      <div className="relative -mb-1">
        <svg className="w-full h-16 rotate-180" viewBox="0 0 1440 320">
          <path
            fill="#2c5364"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,101.3C672,96,768,128,864,160C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <section
        id="contact"
        className="snap-start min-h-screen py-36 px-4 bg-gradient-to-b from-[#232526] to-[#414345] text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contacto
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            ¿Tenés una idea en mente o querés trabajar conmigo? Estoy abierto a
            nuevas oportunidades y colaboraciones.
          </motion.p>

          <motion.div
            className="flex justify-center items-center gap-3 text-lg mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <FiMail className="text-teal-400 text-2xl" />
            <span className="text-white">{email}</span>
            <button
              onClick={handleCopy}
              className="text-teal-400 hover:text-teal-300 transition"
              title="Copiar correo"
            >
              {copied ? <FiCheck /> : <FiCopy />}
            </button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-8 text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="https://github.com/sebasgclement"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/sebastián-guido-clement-02678a200"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FiLinkedin />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
