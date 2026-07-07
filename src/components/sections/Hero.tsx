"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, FileDown, MessageCircle, Sparkles } from "lucide-react";
import { specializations } from "@/lib/constants";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Aurora gradient animation via canvas
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      container.style.setProperty("--mouse-x", `${x}%`);
      container.style.setProperty("--mouse-y", `${y}%`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Aurora background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-cyber-blue/[0.07] blur-[100px] animate-aurora" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-cyber-purple/[0.07] blur-[100px] animate-aurora [animation-delay:2s]" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-cyber-pink/[0.05] blur-[80px] animate-aurora [animation-delay:4s]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating code snippets */}
      <motion.div
        className="absolute top-[15%] left-[5%] glass-card p-3 text-xs font-mono text-cyber-blue/60 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-cyber-purple">const</span> agent ={" "}
        <span className="text-cyber-green">new</span> AI();
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[8%] glass-card p-3 text-xs font-mono text-cyber-blue/60 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <span className="text-cyber-pink">await</span> bedrock.
        <span className="text-cyber-blue">invoke</span>(model);
      </motion.div>

      <motion.div
        className="absolute top-[60%] left-[8%] glass-card p-3 text-xs font-mono text-cyber-blue/60 hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        vector_db.<span className="text-cyber-cyan">search</span>(query)
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gray-300">Available for new opportunities</span>
          <Sparkles size={14} className="text-cyber-blue" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">Building </span>
          <span className="gradient-text">Intelligent AI</span>
          <br />
          <span className="text-white">Systems for the </span>
          <span className="gradient-text">Future</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          className="text-lg md:text-xl text-gray-400 mb-8 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-cyber-blue">~$</span>{" "}
          <TypeAnimation
            sequence={[
              "Specializing in Agentic AI",
              2000,
              "Building RAG Systems at Scale",
              2000,
              "Architecting on AWS Bedrock",
              2000,
              "Multi-Agent Orchestration with LangGraph",
              2000,
              "Human-in-the-Loop AI Workflows",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-gray-300"
          />
        </motion.div>

        {/* Specialization tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {specializations.map((spec, i) => (
            <motion.span
              key={spec}
              className="px-3 py-1.5 text-xs font-mono rounded-full glass-card text-gray-400 hover:text-cyber-blue hover:border-cyber-blue/30 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {spec}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a href="#projects" className="btn-primary">
            <Sparkles size={18} />
            View Projects
          </a>
          <a href="/resume.pdf" download="Somasree_V_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <FileDown size={18} />
            Download Resume
          </a>
          <a href="#contact" className="btn-outline">
            <MessageCircle size={18} />
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown size={16} />
        </div>
      </motion.div>
    </section>
  );
}
