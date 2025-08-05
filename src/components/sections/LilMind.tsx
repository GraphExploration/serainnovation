import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LilMindSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="/lilmind.png"
            alt="LilMind Visual"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <div className="flex justify-center space-x-4 mb-4">
            <Image src="/logo-lilmind.png" alt="LilMind Logo" width={180} height={180} />
            {/* <h2 className="text-4xl font-semibold text-indigo-800">Introducing LilMind</h2> */}
          </div>
          <p className="text-gray-700 text-lg mb-6">
            LilMind is an AI-powered assistant designed to support parents in real-time, providing personalized guidance and unifying essential childcare tools into one intuitive platform.
          </p>
          <ul className="grid gap-4 text-gray-700">
            <li>
              <span className="font-semibold">🍼 Predictive Routine Tracking:</span> Logs and anticipates feeding, sleep, and potty-training patterns.
            </li>
            <li>
              <span className="font-semibold">👶 Personalized Advice:</span> Tailored insights based on your child’s development stage.
            </li>
            <li>
              <span className="font-semibold">🩺 Health Insights:</span> Track symptoms and milestones for deeper visibility.
            </li>
            <li>
              <span className="font-semibold">🧠 Unified Care:</span> Centralizes tools, minimizing stress and decision fatigue.
            </li>
          </ul>
          <div className="mt-6">
            <Link href="/lilmind">
              <Button className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                Explore LilMind
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
