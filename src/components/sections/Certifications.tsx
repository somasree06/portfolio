"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/effects/SectionHeading";
import { certifications } from "@/lib/constants";
import { Award, Shield } from "lucide-react";

const iconColors: Record<string, string> = {
  aws: "text-[#FF9900]",
  azure: "text-[#0078D4]",
  gcp: "text-[#4285F4]",
};

export function Certifications() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications validating cloud and AI expertise"
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="glass-card p-6 h-full text-center group-hover:border-cyber-blue/30 transition-all duration-500"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/[0.02] group-hover:shadow-glow transition-all duration-500`}
                >
                  <Shield
                    className={`w-8 h-8 ${
                      iconColors[cert.icon] || "text-cyber-blue"
                    }`}
                  />
                </div>

                {/* Cert name */}
                <h3 className="text-sm font-semibold text-white mb-2 leading-tight">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-xs text-gray-400 mb-2">{cert.issuer}</p>

                {/* Year */}
                <div className="flex items-center justify-center gap-1">
                  <Award size={12} className="text-cyber-blue" />
                  <span className="text-xs font-mono text-cyber-blue">
                    {cert.year}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
