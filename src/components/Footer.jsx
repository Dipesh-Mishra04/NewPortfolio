import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative Glows */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -top-10 left-10 w-60 h-60 bg-purple-600/30 rounded-full blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -bottom-10 right-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 z-10">
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold tracking-wide">Dipesh Mishra</h2>
          <p className="mt-2 text-gray-400">
            Designing code & crafting experiences ✨
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-col space-y-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <a href="#about" className="text-gray-400 hover:text-white transition">
            About
          </a>
          <a href="#projects" className="text-gray-400 hover:text-white transition">
            Projects
          </a>
          <a href="#skills" className="text-gray-400 hover:text-white transition">
            Skills
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white transition">
            Contact
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="flex flex-col space-y-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Dipesh-Mishra04"
              className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/dipesh-mishra-6299b0275/"
              className="p-3 rounded-full bg-white/10 hover:bg-blue-500 transition"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/mi_sh_ra_ji_77?igsh=NWFua3lxNmJvaTQ2"
              className="p-3 rounded-full bg-white/10 hover:bg-pink-500 transition"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="border-t border-gray-700 mt-10 py-4 text-center text-gray-500 text-sm relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        © 2025 Dipesh Mishra. All Rights Reserved.
      </motion.div>

      {/* Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full shadow-lg transition z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>
    </footer>
  );
}
