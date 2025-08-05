import React from 'react';
import type { Metadata } from "next";

export const metadata = {
  title: "AI Consulting, Generative AI, Graph Intelligence & More",
  description:
    "Explore our AI services: strategy, generative AI development, knowledge graphs, graph intelligence systems, and responsible AI tooling.",
  openGraph: {
    title: "AI Consulting, Generative AI, Graph Intelligence & More",
    description:
      "From AI strategy to knowledge graphs, SERA Innovation provides complete AI solutions.",
    url: "https://www.serainnovation.com/services",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "AI Services Overview",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      <h1>Our Services</h1>
      <p>
        At SeraiNNovation, we specialize in delivering cutting-edge AI and Graph-based
        solutions tailored to your business needs. Our core services include:
      </p>
      <ul>
        <li><strong>AI Consulting:</strong> Strategy, roadmap, and solution design.</li>
        <li><strong>Graph Database Solutions:</strong> Custom schema design, query optimization, graph ML.</li>
        <li><strong>Generative AI Integration:</strong> LLM-powered applications, RAG pipelines, knowledge graphs.</li>
        <li><strong>Product Development:</strong> End-to-end development for scalable AI products.</li>
        <li><strong>Corporate Training:</strong> Workshops on AI, Graph, and emerging technologies.</li>
      </ul>
      <img
        src="/visuals/services-illustration.png"
        alt="Services Illustration"
        style={{ width: '100%', marginTop: '2rem', borderRadius: '8px' }}
      />
    </div>
  );
}
