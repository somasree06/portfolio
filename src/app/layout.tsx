import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { ParticleBackground } from "@/components/effects/ParticleBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Somasree V | AI Technical Lead & GenAI Architect",
  description:
    "Building Intelligent AI Systems for the Future. Specializing in Agentic AI, RAG Systems, Multi-Agent Orchestration, AWS Bedrock, and Enterprise AI Solutions.",
  keywords: [
    "AI Engineer",
    "GenAI Architect",
    "Agentic AI",
    "RAG Systems",
    "AWS Bedrock",
    "LangChain",
    "LangGraph",
    "Multi-Agent AI",
    "Somasree V",
  ],
  authors: [{ name: "Somasree V" }],
  openGraph: {
    title: "Somasree V | AI/ML Solution Architect",
    description:
      "Building Intelligent AI Systems for the Future. Specializing in Agentic AI, RAG, Multi-Agent Orchestration, and Enterprise Solutions.",
    url: "https://somasree.vercel.app",
    siteName: "Somasree V Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somasree V | AI/ML Solution Architect",
    description:
      "Building Intelligent AI Systems for the Future.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-dark-900 text-white antialiased overflow-x-hidden`}
      >
        <CustomCursor />
        <ScrollProgress />
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
