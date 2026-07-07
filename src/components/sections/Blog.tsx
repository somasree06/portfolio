"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/effects/SectionHeading";
import { blogPosts } from "@/lib/constants";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

export function Blog() {
  const { ref, isInView } = useInView();

  return (
    <section id="blog" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Blog"
          subtitle="Sharing insights on AI engineering, RAG systems, and enterprise AI"
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="glass-card p-6 h-full flex flex-col group-hover:border-cyber-blue/30 transition-all duration-500"
                whileHover={{ y: -3 }}
              >
                {/* Category & Arrow */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                    {post.category}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-500 group-hover:text-cyber-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-400 flex-grow line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-white/5">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
