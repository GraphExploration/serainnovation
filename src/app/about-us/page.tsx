import React from 'react';
import Nav from '@/components/nav';
import Image from 'next/image'; // 1. Import the Image component
import { Button } from '@/components/ui/button';
import { BookOpen, Microscope, Zap } from 'lucide-react';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Pioneering <span className="text-emerald-600">Investment Intelligence</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">
            DealSense was born from a simple observation: the data used for venture capital 
            due diligence is often fragmented, lagging, and biased. We built the cure.
          </p>
        </div>
      </section>

      {/* The "Why We Exist" Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Expertise from the core</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Founded by IIT Bombay alumni with deep roots in AI and Graph Intelligence, 
              our team combines academic rigor with hands-on experience in 
              transforming healthcare and financial data systems.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 border-l-4 border-emerald-500 bg-emerald-50">
                <div className="font-bold text-2xl text-slate-900">IIT Bombay</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Foundation</div>
              </div>
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                <div className="font-bold text-2xl text-slate-900">10+</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">AI Patents</div>
              </div>
            </div>
          </div>

          {/* 2. FIXED: Real Image Implementation */}
          <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group">
            <Image 
              src="/profile.jpeg" // Ensure this file exists in your public/images folder
              alt="DealSense Founder - IIT Bombay Alumni"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-1">Our Leadership</p>
              <h3 className="text-white text-2xl font-bold">Strategic Innovation Team</h3>
            </div>
          </div>
        </div>
      </section>

      {/* The Methodology Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Methodology</h2>
          <p className="text-slate-400 mb-16">Beyond simple analytics—we map the DNA of innovation.</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                <Microscope />
              </div>
              <h3 className="text-xl font-bold">Deep Scan</h3>
              <p className="text-slate-400 italic">Graph AI identifies patterns in hiring, tech-stack debt, and market sentiment.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 border border-blue-500/20">
                <BookOpen />
              </div>
              <h3 className="text-xl font-bold">Trusted Data</h3>
              <p className="text-slate-400 italic">Grounded in verified financial knowledge bases and proprietary benchmarks.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 border border-amber-500/20">
                <Zap />
              </div>
              <h3 className="text-xl font-bold">Actionable Output</h3>
              <p className="text-slate-400 italic">Clear investability scores and a breakdown of potential red-flags.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
<section className="py-24 text-center bg-slate-50">
  <h2 className="text-3xl font-bold mb-8 text-slate-900">Join the elite funds using DealSense</h2>
  <a href="mailto:gupta.anukriti@serainnovation.in?subject=Meeting Request: DealSense Inquiry">
    <Button className="bg-emerald-600 hover:bg-emerald-700 px-12 h-14 w-auto rounded-full text-lg shadow-xl shadow-emerald-500/20 transition-all hover:scale-105 inline-flex items-center justify-center">
      Meet the Founders
    </Button>
  </a>
</section>
    </main>
  );
}