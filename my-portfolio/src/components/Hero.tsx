// src/components/Hero.tsx
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="text-center px-4">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-indigo-400 text-lg mb-4"
        >
          👋 Halo, gw
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl text-gray-400 mb-8"
        >
          {personalInfo.role}
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-gray-300 max-w-xl mx-auto mb-8"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 mb-12"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={28} />
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            Lihat Project Gw
            <ChevronDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
