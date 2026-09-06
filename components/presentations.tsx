'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LayoutGrid, Rows, MapPin, Calendar, Clock } from 'lucide-react';

const presentations = [
  {
    city: 'Cali',
    place: 'SK Records',
    date: 'November',
    time: 'TBD',
    image: '/images/latest-presentations/joset-presskit-2026-jun-2026-sala-kbron-tbd.webp',
    isUpcoming: true,

  },
  {
    city: 'Medellín',
    place: 'Critical Sounds (Radio)',
    date: 'November',
    time: 'TBD',
    image: '/images/latest-presentations/joset-presskit-2026-noviembre-2026-critical-sounds.webp',
    isUpcoming: true,

  },
  {
    city: 'Cali',
    place: 'Sucursal Fest 2026',
    date: 'October',
    time: 'TBD',
    image: '/images/latest-presentations/joset-presskit-2026-octubre-2025-sucursal-fest-cali.webp',
    isUpcoming: true,

  },
  {
    city: 'Cali',
    place: 'SK Records',
    date: 'August 29, 2026 (Birthday Bash)',
    time: '12:00am',
    image: '/images/latest-presentations/joset-presskit-2026-aug-2026-sala-k-records.webp',
    isUpcoming: false,

  },
  {
    city: 'Cali',
    place: 'Discos Eterna Showcase',
    date: 'July 25, 2026',
    time: '02:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-junio-27-discos-terna-showcase.webp',
  },
  {
    city: 'Medellín',
    place: 'Moresko Club',
    date: 'July 17, 2026',
    time: '12:30 AM',
    image: '/images/latest-presentations/joset-presskit-2026-julio-17-moresko-club.webp',
    isCancelled: true,
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'June 13, 2026',
    time: '12:30 AM',
    image: '/images/latest-presentations/joset-presskit-2026-jun-2026-sala-kbron.webp',
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'April 2026',
    time: '12:00 AM',
    image: '/images/latest-presentations/joset-presskit-2026-abril-2026-sala-kbron.webp',
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'December 2025',
    time: '10:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-diciembre-2025-sala-kbron.webp',
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'November 2025',
    time: '10:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-noviembre-2025-sala-kbron.webp',
  },
  {
    city: 'Medellín',
    place: 'Moresko',
    date: 'October 2025',
    time: '01:00 AM',
    image: '/images/latest-presentations/joset-presskit-2026-octubre-2025-moresko.webp',
  },
  {
    city: 'Cali',
    place: 'Sucursal Fest',
    date: 'October 2025',
    time: '3:30 PM',
    image: '/images/latest-presentations/joset-presskit-2026-octubre-2025-sucursal-fest-cali-sala-kbron-show-case.webp',
  },
  {
    city: 'Medellín, Cerro Verde',
    place: 'Oktoberfest Code',
    date: 'October 2025',
    time: '6:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-octubre-2025-oktoberfest-cerro-verde-code-label-group.webp',
  },
  {
    city: 'Cali',
    place: 'Warhol Rock Bar',
    date: 'September 2025',
    time: '12:30 AM',
    image: '/images/latest-presentations/joset-presskit-2026-septiembre-2025-warhol-rock-bar-fundacion-chiquitines.webp',
  },
  {
    city: 'Cali',
    place: 'Amor Eterno (Discos Eterna Showcase)',
    date: 'September 2025',
    time: '12:30 AM',
    image: '/images/latest-presentations/joset-presskit-2026-septiembre-2025-amor-eterna-discos-eterna-sub-suelo-cali.webp',
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'September 2025',
    time: '10:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-septiembre-2025-sala-kbron.webp',
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'August 2025',
    time: '10:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-agosto-2025-sala-kbron.webp',
  },
  {
    city: 'Cali',
    place: 'Cervezas Calima',
    date: 'June 2025',
    time: '10:30 PM',
    image: '/images/latest-presentations/joset-presskit-2026-junio-2025-cervezas-calima.webp',
  },
  {
    city: 'Medellín',
    place: 'Comuna 13 (Code Label Group)',
    date: 'June 2025',
    time: '4:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-junio-2025-comuna-13-medellin.webp',
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'May 2025',
    time: '10:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-mayo-2025-sala-kbron.webp',
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'March 2025',
    time: '12:30 AM',
    image: '/images/latest-presentations/joset-presskit-2026-marzo-2025-sala-kbron.webp',
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'January 2025',
    time: '10:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-enero-2025-sala-kbron.webp',
  },
  {
    city: 'London',
    place: 'Bloop London Radio',
    date: 'December 2024',
    time: '2:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-diciembre-2024-bloop-london-radio-london.webp',
  },
  {
    city: 'Montpellier',
    place: 'Jungle After Club',
    date: 'December 2024',
    time: '1:00 AM',
    image: '/images/latest-presentations/joset-presskit-2026-diciembre-2024-jungle-after-club-montpellier.webp',
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'October 2024',
    time: '10:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-octubre-2024-sala-kbron.webp',
  },
  {
    city: 'Cali',
    place: 'Korova Club',
    date: 'June 2024',
    time: '12:00 AM',
    image: '/images/latest-presentations/joset-presskit-2026-junio-2024-korova-club.webp',
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'June 2024',
    time: '10:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-junio-2024-sala-kbron.webp',
  },
  {
    city: 'Cali',
    place: 'Hemispheria Showcase',
    date: 'June 2024',
    time: '6:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-junio-2024-hemispheria-showcase.webp',
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'May 2024',
    time: '11:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-mayo-2024-sala-kbron.webp',
  },
  {
    city: 'Cali',
    place: 'Sala Kbron',
    date: 'April 2024',
    time: '10:30 PM',
    image: '/images/latest-presentations/joset-presskit-2026-abril-2024-sala-kbron.webp',
  },
  {
    city: 'Cali',
    place: 'Sonido Central',
    date: 'December 2023',
    time: '1:30 AM',
    image: '/images/latest-presentations/joset-presskit-2026-diciembre-2023-sonido-central.webp',
  },
  {
    city: 'Cali',
    place: 'Garden Lounge',
    date: 'December 2023',
    time: '10:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-diciembre-2023-garden-lounge.webp',
  },
  {
    city: 'Cali',
    place: 'Garden Lounge',
    date: 'October 2023',
    time: '9:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-octubre-2023-garden-lounge.webp',
  },
  {
    city: 'Cali',
    place: 'Garden Lounge',
    date: 'September 2023',
    time: '10:00 PM',
    image: '/images/latest-presentations/joset-presskit-2026-septiembre-2023-garden-lounge.webp',
  },
];

export function Presentations() {
  const [viewMode, setViewMode] = useState<'scroll' | 'cascade'>('scroll');

  return (
    <section className="border-t border-border px-4 py-12">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Live Appearances
          </h2>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            Global Touring & Performance History
          </p>
        </div>

        <div className="flex gap-2 mb-1">
          <button
            onClick={() => setViewMode('scroll')}
            className={`rounded p-2 transition-all duration-200 ${viewMode === 'scroll'
              ? 'bg-accent text-background'
              : 'text-foreground hover:bg-muted'
              }`}
            title="Horizontal scroll"
          >
            <Rows className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('cascade')}
            className={`rounded p-2 transition-all duration-200 ${viewMode === 'cascade'
              ? 'bg-accent text-background'
              : 'text-foreground hover:bg-muted'
              }`}
            title="Cascade view"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
      </div>

      {viewMode === 'scroll' && (
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {presentations.map((presentation, idx) => (
            <div
              key={idx}
              className="group/item relative flex-shrink-0 w-52 flex flex-col gap-3 rounded border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-accent/50 hover:bg-white/10"
            >
              {presentation.isUpcoming && (
                <div className="absolute top-0 right-0 overflow-hidden rounded-tr rounded-bl z-10">
                  <div className="bg-accent px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-background">
                    Upcoming
                  </div>
                </div>
              )}
              {presentation.isCancelled && (
                <div className="absolute top-0 right-0 overflow-hidden rounded-tr rounded-bl z-10">
                  <div className="bg-red-600 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-white">
                    Rescheduled
                  </div>
                </div>
              )}
              <div className="aspect-[4/5] w-full overflow-hidden rounded">
                <Image
                  src={presentation.image || '/placeholder.svg'}
                  alt={`${presentation.place}, ${presentation.city}`}
                  width={216}
                  height={270}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {presentation.place}
                </h3>
                <div className="flex flex-col gap-1 mt-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{presentation.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{presentation.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{presentation.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === 'cascade' && (
        <div className="space-y-4">
          {presentations.map((presentation, idx) => (
            <div
              key={idx}
              className="group/item relative flex gap-4 rounded border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-accent/50 hover:bg-white/10"
            >
              {presentation.isUpcoming && (
                <div className="absolute top-0 right-0 overflow-hidden rounded-tr rounded-bl z-10">
                  <div className="bg-accent px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-background">
                    Upcoming
                  </div>
                </div>
              )}
              {presentation.isCancelled && (
                <div className="absolute top-0 right-0 overflow-hidden rounded-tr rounded-bl z-10">
                  <div className="bg-red-400 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-white">
                    Rescheduled
                  </div>
                </div>
              )}
              <div className="aspect-[4/5] h-24 w-auto flex-shrink-0 overflow-hidden rounded">
                <Image
                  src={presentation.image || '/placeholder.svg'}
                  alt={`${presentation.place}, ${presentation.city}`}
                  width={96}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center gap-1">
                <h3 className="text-sm font-semibold text-foreground">
                  {presentation.place}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{presentation.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{presentation.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{presentation.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
