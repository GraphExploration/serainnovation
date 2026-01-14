import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, AlertTriangle, CheckCircle2, BarChart3 } from 'lucide-react';

export default function SampleReport() {
  return (
    <section id="sample-report" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Inside the DealSense Report</h2>
          <p className="text-lg text-slate-600">
            We move beyond surface-level metrics to provide a deep-tech audit of every investment opportunity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 1. The Scorecard */}
          <Card className="p-8 border-none shadow-xl bg-white lg:col-span-2">
            <div className="flex justify-between items-start mb-8 border-b pb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Health Audit: TechFlow AI</h3>
                <p className="text-slate-500 text-sm">Sector: Enterprise SaaS | Stage: Series A</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-black text-emerald-500">8.4</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">DealSense Score</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span>Market Resilience</span>
                    <span className="text-emerald-500">92%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full">
                    <div className="w-[92%] h-full bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span>Technical Debt Risk</span>
                    <span className="text-amber-500">Low</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full">
                    <div className="w-[20%] h-full bg-amber-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span>Team DNA Strength</span>
                    <span className="text-blue-500">88%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full">
                    <div className="w-[88%] h-full bg-blue-50 rounded-full border border-blue-200">
                        <div className="w-full h-full bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <h4 className="text-sm font-bold uppercase tracking-tight text-emerald-400 mb-4 flex items-center gap-2">
                   <TrendingUp className="w-4 h-4" /> AI Insight
                </h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  "TechFlow AI shows an unusual 40% efficiency in developer output vs. capital burn. Graph analysis of their core architecture suggests high scalability with minimal infrastructure overhead."
                </p>
              </div>
            </div>
          </Card>

          {/* 2. Key Takeaways Sidebar */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-emerald-600 font-bold">
                <CheckCircle2 className="w-5 h-5" /> Positive Flags
              </div>
              <ul className="text-sm text-slate-600 space-y-3">
                <li>• Strong talent density from Tier-1 firms</li>
                <li>• High customer retention in Q3-Q4</li>
                <li>• Defensible IP in core NLP engine</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-amber-600 font-bold">
                <AlertTriangle className="w-5 h-5" /> Risks Identified
              </div>
              <ul className="text-sm text-slate-600 space-y-3">
                <li>• Over-dependence on single-geo revenue</li>
                <li>• Aggressive sales hiring vs. churn rate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}