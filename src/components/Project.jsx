import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "QuizzCrakerz",
    description:
      "A modern quiz web app with admin panel, user login/signup, subject-wise quizzes, result display & dynamic database integration.",
    techStack: "Flask | MySQL | HTML | CSS | JavaScript",
    image: "/projects/quizzcrakerz.png",
    link: "https://github.com/Dipesh-Mishra04/BCA-_Quizcrakerz",
  },
  {
    title: "Student Management System",
    description:
      "Full CRUD system where admins can manage students, marks, subjects, and user roles with a responsive UI built on Flask + SQL.",
    techStack: "Python | Flask | MySQL | Bootstrap",
    image: "/projects/studentmgmt.png",
    link: "https://github.com/Dipesh-Mishra04/Student-Management-System",
  },
  {
    title: "Webathon 3.0",
    description:
      "Frontend layout design for Nirvana 2.0 fest provided by the tech club. Implemented using React, Tailwind CSS, and Three.js elements.",
    techStack: "React | HTML | CSS | JavaScript | Tailwind | Three.js",
    image: "/projects/webathon3.png",
    link: "https://github.com/Dipesh-Mishra04/TechGreeks",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 relative py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 z-10 relative"
      >
        🚀 My <span className="text-pink-500">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16 sm:gap-20 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Project Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,0,128,0.3)] hover:shadow-[0_0_50px_rgba(255,0,128,0.6)] border border-gray-800"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-contain rounded-2xl mx-auto"
              />
            </motion.div>

            {/* Project Content */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:w-1/2 w-full text-center md:text-left px-2 mt-4 md:mt-0"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
              <p className="text-xs sm:text-sm text-cyan-400 font-semibold mb-4 tracking-wide">
                {project.techStack}
              </p>

              {/* Button */}
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium shadow-md hover:shadow-[0_0_25px_rgba(255,0,128,0.5)] transition-all duration-300 text-sm sm:text-base"
              >
                <ExternalLink size={18} /> View Code
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
