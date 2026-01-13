export default function DealSenseHero() {
  return (
    <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
            Institutional Grade AI
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Data-Driven <span className="text-emerald-400">Due Diligence</span> at Scale.
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            Assess startup health, runway, and market fit in seconds. DealSense uses AI Intelligence to spot risks before you deploy capital.
          </p>
          <div className="flex gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-8 py-4 rounded-lg font-bold transition-all">
              Request Demo
            </button>
            {/* <button className="border border-slate-700 hover:bg-slate-900 px-8 py-4 rounded-lg font-bold transition-all">
              View Sample Report
            </button> */}
          </div>
        </div>
        
        {/* Dashboard Mockup */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-2xl">
             <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
             </div>
             {/* Abstract Dashboard UI */}
             <div className="space-y-3">
                <div className="h-8 bg-slate-800 rounded w-full flex items-center px-4 text-[10px] text-slate-500">Startup: FinTech Alpha | Risk Score: 8.2/10</div>
                <div className="grid grid-cols-3 gap-3">
                   <div className="h-20 bg-emerald-500/10 border border-emerald-500/20 rounded p-2">
                      <div className="w-8 h-1 bg-emerald-500/50 mb-2"></div>
                      <div className="text-emerald-400 font-mono text-xs">Runway: 18m</div>
                   </div>
                   <div className="h-20 bg-slate-800 rounded"></div>
                   <div className="h-20 bg-slate-800 rounded"></div>
                </div>
                <div className="h-32 bg-slate-800/50 rounded flex items-end p-2 gap-1">
                   {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                      <div key={i} style={{height: `${h}%`}} className="flex-1 bg-emerald-500/30 rounded-t"></div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}