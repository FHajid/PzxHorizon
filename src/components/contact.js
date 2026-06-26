import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 border-t border-white/5 bg-transparent overflow-hidden">
      {/* Efek pendaran cahaya biru-emas halus di latar belakang */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-blue-500/[0.02] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-[#e2a862]/[0.02] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start text-left">
          
          {/* SISI KIRI: DETAIL KONTAK & ALAMAT (DATA DARI KAMU) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.3em] text-[#e2a862] uppercase block">
                Contact Us
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                Speak to someone <br />
                who knows the coast.
              </h2>
              <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed max-w-md">
                Questions about the system, vessel fit-out, dealer options, or support? Reach out and we’ll keep it straight.
              </p>
            </div>

            {/* KARTU ALAMAT KANTOR (OFFICE DETAILS) */}
            <div className="border-l-2 border-[#e2a862] pl-6 space-y-2">
              <h4 className="text-base font-bold text-white tracking-wide">Capt. Phil</h4>
              <p className="text-xs font-bold text-[#e2a862] uppercase tracking-wider">PZX Horizon Communications</p>
              <div className="text-sm text-gray-400 font-medium leading-relaxed pt-1">
                1 North Bridge Road <br />
                #18-06 High Street Centre <br />
                Singapore 179094
              </div>
            </div>

            {/* PROMISE BOX (REACH THE HORIZON) */}
            <div className="rounded-xl border border-white/5 bg-white/[0.01] p-6 max-w-sm">
              <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block mb-2">// Reach the Horizon</span>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">
                Use our system for landfall. Most work happens on arrival and departure. <span className="text-[#e2a862]">That is exactly where we operate.</span>
              </p>
            </div>
          </div>

          {/* SISI KANAN: FORMULIR INPUT YANG ELEGAN (INTERAKTIF) */}
          <div className="lg:col-span-7 bg-[#0b111e]/20 border border-white/5 rounded-2xl p-8 sm:p-10 shadow-2xl backdrop-blur-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              {/* INPUT NAMA */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., John Doe"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#e2a862] focus:ring-1 focus:ring-[#e2a862] transition-all"
                />
              </div>

              {/* INPUT EMAIL */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@vessel-ops.com"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#e2a862] focus:ring-1 focus:ring-[#e2a862] transition-all"
                />
              </div>

              {/* INPUT PESAN (MESSAGE) */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Your Message</label>
                <textarea 
                  rows="4"
                  placeholder="Tell us about your vessel or system requirements..."
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#e2a862] focus:ring-1 focus:ring-[#e2a862] transition-all resize-none"
                />
              </div>

              {/* TOMBOL KIRIM EMAS */}
              <button 
                type="submit"
                className="w-full bg-[#e2a862] hover:bg-[#d49953] text-[#060910] font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#e2a862]/10 transition-all duration-200 active:scale-[0.99]"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}