import React from 'react';

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Data Ingestion", desc: "Connect data rooms, financial statements, and cap tables." },
    { num: "02", title: "Analysis", desc: "Our AI maps relationships, market fit, and hidden risks." },
    { num: "03", title: "Investment Score", desc: "Receive a comprehensive report with a 1-10 health rating." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">The DealSense Process</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.num} className="relative p-6 border-l border-emerald-500/30">
              <span className="text-5xl font-black text-emerald-500/20 absolute top-0 left-4 leading-none">
                {step.num}
              </span>
              <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
              <p className="text-slate-400 relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}