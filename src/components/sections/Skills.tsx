"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/effects/SectionHeading";
import { skills } from "@/lib/constants";

const categories = Object.keys(skills) as Array<keyof typeof skills>;

const categoryColors: Record<string, string> = {
  "AI & Generative AI": "from-blue-500 to-purple-500",
  "Vector Search": "from-cyan-500 to-blue-500",
  "Cloud & Infrastructure": "from-green-500 to-teal-500",
  "Backend Development": "from-orange-500 to-red-500",
  "Frontend Development": "from-purple-500 to-pink-500",
  "Tools & Platforms": "from-yellow-500 to-orange-500",
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("AI & Generative AI");
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I use to build intelligent systems"
        />

        <div ref={ref}>
          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-cyber-blue to-cyber-purple text-white shadow-glow"
                    : "glass-card text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {skills[activeCategory as keyof typeof skills].map(
                (skill, index) => (
                  <motion.div
                    key={skill}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="glass-card p-4 text-center h-full flex items-center justify-center min-h-[80px] group-hover:border-cyber-blue/40 transition-all duration-300">
                      {/* Glow on hover */}
                      <div
                        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                          categoryColors[activeCategory] || "from-blue-500 to-purple-500"
                        } blur-xl -z-10`}
                        style={{ opacity: 0 }}
                      />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </AnimatePresence>

          {/* Skill cloud - all skills floating */}
          <motion.div
            className="mt-16 relative h-[200px] overflow-hidden rounded-2xl glass-card"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="absolute inset-0 flex items-center">
              <motion.div
                className="flex gap-4 whitespace-nowrap"
                animate={{ x: [0, -2000] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {Object.values(skills)
                  .flat()
                  .concat(Object.values(skills).flat())
                  .map((skill, i) => (
                    <span
                      key={`${skill}-${i}`}
                      className="px-4 py-2 text-sm glass-card text-gray-400 hover:text-cyber-blue transition-colors inline-block"
                    >
                      {skill}
                    </span>
                  ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
