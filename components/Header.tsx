// components/Header.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 md:px-16 py-6 fixed w-full top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
      <Link href="/" className="text-xl font-bold">
        TuNombre.dev
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link href="/about">Sobre mí</Link>
        <Link href="/projects">Proyectos</Link>
        <Link href="/contact">Contacto</Link>
      </nav>
      {/* Mobile menu */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <span className="text-2xl">☰</span>
      </button>
      {isOpen && (
        <motion.div
          className="absolute top-16 left-0 right-0 bg-black p-4 flex flex-col gap-4 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="/about">Sobre mí</Link>
          <Link href="/projects">Proyectos</Link>
          <Link href="/contact">Contacto</Link>
        </motion.div>
      )}
    </header>
  );
}
