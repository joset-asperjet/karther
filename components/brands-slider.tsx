'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const brands = [
  { name: 'Clandestina', logo: '/images/logos-swipper/joset-presskit-2026-logo-clandestina.png' },
  { name: 'Code Music Label Group', logo: '/images/logos-swipper/joset-presskit-2026-logo-code-music-label-group.png' },
  { name: 'Discos Eterna', logo: '/images/logos-swipper/joset-presskit-2026-logo-discos-eterna.png' },
  { name: 'Sala Kbron', logo: '/images/logos-swipper/joset-presskit-2026-logo-sala-kbron.png' },
  { name: 'Snare Wars', logo: '/images/logos-swipper/joset-presskit-2026-logo-snare-wars.png' },
];

export function BrandsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute top-0 left-0 right-0 w-full overflow-hidden bg-transparent py-4 z-20">
      <div
        ref={scrollRef}
        className="flex gap-8 justify-center px-4"
      >
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="h-12 w-12 flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={brand.logo || "/placeholder.svg"}
              alt={brand.name}
              width={48}
              height={48}
              className="h-full w-full object-contain opacity-75 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
