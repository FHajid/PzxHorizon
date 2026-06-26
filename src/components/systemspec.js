import React from 'react';

export default function SystemSpecs() {
  // Data baris list sebelah kanan sesuai mockup gambar
  const specsList = [
    "Built for landfall",
    "Built for arrival and departure",
    "Built for waypoint coasting",
    "Built to hold the line"
  ];

  return (
    <section className="relative py-20 lg:py-28 border-t border-white/5 bg-transparent">
      {/* Efek cahaya ambient di sudut kanan atas */}
      <div className="absolute top-0 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-[#e2a862]/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          
          {/* SISI KIRI: TEKS SPESIFIKASI */}
          <div className="flex flex-col space-y-6 text-left">
            {/* Sub-judul Kecil */}
            <span className="text-xs font-bold tracking-[0.2em] text-[#e2a862] uppercase">
              The System
            </span>
            
            {/* Judul Utama Bagian Tiga */}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15] max-w-xl">
              A precision antenna. <br />
              A controlled system. <br />
              One coastal link <br />
              that holds.
            </h2>
            
            {/* Teks Penutup Kecil */}
            <p className="text-sm text-gray-500 font-medium tracking-wide">
              No excess. No complication. Just what works.
            </p>
          </div>

          {/* SISI KANAN: LIST BARIS BERTUMPUK (STACKED ROWS) */}
          <div className="flex flex-col space-y-3 pt-4 lg:pt-12">
            {specsList.map((spec, index) => (
              <div
                key={index}
                // Baris memanjang dengan background super gelap dan border tipis halus
                className="w-full rounded-xl border border-white/[0.03] bg-[#0b111e]/40 px-6 py-4 text-left transition-all duration-200 hover:bg-[#0b111e]/80 hover:border-white/10"
              >
                <span className="text-sm font-semibold tracking-wide text-gray-300">
                  {spec}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}