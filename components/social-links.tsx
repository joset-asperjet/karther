'use client';

import Link from 'next/link';
import Image from 'next/image';

const socials = [
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/kartherdj',
    logo: '/images/social-media-logos/joset-presskit-2026-icon-soundcloud.png',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/intl-es/artist/4B2VGlbxu6tHtRRKeEwPJR?si=in3y-8fERw2bj5iwi4-mvw&nd=1&dlsi=12abbeb50bc94482',
    logo: '/images/social-media-logos/joset-presskit-2026-icon-spotify.png',
  },
  {
    name: 'Bandcamp',
    url: 'https://karther.bandcamp.com/',
    logo: '/images/social-media-logos/joset-presskit-2026-icon-bandcamp.png',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/kartherdj/',
    logo: '/images/social-media-logos/joset-presskit-2026-icon-instagram.png',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/karther/1581012058',
    logo: '/images/social-media-logos/joset-presskit-2026-icon-resident-advisor.png',
  },
  {
    name: 'Beatport',
    url: 'https://www.beatport.com/es/artist/karther/1005477',
    logo: '/images/social-media-logos/joset-presskit-2026-icon-beatport.png',
  },
];

export function SocialLinks() {
  return (
    <section className="border-t border-border px-4 py-12">
      <div className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Connect & Follow
        </h2>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Official Links & Music Platforms
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-4xl mx-auto">
        {socials.map((social) => {
          return (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className="transition-all duration-200 hover:scale-110 group"
            >
              <div className="relative h-8 w-auto">
                <Image
                  src={social.logo}
                  alt={social.name}
                  width={80}
                  height={32}
                  className="h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
