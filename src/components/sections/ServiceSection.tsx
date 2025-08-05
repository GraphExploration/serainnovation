import { Briefcase, Code2, Network, ShieldCheck, GitBranch, BarChart3 } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Briefcase className="w-10 h-10 text-indigo-600" />,
      title: "AI Strategy & Consulting",
      desc: "Roadmapping your AI journey, aligning tech with business goals, and defining measurable outcomes.",
    },
    {
      icon: <Code2 className="w-10 h-10 text-indigo-600" />,
      title: "Generative AI Products",
      desc: "Building real-world LLM apps, fine-tuning pipelines, and safe prompt engineering.",
    },
    {
      icon: <GitBranch className="w-10 h-10 text-indigo-600" />,
      title: "Knowledge Graph Engineering",
      desc: "Designing ontologies, entity linking, and graph ETL to unify data into a connected, queryable source of truth.",
    },
    {
      icon: <Network className="w-10 h-10 text-indigo-600" />,
      title: "Graph Intelligence Systems",
      desc: "Graph-based platforms for fraud detection, recommendations, and decision-making.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
      title: "Responsible AI Tooling",
      desc: "Auditing and improving fairness, explainability, and risk in deployed models.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-indigo-600" />,
      title: "AI & Data Science",
      desc: "End-to-end data solutions from preprocessing and modeling to deployment, delivering actionable insights.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a full spectrum of AI services — from strategic consulting to advanced product development — tailored for measurable impact.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-8 text-left shadow-sm hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
