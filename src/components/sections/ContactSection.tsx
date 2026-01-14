"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fundName: "",
    stage: "Seed/Series A",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
    setFormData({ name: "", email: "", fundName: "", stage: "Seed/Series A", message: "" });
  };

  return (
    <section id="contact" className="bg-slate-900 py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Request a Strategic Demo</h2>
          <p className="text-slate-400 text-lg mb-8">
            Discover how DealSense can institutionalize your due diligence workflow.
          </p>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-xl">
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Institutional-grade data security</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Proprietary Graph Intelligence analysis</span>
              </li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none" placeholder="John Doe" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Work Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none" placeholder="john@vc-firm.com" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Fund/Company</label>
            <input type="text" name="fundName" value={formData.fundName} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none" placeholder="DealSense Capital" />
          </div>
          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition-all">
            Schedule Briefing
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed bottom-10 right-10 bg-white border-l-4 border-emerald-500 rounded-lg shadow-2xl p-6 max-w-sm w-full z-[100]">
          <h3 className="text-lg font-bold text-slate-900">Inquiry Received</h3>
          <p className="text-slate-600 text-sm">Our team will reach out shortly.</p>
        </div>
      )}
    </section>
  );
}