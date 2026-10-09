'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';
import { useAudioPlayer } from '@/context/audio-player-context';

const tracks = [
  {
    title: "Mi Flow",
    artist: "Karther, Pavelz",
    label: "Arawak Records",
    date: "2026-10-12",
    image: "/multimedia-karther/music/tracks-covers/mi-flow.webp",
    audioUrl: "/multimedia-karther/music/karther - mi flow.mp3",
    links: {
      beatport: "https://www.beatport.com/es/track/mi-flow/30412692",
    },
  },
  {
    title: "Enciendelo",
    artist: "Erick Cz, Karther",
    label: "Arawak Records",
    date: "2026-10-02",
    image: "/multimedia-karther/music/tracks-covers/enciendelo.webp",
    audioUrl: "/multimedia-karther/music/Karther, Erick CZ - enciendelo.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/album/6Rpblef9yGf0wn98EhnVPS",
      apple: "https://music.apple.com/es/album/enciendelo-single/1891303104",
    },
  },
  {
    title: "Dexter",
    artist: "Karther",
    label: "Nebulozza Records",
    date: "2026-09-18",
    image: "/multimedia-karther/music/tracks-covers/dexter.webp",
    audioUrl: "/multimedia-karther/music/karther - dexter.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/49lOlpA0FCXKt6xJMedZ8u",
      beatport: "https://www.beatport.com/es/track/dexter/30287628",
    },
  },
  {
    title: "No Body",
    artist: "Cleyn, Karther",
    label: "Supersonica Music",
    date: "2026-08-15",
    image: "/multimedia-karther/music/tracks-covers/no-body.webp",
    audioUrl: "/multimedia-karther/music/karther - no body.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/1lEHBGGFB1YFAcdMtwlJdv",
      apple: "https://music.apple.com/es/album/no-body-ep-single/6793633085",
    },
  },
  {
    title: "California",
    artist: "Karther",
    label: "Supersonica Music",
    date: "2026-08-15",
    image: "/multimedia-karther/music/tracks-covers/california.webp",
    audioUrl: "/multimedia-karther/music/karther-california.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/0SR8TiD3H7RQ0V28GRmH9C",
      apple: "https://music.apple.com/es/song/california/6793633088",
    },
  },
  {
    title: "Zumbalo",
    artist: "Karther, Salva (COL)",
    label: "Aura Records Music",
    date: "2026-08-10",
    image: "/multimedia-karther/music/tracks-covers/zumbalo.webp",
    audioUrl: "/multimedia-karther/music/karther - zumbalo.mp3",
    links: {
      beatport: "https://www.beatport.com/es/track/zumbalo/29210248",
    },
  },
  {
    title: "Vacilalo",
    artist: "Karther, John Ortega",
    label: "MangoTech Record",
    date: "2026-06-13",
    image: "/multimedia-karther/music/tracks-covers/vacilalo.webp",
    audioUrl: "/multimedia-karther/music/karther - vacilalo.mp3",
    links: {
      apple: "https://music.apple.com/es/song/vaci-lalo/6776368254",
    },
  },
  {
    title: "Fek4",
    artist: "Karther, John Ortega",
    label: "MangoTech Record",
    date: "2026-06-13",
    image: "/multimedia-karther/music/tracks-covers/fek4.webp",
    audioUrl: "/multimedia-karther/music/karther - fek4.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/5dkYYrMTqch9QGrCGzuIoz",
    },
  },
  {
    title: "J4zZ",
    artist: "David Figueira, Karther",
    label: "Maya Room Records",
    date: "2026-06-08",
    image: "/multimedia-karther/music/tracks-covers/j4zz.webp",
    audioUrl: "",
  },
];

export function Tracks() {
  const [showAll, setShowAll] = useState(false);
  const { currentTrack, isPlaying, togglePlayPause } = useAudioPlayer();

  const displayedTracks = showAll ? tracks : tracks.slice(0, 4);

  return (
    <section className="border-t border-border px-4 py-12">
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Latest Tracks
        </h2>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Selected Discography & Original Works
        </p>
      </div>

      <div className="space-y-4">
        {displayedTracks.map((track, idx) => {
          const isThisPlaying = currentTrack?.audioUrl === track.audioUrl && isPlaying;

          return (
            <div
              key={idx}
              className="group/item relative flex gap-4 rounded border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-accent/50 hover:bg-white/10"
            >
              <div className="relative aspect-square h-16 w-16 flex-shrink-0 overflow-hidden rounded group">
                <Image
                  src={track.image || "/placeholder.svg"}
                  alt={track.title}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
                {track.audioUrl && (
                  <button
                    onClick={() =>
                      togglePlayPause({
                        id: `track-${idx}`,
                        title: track.title,
                        artist: track.artist,
                        image: track.image || "/placeholder.svg",
                        audioUrl: track.audioUrl,
                      })
                    }
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-all duration-200 group-hover:opacity-100"
                    title={isThisPlaying ? "Pausar track" : "Reproducir track"}
                  >
                    {isThisPlaying ? (
                      <Pause className="h-6 w-6 text-white" fill="currentColor" />
                    ) : (
                      <Play className="h-6 w-6 text-white ml-0.5" fill="currentColor" />
                    )}
                  </button>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {track.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{track.artist}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-medium text-accent">{track.label}</p>
                    <p className="text-xs text-muted-foreground">{track.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {track.links?.spotify && (
                      <a
                        href={track.links.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        title="Listen on Spotify"
                      >
                        <Image
                          src="/images/music-streaming/joset-digital-presskit-spotify-logo.png"
                          alt="Spotify"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </a>
                    )}
                    {track.links?.apple && (
                      <a
                        href={track.links.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        title="Listen on Apple Music"
                      >
                        <Image
                          src="/images/music-streaming/joset-digital-presskit-apple-music-logo.png"
                          alt="Apple Music"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </a>
                    )}
                    {track.links?.beatport && (
                      <a
                        href={track.links.beatport}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        title="Buy on Beatport"
                      >
                        <Image
                          src="/images/social-media-logos/joset-presskit-2026-icon-beatport.png"
                          alt="Beatport"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </a>
                    )}
                    {track.links?.deezer && (
                      <a
                        href={track.links.deezer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        title="Listen on Deezer"
                      >
                        <Image
                          src="/images/music-streaming/joset-digital-presskit-deezer-logo.png"
                          alt="Deezer"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </a>
                    )}
                    {track.links?.bandcamp && (
                      <a
                        href={track.links.bandcamp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        title="Listen on Bandcamp"
                      >
                        <Image
                          src="/images/social-media-logos/joset-presskit-2026-icon-bandcamp.png"
                          alt="Bandcamp"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </a>
                    )}
                    {track.links?.soundcloud && (
                      <a
                        href={track.links.soundcloud}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        title="Listen on SoundCloud"
                      >
                        <Image
                          src="/images/social-media-logos/joset-presskit-2026-icon-soundcloud.png"
                          alt="SoundCloud"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!showAll && tracks.length > 4 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="rounded-full border border-border px-6 py-2 text-xs font-medium uppercase tracking-widest text-foreground transition-all duration-200 hover:bg-muted hover:border-accent"
          >
            View More Tracks
          </button>
        </div>
      )}
    </section>
  );
}
