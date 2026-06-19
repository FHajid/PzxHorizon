import React from 'react';

export default function Features() {
  // Data kartu disesuaikan dengan teks yang ada di gambar contoh PZX
  const featuresData = [
    {
      title: "Landfall",
      description: "Use our system for landfall. Most ships do their business on arrival and departure. That is where we operate."
    },
    {
      title: "Arrival & Departure",
      description: "When arriving or departing port, nothing matches our performance."
    },
    {
      title: "Waypoint Coasting",
      description: "Along the coast, we keep you connected."
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 border-t border-white/5 bg-[#0E1528]">
      {/* Efek sorot lampu ambient haluss di latar belakang */}
      <div className="absolute bottom-0 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-blue-600/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* BAGIAN JUDUL UTAMA SECTION */}
        <div className="flex flex-col space-y-4 mb-16 text-left max-w-3xl">
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div 
              key={index}
              // Efek kartu gelap transparan dengan border tipis mewah (glassmorphism)
              className="group relative rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-8 text-left transition-all duration-300 hover:border-[#e2a862]/30 hover:bg-white/[0.04] shadow-xl"
            >
              {/* Ornamen garis atas kecil yang akan menyala emas saat kartu di-hover */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#e2a862]/0 to-transparent group-hover:via-[#e2a862]/40 transition-all duration-500" />
              
              {/* Judul Kartu */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#e2a862] transition-colors duration-200">
                {feature.title}
              </h3>
              
              {/* Isi Deskripsi Kartu */}
              <p className="text-sm text-gray-400 font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}