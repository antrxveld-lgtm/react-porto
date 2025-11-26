// src/components/Skills.tsx
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  const categories = [
    { title: "Frontend", items: skills.frontend, color: "from-blue-500 to-cyan-500" },
    { title: "Backend", items: skills.backend, color: "from-green-500 to-emerald-500" },
    { title: "Database", items: skills.database, color: "from-orange-500 to-yellow-500" },
    { title: "Tools", items: skills.tools, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li key={skill} className="text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
