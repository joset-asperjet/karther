'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LayoutGrid, Rows, MapPin, Calendar, Clock } from 'lucide-react';

const presentations = [
  {
    city: 'Cali, Colombia',
    place: 'W4FF · Koleto B2B Karther',
    venue: 'La Frecuencia Violeta (Booth)',
    date: 'August 16, 2025',
    image: '/multimedia-karther/gigs/karther-dj-august-16-2025.webp',
  },
  {
    city: 'Cali, Colombia',
    place: 'Woshh! · Rafa Barrios x Classmatic',
    venue: 'La Frecuencia Violeta (Booth)',
    date: 'June 29, 2024',
    image: '/multimedia-karther/gigs/karther-dj-june-29.webp',
  },
  {
    city: 'Cali, Colombia',
    place: 'Gordo · Booth Rec Showcase',
    venue: 'Centro de Eventos Valle del Pacífico',
    date: 'October 15, 2023',
    image: '/multimedia-karther/gigs/karther-dj-october-15-2023.webp',
  },
];

export function Presentations() {
  const [viewMode, setViewMode] = useState<'scroll' | 'cascade'>('scroll');

  return (
    <section className="border-t border-border px-4 py-12">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Key Dates
          </h2>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            Milestone Performances & Shows
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
                    <span>{presentation.venue || presentation.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{presentation.date}</span>
                  </div>
                  {presentation.time && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{presentation.time}</span>
                    </div>
                  )}
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
                    <span>{presentation.venue || presentation.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{presentation.date}</span>
                  </div>
                  {presentation.time && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{presentation.time}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
