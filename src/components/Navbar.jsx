"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "My Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg border-b border-slate-800
                    bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Left Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 
                          bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg shadow-md"></div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
            onClick={handleLogoClick}
          >
            <span className="hidden sm:inline">Dipesh's Portfolio</span>
            <span className="sm:hidden">Dipesh's Portfolio</span>
          </motion.h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8 font-semibold text-gray-200">
          {navItems.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="hover:text-sky-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-gray-200 hover:text-sky-400 transition-colors p-2"
          aria-label="Toggle mobile menu"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 
                       border-t border-slate-800 px-4 sm:px-6 py-6 space-y-4 shadow-md"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={(e) => handleNavClick(e, item.id)}
                className="block text-lg font-semibold text-gray-200 hover:text-sky-400 text-left w-full transition-colors duration-300"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
