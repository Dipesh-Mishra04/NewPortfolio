import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-extrabold text-center mb-14 tracking-tight"
      >
        <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Contact Me
        </span>
      </motion.h2>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(200,0,255,0.15)] border border-white/20 p-10"
      >
        {/* 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info - Left Side */}
          <div className="flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-5"
            >
              <div className="p-4 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-2xl shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-lg">mishragdipesh@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-5"
            >
              <div className="p-4 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-2xl shadow-lg">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-lg">+91 90278 37693</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-5"
            >
              <div className="p-4 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-2xl shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-lg">Haldwani, Uttarakhand, India</p>
            </motion.div>

            {/* Socials under Contact Info */}
            <div className="flex gap-6 pt-4">
              {[
                {
                  icon: FaGithub,
                  link: "https://github.com/Dipesh-Mishra04",
                  color: "hover:text-gray-200",
                },
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/dipesh-mishra-6299b0275/",
                  color: "hover:text-blue-400",
                },
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/mi_sh_ra_ji_77?igsh=NWFua3lxNmJvaTQ2",
                  color: "hover:text-pink-400",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: 6 }}
                  className={`p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 transition ${item.color}`}
                >
                  <item.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form - Right Side */}
          <form
            action="https://formspree.io/f/xrblybqj"
            method="POST"
            className="space-y-6"
          >
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#ec4899" }}
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-pink-400 outline-none transition"
            />
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#ec4899" }}
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-pink-400 outline-none transition"
            />
            <motion.textarea
              whileFocus={{ scale: 1.02, borderColor: "#ec4899" }}
              rows="4"
              name="message"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-pink-400 outline-none transition"
            ></motion.textarea>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(236,72,153,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-lg font-semibold py-4 rounded-xl shadow-xl transition-all"
            >
              <Send className="w-5 h-5" /> Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
