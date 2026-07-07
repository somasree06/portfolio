"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Quote */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl md:text-3xl font-display font-bold gradient-text italic">
            &ldquo;Engineering Intelligence Beyond Automation.&rdquo;
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold">
              {siteConfig.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{siteConfig.title}</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-cyber-blue hover:border-cyber-blue/30 transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right text-sm text-gray-500">
            <p className="flex items-center gap-1 justify-center md:justify-end">
              Built with <Heart size={14} className="text-cyber-pink" /> by{" "}
              {siteConfig.name.split(" ")[0]}
            </p>
            <p className="mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
