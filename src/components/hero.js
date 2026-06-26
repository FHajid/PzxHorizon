import React from 'react';
import LogoPzx from '../assets/logo-Pzx.png';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-12 sm:py-20 lg:py-32 bg-transparent">
      
      {/* 🌌 AMBIENT GLOW RESPONSIF (Ukurannya otomatis menyesuaikan layar) */}
      <div className="absolute top-0 right-0 lg:right-1/4 -z-10 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-blue-500/10 blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-20 left-0 lg:left-1/3 -z-10 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full bg-[#e2a862]/5 blur-[100px] sm:blur-[200px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid System: Rapi bertumpuk di mobile, otomatis pecah 2 kolom di desktop */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          
          {/* ==========================================================
              SISI KIRI: TEKS & TOMBOL (STRICT LEFT-ALIGNED / GAYA PREMIUM)
              ========================================================== */}
          <div className="flex flex-col space-y-5 sm:space-y-6 text-left items-start">
            
            {/* Tag Kecil */}
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#e2a862] uppercase bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-md backdrop-blur-sm">
              The 12-Mile Specialist
            </span>
            
            {/* Judul Responsif (Ukuran text-3xl di HP pas, tidak kebesaran dan tidak patah aneh) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2] lg:leading-[1.15]">
              When you see <br />
              the coast, we <br />
              connect your <br />
              world.
            </h1>
            
            {/* Deskripsi Pendek */}
            <p className="max-w-md text-xs sm:text-base text-gray-400 font-medium leading-relaxed">
              The horizon has limits. We work within them. And we hold the line.
            </p>
            
            {/* Tombol Akses (Tetap bersandingan di mobile dengan ukuran yang lebih compact) */}
            <div className="flex flex-row flex-wrap gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#why-choose"
                className="rounded-xl bg-[#e2a862] px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold text-[#060910] shadow-lg shadow-[#e2a862]/10 hover:bg-[#d49753] transition-all duration-200 text-center flex-1 sm:flex-none"
              >
                Why Choose PZX
              </a>
              <a
                href="#comparison"
                className="rounded-xl border border-white/10 bg-white/5 px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-center flex-1 sm:flex-none"
              >
                View Comparison
              </a>
            </div>
          </div>

          {/* ==========================================================
              SISI KANAN: FLUID LOGO BOX (ANTI-MELUBER DI HP KECIL)
              ========================================================== */}
          <div className="flex justify-center lg:justify-end items-center w-full pt-4 lg:pt-0">
            {/* 
              KUNCI RESPONSIVENESS: 
              - Menggunakan `w-full max-w-[320px]` dan `aspect-square` agar boks selalu berbentuk kotak sempurna mengikuti lebar HP.
              - Di desktop (`sm:`), ukurannya otomatis naik ke batas maksimal `max-w-[400px]`.
            */}
            <div className="relative flex w-full max-w-[150px] xs:max-w-[220px] sm:max-w-[400px] aspect-square items-center justify-center rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              
              {/* Pendaran Soft di Belakang Logo */}
              <div className="absolute h-32 w-32 sm:h-44 sm:w-44 rounded-full bg-[#e2a862]/10 blur-[40px] sm:blur-[60px] pointer-events-none" />

              {/* Wadah Utama Logo PZX */}
              <div className="pzx-logo-container transition-transform duration-500 hover:scale-105 w-full flex items-center justify-center">
                
                {/* Logo otomatis mengecil secara proporsional mengikuti boksnya */}
                <img 
                  src={LogoPzx} 
                  alt="PZX Horizon Logo" 
                  className="w-6/8 sm:w-56 h-auto object-contain block pzx-logo-base" 
                />

                {/* Lapisan Cahaya Masking dari App.css */}
                <div className="pzx-logo-overlay" />

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}