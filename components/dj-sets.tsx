import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';

const djSets = [
  {
    title: 'SNARE WARS Radio 002',
    description: 'Something else that has influenced me is being surrounded by progressive DJs. This reshaped my idea of how track blending and transitions should sound.',
    duration: '60 min',
    date: 'June 2026',
    image: '/images/latest-dj-sets/joset-digital-presskit-latest-dj-sets-snarewars-radio-002.webp',
    url: 'https://soundcloud.com/joset-audiofiles/snare-wars-001-the-first-of?in=joset-audiofiles/sets/snare-wars-radio',
    mixcloudUrl: 'https://www.mixcloud.com/joset_asperjet/snare-wars-001-the-first-of-the-year-mixed-by-joset/',
  },
  {
    title: 'Sala Kbron Residency',
    description: 'An evening in an intimate setting, with friends; the perfect opportunity to expand musically.',
    duration: '180 min',
    date: 'April 2026',
    image: '/images/latest-dj-sets/joset-digital-presskit-latest-dj-sets-sk02.webp',
    url: 'https://soundcloud.com/joset-audiofiles/joset-sala-kbron-apr-18-2026?in=joset-audiofiles/sets/dj-sets',
    mixcloudUrl: 'https://www.mixcloud.com/joset_asperjet/joset-sala-kbron-apr-18-2026/',
  },
  {
    title: 'SNARE WARS 2025 Year Mix',
    description: '2025 Year Mix Mixed by Joset',
    duration: '180 min',
    date: 'December 2025',
    image: '/images/latest-dj-sets/joset-digital-presskit-latest-dj-sets-1.jpg',
    url: 'https://soundcloud.com/joset-audiofiles/snare-wars-2025-year-mix-mixed-by-joset',
    mixcloudUrl: 'https://www.mixcloud.com/joset_asperjet/snare-wars-2025-year-mix-mixed-by-joset/',
  },
  {
    title: 'Sala Kbron Residency',
    description: 'The last hour of one of my most iconic sets at my residency club, Sala Kbron.',
    duration: '60 min',
    date: 'October 2025',
    image: '/images/latest-dj-sets/joset-digital-presskit-latest-dj-sets.jpg',
    url: 'https://soundcloud.com/joset-audiofiles/joset-sala-kbron-oct-04-2025?in=joset-audiofiles/sets/dj-sets',
  },
];

export function DJSets() {
  return (
    <section className="border-t border-border px-4 py-12">
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Latest DJ Sets
        </h2>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Live Recordings & Curated Sessions
        </p>
      </div>

      <div className="space-y-4">
        {djSets.map((set, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded border border-white/10 bg-white/5 transition-all duration-200 hover:border-accent/50 hover:bg-white/10"
          >
            <Link
              href={set.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src={set.image || "/placeholder.svg"}
                  alt={set.title}
                  width={328}
                  height={128}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-200 group-hover:bg-black/60">
                  <PlayCircle className="h-8 w-8 text-white transition-transform duration-200 group-hover:scale-110" />
                </div>
              </div>

              <div className="p-3">
                <h3 className="text-sm font-semibold text-foreground">
                  {set.title}
                </h3>
                <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground/80 line-clamp-1">
                  {set.description}
                </p>
              </div>
            </Link>

            <div className="mt-2 flex items-center justify-between border-t border-white/5 bg-black/50 px-3 py-2">
              <div className="flex items-center gap-3">
                <p className="text-[10px] font-medium text-accent">{set.duration}</p>
                <div className="flex items-center gap-2 border-l border-white/10 pl-3">
                  <Link
                    href={set.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-40 hover:opacity-100 transition-opacity"
                    title="Listen on SoundCloud"
                  >
                    <Image
                      src="/images/social-media-logos/joset-presskit-2026-icon-soundcloud.png"
                      alt="SoundCloud"
                      width={14}
                      height={14}
                      className="brightness-0 invert h-3.5 w-auto object-contain"
                    />
                  </Link>
                  {set.mixcloudUrl && (
                    <Link
                      href={set.mixcloudUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-40 hover:opacity-100 transition-opacity"
                      title="Listen on Mixcloud"
                    >
                      <Image
                        src="/images/social-media-logos/joset-presskit-2026-icon-mixcloud.png"
                        alt="Mixcloud"
                        width={14}
                        height={14}
                        className="brightness-0 invert h-3.5 w-auto object-contain"
                      />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60">{set.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
