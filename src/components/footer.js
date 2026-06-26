import React from 'react';

export default function Footer() {
  return (
    <section className="relative pt-12 pb-8 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
       

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