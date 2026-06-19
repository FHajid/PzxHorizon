import React from 'react';

export default function Footer() {
  return (
    <section className="relative pt-12 pb-8 bg-[#060910]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* BAGIAN 1: KOTAK CALL TO ACTION (CTA)                      */}
        {/* ========================================================= */}
        <div className="relative rounded-2xl border border-white/5 bg-gradient-to-r from-[#0b111e]/60 to-transparent p-8 sm:p-12 mb-20 shadow-xl">
          <div className="flex flex-col space-y-6 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 text-left">
            
            {/* Teks di dalam kotak */}
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-bold tracking-[0.2em] text-[#e2a862] uppercase">
                Closing
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Fair winds. Strong signal.
              </h2>
            </div>
            
            {/* Tombol Kontak Emas */}
            <div>
              <a
                href="#contact"
                className="inline-block rounded-full bg-[#e2a862] px-6 py-3 text-xs font-semibold text-[#060910] shadow-lg shadow-[#e2a862]/10 hover:bg-[#d49753] transition-all duration-200 whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* BAGIAN 2: FOOTER (CATATAN KAKI)                           */}
        {/* ========================================================= */}
        <footer className="flex flex-col space-y-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 text-xs text-gray-500 font-medium tracking-wide">
          {/* Sisi Kiri */}
          <div className="text-left">
            <p>© PZX Horizon Communications</p>
          </div>
          
          {/* Sisi Kanan */}
          <div className="text-left sm:text-right">
            <p>Maximum Gain. Minimum Pain.</p>
          </div>
        </footer>

      </div>
    </section>
  );
}