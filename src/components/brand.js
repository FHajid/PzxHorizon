import React from 'react';

export default function OurBrand() {
  return (
    <section id="mission-vision" className="relative py-24 lg:py-32 border-t border-white/5 bg-[#060910] overflow-hidden">
      {/* Pendaran ambient emas lembut di sudut kanan untuk estetika */}
      <div className="absolute top-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-[#e2a862]/5 blur-[130px]" />
      <div className="absolute bottom-1/4 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/[0.03] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* LAYOUT GRID UTAMA SPLIT 2 KOLOM */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center text-left">
          
          {/* KOLOM KIRI: JUDUL BESAR & SLOGAN UTAMA */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <span className="text-xs font-bold tracking-[0.3em] text-[#e2a862] uppercase">
              Mission & Vision
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15]">
              Own the horizon <br />
              with clarity and <br />
              purpose.
            </h2>
            <div className="h-1 w-12 bg-[#e2a862]/50 rounded-full mt-2" />
          </div>

          {/* KOLOM KANAN: DUA KOTAK MANDIRI (MISSION & VISION) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* KOTAK 1: MISSION */}
            <div className="group relative rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent p-8 shadow-xl transition-all duration-300 hover:border-[#e2a862]/30 hover:bg-white/[0.02]">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Penanda Label Emas */}
                <div className="text-xs font-mono font-bold text-[#e2a862] tracking-wider uppercase pt-1 sm:w-24 shrink-0">
                   Mission
                </div>
                {/* Isi Teks Mission */}
                <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed">
                  Eliminate the satellite tax for coastal mariners by turning the 12-mile limit into a high-speed broadband zone.
                </p>
              </div>
            </div>

            {/* KOTAK 2: VISION */}
            <div className="group relative rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent p-8 shadow-xl transition-all duration-300 hover:border-[#e2a862]/30 hover:bg-white/[0.02]">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Penanda Label Emas */}
                <div className="text-xs font-mono font-bold text-[#e2a862] tracking-wider uppercase pt-1 sm:w-24 shrink-0">
                   Vision
                </div>
                {/* Isi Teks Vision */}
                <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed">
                  Become the global coordinate for coastal connectivity, empowering the <span className="text-[#e2a862] font-bold">80% of maritime traffic</span> that works within the horizon.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}