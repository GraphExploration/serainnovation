import React from 'react';
import type { Metadata } from "next";


export const metadata = {
  title: "Corporate AI Training & Upskilling Programs",
  description:
    "Enhance your workforce with tailored AI training programs covering generative AI, data science, and responsible AI practices.",
  openGraph: {
    title: "Corporate AI Training & Upskilling Programs",
    description:
      "From foundational AI knowledge to advanced AI deployment training, SERA Innovation upskills teams for the future.",
    url: "https://www.serainnovation.com/training",
    images: [
      {
        url: "/logo-serainnovation.png",
        width: 1200,
        height: 630,
        alt: "Corporate AI Training",
      },
    ],
  },
};


export default function TrainingPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      <h1>Training Programs</h1>
      <p>
        Empower your team with our tailored training programs designed for professionals
        seeking practical knowledge in AI and Graph technologies.
      </p>
      <ul>
        <li><strong>AI Fundamentals:</strong> Concepts, tools, and real-world applications.</li>
        <li><strong>Graph Databases & Analytics:</strong> Schema design, query optimization, TigerGraph deep dive.</li>
        <li><strong>Generative AI Workshops:</strong> Hands-on sessions with LLMs and RAG pipelines.</li>
        <li><strong>Custom Training:</strong> Tailored programs to suit your organization's unique needs.</li>
      </ul>
      <img
        src="/visuals/training-illustration.png"
        alt="Training Illustration"
        style={{ width: '100%', marginTop: '2rem', borderRadius: '8px' }}
      />
    </div>
  );
}
