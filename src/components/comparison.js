import React from 'react';

export default function Comparison() {
  const specs = [
    { label: "Primary Use Case", pzx: "Coastal (0–12nm)", satellite: "Global / Offshore", cellular: "Nearshore / Coastal" },
    { label: "Speed", pzx: "150+ Mbps", satellite: "5–50 Mbps", cellular: "50–150 Mbps" },
    { label: "Latency", pzx: "20–50 ms", satellite: "600–900 ms", cellular: "30–80 ms" },
    { label: "Cost Structure", pzx: "Low / scalable", satellite: "High / fixed", cellular: "Medium" },
    { label: "Installation", pzx: "Simple", satellite: "Complex", cellular: "Moderate" },
    { label: "Best Fit", pzx: "Working vessels near coast", satellite: "Deep sea vessels", cellular: "Mixed use vessels" }
  ];

  return (
    <section id="comparison" className="relative py-20 lg:py-28 border-t border-white/5 bg-[#0E1528] overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e2a862]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER TEXT */}
        <div className="flex flex-col space-y-4 mb-16 text-center items-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#e2a862] uppercase">
            Comparison Matrix
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Know Exactly Where PZX Horizon Wins.
          </h2>
          <p className="max-w-xl text-sm text-gray-400 font-medium leading-relaxed">
            We do not claim the whole ocean. We own the coast. Inside the 12-mile horizon, our system is built for speed, stability, and cost discipline.
          </p>
        </div>

        {/* 3-COLUMN CARD SYSTEM (RESPONSIVE GRID) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
          
          

          {/* KOLOM 1: SATELLITE (DARK & MUTED) */}
          <div className="rounded-2xl border border-white/5 bg-[#0b111e]/40 p-8 flex flex-col justify-between transition-colors duration-300 hover:border-white/10">
            <div>
              <div className="text-center pb-6 border-b border-white/5">
                <h3 className="text-xl font-bold tracking-wide text-gray-300">SATELLITE</h3>
                <p className="text-xs text-gray-500 mt-1">Deep Sea / Offshore</p>
              </div>

              {/* Data Detail Satellite */}
              <div className="mt-6 space-y-5 text-left">
                {specs.map((spec, i) => (
                  <div key={i} className="border-b border-white/[0.03] pb-3 last:border-0">
                    <span className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider">{spec.label}</span>
                    <span className="text-sm font-medium text-gray-400 mt-0.5 block">{spec.satellite}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KOLOM 2: PZX HORIZON (JUARA UTAMA - GLOWING GOLD) */}
          <div className="relative rounded-2xl border-2 border-[#e2a862] bg-[#0E1528] p-8 shadow-[0_0_40px_rgba(226,168,98,0.15)] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
            {/* Tag / Badge Pemenang */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e2a862] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#060910]">
              The Coast Specialist
            </div>

            <div>
              <div className="text-center pb-6 border-b border-white/10">
                <h3 className="text-2xl font-extrabold tracking-wide text-[#e2a862]">PZX HORIZON</h3>
                <p className="text-xs text-gray-400 mt-1">Built for the 12-mile line</p>
              </div>

              {/* Data Detail PZX */}
              <div className="mt-6 space-y-5 text-left">
                {specs.map((spec, i) => (
                  <div key={i} className="border-b border-white/[0.03] pb-3 last:border-0">
                    <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">{spec.label}</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">{spec.pzx}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KOLOM 3: CELLULAR MARINE (DARK & MUTED) */}
          <div className="rounded-2xl border border-white/5 bg-[#0b111e]/40 p-8 flex flex-col justify-between transition-colors duration-300 hover:border-white/10">
            <div>
              <div className="text-center pb-6 border-b border-white/5">
                <h3 className="text-xl font-bold tracking-wide text-gray-300">CELLULAR MARINE</h3>
                <p className="text-xs text-gray-500 mt-1">Nearshore Network</p>
              </div>

              {/* Data Detail Cellular */}
              <div className="mt-6 space-y-5 text-left">
                {specs.map((spec, i) => (
                  <div key={i} className="border-b border-white/[0.03] pb-3 last:border-0">
                    <span className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider">{spec.label}</span>
                    <span className="text-sm font-medium text-gray-400 mt-0.5 block">{spec.cellular}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}