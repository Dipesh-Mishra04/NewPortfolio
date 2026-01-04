import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaAws,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiC, SiTailwindcss, SiFlask, SiMongodb, SiMysql } from "react-icons/si";

const icons = [
  <SiC className="text-sky-400 text-4xl sm:text-5xl md:text-6xl" />,
  <FaJava className="text-red-500 text-4xl sm:text-5xl md:text-6xl" />,
  <FaPython className="text-yellow-400 text-4xl sm:text-5xl md:text-6xl" />,
  <FaHtml5 className="text-orange-500 text-4xl sm:text-5xl md:text-6xl" />,
  <FaCss3Alt className="text-blue-500 text-4xl sm:text-5xl md:text-6xl" />,
  <FaJsSquare className="text-yellow-300 text-4xl sm:text-5xl md:text-6xl" />,
  <FaReact className="text-sky-400 text-4xl sm:text-5xl md:text-6xl" />,
  <SiTailwindcss className="text-teal-400 text-4xl sm:text-5xl md:text-6xl" />,
  <FaBootstrap className="text-purple-600 text-4xl sm:text-5xl md:text-6xl" />,
  <SiFlask className="text-gray-300 text-4xl sm:text-5xl md:text-6xl" />,
  <SiMongodb className="text-green-500 text-4xl sm:text-5xl md:text-6xl" />,
  <SiMysql className="text-blue-600 text-4xl sm:text-5xl md:text-6xl" />,
  <FaAws className="text-orange-400 text-4xl sm:text-5xl md:text-6xl" />,
  <FaGitAlt className="text-red-500 text-4xl sm:text-5xl md:text-6xl" />,
  <FaGithub className="text-white text-4xl sm:text-5xl md:text-6xl" />,
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-4 sm:px-6 py-16 sm:py-20 overflow-hidden"
    >
      {/* Background aesthetics */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 sm:w-80 h-56 sm:h-80 bg-indigo-500/30 rounded-full blur-3xl"
      />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        ⚡ Skills & Technologies
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl text-center"
      >
        My technical stack includes programming languages, frameworks, tools, and cloud technologies that help me craft modern solutions.
      </motion.p>

      <div className="grid gap-4 xs:gap-6 sm:gap-8 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 w-full max-w-5xl">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ scale: 1.15, rotate: 10 }}
            className="flex justify-center items-center p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-lg shadow-xl border border-slate-700/50 hover:shadow-2xl hover:border-slate-500/60 transition-all"
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
