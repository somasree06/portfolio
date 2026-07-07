"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/effects/SectionHeading";
import { architectures } from "@/lib/constants";

const archColors = [
  { primary: "#00d4ff", secondary: "#7c3aed" },
  { primary: "#a855f7", secondary: "#ec4899" },
  { primary: "#10b981", secondary: "#06b6d4" },
];

export function Architecture() {
  const [activeArch, setActiveArch] = useState(0);
  const { ref, isInView } = useInView();

  const currentColors = archColors[activeArch] || archColors[0];
  const arch = architectures[activeArch];

  // Normalize node positions to a 0-1000 x 0-500 viewbox
  const normalizedNodes = useMemo(() => {
    const nodes = arch.nodes;
    const maxX = Math.max(...nodes.map((n) => n.x));
    const maxY = Math.max(...nodes.map((n) => n.y));
    return nodes.map((node) => ({
      ...node,
      nx: (node.x / maxX) * 800 + 100, // 100-900 range
      ny: (node.y / maxY) * 320 + 90,  // 90-410 range
    }));
  }, [arch]);

  // Get connections
  const connections = useMemo(() => {
    const conns = (arch as unknown as { connections?: string[][] }).connections;
    if (!conns) {
      return arch.nodes.slice(0, -1).map((_, i) => [i, i + 1]);
    }
    return conns.map(([fromId, toId]) => {
      const fromIdx = arch.nodes.findIndex((n) => n.id === fromId);
      const toIdx = arch.nodes.findIndex((n) => n.id === toId);
      return [fromIdx, toIdx];
    });
  }, [arch]);

  return (
    <section id="architecture" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Architecture"
          subtitle="Interactive architecture diagrams of systems I've designed"
        />

        <div ref={ref}>
          {/* Architecture Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            {architectures.map((a, index) => (
              <button
                key={a.id}
                onClick={() => setActiveArch(index)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeArch === index
                    ? "bg-gradient-to-r from-cyber-blue to-cyber-purple text-white shadow-glow"
                    : "glass-card text-gray-400 hover:text-white"
                }`}
              >
                {a.title}
              </button>
            ))}
          </motion.div>

          {/* Architecture Visualization */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeArch}
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Border glow */}
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-50"
                style={{
                  background: `linear-gradient(135deg, ${currentColors.primary}44, transparent 40%, ${currentColors.secondary}44)`,
                }}
              />

              <div className="relative glass-card rounded-2xl p-4 md:p-6 overflow-hidden">
                {/* Grid background */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundImage: `
                      linear-gradient(${currentColors.primary}0a 1px, transparent 1px),
                      linear-gradient(90deg, ${currentColors.primary}0a 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Ambient glow */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full blur-[100px] pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${currentColors.primary}22, transparent)`,
                  }}
                />

                {/* Title */}
                <div className="relative text-center mb-2 md:mb-4">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                    {arch.title}
                  </h3>
                  <p className="text-gray-400 mt-1 text-sm">
                    {arch.description}
                  </p>
                </div>

                {/* SVG Diagram */}
                <div className="relative w-full">
                  <svg
                    viewBox="0 0 1000 500"
                    className="w-full h-auto"
                    style={{ minHeight: "350px", maxHeight: "450px" }}
                  >
                    <defs>
                      <linearGradient id={`archGrad-${activeArch}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={currentColors.primary} />
                        <stop offset="100%" stopColor={currentColors.secondary} />
                      </linearGradient>
                      <marker
                        id={`arrowHead-${activeArch}`}
                        markerWidth="10"
                        markerHeight="10"
                        refX="8"
                        refY="5"
                        orient="auto"
                        markerUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 0 1 L 8 5 L 0 9 Z"
                          fill={currentColors.primary}
                          opacity="0.8"
                        />
                      </marker>
                      <filter id="nodeGlow">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor={currentColors.primary} floodOpacity="0.3" />
                      </filter>
                      <filter id="lineGlow">
                        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor={currentColors.primary} floodOpacity="0.5" />
                      </filter>
                    </defs>

                    {/* Connection lines */}
                    {connections.map(([fromIdx, toIdx], i) => {
                      if (fromIdx < 0 || toIdx < 0) return null;
                      const from = normalizedNodes[fromIdx];
                      const to = normalizedNodes[toIdx];

                      const dx = to.nx - from.nx;
                      const dy = to.ny - from.ny;

                      // Quadratic bezier control point
                      const midX = (from.nx + to.nx) / 2;
                      const midY = (from.ny + to.ny) / 2;
                      // Add curve when vertical distance is significant
                      const curveX = Math.abs(dy) > 50 ? midX + (i % 2 === 0 ? 30 : -30) : midX;
                      const curveY = Math.abs(dx) < 50 ? midY + 20 : midY;

                      const pathD = `M ${from.nx} ${from.ny} Q ${curveX} ${curveY} ${to.nx} ${to.ny}`;

                      return (
                        <motion.path
                          key={`line-${fromIdx}-${toIdx}`}
                          d={pathD}
                          fill="none"
                          stroke={`url(#archGrad-${activeArch})`}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          markerEnd={`url(#arrowHead-${activeArch})`}
                          filter="url(#lineGlow)"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.7 }}
                          transition={{ delay: 0.2 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                        />
                      );
                    })}

                    {/* Animated dots traveling along connections */}
                    {connections.map(([fromIdx, toIdx], i) => {
                      if (fromIdx < 0 || toIdx < 0) return null;
                      const from = normalizedNodes[fromIdx];
                      const to = normalizedNodes[toIdx];

                      const midX = (from.nx + to.nx) / 2;
                      const midY = (from.ny + to.ny) / 2;
                      const dx = to.nx - from.nx;
                      const dy = to.ny - from.ny;
                      const curveX = Math.abs(dy) > 50 ? midX + (i % 2 === 0 ? 30 : -30) : midX;
                      const curveY = Math.abs(dx) < 50 ? midY + 20 : midY;

                      const pathD = `M ${from.nx} ${from.ny} Q ${curveX} ${curveY} ${to.nx} ${to.ny}`;

                      return (
                        <circle key={`dot-${fromIdx}-${toIdx}`} r="4" fill={currentColors.primary} opacity="0.9">
                          <animateMotion
                            dur={`${2.5 + (i % 3) * 0.5}s`}
                            repeatCount="indefinite"
                            path={pathD}
                          />
                        </circle>
                      );
                    })}

                    {/* Nodes */}
                    {normalizedNodes.map((node, i) => (
                      <motion.g
                        key={node.id}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                        style={{ transformOrigin: `${node.nx}px ${node.ny}px` }}
                      >
                        {/* Node background */}
                        <rect
                          x={node.nx - 55}
                          y={node.ny - 20}
                          width="110"
                          height="40"
                          rx="10"
                          fill="rgba(10, 15, 30, 0.9)"
                          stroke={currentColors.primary}
                          strokeWidth="1.5"
                          strokeOpacity="0.4"
                          filter="url(#nodeGlow)"
                        />

                        {/* Top accent line */}
                        <rect
                          x={node.nx - 20}
                          y={node.ny - 20}
                          width="40"
                          height="2"
                          rx="1"
                          fill={`url(#archGrad-${activeArch})`}
                          opacity="0.6"
                        />

                        {/* Label */}
                        <text
                          x={node.nx}
                          y={node.ny + 5}
                          textAnchor="middle"
                          fill="#e2e8f0"
                          fontSize="13"
                          fontWeight="500"
                          fontFamily="inherit"
                        >
                          {node.label}
                        </text>

                        {/* Step number badge */}
                        <circle
                          cx={node.nx + 48}
                          cy={node.ny - 15}
                          r="10"
                          fill={`url(#archGrad-${activeArch})`}
                        />
                        <text
                          x={node.nx + 48}
                          y={node.ny - 11}
                          textAnchor="middle"
                          fill="white"
                          fontSize="10"
                          fontWeight="700"
                        >
                          {i + 1}
                        </text>
                      </motion.g>
                    ))}
                  </svg>
                </div>

                {/* Legend */}
                <div className="relative flex items-center justify-center gap-6 text-xs text-gray-500 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-[2px] rounded-full" style={{ background: `linear-gradient(90deg, ${currentColors.primary}, ${currentColors.secondary})` }} />
                    <span>Data Flow</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="10" height="10" viewBox="0 0 8 8">
                      <path d="M 0 1 L 8 5 L 0 9 Z" fill={currentColors.primary} opacity="0.8" />
                    </svg>
                    <span>Direction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-md border"
                      style={{ borderColor: `${currentColors.primary}66`, background: "rgba(10, 15, 30, 0.9)" }}
                    />
                    <span>Component</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
