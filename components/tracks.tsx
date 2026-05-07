'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react';
import { Apple, Music2, Radio } from 'lucide-react';

const tracks = [
  {
    title: "It's Not True",
    artist: "Juanito State, Joset",
    label: "Clandestina",
    date: "2025",
    image: "/images/cover-tracks/joset-digital-presskit-its-not-true-clandestina.jpg",
    audioUrl: "/images/previews-tracks/juanito-state,joset-its-not-true.mp3",
    isHype: true,
    links: {
      spotify: "https://open.spotify.com/intl-es/track/3XDwrkidCCrEaetE5d0gXb",
      apple: "https://music.apple.com/us/album/its-not-true/1846496325?i=1846496327",
      deezer: "https://link.deezer.com/s/3236RYkOF8IWROM3MrUO8",
    },
  },
  {
    title: "Still Awake",
    artist: "Joset",
    label: "Discos Eterna",
    date: "2025",
    image: "/images/cover-tracks/joset-digital-presskit-still-awake-discos-eterna.webp",
    audioUrl: "/images/previews-tracks/joset-still-awake.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/06gIs8gSBNFHYnOwb3BBNY",
      apple: "https://music.apple.com/us/song/still-awake-radio-edit/1837760740",
      deezer: "https://link.deezer.com/s/3236SPTtyXUP1wlsnUqOD",
    },
  },
  {
    title: "Andromeda",
    artist: "Joset",
    label: "Discos Eterna",
    date: "2025",
    image: "/images/cover-tracks/joset-digital-presskit-still-awake-discos-eterna.webp",
    audioUrl: "/images/previews-tracks/joset-andromeda.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/1kTsT82MpEGXNZ3JK72YbS",
      apple: "https://music.apple.com/us/song/andr%C3%B3meda-radio-edit/1837760741",
      deezer: "https://link.deezer.com/s/3236UGVZWUWQTs1hdOG9V",
    },
  },
  {
    title: "Coopers Theremin",
    artist: "Joset",
    label: "Code Music",
    date: "2024",
    image: "/images/cover-tracks/joset-digital-presskit-coopers-theremin-code-music-label.jpg",
    audioUrl: "/images/previews-tracks/joset-coopers-theremin.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/5MC2baqsngjPLkrbju77xk",
      apple: "https://music.apple.com/us/song/coopers-theremin/1745583221",
      deezer: "https://link.deezer.com/s/3236WMu3Y2hqtGj1eTvBN",
    },
  },
  {
    title: "Fouche",
    artist: "Joset",
    label: "Code Music",
    date: "2024",
    image: "/images/cover-tracks/joset-digital-presskit-coopers-theremin-code-music-label.jpg",
    audioUrl: "/images/previews-tracks/joset-fouche.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/1PHESMSstqdTKurVTAj5zf",
      apple: "https://music.apple.com/us/song/fouche/1745583324",
      deezer: "https://link.deezer.com/s/3236Y0QbtgkYoZAXNA37p",
    },
  },
  {
    title: "Talleyrand",
    artist: "Joset",
    label: "Code Music",
    date: "2024",
    image: "/images/cover-tracks/joset-digital-presskit-talleyrand-code-music-label.jpg",
    audioUrl: "/images/previews-tracks/joset-talleryrand.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/3mXBl2eKZIFD6AjA9wYCFd",
      apple: "https://music.apple.com/us/album/talleyrand/1745587227?i=1745587229",
      deezer: "https://link.deezer.com/s/323704M2MhKzKvCRhfoFh",
    },
  },
  {
    title: "Aquatic",
    artist: "Joset, Monroe Ramirez",
    label: "Self Released",
    date: "2024",
    image: "/images/cover-tracks/joset-digital-presskit-aquatic-code-music-label.jpg",
    audioUrl: "/images/previews-tracks/joset,monroe-ramirez-aquatic.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/2ye8df1N9DBlVxRhWSoMjX",
      apple: "https://music.apple.com/us/album/aquatic-single/1745578641",
      deezer: "https://www.deezer.com/mx/album/584444182",
    },
  },
  {
    title: "Halo Intro (Joset Remix)",
    artist: "Joset",
    label: "Self Released",
    date: "2021",
    image: "/images/cover-tracks/joset-digital-presskit-resident-evil-2-halo-remix-code-music-label.jpg",
    audioUrl: "/images/previews-tracks/halo-intro-theme(joset-remix).mp3",
    links: {
      bandcamp: "https://joset.bandcamp.com/track/halo-2-intro-theme-joset-remix",
      soundcloud: "https://soundcloud.com/joset-audiofiles/halo-2-main-theme-joset-remix",
    },
  },
  {
    title: "Resident Evil 2 (Joset Remix)",
    artist: "Joset",
    label: "Self Released",
    date: "2020",
    image: "/images/cover-tracks/joset-digital-presskit-resident-evil-2-remix-code-music-label.jpg",
    audioUrl: "/images/previews-tracks/resident-evil-2-saved-room-theme(joset-remix).mp3",
    links: {
      soundcloud: "https://soundcloud.com/joset-audiofiles/joset-saved-room-theme-tribute-to-resident-evil",
      bandcamp: "https://joset.bandcamp.com/track/resident-evil-2-saved-room-theme-joset-remix",
    },
  },
  {
    title: "Push Button Kitty",
    artist: "Joset",
    label: "Self Released",
    date: "2019",
    image: "/images/cover-tracks/joset-digital-presskit-push-button-kitty.jpg",
    audioUrl: "/images/previews-tracks/joset-push-button-kitty.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/4MUzNQSwczu18LUmp2l4PO",
      apple: "https://music.apple.com/us/album/push-button-kitty-single/1530150133",
    },
  },
  {
    title: "Pay For Winrar",
    artist: "Joset",
    label: "Self Released",
    date: "2018",
    image: "/images/cover-tracks/joset-digital-presskit-pay-for-winrar.jpg",
    audioUrl: "/images/previews-tracks/joset-pay-for-winrar.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/album/5nz9NBUogHrk5QF2UZnRkJ",
      deezer: "https://www.deezer.com/mx/album/550457922",
      apple: "https://music.apple.com/us/album/pay-for-winrar-single/1732111206",
    },
  },
  {
    title: "Nessie Laments",
    artist: "Joset",
    label: "Self Released",
    date: "2018",
    image: "/images/cover-tracks/joset-digital-presskit-nessie-laments.jpg",
    audioUrl: "/images/previews-tracks/joset-nessie-laments.mp3",
    links: {
      apple: "https://music.apple.com/us/album/nessies-laments-single/1728458593",
      spotify: "https://open.spotify.com/intl-es/track/13kyUDFrvuelK3waJv7CZB",
      deezer: "https://www.deezer.com/fr/album/542015442",
    },
  },
];

export function Tracks() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const displayedTracks = showAll ? tracks : tracks.slice(0, 4);

  const handlePlayPause = (idx: number, audioUrl: string) => {
    if (playingId === idx && audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.src = `${audioUrl}`;
        audioRef.current.play();
        setPlayingId(idx);
      }
    }
  };

  const handleSkip = (direction: 'forward' | 'backward') => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        0,
        audioRef.current.currentTime + (direction === 'forward' ? 10 : -10)
      );
    }
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setPlayingId(null);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

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
        {displayedTracks.map((track, idx) => (
          <div
            key={idx}
            className="group/item relative flex gap-4 rounded border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-accent/50 hover:bg-white/10"
          >
            {track.isHype && (
              <div className="absolute top-0 right-0 overflow-hidden rounded-tr rounded-bl">
                <div className="bg-[#00d4ff] px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter text-black">
                  Hype
                </div>
              </div>
            )}
            <div className="relative aspect-square h-16 w-16 flex-shrink-0 overflow-hidden rounded group">
              <Image
                src={track.image || "/placeholder.svg"}
                alt={track.title}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => handlePlayPause(tracks.indexOf(track), track.audioUrl)}
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-all duration-200 group-hover:opacity-100"
                title="Play track"
              >
                {playingId === tracks.indexOf(track) && !audioRef.current?.paused ? (
                  <Pause className="h-6 w-6 text-white" fill="currentColor" />
                ) : (
                  <Play className="h-6 w-6 text-white ml-0.5" fill="currentColor" />
                )}
              </button>
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
        ))}
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

      {playingId !== null && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md p-4 shadow-2xl animate-in slide-in-from-bottom duration-300">
          <div className="mx-auto w-full max-w-lg px-4 flex flex-col items-center gap-4">
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-muted">
                  <Image
                    src={tracks[playingId].image || "/placeholder.svg"}
                    alt={tracks[playingId].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {tracks[playingId].title}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {tracks[playingId].artist}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="rounded-full p-2 text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex w-full flex-col gap-2">
              <div className="flex items-center gap-4 w-full">
                <span className="text-[10px] tabular-nums text-muted-foreground min-w-[32px]">
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={(e) => {
                    if (audioRef.current) {
                      audioRef.current.currentTime = parseFloat(e.target.value);
                    }
                  }}
                  className="h-1 flex-1 cursor-pointer rounded-full bg-border accent-accent"
                />
                <span className="text-[10px] tabular-nums text-muted-foreground min-w-[32px]">
                  {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={() => handleSkip('backward')}
                  className="p-1 text-muted-foreground transition-all duration-200 hover:text-foreground"
                >
                  <SkipBack className="h-5 w-5" />
                </button>
                <button
                  onClick={() =>
                    handlePlayPause(playingId, tracks[playingId].audioUrl)
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-background transition-all duration-200 hover:scale-105"
                >
                  {audioRef.current?.paused ? (
                    <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                  ) : (
                    <Pause className="h-5 w-5" fill="currentColor" />
                  )}
                </button>
                <button
                  onClick={() => handleSkip('forward')}
                  className="p-1 text-muted-foreground transition-all duration-200 hover:text-foreground"
                >
                  <SkipForward className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => setPlayingId(null)}
      />
    </section>
  );
}
