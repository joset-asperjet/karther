'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, ExternalLink, Disc3, Music, Play, Pause } from 'lucide-react';
import { useAudioPlayer } from '@/context/audio-player-context';

interface RemixTrack {
  number: string;
  title: string;
  duration?: string;
  audioUrl?: string;
}

interface RemixRelease {
  id: string;
  title: string;
  artist: string;
  type: string;
  year: string;
  image: string;
  bandcampUrl: string;
  tag: string;
  tracks: RemixTrack[];
}

const remixReleases: RemixRelease[] = [
  {
    id: 'raw-old-school-vol-6',
    title: 'RAW OLD SCHOOL EDITS VOL.6',
    artist: 'Karther',
    type: 'Remix EP',
    year: '2026',
    image: '/multimedia-karther/music/tracks-covers/remix-series/raw-old-school-edits-vol-6.jpg',
    bandcampUrl: 'https://karther.bandcamp.com/album/raw-old-school-edits-vol-6',
    tag: '5 TRACKS',
    tracks: [
      {
        number: '01',
        title: 'Karther — Cheap And Cheerful (Edit)',
        duration: '05:57',
        audioUrl: '/multimedia-karther/music/edit/vol-6/karther cheap and cheerful.mp3',
      },
      {
        number: '02',
        title: 'Karther — We No Speak Americano (Edit)',
        duration: '05:07',
        audioUrl: '/multimedia-karther/music/edit/vol-6/karter we no speak americano.mp3',
      },
      {
        number: '03',
        title: 'Karther — Cry for You (Edit)',
        duration: '05:10',
        audioUrl: '/multimedia-karther/music/edit/vol-6/karther cry for you.mp3',
      },
      {
        number: '04',
        title: 'Karther — Ski-Ba-Bop-Ba-Dop-Bop (Edit)',
        duration: '06:09',
        audioUrl: '/multimedia-karther/music/edit/vol-6/karther ski ba bop ba dop bop.mp3',
      },
      {
        number: '05',
        title: 'Karther — Ride Or Die (Edit)',
        duration: '05:28',
        audioUrl: '/multimedia-karther/music/edit/vol-6/karther ride or dier.mp3',
      },
    ],
  },
  {
    id: 'raw-old-school-vol-7',
    title: 'RAW OLD SCHOOL EDITS VOL.7',
    artist: 'Karther',
    type: 'Remix EP',
    year: '2026',
    image: '/multimedia-karther/music/tracks-covers/remix-series/raw-old-school-edits-vol-7.jpg',
    bandcampUrl: 'https://karther.bandcamp.com/album/raw-old-school-edits-vol-7',
    tag: '5 TRACKS',
    tracks: [
      {
        number: '01',
        title: 'Karther — Silver Lines (Edit)',
        duration: '05:48',
        audioUrl: '/multimedia-karther/music/edit/vol-7/karther silver lines.mp3',
      },
      {
        number: '02',
        title: 'Karther — Return Of The Tres (Edit)',
        duration: '05:48',
        audioUrl: '/multimedia-karther/music/edit/vol-7/karther return of the tres.mp3',
      },
      {
        number: '03',
        title: 'Karther — Shed My Skin (Edit)',
        duration: '04:43',
        audioUrl: '/multimedia-karther/music/edit/vol-7/karther shed my skin.mp3',
      },
      {
        number: '04',
        title: 'Karther — The Time (Edit)',
        duration: '05:45',
        audioUrl: '/multimedia-karther/music/edit/vol-7/karther the time.mp3',
      },
      {
        number: '05',
        title: 'Karther — The Bad Touch (Edit)',
        duration: '06:15',
        audioUrl: '/multimedia-karther/music/edit/vol-7/karther the bad touch.mp3',
      },
    ],
  },
  {
    id: 'raw-old-school-vol-8',
    title: 'RAW OLD SCHOOL EDITS VOL.8',
    artist: 'Karther',
    type: 'Remix EP',
    year: '2026',
    image: '/multimedia-karther/music/tracks-covers/remix-series/raw-old-school-edits-vol-8.jpg',
    bandcampUrl: 'https://karther.bandcamp.com/album/raw-old-school-edits-vol-8',
    tag: '5 TRACKS',
    tracks: [
      {
        number: '01',
        title: 'Karther — Black and Yellow (Edit)',
        duration: '05:32',
        audioUrl: '/multimedia-karther/music/edit/vol-8/karther black and yellow.mp3',
      },
      {
        number: '02',
        title: 'Karther — Blue (Edit)',
        duration: '06:04',
        audioUrl: '/multimedia-karther/music/edit/vol-8/kasther blue.mp3',
      },
      {
        number: '03',
        title: 'Karther — Work it out (Edit)',
        duration: '05:30',
        audioUrl: '/multimedia-karther/music/edit/vol-8/kasther work it out.mp3',
      },
      {
        number: '04',
        title: 'Karther — Hey Boy Hey Girl (Edit)',
        duration: '05:04',
        audioUrl: '/multimedia-karther/music/edit/vol-8/karther hey boy hey girl.mp3',
      },
      {
        number: '05',
        title: 'Karther, John Ortega — Move your Body (Edit)',
        duration: '05:10',
        audioUrl: '/multimedia-karther/music/edit/vol-8/karther, john ortega - move your body.mp3',
      },
    ],
  },
];

// Clean vector SVG Bandcamp icon (parallelogram mark)
function BandcampIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Bandcamp</title>
      <path d="M0 18.75l7.437-13.5h16.563l-7.438 13.5z" />
    </svg>
  );
}

export function LatestRemixes() {
  const [openReleaseId, setOpenReleaseId] = useState<string | null>(null);
  const { currentTrack, isPlaying, togglePlayPause } = useAudioPlayer();

  const toggleRelease = (id: string) => {
    setOpenReleaseId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative border-t border-border px-4 py-12 overflow-hidden">
      {/* Header */}
      <div className="relative z-10 mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Latest Remixes
        </h2>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Exclusive Edits, Bootlegs & Club Weapon EPs
        </p>
      </div>

      {/* EP Releases list with background glow */}
      <div className="relative">
        {/* Blurred red gradient circle shifted to the right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-gradient-to-bl from-red-500/30 via-rose-600/20 to-red-900/10 blur-3xl opacity-80"
        />

        <div className="relative z-10 space-y-4">
        {remixReleases.map((release) => {
          const isOpen = openReleaseId === release.id;
          const isReleasePlaying = release.tracks.some(
            (t) => t.audioUrl && t.audioUrl === currentTrack?.audioUrl && isPlaying
          );

          return (
            <div
              key={release.id}
              className="group/item relative overflow-hidden rounded border border-white/10 bg-white/5 transition-all duration-200 hover:border-accent/40 hover:bg-white/[0.07]"
            >
              {/* Main Card Header / Summary */}
              <div className="p-4 flex gap-4 items-center">
                {/* EP Cover Image */}
                <div className="relative aspect-square h-20 w-20 flex-shrink-0 overflow-hidden rounded bg-black/40 border border-white/10 group/cover">
                  <Image
                    src={release.image}
                    alt={release.title}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Play first track / toggle play button on cover hover */}
                  {release.tracks[0]?.audioUrl && (
                    <button
                      onClick={() => {
                        const firstTrack = release.tracks[0];
                        togglePlayPause({
                          id: `${release.id}-0`,
                          title: firstTrack.title,
                          artist: release.artist,
                          image: release.image,
                          audioUrl: firstTrack.audioUrl!,
                        });
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover/cover:opacity-100"
                      title={isReleasePlaying ? "Pausar" : "Reproducir EP"}
                    >
                      {isReleasePlaying ? (
                        <Pause className="h-7 w-7 text-white" fill="currentColor" />
                      ) : (
                        <Play className="h-7 w-7 text-white ml-0.5" fill="currentColor" />
                      )}
                    </button>
                  )}

                  <span className="absolute bottom-1 right-1 text-[8px] font-black uppercase tracking-wider px-1 py-0.5 rounded bg-black/70 text-accent">
                    EP
                  </span>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-accent">
                      {release.type}
                    </span>
                    <span className="text-[9px] text-white/30">•</span>
                    <span className="text-[9px] text-muted-foreground font-mono">
                      {release.year}
                    </span>
                    <span className="text-[9px] text-white/30">•</span>
                    <span className="text-[9px] font-medium text-white/70">
                      {release.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-foreground truncate">
                    {release.title}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {release.artist}
                  </p>

                  {/* Actions row */}
                  <div className="mt-2.5 flex items-center justify-between gap-2">
                    {/* Toggle Tracklist Button */}
                    <button
                      onClick={() => toggleRelease(release.id)}
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors"
                    >
                      <Disc3 className={`h-3 w-3 text-accent transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                      <span>{isOpen ? 'Ocultar Tracklist' : 'Ver Tracklist'}</span>
                      {isOpen ? (
                        <ChevronUp className="h-3 w-3 text-white/60" />
                      ) : (
                        <ChevronDown className="h-3 w-3 text-white/60" />
                      )}
                    </button>

                    {/* Bandcamp Link button */}
                    <a
                      href={release.bandcampUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#629aa9]/15 hover:bg-[#629aa9]/25 hover:border-[#629aa9]/60 px-2.5 py-1 text-[10px] font-semibold text-white transition-all duration-200 hover:scale-105"
                      title="Listen & Download on Bandcamp"
                    >
                      <BandcampIcon className="h-2.5 w-2.5 text-[#629aa9]" />
                      <span className="font-mono text-[9px] tracking-wide">Bandcamp</span>
                      <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Accordion Tracklist with Audio Previews */}
              {isOpen && (
                <div className="border-t border-white/10 bg-black/40 px-4 py-3 animate-in fade-in slide-in-from-top-1 duration-200">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-1.5">
                    <Music className="h-2.5 w-2.5 text-accent" />
                    Tracklist & Previews
                  </p>
                  <div className="divide-y divide-white/5">
                    {release.tracks.map((t, idx) => {
                      const isCurrentPlaying = currentTrack?.audioUrl === t.audioUrl && isPlaying;
                      const isCurrentSelected = currentTrack?.audioUrl === t.audioUrl;

                      return (
                        <div
                          key={t.number}
                          className={`py-2 flex items-center justify-between gap-3 text-xs transition-colors rounded px-1.5 -mx-1.5 ${
                            isCurrentSelected ? 'bg-white/10 text-white' : 'hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {t.audioUrl ? (
                              <button
                                onClick={() =>
                                  togglePlayPause({
                                    id: `${release.id}-${idx}`,
                                    title: t.title,
                                    artist: release.artist,
                                    image: release.image,
                                    audioUrl: t.audioUrl!,
                                  })
                                }
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                                  isCurrentPlaying
                                    ? 'bg-accent text-background scale-105 shadow-md shadow-accent/30'
                                    : 'bg-white/10 text-white hover:bg-accent hover:text-background'
                                }`}
                                title={isCurrentPlaying ? 'Pausar preview' : 'Reproducir preview'}
                              >
                                {isCurrentPlaying ? (
                                  <Pause className="h-3 w-3" fill="currentColor" />
                                ) : (
                                  <Play className="h-3 w-3 ml-0.5" fill="currentColor" />
                                )}
                              </button>
                            ) : (
                              <span className="text-[10px] font-mono text-accent/80 font-bold min-w-[18px]">
                                {t.number}
                              </span>
                            )}
                            <span
                              className={`truncate font-medium ${
                                isCurrentSelected ? 'text-accent font-semibold' : 'text-white/90'
                              }`}
                            >
                              {t.title}
                            </span>
                          </div>
                          {t.duration && (
                            <span className="text-[10px] font-mono text-muted-foreground/70 shrink-0">
                              {t.duration}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
