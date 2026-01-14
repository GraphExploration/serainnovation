import React from 'react';
import { Card } from '@/components/ui/card';
// ADD THIS LINE BELOW:
import { Activity, ShieldCheck, GitGraph, FileText } from 'lucide-react';

const features = [
  {
    title: "Venture Health Scoring",
    description: "Proprietary algorithms that analyze financial health, cap tables, and hiring trends to output a single 'Investability' score.",
    icon: <Activity className="text-emerald-500" />,
    color: "bg-emerald-500/10"
  },
  {
    title: "Automated Due Diligence",
    description: "Scan data rooms in minutes. Our AI extracts key terms, flags legal anomalies, and identifies potential red flags.",
    icon: <ShieldCheck className="text-blue-500" />,
    color: "bg-blue-500/10"
  },
  {
    title: "Market Analysis",
    description: "Visualize the competitive landscape. See how a startup's tech stack and team DNA stack up against market leaders.",
    icon: <GitGraph className="text-purple-500" />,
    color: "bg-purple-500/10"
  },
  {
    title: "LP Reporting",
    description: "Instantly generate high-fidelity investment memos and quarterly reports for your Limited Partners.",
    icon: <FileText className="text-amber-500" />,
    color: "bg-amber-500/10"
  }
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Institutional Grade Deal Intelligence
          </h2>
          <p className="text-lg text-slate-600">
            DealSense leverages AI Intelligence to provide investors with 
            unparalleled clarity on startup health and market risks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 border-none shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}