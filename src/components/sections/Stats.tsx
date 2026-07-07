"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

const stats = [
  { value: 3.9, suffix: "+", label: "Years Experience" },
  { value: 8, suffix: "+", label: "AI Projects Delivered" },
  { value: 5, suffix: "+", label: "AI Systems in Production" },
  { value: 50, suffix: "%+", label: "Effort Reduction Achieved" },
];

function AnimatedCounter({
  target,
  suffix,
  isInView,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span className="text-4xl md:text-5xl font-display font-bold gradient-text">
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass-card p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                isInView={isInView}
              />
              <p className="text-gray-400 text-sm mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
