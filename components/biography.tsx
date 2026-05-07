'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Biography() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="border-t border-border px-4 py-12 max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Biography
        </h2>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          The Journey & Artistic Vision
        </p>
      </div>

      <div className="relative">
        {/* First paragraph - justified */}
        <p className="text-sm leading-relaxed text-muted-foreground text-justify">
          Joset is a Cali-born DJ and producer whose distinctive sonic identity is defined by a sophisticated fusion of Italo disco and cinematic soundscapes. His signature style evokes the atmospheric depth of classic video game environments, drawing direct inspiration from iconic titles such as Resident Evil 2 and Halo: Combat Evolved.
        </p>

        {/* Expanded content with editorial layout */}
        {isExpanded ? (
          <div className="mt-4 animate-in fade-in duration-500">
            {/* Editorial Image - Now inside the second paragraph section */}
            <div className="float-left mr-4 mb-2 w-[110px] sm:w-[150px] md:w-[200px]">
              <div className="relative aspect-[3/4] overflow-hidden shadow-xl">
                <Image
                  src="/images/joset-presskit-2026-artist-photo-bio.webp"
                  alt="Joset"
                  fill
                  className="object-cover transition-all duration-300"
                />
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground text-justify mb-6">
              A pivotal moment in his artistic development occurred when his brother introduced him to a Trance Factory cassette. This encounter represented a definitive turning point; Joset was captivated by the genre's unique ability to marry high-octane adrenaline with profound melancholy—a duality he had previously thought impossible. This discovery continues to inform the emotional complexity of his current work.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground text-justify mb-6">
              Beyond the club circuit, Joset has successfully diversified his creative portfolio within the gaming industry. He has established strategic partnerships with developers, leveraging his expertise as both a music producer and foley artist to deliver world-class, immersive auditory experiences.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground text-justify">
              His innovative approach has garnered significant acclaim from the international electronic music community. To date, his work has received formal support from several of the industry's most influential figures, including Eagles & Butterflies, Kamilo Sanclemente, Cormac, and Joe Lewandowski.
            </p>
          </div>
        ) : (
          /* Read More Button */
          <div className="mt-6 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-border/50" />
            <button
              onClick={() => setIsExpanded(true)}
              className="rounded-full border border-border px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-foreground transition-all duration-200 hover:bg-muted hover:border-accent whitespace-nowrap"
            >
              Read Full Bio
            </button>
            <div className="h-[1px] flex-1 bg-border/50" />
          </div>
        )}
        <div className="clear-both" />
      </div>
    </section>
  );
}
