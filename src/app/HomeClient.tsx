"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import AboutSection from "@/components/sections/AboutSection";
import ServiceSection from "@/components/sections/ServiceSection"; // <-- plural
import TrainingSection from "@/components/sections/TrainingSection";
import CareerSection from "@/components/sections/CareerSection";
import ContactSection from "@/components/sections/ContactSection";
import LilMind from "@/components/sections/LilMind";

const CLIENT_LOGOS = [
  { src: "/hul.png", alt: "HUL" },
  { src: "/amlc.jpeg", alt: "AMLC" },
  { src: "/jnj.jpeg", alt: "Johnson & Johnson" },
  { src: "/bse.png", alt: "BSE" },
  { src: "/phoenix.png", alt: "Phoenix Technologies, LLC" },
  { src: "/logo-perkypet.png", alt: "PerkyPet" },
  { src: "/logo-symbiosis.png", alt: "Symbiosis" },
];

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white backdrop-blur shadow px-8 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
  <div className="flex items-center gap-4">
    <Image src="/logo3.png" alt="SERA Innovation Logo" width={100} height={100} priority />
  </div>

  <ul className="hidden md:flex items-center gap-10 text-gray-800 font-semibold">
    {[
      { id: "home", label: "Home" },
      { id: "about", label: "About Us" },
      // { id: "service", label: "Service" },
      { id: "lilmind", label: "LilMind" },
      // { id: "training", label: "Training" },
      { id: "career", label: "Career" },
      { id: "contact", label: "Contact" },
    ].map((item) => (
      <li key={item.id}>
        <a href={`#${item.id}`} className="text-lg lg:text-xl hover:text-blue-600 transition-colors">
  {item.label}
</a>
      </li>
    ))}
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

{/* Home */}
<section
  id="home"
  className="bg-gradient-to-r from-blue-50 to-indigo-100 pt-43 pb-12 px-6 py-25 overflow-hidden"
>
  {/* pt-32 ensures space from navbar */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
    {/* LEFT: Text */}
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-900 leading-tight"
      >
        <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Strategic. Evolving. Responsible AI.
        </span>
      </motion.h1>

      <p className="text-lg text-gray-700 mb-6 max-w-lg">
        Empowering the Future with GenAI & Graph Intelligence
      </p>
      <p className="text-base text-gray-600 mb-8 max-w-xl">
        {/* At SERA Innovation, we deliver AI-first consulting, build cutting-edge AI products, and upskill organizations through expert-led corporate training. */}
        At LilMind, we’re creating an AI-powered companion app for parents — blending trusted health insights, child development guidance, and smart tools to make parenting simpler, safer, and more informed.

      </p>

      
        <div className="flex gap-4">
        <a href="#contact">
        <Button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition">
          Get Started
         
        </Button>
        </a>
        <a href="#contact">
          <Button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition">
            Contact Us
          </Button>
        </a>
      </div>
    </div>

    {/* RIGHT: Illustration */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center items-center"
    >
      <div className="max-w-md w-full">
        <Image
          src="/AI_Base1.png"
          alt="AI Network Illustration"
          width={800}
          height={600}
          className="rounded-xl shadow-xl object-contain w-full h-auto"
          priority
        />
      </div>
      <div className="absolute -top-8 -right-8 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-40 -z-10" />
    </motion.div>
  </div>
</section>

      {/* Clients */}
      <section className="py-8 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-12">Trusted by Innovators</h2>
        <div className="overflow-hidden relative w-full">
          <div className="animate-marquee flex space-x-24 w-max">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <Image key={`${logo.src}-${i}`} src={logo.src} alt={logo.alt} width={120} height={48} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-32">
        <AboutSection />
      </section>

      {/* Services */}
      {/* <section id="service" className="scroll-mt-32">
        <ServiceSection />
      </section> */}

      {/* LilMind */}
      <section id="lilmind" className="scroll-mt-32">
        <LilMind />
      </section>

      {/* Training */}
      {/* <section id="training" className="scroll-mt-32">
        <TrainingSection />
      </section> */}

      {/* Career */}
      <section id="career" className="scroll-mt-32">
        <CareerSection />
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-32">
        <ContactSection />
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 py-20 text-center">
        {/* <h2 className="text-3xl font-bold text-blue-800 mb-4">Partner with SERA Innovation</h2> */}
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Partner with LilMind</h2>

        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          {/* We help businesses and individuals unlock the power of AI through products and tailored consulting. Let’s co-create something impactful. */}
          Through <strong>LilMind</strong>, we’re building an AI-powered companion for parents — a trusted “medical friend” that supports them in understanding and caring for their children. Join us to help shape this vision and make parenting smarter, safer, and easier.

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
