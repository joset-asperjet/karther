'use client';

import Image from 'next/image';

export function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <style>{`
        @keyframes pulseGlow {
          0% {
            opacity: 0.3;
            transform: scale(0.9);
            filter: brightness(1) drop-shadow(0 0 0px var(--accent));
          }
          50% {
            opacity: 1;
            transform: scale(1);
            filter: brightness(1.2) drop-shadow(0 0 20px var(--accent));
          }
          100% {
            opacity: 0.3;
            transform: scale(0.9);
            filter: brightness(1) drop-shadow(0 0 0px var(--accent));
          }
        }
        .loader-animation {
          animation: pulseGlow 1.8s ease-in-out infinite;
        }
      `}</style>
      <div className="loader-animation">
        <Image
          src="/images/joset-presskit-2026-snare-wars-logo.png"
          alt="SNARE WARS"
          width={180}
          height={180}
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
