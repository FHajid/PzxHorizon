import React from 'react';

export default function Features() {
  // Data kartu disesuaikan dengan teks operasional PZX dan grafik kustom
  const features = [
    {
      title: "Landfall",
      description: "Use our system for landfall. Most ships do their business on arrival and departure. That is where we operate.",
      // Grafik 1: Garis Sinyal Cakrawala Bersilangan (Radar Lock)
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-7 h-[2px] bg-[#e2a862] rotate-45 transform transition-all duration-500 group-hover:rotate-90" />
          <div className="absolute w-7 h-[2px] bg-[#e2a862]/30 -rotate-45 transform transition-all duration-500 group-hover:rotate-0" />
          <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#fff]" />
        </div>
      )
    },
    {
      title: "Arrival & Departure",
      description: "When arriving or departing port, nothing matches our performance.",
      // Grafik 2: Perisai Kotak Berlapis (Layered Port Anchor Tech)
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-6 h-6 border border-[#e2a862]/40 rounded-md transform rotate-45 group-hover:scale-110 group-hover:border-[#e2a862] transition-all duration-300" />
          <div className="absolute w-4 h-4 border border-dashed border-white/20 rounded-sm transform -rotate-45" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#e2a862]" />
        </div>
      )
    },
    {
      title: "Waypoint Coasting",
      description: "Along the coast, we keep you connected.",
      // Grafik 3: Pulsa Data Konsentris (Signal Waves)
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center space-x-1">
          <div className="w-[3px] h-3 bg-white/20 rounded-full group-hover:h-5 group-hover:bg-[#e2a862] transition-all duration-300" />
          <div className="w-[3px] h-5 bg-[#e2a862] rounded-full group-hover:h-3 transition-all duration-300" />
          <div className="w-[3px] h-4 bg-white/40 rounded-full group-hover:h-6 group-hover:bg-[#e2a862] transition-all duration-300" />
          <div className="w-[3px] h-2 bg-white/10 rounded-full group-hover:h-4 transition-all duration-300" />
        </div>
      )
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28 border-t border-white/5 bg-transparent">
      {/* Efek sorot lampu ambient halus di latar belakang */}
      <div className="absolute bottom-0 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-blue-600/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* BAGIAN JUDUL UTAMA SECTION */}
        <div className="flex flex-col space-y-4 mb-12 text-left max-w-3xl">
          {/* Sub-judul Kecil */}
          <span className="text-xs font-bold tracking-[0.2em] text-[#e2a862] uppercase">
            Operational Truth
          </span>
          
          {/* Judul Besar */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            Most work happens <br />
            within sight of the <br />
            coast.
          </h2>
          
          {/* Deskripsi Pendek */}
          <p className="max-w-2xl text-sm sm:text-base text-gray-400 font-medium leading-relaxed">
            Most systems are built for deep water. Most vessels are not working there. So why pay deep-sea prices for a connection that barely keeps up?
          </p>
        </div>

        {/* BAGIAN TIGA KARTU (GRID SYSTEM) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6 ">
          {features.map((item, index) => ( 
            <div 
              key={index}
              // Efek Premium: Hover naik ke atas + Glow Border tipis khas Linear
              className="p-8 rounded-2xl border border-white/5 bg-[#0b111e]/30 bg-transparent text-left
                         transform transition-all duration-500 ease-out hover:-translate-y-2 
                         hover:border-[#e2a862]/30 hover:shadow-[0_15px_35px_-10px_rgba(226,168,98,0.12)] cursor-pointer group"
            >
              {/* 🖥️ CONTAINER GRAFIK ABSTRAK KUSTOM */}
              <div className="h-12 w-12 rounded-xl bg-[#060910] border border-white/5 flex items-center justify-center mb-6 
                              group-hover:border-[#e2a862]/20 shadow-inner transition-all duration-300">
                {item.graphic}
              </div>
              
              {/* JUDUL KARTU */}
              <h3 className="text-white font-bold text-lg group-hover:text-[#e2a862] transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* DESKRIPSI KARTU */}
              <p className="text-gray-400 text-sm mt-2.5 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}