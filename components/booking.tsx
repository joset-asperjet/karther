'use client';

import Image from 'next/image';

export function Booking() {
  return (
    <section className="border-t border-border px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Booking & Management
        </h2>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
          Global Representation & Direct Inquiries
        </p>
      </div>

      {/* Booking CTA Card */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-red-500/30 bg-red-950/20 px-6 py-6 text-center backdrop-blur-md transition-all duration-300 hover:border-red-400/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.18)]">
        {/* Animated Red Ambient Glow (sweeps left to right) */}
        <div className="animate-glow-sweep pointer-events-none absolute top-1/2 left-1/2 h-28 w-64 -translate-y-1/2 rounded-full bg-red-500/20 blur-2xl" />
        <div className="animate-glow-sweep pointer-events-none absolute top-1/2 left-1/2 h-20 w-44 -translate-y-1/2 rounded-full bg-rose-500/15 blur-xl [animation-delay:-3s]" />

        <div className="relative z-10 space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Direct Contact & Dates
          </p>
          <a
            href="mailto:koletobeatz@hotmail.es?subject=Booking%20Inquiry%20-%20Karther"
            className="inline-block text-base font-bold text-red-400 underline underline-offset-4 transition-colors hover:text-red-300"
          >
            koletobeatz@hotmail.es
          </a>
        </div>

        {/* Booth Logo at the Bottom */}
        <div className="relative z-10 mt-4 flex items-center justify-center">
          <Image
            src="/multimedia-karther/logo/logo-booth.png"
            alt="Booth Agency"
            width={95}
            height={32}
            className="h-7 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}
