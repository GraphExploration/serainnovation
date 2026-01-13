import React from 'react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side: Info */}
          <div className="bg-slate-900 p-12 text-white md:w-1/3">
            <h2 className="text-3xl font-bold mb-6">Let's talk Intelligence.</h2>
            <p className="text-slate-400 mb-8">
              See how DealSense can transform your fund's due diligence workflow.
            </p>
            <div className="space-y-4 text-sm text-slate-300">
              <p>✓ Personalized Demo</p>
              <p>✓ Sample Health Report</p>
              <p>✓ Pricing for your Fund Size</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-12 md:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input type="text" className="w-full p-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Work Email</label>
                <input type="email" className="w-full p-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none transition-all" placeholder="john@vc-firm.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Fund/Company Name</label>
                <input type="text" className="w-full p-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none transition-all" placeholder="Sequoia Capital" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Investment Stage</label>
                <select className="w-full p-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none transition-all bg-white">
                  <option>Seed / Pre-Seed</option>
                  <option>Series A/B</option>
                  <option>Growth / PE</option>
                  <option>Angel Investor</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-slate-700">How can we help?</label>
                <textarea className="w-full p-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none transition-all h-32" placeholder="Tell us about your current diligence process..."></textarea>
              </div>
              <div className="md:col-span-2">
                <Button className="w-full py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg text-lg transition-transform active:scale-95">
                  Request Demo
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}