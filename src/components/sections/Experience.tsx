"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/effects/SectionHeading";
import { experience } from "@/lib/constants";
import { Briefcase, ChevronRight } from "lucide-react";

export function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in AI and machine learning"
        />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink transform md:-translate-x-1/2" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-dark-900 border-2 border-cyber-blue shadow-glow transform -translate-x-[7px] md:-translate-x-1/2">
                <div className="w-2 h-2 bg-cyber-blue rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>

              {/* Content */}
              <div
                className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                }`}
              >
                <motion.div
                  className="glass-card p-6 group hover:border-cyber-blue/30"
                  whileHover={{ y: -5 }}
                >
                  {/* Period */}
                  <span className="text-xs font-mono text-cyber-blue">
                    {exp.period}
                  </span>

                  {/* Role & Company */}
                  <div className="flex items-center gap-2 mt-2 mb-1">
                    <Briefcase size={16} className="text-cyber-purple" />
                    <h3 className="text-lg font-display font-bold text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{exp.company}</p>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className={`flex items-start gap-2 text-sm text-gray-300 ${
                          index % 2 === 0
                            ? "md:flex-row-reverse md:text-right"
                            : ""
                        }`}
                      >
                        <ChevronRight
                          size={14}
                          className="text-cyber-blue mt-0.5 flex-shrink-0"
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
