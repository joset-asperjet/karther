'use client';

import Image from 'next/image';
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react';
import { useAudioPlayer } from '@/context/audio-player-context';

export function GlobalAudioPlayer() {
  const { currentTrack, isPlaying, currentTime, duration, togglePlayPause, seek, skip, closePlayer } = useAudioPlayer();

  if (!currentTrack) return null;

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md p-4 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="mx-auto w-full max-w-lg px-4 flex flex-col items-center gap-4">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-muted">
              <Image
                src={currentTrack.image || '/placeholder.svg'}
                alt={currentTrack.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                {currentTrack.title}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {currentTrack.artist}
              </p>
            </div>
          </div>
          <button
            onClick={closePlayer}
            className="rounded-full p-2 text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
            title="Cerrar reproductor"
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
              step="0.1"
              value={currentTime}
              onChange={(e) => seek(parseFloat(e.target.value))}
              className="h-1 flex-1 cursor-pointer rounded-full bg-border accent-accent"
            />
            <span className="text-[10px] tabular-nums text-muted-foreground min-w-[32px]">
              {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => skip(-10)}
              className="p-1 text-muted-foreground transition-all duration-200 hover:text-foreground"
              title="Retroceder 10 segundos"
            >
              <SkipBack className="h-5 w-5" />
            </button>
            <button
              onClick={() => togglePlayPause(currentTrack)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-background transition-all duration-200 hover:scale-105"
              title={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" fill="currentColor" />
              ) : (
                <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
              )}
            </button>
            <button
              onClick={() => skip(10)}
              className="p-1 text-muted-foreground transition-all duration-200 hover:text-foreground"
              title="Avanzar 10 segundos"
            >
              <SkipForward className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
