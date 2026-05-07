'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, AlertCircle, X, Download, ChevronDown } from 'lucide-react';

const mainPressGallery = [

    { src: "/images/presskit-downloads/artist-photos/joset-digital-presskit-2026-artist-photo01.jpg", label: "Press Photo 01" },
    { src: "/images/presskit-downloads/artist-photos/joset-digital-presskit-2026-artist-photo05.jpg", label: "Press Photo 05" },

];

const bwGallery = [
    { src: "/images/presskit-downloads/performance-photos/joset-digital-presskit-2026-performance-photo06.jpg", label: "Press Photo 01" },

    { src: "/images/presskit-downloads/performance-photos/joset-digital-presskit-2026-performance-photo07.jpg", label: "Press Photo 01" },

    { src: "/images/presskit-downloads/performance-photos/joset-digital-presskit-2026-performance-photo08.jpg", label: "Press Photo 01" },

    { src: "/images/presskit-downloads/performance-photos/joset-digital-presskit-2026-performance-photo05.jpg", label: "Press Photo 01" },

    { src: "/images/presskit-downloads/performance-photos/joset-digital-presskit-2026-performance-photo04.png", label: "Press Photo 01" },
    { src: "/images/presskit-downloads/performance-photos/joset-digital-presskit-2026-performance-photo02.jpg", label: "Press Photo 02" },
    { src: "/images/presskit-downloads/performance-photos/joset-digital-presskit-2026-performance-photo03.jpg", label: "Press Photo 03" },
    { src: "/images/presskit-downloads/performance-photos/joset-digital-presskit-2026-performance-photo01.jpg", label: "Press Photo 04" },
];

const logoGallery = [
    { src: "/images/presskit-downloads/logos/joset-digital-presskitt-logo-platinum.png", label: "Main Logo Platinum" },
    { src: "/images/presskit-downloads/logos/joset-digital-presskitt-logo-metal.png", label: "Main Logo Metal" },
    { src: "/images/presskit-downloads/logos/joset-digital-presskitt-logo-80s.png", label: "Main Logo 80s" },
    { src: "/images/presskit-downloads/logos/joset-digital-presskitt-logo-white.png", label: "Main Logo White" },
    { src: "/images/presskit-downloads/logos/joset-digital-presskitt-logo-black.png", label: "Main Logo Black" },
];

const snareWarsGallery = [
    { src: "/images/presskit-downloads/snare-wars/joset-digital-presskitt-icon02.png", label: "Snare Wars Icon 02" },
    { src: "/images/presskit-downloads/snare-wars/joset-digital-presskitt-icon03.png", label: "Snare Wars Icon 03" },

    { src: "/images/presskit-downloads/snare-wars/joset-digital-presskitt-icon01.png", label: "Snare Wars Icon 01" },
    { src: "/images/presskit-downloads/snare-wars/joset-digital-presskitt-logo-snare-wars-logo-04.png", label: "Snare Wars Logo 04" },
    { src: "/images/presskit-downloads/snare-wars/joset-digital-presskitt-logo-snare-wars-logo-03.png", label: "Snare Wars Logo 03" },
    { src: "/images/presskit-downloads/snare-wars/joset-digital-presskitt-logo-snare-wars-logo-02.png", label: "Snare Wars Logo 02" },
    { src: "/images/presskit-downloads/snare-wars/joset-digital-presskitt-logo-snare-wars-logo-01.png", label: "Snare Wars Logo 01" },

];

const assets = [
    {
        src: mainPressGallery[0].src,
        alt: "Artist Portrait (Default)",
        label: "Main Press Photos",
        isGallery: true,
        galleryType: 'main' as const,
    },
    {
        src: bwGallery[0].src,
        alt: "Artist Portrait (BW)",
        label: "Performance Photos",
        isGallery: true,
        galleryType: 'bw' as const,
    },
    {
        src: logoGallery[0].src,
        alt: "Joset Logo",
        label: "Primary Logo",
        isGallery: true,
        galleryType: 'logo' as const,
        isLogo: true,
    },
    {
        src: snareWarsGallery[0].src,
        alt: "Snare Wars Assets",
        label: "Snare Wars",
        isGallery: true,
        galleryType: 'snare' as const,
        isLogo: true,
    },
];

export function PhotographyBranding() {
    const [activeGallery, setActiveGallery] = useState<'main' | 'bw' | 'logo' | 'snare' | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const galleries = {
        main: mainPressGallery,
        bw: bwGallery,
        logo: logoGallery,
        snare: snareWarsGallery,
    };

    const currentGallery = activeGallery ? galleries[activeGallery] : [];

    const nextImage = () => {
        if (!activeGallery) return;
        setCurrentIndex((prev) => (prev + 1) % currentGallery.length);
    };

    const prevImage = () => {
        if (!activeGallery) return;
        setCurrentIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
    };

    return (
        <section className="border-t border-border px-4 py-12">
            <div className="mb-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Photography & Branding
                </h2>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                    Media Assets & Visual Identity
                </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                {assets.map((asset, idx) => (
                    <div key={idx} className="group relative flex flex-col gap-2">
                        {asset.isGallery ? (
                            <div
                                onClick={() => {
                                    setActiveGallery(asset.galleryType || null);
                                    setCurrentIndex(0);
                                }}
                                className="relative aspect-[4/5] cursor-pointer"
                            >
                                {galleries[asset.galleryType as keyof typeof galleries].length > 2 && (
                                    <div className={`absolute inset-0 translate-x-3 -translate-y-3 overflow-hidden rounded border border-border bg-card transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 ${asset.isLogo ? 'bg-white/5' : ''}`}>
                                        <Image
                                            src={galleries[asset.galleryType as keyof typeof galleries][2].src}
                                            alt="Stack Background"
                                            fill
                                            className={`opacity-40 ${asset.isLogo ? 'object-contain p-4' : 'object-cover'}`}
                                        />
                                    </div>
                                )}
                                {galleries[asset.galleryType as keyof typeof galleries].length > 1 && (
                                    <div className={`absolute inset-0 translate-x-1.5 -translate-y-1.5 overflow-hidden rounded border border-border bg-card transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 ${asset.isLogo ? 'bg-white/5' : ''}`}>
                                        <Image
                                            src={galleries[asset.galleryType as keyof typeof galleries][1].src}
                                            alt="Stack Background"
                                            fill
                                            className={`opacity-60 ${asset.isLogo ? 'object-contain p-4' : 'object-cover'}`}
                                        />
                                    </div>
                                )}

                                <div className={`relative h-full w-full overflow-hidden rounded border border-border bg-card transition-all duration-300 group-hover:border-accent shadow-xl ${asset.isLogo ? 'bg-white/5' : ''}`}>
                                    <Image
                                        src={asset.src}
                                        alt={asset.alt}
                                        fill
                                        className={`${asset.isLogo ? 'object-contain p-4' : 'object-cover'}`}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <div className="flex flex-col items-center gap-2">
                                            <Camera className="h-6 w-6 text-white" />
                                            <span className="text-[8px] font-bold uppercase tracking-tighter text-white">View Gallery</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <a
                                href={`${asset.src}`}
                                download
                                className={`group/asset relative aspect-[4/5] overflow-hidden rounded border border-border bg-card transition-all duration-300 hover:border-accent ${asset.isLogo ? 'bg-white/5' : ''}`}
                            >
                                <Image
                                    src={asset.src}
                                    alt={asset.alt}
                                    fill
                                    className={`${asset.isLogo ? 'object-contain p-4' : 'object-cover'}`}
                                />
                                {/* Download Overlay with Arrow */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-all duration-300 group-hover/asset:opacity-100">
                                    <div className="flex translate-y-2 flex-col items-center gap-1.5 transition-transform duration-300 group-hover/asset:translate-y-0">
                                        <div className="rounded-full bg-accent p-2 shadow-lg">
                                            <Download className="h-4 w-4 text-background" />
                                        </div>
                                        <span className="text-[8px] font-bold uppercase tracking-tighter text-white">Download</span>
                                    </div>
                                </div>
                            </a>
                        )}
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-accent">
                            {asset.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Gallery Lightbox Slider */}
            {activeGallery && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="relative flex h-full w-full max-w-6xl flex-col items-center justify-between p-4 md:p-8">
                        {/* Close Button */}
                        <button
                            onClick={() => setActiveGallery(null)}
                            className="absolute right-4 top-4 z-20 rounded-full bg-white/5 p-3 backdrop-blur-md transition-all hover:bg-white/10 hover:rotate-90"
                        >
                            <X className="h-6 w-6 text-foreground" />
                        </button>

                        {/* Title & Download for active image */}
                        <div className="z-10 flex w-full items-center justify-between md:mb-4">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
                                    {activeGallery === 'bw' ? 'LIVE ' : (activeGallery === 'logo' || activeGallery === 'snare') ? 'BRANDING ' : ''}{currentGallery[currentIndex].label}
                                </h3>
                                <p className="text-[10px] text-muted-foreground uppercase mt-1 tracking-tighter">{(activeGallery === 'logo' || activeGallery === 'snare') ? 'Logo Assets 2026' : 'Photography Collection 2026'}</p>
                            </div>
                            <a
                                href={`${currentGallery[currentIndex].src}`}
                                download
                                className="flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-background transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
                            >
                                <Download className="h-3 w-3" />
                                Download HI-RES
                            </a>
                        </div>

                        {/* Main Viewer Area */}
                        <div className="group/viewer relative flex h-full w-full flex-1 items-center justify-center overflow-hidden py-4 md:py-8">
                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-0 z-20 -translate-x-full rounded-full bg-white/5 p-4 backdrop-blur-sm transition-all group-hover/viewer:translate-x-4 hover:bg-white/10"
                            >
                                <ChevronDown className="h-6 w-6 rotate-90 text-foreground" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-0 z-20 translate-x-full rounded-full bg-white/5 p-4 backdrop-blur-sm transition-all group-hover/viewer:-translate-x-4 hover:bg-white/10"
                            >
                                <ChevronDown className="h-6 w-6 -rotate-90 text-foreground" />
                            </button>

                            {/* Main Image */}
                            <div className="relative h-full w-full max-w-3xl animate-in zoom-in-95 duration-500">
                                <Image
                                    src={currentGallery[currentIndex].src}
                                    alt={currentGallery[currentIndex].label}
                                    fill
                                    className={`${(activeGallery === 'logo' || activeGallery === 'snare') ? 'object-contain p-12' : 'object-contain'} select-none`}
                                    priority
                                />
                            </div>
                        </div>

                        {/* Thumbnail Strip (Several photos at the same time) */}
                        <div className="mt-4 flex w-full justify-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
                            {currentGallery.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded border-2 transition-all duration-300 ${currentIndex === idx ? 'border-accent scale-110 shadow-lg shadow-accent/20' : 'border-white/10 opacity-50 hover:opacity-100'}`}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.label}
                                        fill
                                        className={`${(activeGallery === 'logo' || activeGallery === 'snare') ? 'object-contain p-2' : 'object-cover'}`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Branding Manuals Downloads */}
            <div className="mt-12 flex gap-3">
                <a
                    href="https://drive.google.com/drive/folders/1woa6q2pYZG3PxBNAOYMrmyhWM24Ny4mB?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center gap-4 border border-white/5 bg-white/5 p-4 rounded transition-all hover:border-accent/40 hover:bg-white/10 group/manual shadow-2xl backdrop-blur-sm"
                >
                    <div className="bg-accent p-2 rounded-sm text-background shadow-lg shadow-accent/20 transition-transform group-hover/manual:scale-110">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                            <path d="M8.33 2.5h7.33l6.5 11.25-3.66 6.34H5.5L1.83 13.75 8.33 2.5zM9.5 4.5l-4.9 8.5h9.8L9.5 4.5zm-5.48 9.5l3.15 5.5h6.3l-3.15-5.5h-6.3zm12.3 0l3.15 5.5h-6.3l3.15-5.5h3.15z" />
                        </svg>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/80 leading-tight text-left">
                        Joset Branding<br />Manual
                    </span>
                </a>
                <a
                    href="https://drive.google.com/drive/folders/1cWu4RLQgthCfES59UVp_ESxdikFgmLyA?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center gap-4 border border-white/5 bg-white/5 p-4 rounded transition-all hover:border-accent/40 hover:bg-white/10 group/manual shadow-2xl backdrop-blur-sm"
                >
                    <div className="bg-accent p-2 rounded-sm text-background shadow-lg shadow-accent/20 transition-transform group-hover/manual:scale-110">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                            <path d="M8.33 2.5h7.33l6.5 11.25-3.66 6.34H5.5L1.83 13.75 8.33 2.5zM9.5 4.5l-4.9 8.5h9.8L9.5 4.5zm-5.48 9.5l3.15 5.5h6.3l-3.15-5.5h-6.3zm12.3 0l3.15 5.5h-6.3l3.15-5.5h3.15z" />
                        </svg>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/80 leading-tight text-left">
                        Snare Wars Brand<br />Manual
                    </span>
                </a>
            </div>

            <div className="mt-8 rounded border border-accent/20 bg-accent/5 p-4 flex gap-4 items-start">
                <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                    <p className="text-xs leading-relaxed text-muted-foreground italic">
                        Before publishing any event flyer, specific graphic requirements must be met and approved by me.
                    </p>
                    <div className="mt-2 flex flex-col gap-1 border-t border-accent/10 pt-2">
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground/60 flex items-center gap-1.5">
                            <span className="text-[10px]">©</span> Joset Logotype by Type Sailor
                        </p>
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground/60 flex items-center gap-1.5">
                            <span className="text-[10px]">©</span> SNARE WARS Graphic Design by Steven Delgado
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
