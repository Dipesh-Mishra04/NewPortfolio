"use client";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      icon: <FaGraduationCap className="text-pink-400 text-2xl" />,
      title: "BCA (Ongoing)",
      school: "Graphic Era Hill University, Haldwani",
      year: "2023 - 2026",
      score: "Current CGPA: 8.42",
    },
    {
      icon: <FaUniversity className="text-blue-400 text-2xl" />,
      title: "12th (CBSE)",
      school: "Jai Arihant International School, Haldwani",
      year: "2022 - 2023",
      score: "Percentage: 76.8%",
    },
    {
      icon: <FaSchool className="text-green-400 text-2xl" />,
      title: "10th (CBSE)",
      school: "Jai Arihant International School, Haldwani",
      year: "2020 - 2021",
      score: "Percentage: 93.6%",
    },
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        Education <span className="text-pink-500">Qualifications</span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-full max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-blue-500 to-green-500 rounded-full" />

        <div className="space-y-12 pl-12">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Icon */}
              <div className="absolute -left-10 flex items-center justify-center w-10 h-10 bg-black border-2 border-gray-700 rounded-full">
                {edu.icon}
              </div>

              {/* Content */}
              <div className="bg-black/70 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-pink-500 transition duration-300">
                <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                <p className="text-gray-300">{edu.school}</p>
                <p className="text-sm text-gray-400">{edu.year}</p>
                <p className="mt-2 text-pink-400 font-semibold">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
