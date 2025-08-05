// components/sections/CareerSection.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CareerSection() {
  return (
    <section id="career" className="py-24 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-blue-700">Join Our Team</h2>
          <p className="text-lg text-gray-700 mb-4">
            At SeraInnovation, you’ll work at the intersection of technology, design, and social impact — crafting responsible AI solutions that matter.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Innovate with GenAI, and Knowledge Graphs</li>
            <li>Work with mission-driven organizations</li>
            <li>Remote-friendly with flexible culture</li>
          </ul>
          <div className="mt-6">
            <a href="mailto:contact@serainnovation.in" className="text-indigo-600 underline text-base font-medium">
            <br></br>
          <Button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition">
        Apply
      </Button>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/hiring.png"
            alt="Team hiring illustration"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
