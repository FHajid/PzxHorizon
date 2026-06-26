import React from 'react';

export default function WhyChoose() {
  return (
    <section id="why-choose-us" className="relative py-20 lg:py-28 border-t border-white/5 bg-transparent overflow-hidden">
      
      {/* 🌌 AMBIENT SOFT GLOW (Ditaruh pas di tengah latar belakang) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-[#e2a862]/[0.02] blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ==========================================================
            HEADER: FULLY CENTERED & ALIGNED (Rata Tengah Simetris)
            ========================================================== */}
        {/* Menggunakan `flex-col items-center text-center` untuk mengunci posisi di tengah */}
        <div className="flex flex-col items-center text-center space-y-5 mb-16">
          
          {/* Tag Kecil */}
          <span className="text-xs font-bold tracking-[0.2em] text-[#e2a862] uppercase bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-md backdrop-blur-sm">
            Why Choose PZX
          </span>
          
          {/* Judul Utama Rata Tengah (Ditambah max-w-2xl agar teksnya tidak melar kepanjangan ke samping) */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.25] max-w-2xl">
            Nothing matches our performance on the coast.
          </h2>
          
          {/* Deskripsi Rata Tengah (Ditambah mx-auto untuk memastikan kontainer teksnya presisi di tengah) */}
          <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Most ships do their business on arrival and departure. Most work happens within sight of the coast. That is exactly where we operate. We do not over-promise—we build exclusively for the working run.
          </p>
        </div>

        {/* ==========================================================
            BAGIAN BAWAH: PREMIUM ANIMATED SLOGAN BOX
            ========================================================== */}
        <div className="group relative mt-16 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent p-10 sm:p-14 text-center transition-all duration-500 hover:border-[#e2a862]/20 hover:shadow-[0_0_50px_rgba(226,168,98,0.05)]">
          
          {/* Pendaran emas internal saat di-hover */}
          <div className="absolute inset-0 rounded-3xl bg-[#e2a862]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-4 transition-colors duration-300 group-hover:text-gray-400">
            The Ultimate Coastal Promise
          </p>
          
          {/* Animasi teks mengalir dari App.css */}
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-white via-[#e2a862] via-white to-white bg-clip-text text-transparent animate-gold-shine pb-1">
            Maximum Gain. Minimum Pain.
          </h3>
        </div>

      </div>
    </section>
  );
}