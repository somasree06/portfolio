"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/constants";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Menu, X, Terminal } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollDirection, scrollY } = useScrollDirection();

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isHidden = scrollDirection === "down" && scrollY > 100;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav
          className={`mx-4 md:mx-8 mt-4 rounded-2xl transition-all duration-500 ${
            scrollY > 50
              ? "glass shadow-lg shadow-black/20"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 group"
              aria-label="Home"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg hidden sm:block">
                Somasree <span className="text-cyber-blue">V</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                    activeSection === link.href.replace("#", "")
                      ? "text-cyber-blue"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-cyber-blue/10 border border-cyber-blue/20 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg text-sm font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-dark-900/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              className="relative z-50 flex flex-col items-center justify-center h-full gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-semibold text-gray-300 hover:text-cyber-blue transition-colors"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
