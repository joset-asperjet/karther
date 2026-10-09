'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export function LottieFirma() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Instanciar directamente con lottie-web usando renderizador svg estándar
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/multimedia-karther/lootie-firma.json',
    });

    // Repetir la animación cada 10 segundos
    const interval = setInterval(() => {
      anim.goToAndPlay(0, true);
    }, 10000);

    return () => {
      clearInterval(interval);
      anim.destroy();
    };
  }, []);

  return (
    <div className="relative h-12 w-36 sm:h-16 sm:w-48 flex-shrink-0 flex items-center justify-start">
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-start [&>svg]:w-full [&>svg]:h-full [&>svg]:max-h-full"
      />
    </div>
  );
}
