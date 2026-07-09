import Image from 'next/image';
import { BrandsSlider } from './brands-slider';

export function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      <BrandsSlider />

      <Image
        src="/images/presskit-downloads/artist-editorial-photos/joset-digital-presskit-artist-editorial-photo23.webp"
        alt="Artist Portrait"
        fill
        className="object-cover"
        priority
      />

      {/* Top vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Bottom transition: Deep gradient to background and strong backdrop blur */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] backdrop-blur-xl [mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none z-10" />

      <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-24 pointer-events-none">
        <div className="relative z-20 max-w-md w-full px-4 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/joset-presskit-logo.png"
              alt="Logo"
              width={140}
              height={140}
              className="h-32 w-32 object-contain drop-shadow-lg"
            />
            <p className="text-sm font-semibold tracking-widest text-white/80 drop-shadow-md text-center">
              Digital Presskit 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
