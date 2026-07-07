"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/effects/SectionHeading";
import { Brain, Rocket, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI Architecture",
    description:
      "Designing enterprise-grade AI systems with RAG pipelines, multi-agent orchestration, and Human-in-the-Loop workflows.",
  },
  {
    icon: Rocket,
    title: "Full-Stack AI",
    description:
      "End-to-end implementation from LLM integration to production deployment on AWS and Kubernetes.",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description:
      "Translating complex business requirements into robust, explainable, and high-performance AI solutions.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Building with cutting-edge tools — LangGraph, MCP, Pydantic AI, and agentic patterns for real-world impact.",
  },
];

const journey = [
  {
    year: "2022",
    title: "Started in Software Engineering",
    description: "Joined AVA Software as an intern, building full-stack web applications",
  },
  {
    year: "2023",
    title: "Full-Time Engineer + B.E. Degree",
    description: "Went full-time, started implementing RAG-based AI features with AWS",
  },
  {
    year: "2024",
    title: "AI Engineer",
    description: "Built ETL automation, insurance chatbot, and enterprise AI platforms",
  },
  {
    year: "2025",
    title: "AI Technical Lead",
    description: "Leading Agentic AI and multimodal AI systems at ZEB",
  },
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About"
          subtitle="AI Technical Lead passionate about building intelligent systems that transform businesses"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio + Cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I&apos;m <span className="text-cyber-blue font-semibold">Somasree V</span>,
                an AI Technical Lead with 3.9+ years of experience designing and deploying
                enterprise-grade AI and GenAI systems. I specialize in Agentic AI, RAG
                architectures, and multi-agent orchestration using LangChain and LangGraph.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My focus is building production-ready AI platforms with Human-in-the-Loop
                workflows that ensure governance, reliability, and scalability. From multimodal
                AI to metadata-driven ETL automation and knowledge retrieval systems on AWS and
                Kubernetes — I translate complex business requirements into robust, explainable,
                and high-performance AI solutions.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass-card p-5 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  <item.icon className="w-8 h-8 text-cyber-blue mb-3 group-hover:text-cyber-purple transition-colors" />
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-display font-bold text-white mb-8">
              My AI Journey
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink" />

              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative pl-12 pb-10 last:pb-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[11px] top-1 w-[18px] h-[18px] rounded-full bg-dark-900 border-2 border-cyber-blue shadow-glow" />

                  <span className="text-xs font-mono text-cyber-blue">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-semibold text-white mt-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
