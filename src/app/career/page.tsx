import React from 'react';
import type { Metadata } from "next";

export const metadata = {
  title: "Careers at SERA Innovation – Join Our AI Team",
  description:
    // "Be part of an innovative AI team. Explore career opportunities in AI consulting, development, and training.",
    "Be part of an innovative AI team. Explore career opportunities with LilMind, building an AI-powered companion that supports parents and children.",
  openGraph: {
    title: "Careers at SERA Innovation – Join Our AI Team",
    description:
      // "Work on cutting-edge AI solutions and join a team that values innovation, impact, and collaboration.",
      "Help us build LilMind — an AI “medical friend” for parents — and join a team driven by innovation, empathy, and collaboration.",
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
        {/* Join our innovative and fast-growing team! We look for passionate individuals
        who want to build impactful AI and Graph solutions. */}
        Join our fast-growing LilMind team! We’re on a mission to create an AI-powered companion for parents. If you’re passionate about using technology to make families’ lives better, we’d love to have you.
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

