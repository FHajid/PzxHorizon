import React from 'react';
import LogoPzx from '../assets/logo-Pzx.png'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 lg:py-32 bg-[#0E1528]">
      {/* Efek Gradasi Latar Belakang Halus (Ambient Glow) */}
      <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute top-20 left-1/3 -z-10 h-[300px] w-[300px] rounded-full bg-[#e2a862]/5 blur-[200px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* SISI KIRI: TEKS & TOMBOL AKSES */}
          <div className="flex flex-col space-y-6 text-left">
            {/* Sub-judul Kecil Emas */}
            <span className="text-xs font-bold tracking-[0.2em] text-[#e2a862] uppercase">
              The 12-Mile Specialist
            </span>
            
            {/* Judul Utama Besar */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              When you see <br />
              the coast, we <br />
              connect your <br />
              world.
            </h1>
            
            {/* Deskripsi Pendek */}
            <p className="max-w-md text-base text-gray-400 font-medium leading-relaxed">
              The horizon has limits. We work within them. And we hold the line.
            </p>
            
            {/* Tombol Aksi (Buttons) */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Tombol Utama Emas */}
              <a
                href="#why-choose"
                className="rounded-full bg-[#e2a862] px-6 py-3 text-xs font-semibold text-[#060910] shadow-lg shadow-[#e2a862]/20 hover:bg-[#d49753] transition-all duration-200"
              >
                Why Choose PZX
              </a>
              
              {/* Tombol Kedua Outline Transparan */}
              <a
                href="#comparison"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                View Comparison
              </a>
            </div>
          </div>

          {/* SISI KANAN: EMBEDDED BLENDED DIAGONAL GLOW */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] items-center justify-center rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent p-8 shadow-2xl backdrop-blur-sm">
              
              {/* Pendaran ambient halus di luar logo */}
              <div className="absolute h-48 w-48 rounded-full bg-[#e2a862]/5 blur-[80px]" />

              {/* Pembungkus Logo dengan Efek Blending */}
              <div className="kontainer-logo-blend overflow-hidden rounded-2xl p-4">
                
                {/* Garis cahaya diagonal yang meluncur melayang di atas logo */}
                <div className="cahaya-diagonal" />
                
                {/* Logo PZX Utama */}
                <img 
                  src={LogoPzx} 
                  alt="PZX Horizon Logo" 
                  className="w-48 sm:w-56 h-auto object-contain block relative z-10 drop-shadow-[0_0_15px_rgba(226,168,98,0.3)]" 
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}