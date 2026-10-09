'use client';

import { useState, useRef } from 'react';

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDismiss = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setVisible(false);
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-400 overflow-hidden ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Contenedor que ocupa toda la pantalla respetando el ancho máximo mobile first */}
      <div className="relative h-full w-full max-w-md mx-auto flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src="/multimedia-karther/loader-video.mp4"
          autoPlay
          muted
          playsInline
          controls={false}
          onEnded={handleDismiss}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
