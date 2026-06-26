import React from 'react';

export default function ProductSpecs() {
  const specsData = [
    { label: "Frequency Range", value: "600 MHz – 6 GHz" },
    { label: "Peak Gain", value: "Up to 9.5 dBi" },
    { label: "Operating Range", value: "Optimized for 0–12 nautical miles" },
    { label: "Latency", value: "20–50 ms" },
    { label: "Ingress Protection", value: "IP68 (Waterproof & Dustproof)" },
    { label: "Mounting Compatibility", value: "Standard 1\" 14-TPI thread / L-bracket option" }
  ];

  return (
    <section id="product-specs" className="relative py-20 lg:py-28 border-t border-white/5 bg-transparent overflow-hidden">
      
      {/* 🌌 AMBIENT GLOW (Pendaran sudut kanan bawah yang disempurnakan) */}
      <div className="absolute -bottom-20 -right-20 -z-10 h-[450px] w-[450px] rounded-full bg-[#e2a862]/[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start text-left">
          
          {/* ==========================================================
              SISI KIRI: STICKY HEADER BLOCK (Sangat Rapi & Kokoh)
              ========================================================== */}
          <div className="lg:col-span-4 flex flex-col space-y-4 lg:sticky lg:top-28">
            <span className="text-xs font-bold tracking-[0.2em] text-[#e2a862] uppercase bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-md backdrop-blur-sm w-fit">
              Technical Data
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.2]">
              The numbers <br />
              that matter <br />
              at sea.
            </h2>
            <p className="max-w-sm text-sm text-gray-400 font-medium leading-relaxed">
              Every detail is calibrated for the absolute reality of maritime operations. No fluff, just pure marine-grade performance.
            </p>
          </div>

          {/* ==========================================================
              SISI KANAN: STAGGERED GRID CARDS (BERSIH & INTERAKTIF)
              ========================================================== */}
          <div className="lg:col-span-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specsData.map((spec, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent p-6 transition-all duration-300 hover:border-[#e2a862]/30 hover:bg-white/[0.03] hover:-translate-y-1 shadow-lg animate-fade-in-up"
                // Mengatur jeda kemunculan tiap kartu biar estetik (0ms, 100ms, 200ms, dst)
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Garis Aksen Emas Vertikal Kecil di Samping (Hanya muncul saat di-hover) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-[#e2a862] rounded-r transition-all duration-300 group-hover:h-1/2" />

                {/* Nama Spesifikasi */}
                <span className="block text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2 transition-colors duration-300 group-hover:text-gray-400">
                  {spec.label}
                </span>
                
                {/* Angka / Nilai Utama */}
                <span className="text-sm sm:text-base font-bold text-white transition-colors duration-300 group-hover:text-[#e2a862]">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}