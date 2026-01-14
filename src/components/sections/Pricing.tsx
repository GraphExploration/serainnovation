import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: "Individual Angel",
    price: "$199",
    description: "For solo investors managing a personal portfolio.",
    features: ["5 Deep-Scan Reports / mo", "Basic Risk Scoring", "Market Sentiment Analysis", "PDF Exports"],
    buttonText: "Start Free Trial",
    highlight: false
  },
  {
    name: "VC Fund",
    price: "$499",
    description: "For investment teams requiring deep collaboration.",
    features: ["Unlimited Reports", "Advanced Graph Intelligence", "Team Shared Data Rooms", "Custom Due Diligence Checklists", "Priority Support"],
    buttonText: "Get Started",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For Private Equity and Institutional Banks.",
    features: ["White-label Reporting", "API Access", "On-premise Deployment", "Dedicated Account Manager", "LP Portal Integration"],
    buttonText: "Contact Sales",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Scale your deal flow</h2>
          <p className="text-slate-600">Choose the plan that fits your fund's requirements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div key={index} className={`relative p-8 rounded-2xl border ${tier.highlight ? 'border-emerald-500 shadow-xl scale-105 z-10' : 'border-slate-200'}`}>
              {tier.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-slate-500 text-sm">/month</span>}
              </div>
              <p className="text-slate-600 text-sm mb-6">{tier.description}</p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Button className={`w-full py-6 rounded-lg font-bold ${tier.highlight ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-slate-900'}`}>
                {tier.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}