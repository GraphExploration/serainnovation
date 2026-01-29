export default function DealSenseHero() {
  return (
    <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
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
          </div>
        </div>
        
        {/* Right Column: Dashboard Mockup */}
        <div className="relative group">
          {/* Outer Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
             {/* Browser Header Window Controls */}
             <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="bg-slate-950/50 px-3 py-1 rounded text-[10px] text-slate-500 font-mono">
                   dealsenseai/home
                </div>
             </div>

             {/* The Screenshot Container */}
             {/* <div className="relative aspect-video bg-slate-900"> */}
             {/* <div className="relative aspect-[16/10] bg-slate-900 min-h-[400px] min-w-[500px]"> */}
             <div className="relative aspect-[16/9] bg-slate-900 min-h-[400px] w-full">
                <img 
                  src="/dealsense_demo.png" 
                  alt="DealSense AI Analysis Dashboard" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Floating AI Insight Badge */}
                <div className="absolute bottom-4 left-4 bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-pulse z-10">
                   AI Insight: Revenue Anomaly Detected
                </div>
             </div>
          </div>
        </div> {/* End of Mockup Group */}

      </div> {/* End of Container */}
    </section>
  );
}