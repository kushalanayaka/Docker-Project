"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="text-center z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold leading-tight"
        >
          Art Beyond
          <br />
          Imagination
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-white/70 max-w-2xl mx-auto text-lg"
        >
          A personal digital gallery where emotions,
          storytelling, and artwork come together.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Explore Gallery
        </motion.button>
      </div>
    </section>
  );
}