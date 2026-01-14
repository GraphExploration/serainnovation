import type { Metadata } from "next";
import "./globals.css";

// This is the metadata we updated for DealSense
export const metadata: Metadata = {
  title: "DealSense | AI-Driven Investment Due Diligence",
  description: "Advanced startup health assessment for VCs and Fund Managers using Graph Intelligence.",
};

// This is the "Default Export" the error is looking for
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}