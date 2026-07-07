"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Architecture } from "@/components/sections/Architecture";
import { Contact } from "@/components/sections/Contact";
import { Stats } from "@/components/sections/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Architecture />
      <Experience />
      <Contact />
    </>
  );
}
