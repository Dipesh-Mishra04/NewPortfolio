import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-12
                 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-[100px] top-20 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-accent/10 rounded-full blur-[80px] bottom-20 right-10 animate-ping"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-12 sm:mb-16 tracking-tight"
      >
        <span className="gradient-text">Contact Me</span>
      </motion.h2>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto rounded-3xl p-6 sm:p-8 lg:p-12
                   bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div className="flex flex-col items-start gap-6 sm:gap-8">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold gradient-text-primary mb-2"
            >
              Get In Touch
            </motion.h3>

            {[{
                icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
                text: "mishragdipesh@gmail.com",
                delay: 0.2,
              },
              {
                icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
                text: "+91 90278 37693",
                delay: 0.3,
              },
              {
                icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
                text: "Haldwani, Uttarakhand, India",
                delay: 0.4,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay }}
                viewport={{ once: true }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="p-2 sm:p-3 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl shadow-lg">
                  {item.icon}
                </div>
                <p className="text-sm sm:text-base lg:text-lg">{item.text}</p>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-5 pt-4 justify-center lg:justify-start flex-wrap">
              {[{
                  icon: FaGithub,
                  link: "https://github.com/Dipesh-Mishra04",
                  color: "hover:text-foreground",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/dipesh-mishra-6299b0275/",
                  color: "hover:text-blue-400",
                  label: "LinkedIn",
                },
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/mi_sh_ra_ji_77?igsh=NWFua3lxNmJvaTQ2",
                  color: "hover:text-pink-400",
                  label: "Instagram",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={item.label}
                  className={`p-2 sm:p-3 rounded-full transition-all duration-300 ${item.color} text-muted-foreground`}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Send a Message
            </h3>

            <form
              action="https://formspree.io/f/xrblybqj"
              method="POST"
              className="space-y-4 sm:space-y-6"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 text-white 
                           placeholder-gray-400 border border-gray-700 
                           focus:ring-2 focus:ring-primary focus:border-primary 
                           outline-none transition-all duration-300 text-sm sm:text-base"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 text-white 
                           placeholder-gray-400 border border-gray-700 
                           focus:ring-2 focus:ring-primary focus:border-primary 
                           outline-none transition-all duration-300 text-sm sm:text-base"
              />

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 text-white 
                           placeholder-gray-400 border border-gray-700 
                           focus:ring-2 focus:ring-primary focus:border-primary 
                           outline-none transition-all duration-300 text-sm sm:text-base
                           resize-none"
              ></motion.textarea>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 sm:gap-3
                           bg-gradient-to-r from-pink-500 to-purple-600 
                           text-white font-semibold py-3 sm:py-4 rounded-xl shadow-xl
                           hover:shadow-[0_0_30px_rgba(255,0,128,0.5)]
                           transition-all duration-300 text-sm sm:text-base lg:text-lg"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
