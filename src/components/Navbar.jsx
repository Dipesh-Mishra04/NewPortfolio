<<<<<<< HEAD
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  // Simple scroll function that works on all devices
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenu(false);
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950 shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg shadow-md"></div>
          <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            Dipesh's Portfolio
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8 font-semibold text-gray-200">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="hover:text-sky-400 transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            </li>
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
      {mobileMenu && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-4 sm:px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block text-lg font-semibold text-gray-200 hover:text-sky-400 text-left w-full transition-colors duration-300 py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
=======
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  // Simple scroll function that works on all devices
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenu(false);
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950 shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg shadow-md"></div>
          <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            Dipesh's Portfolio
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8 font-semibold text-gray-200">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="hover:text-sky-400 transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            </li>
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
      {mobileMenu && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-4 sm:px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block text-lg font-semibold text-gray-200 hover:text-sky-400 text-left w-full transition-colors duration-300 py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
>>>>>>> 578a136f3297a8eb24aa9d4ff9920fc2d3505805
