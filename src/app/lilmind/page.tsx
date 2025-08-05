import React from 'react';
import type { Metadata } from "next";


export const metadata = {
  title: "LilMind – AI-Powered Parenting Assistant",
  description:
    "LilMind is your smart parenting companion: predictive baby care tracking, personalized advice, health insights, and unified childcare tools.",
  openGraph: {
    title: "LilMind – AI-Powered Parenting Assistant",
    description:
      "Support parents with real-time AI guidance, milestone tracking, and stress-free care planning.",
    url: "https://www.serainnovation.com/lilmind",
    images: [
      {
        url: "/og-lilmind.jpg",
        width: 1200,
        height: 630,
        alt: "LilMind AI Parenting Assistant",
      },
    ],
  },
};


export default function LilMindPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      <h1>LilMind – Your AI Companion</h1>
      <p>
        LilMind is our flagship AI-powered platform designed to revolutionize how
        businesses interact with data and automate workflows through generative AI and knowledge graphs.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>Seamless Integration with Knowledge Graphs</li>
        <li>Advanced LLM-based Natural Language Understanding</li>
        <li>Customizable RAG Pipelines for Contextual AI Responses</li>
        <li>Scalable and Secure Cloud Infrastructure</li>
        <li>Easy-to-use Interface for Business Users and Developers</li>
      </ul>
      <h2>Demo</h2>
      <p>Try LilMind live: <a href="https://demo.lilmind.com" target="_blank" rel="noreferrer">https://demo.lilmind.com</a></p>
      <img
        src="/visuals/lilmind-product.png"
        alt="LilMind Product Illustration"
        style={{ width: '100%', marginTop: '2rem', borderRadius: '8px' }}
      />
    </div>
  );
}

