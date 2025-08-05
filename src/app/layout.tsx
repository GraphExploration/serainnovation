import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Serainnovation",
//   description: "AI-first products to simplify life",
// };


export const metadata: Metadata = {
  title: {
    default: "SERA Innovation",
    template: "%s | SERA Innovation", // Page titles will be inserted here
  },
  description:
    "SERA Innovation delivers AI-first consulting, generative AI products, and corporate training. Empower your business with GenAI and Graph Intelligence.",
  openGraph: {
    title: "SERA Innovation",
    description:
      "SERA Innovation delivers AI-first consulting, generative AI products, and corporate training. Empower your business with GenAI and Graph Intelligence.",
    url: "https://www.serainnovation.in",
    siteName: "SERA Innovation",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "SERA Innovation Logo and AI Concept",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SERA Innovation",
    description:
      "AI-first consulting, generative AI products, and corporate training for a smarter future.",
    images: ["/logo-serainnovation.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
