'use client';

import Image from 'next/image';
import { LottieFirma } from './lottie-firma';

// Fotos reales de /multimedia-karther/hero-photos (1.avif a 11.avif)
const heroPhotos = [
  { src: '/multimedia-karther/hero-photos/1.avif', alt: 'Hero Photo 1' },
  { src: '/multimedia-karther/hero-photos/2.avif', alt: 'Hero Photo 2' },
  { src: '/multimedia-karther/hero-photos/3.avif', alt: 'Hero Photo 3' },
  { src: '/multimedia-karther/hero-photos/4.avif', alt: 'Hero Photo 4' },
  { src: '/multimedia-karther/hero-photos/5.avif', alt: 'Hero Photo 5' },
  { src: '/multimedia-karther/hero-photos/6.avif', alt: 'Hero Photo 6' },
  { src: '/multimedia-karther/hero-photos/7.avif', alt: 'Hero Photo 7' },
  { src: '/multimedia-karther/hero-photos/8.avif', alt: 'Hero Photo 8' },
  { src: '/multimedia-karther/hero-photos/9.avif', alt: 'Hero Photo 9' },
  { src: '/multimedia-karther/hero-photos/10.avif', alt: 'Hero Photo 10' },
  { src: '/multimedia-karther/hero-photos/11.avif', alt: 'Hero Photo 11' },
];

const row1 = [heroPhotos[0], heroPhotos[1], heroPhotos[2], heroPhotos[3], heroPhotos[4], heroPhotos[5]];
const row2 = [heroPhotos[6], heroPhotos[7], heroPhotos[8], heroPhotos[9], heroPhotos[10], heroPhotos[0]];
const row3 = [heroPhotos[2], heroPhotos[4], heroPhotos[6], heroPhotos[8], heroPhotos[10], heroPhotos[1]];
const row4 = [heroPhotos[3], heroPhotos[5], heroPhotos[7], heroPhotos[9], heroPhotos[0], heroPhotos[10]];

interface ImageCardProps {
  src: string;
  alt: string;
}

function ImageCard({ src, alt }: ImageCardProps) {
  return (
    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-md">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100px"
        className="object-cover"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative w-full flex flex-col bg-background">
      {/* Estilos CSS encapsulados únicamente para las animaciones del carrusel */}
      <style>{`
        @keyframes heroScrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes heroScrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .hero-marquee-left {
          display: flex;
          width: max-content;
          animation: heroScrollLeft 32s linear infinite;
        }
        .hero-marquee-right {
          display: flex;
          width: max-content;
          animation: heroScrollRight 32s linear infinite;
        }
        .hero-marquee-left:hover,
        .hero-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. Área superior con la cuadrícula de fotos en movimiento */}
      <div className="relative h-[60vh] sm:h-[68vh] w-full overflow-hidden bg-black">
        {/* Contenedor inclinado estilo Cool Cats */}
        <div className="absolute inset-0 flex flex-col justify-center gap-3 overflow-hidden -rotate-6 scale-125 sm:scale-120 select-none opacity-90">
          {/* Fila 1: Izquierda a derecha */}
          <div className="flex overflow-hidden">
            <div className="hero-marquee-right flex gap-2.5">
              {[...row1, ...row1].map((item, idx) => (
                <ImageCard key={`r1-${idx}`} src={item.src} alt={item.alt} />
              ))}
            </div>
          </div>

          {/* Fila 2: Derecha a izquierda */}
          <div className="flex overflow-hidden">
            <div className="hero-marquee-left flex gap-2.5">
              {[...row2, ...row2].map((item, idx) => (
                <ImageCard key={`r2-${idx}`} src={item.src} alt={item.alt} />
              ))}
            </div>
          </div>

          {/* Fila 3: Izquierda a derecha */}
          <div className="flex overflow-hidden">
            <div className="hero-marquee-right flex gap-2.5">
              {[...row3, ...row3].map((item, idx) => (
                <ImageCard key={`r3-${idx}`} src={item.src} alt={item.alt} />
              ))}
            </div>
          </div>

          {/* Fila 4: Derecha a izquierda */}
          <div className="flex overflow-hidden">
            <div className="hero-marquee-left flex gap-2.5">
              {[...row4, ...row4].map((item, idx) => (
                <ImageCard key={`r4-${idx}`} src={item.src} alt={item.alt} />
              ))}
            </div>
          </div>
        </div>

        {/* Viñeta superior oscura */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-10" />

        {/* Degradado suave inferior hacia el espacio negro */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />
      </div>

      {/* 2. Espacio negro significativo respetando los márgenes mobile-first (px-4) */}
      <div className="w-full bg-background px-4 pt-6 pb-10">
        <div className="w-full flex items-center justify-between gap-3">
          {/* Firma Lottie animada con repetición cada 10s */}
          <LottieFirma />

          {/* Textos al lado derecho en dos líneas y un poco más pequeños */}
          <div className="flex flex-col items-end text-right">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.14em] text-white/85 uppercase">
              Karther - Digital Presskit
            </span>
            <span className="text-[9px] sm:text-[10px] font-light tracking-[0.18em] text-white/50 uppercase mt-0.5">
              Version 1.0, 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
