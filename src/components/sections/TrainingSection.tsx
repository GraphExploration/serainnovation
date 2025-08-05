// components/sections/TrainingSection.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TrainingSection() {
  return (
    <section id="training" className="py-24 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/training-session.png"
            alt="AI Training Session"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-indigo-800 mb-6">AI Upskilling for Teams</h2>
          <p className="text-lg text-gray-700 mb-4">
            We design hands-on training programs for engineering, product, and executive teams to build practical GenAI and ML skills.
          </p>
          <ul className="text-gray-700 list-disc pl-5 space-y-3 text-lg">
            <li>GenAI Bootcamps: RAG, fine-tuning, prompt design</li>
            <li>Graph ML & Knowledge Systems</li>
            <li>Responsible AI & Risk Governance</li>
            <li>AI for Product Managers & Executives</li>
          </ul>
          <br></br>
          <Button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition">
        Get in Touch
      </Button>
        </div>

       

      </div>
    </section>
  );
}
