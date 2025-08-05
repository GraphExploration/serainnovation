'use client';
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react"; // make sure lucide-react is installed

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import AboutSection from "@/components/sections/AboutSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TrainingSection from "@/components/sections/TrainingSection";
import CareerSection from "@/components/sections/CareerSection";
import ContactSection from "@/components/sections/ContactSection";
import LilMind from "@/components/sections/LilMind";

export const metadata = {
  title: "AI-First Consulting, Generative AI Products & Training",
  description:
    "SERA Innovation is your partner for AI strategy, generative AI development, and corporate upskilling. Harness the power of GenAI and Graph Intelligence.",
  openGraph: {
    title: "AI-First Consulting, Generative AI Products & Training",
    description:
      "SERA Innovation is your partner for AI strategy, generative AI development, and corporate upskilling.",
    url: "https://www.serainnovation.in",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "AI Technology Visual",
      },
    ],
  },
};
export default function Home() {
  return (
   
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow px-8 py-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-4">
          <Image src="/logo3.png" alt="SeraInnovation Logo" width={120} height={110} />
          {/* <span className="text-2xl font-bold text-blue-700">SERA Innovation</span> */}
        </div>
        {/* Right: Nav items */}
  <ul className="hidden md:flex items-center gap-10 text-gray-800 font-semibold">
    {[
      { id: "hero", label: "Home" },
      { id: "about", label: "About Us" },
      { id: "services", label: "Services" },
      { id: "lilMind", label: "LilMind" },
      { id: "training", label: "Training" },
      { id: "career", label: "Career" },
      { id: "contact", label: "Contact" },
    ].map((item) => (
      <li key={item.id}>
        <button
          onClick={() =>
            document.getElementById(item.id)?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
          className="text-lg lg:text-xl hover:text-blue-600 transition-colors"
        >
          {item.label}
        </button>
      </li>
    ))}

    {/* LinkedIn icon bigger */}
    <li>
      <a
        href="https://www.linkedin.com/in/anukriti-g-5a583921/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6 lg:w-7 lg:h-7" />
      </a>
    </li>
  </ul>
</nav>

      {/* Hero Section */}
      <section
  id="hero"
  className="bg-gradient-to-r from-blue-50 to-indigo-100 py-18 px-6 overflow-hidden"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
    {/* LEFT: Text Content */}
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-900 leading-tight"
      >
        <br></br>
        <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
  Strategic. Evolving. Responsible AI.
</span>      </motion.h1>

      <p className="text-lg text-gray-700 mb-6 max-w-lg">
        Empowering the Future with GenAI & Graph Intelligence
      </p>
      <p className="text-base text-gray-600 mb-8 max-w-xl">
        At SERA Innovation, we deliver AI-first consulting, build cutting-edge AI products, and upskill organizations through expert-led corporate training.
      </p>

      <Button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition">
        Get Started
      </Button>
    </div>

    {/* RIGHT: Hero Image with Blending Box */}
   
    <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center items-center w-full h-full mt-35"
>   
  <Image
    src="/AI_Base1.png" // Or /graph.jpeg or your hero illustration
    alt="AI Network Illustration"
    width={1200}
    height={900}
    className="rounded-xl shadow-xl object-contain w-full h-auto"
    priority
  />
  
  {/* Optional background glow */}
  <div className="absolute -top-12 -right-12 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40 -z-10" />
</motion.div>

  </div>
</section>

      {/* Clients Section */}
      <section className="py-20 px-25 bg-white text-center">
  <h2 className="text-2xl font-bold text-gray-800 mb-12">Trusted by Innovators</h2>
  <div className="overflow-hidden relative w-full">
    <div className="animate-marquee flex space-x-24 w-max">
      <Image src="/hul.png" alt="HUL" width={100} height={40} />
      <Image src="/amlc.jpeg" alt="AMLC" width={100} height={40} />
      <Image src="/jnj.jpeg" alt="Johnson & Johnson" width={100} height={40} />
      <Image src="/bse.png" alt="BSE" width={100} height={40} />
      <Image src="/phoenix.png" alt="Phoenix Technologies, LLC" width={100} height={40} />
      <Image src="/logo-perkypet.png" alt="PerkyPet" width={100} height={40} />
      <Image src="/logo-symbiosis.png" alt="Symbiosis" width={100} height={40} />

      
      {/* duplicate for seamless scroll */}
      <Image src="/hul.png" alt="HUL" width={100} height={40} />
      <Image src="/amlc.jpeg" alt="AMLC" width={100} height={40} />
      <Image src="/jnj.jpeg" alt="Johnson & Johnson" width={100} height={40} />
      <Image src="/bse.png" alt="BSE" width={100} height={40} />
      <Image src="/phoenix.png" alt="Phoenix Technologies, LLC" width={100} height={40} />
      <Image src="/logo-perkypet.png" alt="PerkyPet" width={100} height={40} />
      <Image src="/logo-symbiosis.png" alt="Symbiosis" width={100} height={40} />

      
    </div>
  </div>
</section>

    

      {/* Scrollable Sections from Sub-Pages */}
              <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <section id="about" className="scroll-mt-28">
        <AboutSection />
      </section>
        </motion.div>
      {/* <div id="about"><AboutSection /></div> */}

      <section id="about" className="scroll-mt-28">
        <ServiceSection />
      </section>

      <section id="about" className="scroll-mt-28">
        <TrainingSection />
      </section>
      {/* <div id="services"><ServiceSection /></div> */}
      {/* <div id="training"><TrainingSection /></div> */}
      <section id="lilMind" className="scroll-mt-28">
        <LilMind />
      </section>
      <div id="career"><CareerSection /></div>
      <div id="contact"><ContactSection /></div>


      {/* CTA */}
      <section className="bg-indigo-50 py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Partner with SERA Innovation</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          We help businesses and individuals unlock the power of AI through products and tailored consulting. Let’s co-create something impactful.
        </p>
        <Button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition">
  Get Started
</Button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8 bg-gray-100 border-t">
  <div className="flex justify-center space-x-4 mb-2">
    <a
      href="https://www.linkedin.com/in/anukriti-g-5a583921/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-600"
    >
      <Linkedin className="w-5 h-5 inline" />
    </a>
  </div>
  &copy; {new Date().getFullYear()} SeraInnovation. All rights reserved.
</footer>
    </div>
  );
}
