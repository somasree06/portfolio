"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/effects/SectionHeading";
import { GlowCard } from "@/components/effects/GlowCard";
import { projects } from "@/lib/constants";
import {
  X,
  ChevronRight,
  Layers,
} from "lucide-react";

const categories = ["All", "Agentic AI", "RAG", "Multimodal AI", "Full Stack"];

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  challenges: string[];
  solution: string;
  outcome: string;
  featured: boolean;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isInView } = useInView();

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Featured AI systems I've architected and built"
        />

        <div ref={ref}>
          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-cyber-blue to-cyber-purple text-white shadow-glow"
                    : "glass-card text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <GlowCard className="h-full">
                    <div
                      className="glass-card p-6 h-full flex flex-col cursor-pointer group"
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* Project thumbnail placeholder */}
                      <div className="relative h-48 rounded-lg bg-gradient-to-br from-dark-700 to-dark-800 mb-5 overflow-hidden flex items-center justify-center">
                        <Layers className="w-12 h-12 text-cyber-blue/30 group-hover:text-cyber-blue/60 transition-colors duration-500" />
                        {/* Animated overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {project.featured && (
                          <span className="absolute top-3 right-3 px-2 py-1 text-xs font-mono bg-cyber-blue/20 border border-cyber-blue/30 rounded text-cyber-blue">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Category */}
                      <span className="text-xs font-mono text-cyber-purple mb-2">
                        {project.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-400 mb-4 flex-grow line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-500">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center pt-4 border-t border-white/5">
                        <button className="flex items-center gap-1 text-sm text-cyber-blue hover:text-white transition-colors">
                          View Details
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-dark-900/90 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-2xl p-8"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="mb-6">
                <span className="text-xs font-mono text-cyber-purple">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-display font-bold text-white mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mt-3">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-mono text-cyber-blue mb-3">
                  {"// Technologies"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg glass-card text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="mb-6">
                <h4 className="text-sm font-mono text-cyber-blue mb-3">
                  {"// Challenges"}
                </h4>
                <ul className="space-y-2">
                  {selectedProject.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <span className="text-cyber-pink mt-1">▹</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-sm font-mono text-cyber-blue mb-3">
                  {"// Solution"}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>

              {/* Outcome */}
              <div>
                <h4 className="text-sm font-mono text-cyber-blue mb-3">
                  {"// Outcome"}
                </h4>
                <p className="text-green-400 font-semibold">
                  {selectedProject.outcome}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
