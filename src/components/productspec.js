import React from 'react';

export default function ProductSpecs() {
  // Data spesifikasi teknis dari angka-angka yang kamu berikan
  const specsData = [
    { label: "Frequency Range", value: "600 MHz – 6 GHz" },
    { label: "Peak Gain", value: "Up to 9.5 dBi" },
    { label: "Operating Range", value: "Optimized for 0–12 nautical miles" },
    { label: "Latency", value: "20–50 ms" },
    { label: "Ingress Protection", value: "IP68 (Waterproof & Dustproof)" },
    { label: "Mounting Compatibility", value: "Standard 1\" 14-TPI thread / L-bracket option" }
  ];

  return (
    <section id="product-specs" className="relative py-20 lg:py-28 border-t border-white/5 bg-[#0E1528] overflow-hidden">
      {/* Efek pendaran lampu ambient di sudut kanan bawah */}
      <div className="absolute -bottom-20 -right-20 -z-10 h-[350px] w-[350px] rounded-full bg-[#e2a862]/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start text-left">
          
          {/* SISI KIRI: JUDUL BESAR & PENGANTAR GAGAH */}
          <div className="lg:col-span-4 flex flex-col space-y-4 sticky top-28">
            <span className="text-xs font-bold tracking-[0.2em] text-[#e2a862] uppercase">
              Technical Data
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              The numbers <br />
              that matter <br />
              at sea.
            </h2>
            <p className="max-w-sm text-sm text-gray-400 font-medium leading-relaxed">
              Every detail is calibrated for the absolute reality of maritime operations. No fluff, just pure marine-grade performance.
            </p>
          </div>

          {/* SISI KANAN: GRID DETAIL SPESIFIKASI (KOKOH & MODERN) */}
          <div className="lg:col-span-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specsData.map((spec, index) => (
              <div 
                key={index}
                // Kotak spesifikasi minimalis dengan border transparan premium
                className="group relative rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02]"
              >
                {/* Nama Spesifikasi (Label) */}
                <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  {spec.label}
                </span>
                
                {/* Angka / Nilai Utama (Value) */}
                <span className="text-base font-bold text-white group-hover:text-[#e2a862] transition-colors duration-200 block">
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