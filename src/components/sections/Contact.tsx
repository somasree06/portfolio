"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/effects/SectionHeading";
import { siteConfig } from "@/lib/constants";
import {
  Send,
  Mail,
  MapPin,
  Linkedin,
  CheckCircle,
  Loader2,
} from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Location", value: "Chennai, India", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.linkedin },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref, isInView } = useInView();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS integration placeholder
    // In production, replace with actual EmailJS service
    // import emailjs from '@emailjs/browser';
    // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formState, 'YOUR_PUBLIC_KEY');

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Contact"
          subtitle="Let's build something intelligent together"
        />

        <div ref={ref} className="grid lg:grid-cols-5 gap-12">
          {/* Left - Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Have a project in mind or want to discuss AI solutions? I&apos;m always
              open to exploring new opportunities and collaborations.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 glass-card group hover:border-cyber-blue/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyber-blue/10 flex items-center justify-center group-hover:bg-cyber-blue/20 transition-colors">
                    <info.icon size={18} className="text-cyber-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{info.label}</p>
                    <p className="text-sm text-gray-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-cyber-blue hover:border-cyber-blue/30 transition-all duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyber-blue/50 focus:ring-1 focus:ring-cyber-blue/50 outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyber-blue/50 focus:ring-1 focus:ring-cyber-blue/50 outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-400"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyber-blue/50 focus:ring-1 focus:ring-cyber-blue/50 outline-none transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyber-blue/50 focus:ring-1 focus:ring-cyber-blue/50 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
