import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/personal.jpg";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center 
                 bg-gradient-to-b from-gray-900 via-black to-gray-900 
                 overflow-hidden pt-20 sm:pt-24 md:pt-0 px-4 sm:px-6 text-white"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-primary/20 rounded-full blur-[100px] sm:blur-[150px] top-10 left-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] bg-accent/15 rounded-full blur-[80px] sm:blur-[120px] bottom-10 right-10 animate-ping"></div>
        <div className="absolute w-32 h-32 sm:w-48 sm:h-48 bg-primary-glow/10 rounded-full blur-[60px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-glow-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative group flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500 animate-glow-pulse"></div>
          <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-transparent group-hover:border-primary-glow animate-spin-slow"></div>
          <img
            src={heroImg}
            alt="Dipesh Mishra - Software Developer"
            className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-2 sm:border-4 border-foreground group-hover:scale-105 transition-all duration-500"
          />
        </motion.div>

        {/* Text Section */}
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text-primary">Dipesh Mishra</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-medium"
          >
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
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 sm:mt-6 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl"
          >
            I craft impactful, scalable, and elegant digital solutions. With
            expertise in Python, Flask and modern databases, I'm on a
            journey to build products that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="btn-hero text-sm sm:text-base lg:text-lg font-medium"
            >
              🚀 View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-glass text-sm sm:text-base lg:text-lg font-medium text-foreground hover:text-primary"
            >
              📩 Contact Me
            </button>
            <a
              href="/resume.pdf"
              download="Dipeshresume!.pdf"
              className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl shadow-xl hover:scale-105 hover:shadow-green-500/30 transition-all duration-300 text-sm sm:text-base lg:text-lg font-medium text-center"
            >
              📄 Download Resume
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-muted-foreground text-xs sm:text-sm flex flex-col items-center"
      >
        <span className="animate-bounce">↓ Scroll to Explore</span>
      </motion.div>
    </section>
  );
}
