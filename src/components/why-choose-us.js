import React from 'react';

export default function WhyChoose() {
  // Poin-poin performa yang diekstrak dari kata-katamu

  return (
    <section id="why-choose-us" className="relative py-20 lg:py-28 border-t border-white/5 bg-[#111B29] overflow-hidden">
      {/* Ambient soft glow di bagian bawah seksi */}
      <div className="absolute bottom-0 right-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* GRID ATAS: JUDUL UTAMA & DESKRIPSI (Gaya Split 2 Kolom Kiri-Kanan) */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end mb-20 text-left">
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#e2a862] uppercase">
              Why Choose PZX
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Nothing matches <br />
              our performance <br />
              on the coast.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base text-gray-400 font-medium leading-relaxed max-w-xl">
              Most ships do their business on arrival and departure. Most work happens within sight of the coast. That is exactly where we operate. We do not over-promise—we build exclusively for the working run.
            </p>
          </div>
        </div>


        {/* BAGIAN BAWAH: SLOGAN UTAMA (BIG BOLD SLOGAN BOX) */}
        <div className="mt-24 border-t border-white/5 pt-12 text-center">
          <p className="text-[11px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-3">
            The Ultimate Coastal Promise
          </p>
          {/* Teks slogan dibuat super besar dengan gradasi emas tipis ke putih */}
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-white via-[#e2a862] to-white bg-clip-text text-transparent">
            Maximum Gain. Minimum Pain.
          </h3>
        </div>

      </div>
    </section>
  );
}