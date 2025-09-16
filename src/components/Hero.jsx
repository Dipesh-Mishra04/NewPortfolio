import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/personal.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center 
                 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 overflow-hidden 
                 pt-24 md:pt-0"
    >
      {/* Gradient Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] top-10 left-10 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[120px] bottom-10 right-10 animate-ping"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center text-center md:text-left gap-10 md:gap-16 px-6 md:px-20"
      >
        {/* Profile Image with Glow Ring */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-purple-400 animate-spin-slow"></div>
          <img
            src={heroImg}
            alt="Profile"
            className="relative w-40 h-40 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white group-hover:scale-105 transition-all duration-500"
          />
        </motion.div>

        {/* Text Section */}
        <div className="max-w-3xl md:ml-8">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Dipesh Mishra
            </span>
          </h1>

          <h2 className="mt-6 text-xl md:text-3xl text-gray-300 font-medium">
            <TypeAnimation
              sequence={[
                "💻 Aspiring Software Developer",
                2000,
                "⚡ DSA Enthusiast",
                2000,
                "🌐 Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
            I craft impactful, scalable, and elegant digital solutions. With
            expertise in Python, Flask and modern databases, I’m on a
            journey to build products that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-5 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl shadow-xl hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300 text-base md:text-lg font-medium"
            >
              🚀 View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-gray-500 text-white rounded-2xl hover:bg-white/20 transition-all duration-300 text-base md:text-lg font-medium"
            >
              📩 Contact Me
            </a>
            <a
              href="/resume.pdf"
              download="Dipesh_Mishra_Resume.pdf"
              className="px-5 py-3 md:px-6 md:py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl shadow-xl hover:scale-105 hover:shadow-green-500/30 transition-all duration-300 text-base md:text-lg font-medium"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 text-gray-300 text-sm flex flex-col items-center"
      >
        <span className="animate-bounce">↓ Scroll to Explore</span>
      </motion.div>
    </section>
  );
}
