// components/sections/AboutSection.tsx
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-blue-800">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>SERA Innovation</strong> was founded by <strong>Anukriti Gupta</strong>, an IIT Bombay alum with deep expertise in AI, Graph Intelligence, and Healthcare transformation.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {/* We build scalable, ethical AI systems for enterprise, driven by deep domain insight and cutting-edge technology. */}
            Anukriti has build scalable, ethical AI systems for enterprise, driven by deep domain insight and cutting-edge technology.

          </p>
          <p className="text-lg text-gray-700 mb-6">
            {/* Our team has delivered impact for companies like Unilever, BSE, UnitedHealth, and more — combining strategic thinking with hands-on innovation. */}
            Anukriti has delivered impact for companies like Unilever, BSE, UnitedHealth, and more — combining strategic thinking with hands-on innovation.

          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/profile.jpeg"
            alt="Serainnovation Team Working"
            width={500}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
