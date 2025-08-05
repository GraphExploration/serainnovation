import AboutSection from "@/components/sections/AboutSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SERA Innovation",
  description: "Learn more about SERA Innovation, our mission, and our team.",
  openGraph: {
    title: "About Us | SERA Innovation",
    description: "Learn more about SERA Innovation, our mission, and our team.",
    url: "https://www.serainnovation.in/about",
    siteName: "SERA Innovation",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About SERA Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function AboutPage() {
  return <AboutSection />;
}