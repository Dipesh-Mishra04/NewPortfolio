"use client";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

// ============ 3D Logo ============
function RotatingCube() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.6;
    meshRef.current.rotation.x += delta * 0.3;
  });
  return (
    <mesh ref={meshRef} scale={1.1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#ff4d6d"
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}

// ============ Navbar ============
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
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 dark:bg-black/30 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left Logo with 3D */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10">
            <Canvas camera={{ position: [2, 2, 3], fov: 40 }}>
              <ambientLight intensity={1.2} />
              <pointLight position={[3, 3, 3]} intensity={1} />
              <RotatingCube />
              <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            </Canvas>
          </div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
            onClick={handleLogoClick}
          >
            Dipesh's <span className="ml-1">Portfolio</span>
          </motion.h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 font-semibold text-gray-200 dark:text-gray-300 ml-70">
          {navItems.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="hover:text-pink-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => setMobileMenu(!mobileMenu)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-300 hover:text-pink-400 transition-colors"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden bg-gradient-to-br from-black/80 via-purple-900/70 to-pink-800/60 backdrop-blur-lg px-6 py-6 text-gray-200 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="block text-lg font-semibold hover:text-pink-400"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
