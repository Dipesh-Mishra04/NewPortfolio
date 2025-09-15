import { motion } from "framer-motion";
import { Award, Medal, Star, Trophy } from "lucide-react";

const achievements = [
  {
    title: "Webathon 3.0",
    description:
      "Secured 3rd position in a 48-hour hackathon among 100+ teams by building an innovative frontend project.",
    icon: <Trophy className="w-10 h-10 text-yellow-400" />,
    year: "2025",
  },
  {
    title: "Java Programming Certification",
    description:
      "Achieved strong Java fundamentals with OOP concepts, problem-solving, and coding excellence.",
    icon: <Medal className="w-10 h-10 text-purple-400" />,
    year: "2024",
  },
  {
    title: "AI Foundations Course",
    description:
      "Successfully completed AI foundations course covering agents, machine learning basics, and neural networks.",
    icon: <Star className="w-10 h-10 text-cyan-400" />,
    year: "2025",
  },
];

export default function CertificatesAchievements() {
  return (
    <section
      id="achievements"
      className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Background aesthetics */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl"
      />
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 z-10 relative"
      >
        🏅 <span className="text-pink-400">Certificates</span> & Achievements
      </motion.h2>

      {/* Achievements Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {achievements.map((achieve, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center text-center gap-4 bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,0,128,0.5)] transition-all duration-500"
          >
            <div className="p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition">
              {achieve.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              {achieve.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {achieve.description}
            </p>
            <span className="text-cyan-400 font-semibold">{achieve.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
