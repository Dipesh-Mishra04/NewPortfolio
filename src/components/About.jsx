import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaHtml5, FaFlask, FaCode, FaLayerGroup } from "react-icons/fa";

const cards = [
  { title: "Java Programmer", desc: "Building strong foundations with OOP and Java-based applications.", icon: FaJava, color: "text-red-500" },
  { title: "Python Developer", desc: "Crafting scripts, automation, and backend services with Python.", icon: FaPython, color: "text-yellow-400" },
  { title: "Frontend Developer", desc: "Designing responsive, aesthetic, and user-friendly interfaces.", icon: FaHtml5, color: "text-orange-500" },
  { title: "Flask Developer", desc: "Creating lightweight backend applications and APIs with Flask.", icon: FaFlask, color: "text-gray-300" },
  { title: "Aspiring Software Developer", desc: "Exploring software engineering concepts and best practices.", icon: FaCode, color: "text-green-400" },
  { title: "Full Stack Developer", desc: "Bridging frontend and backend with complete web solutions.", icon: FaLayerGroup, color: "text-blue-400" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-6 py-20 overflow-hidden">
      {/* Soft background glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl"
      />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl text-center"
      >
        I am Dipesh Mishra, passionate about coding, problem-solving, and creating impactful digital experiences.
      </motion.p>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.06, y: -6 }}
            className="relative rounded-2xl p-8 shadow-xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-lg flex flex-col justify-between h-72 hover:shadow-2xl hover:border-slate-500/60 transition-all group"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <card.icon className={`text-5xl ${card.color} group-hover:scale-110 transition-transform`} />
              <h3 className="text-2xl font-semibold text-gray-100">{card.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
