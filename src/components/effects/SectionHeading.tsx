"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`mb-16 md:mb-20 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-sm font-mono text-cyber-blue tracking-widest uppercase mb-4 block">
          {"// " + title}
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
      {/* Decorative line */}
      <motion.div
        className={`mt-6 h-[2px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
        initial={{ width: 0 }}
        animate={isInView ? { width: "120px" } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  );
}
