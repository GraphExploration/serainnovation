import React from 'react';
import type { Metadata } from "next";

export const metadata = {
  title: "Careers at SERA Innovation – Join Our AI Team",
  description:
    "Be part of an innovative AI team. Explore career opportunities in AI consulting, development, and training.",
  openGraph: {
    title: "Careers at SERA Innovation – Join Our AI Team",
    description:
      "Work on cutting-edge AI solutions and join a team that values innovation, impact, and collaboration.",
    url: "https://www.serainnovation.com/career",
    images: [
      {
        url: "/logo-serainnovation.png",
        width: 1200,
        height: 630,
        alt: "SERA Innovation Careers",
      },
    ],
  },
};

export default function CareerPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: 'auto' }}>
      <h1>Careers at SeraiNNovation</h1>
      <p>
        Join our innovative and fast-growing team! We look for passionate individuals
        who want to build impactful AI and Graph solutions.
      </p>
      <h2>Current Openings</h2>
      <ul>
        <li>Senior Solutions Engineer</li>
        <li>AI Research Scientist</li>
        <li>Full-stack Developer</li>
        <li>Product Manager</li>
      </ul>
      <p>
        Interested? Send your resume to <a href="mailto:careers@serainnovation.com">careers@serainnovation.com</a>
      </p>
      <img
        src="/visuals/career-illustration.png"
        alt="Career Illustration"
        style={{ width: '100%', marginTop: '2rem', borderRadius: '8px' }}
      />
    </div>
  );
}

