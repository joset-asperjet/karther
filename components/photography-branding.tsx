'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, AlertCircle, X, Download, ChevronDown, Video } from 'lucide-react';

interface GalleryItem {
    src: string;
    downloadUrl?: string;
    label: string;
    isVideo?: boolean;
}

const mainPressGallery: GalleryItem[] = [
    {
        src: "/multimedia-karther/photos/editorial/karther-presskit-photo-01lq.webp",
        downloadUrl: "/multimedia-karther/photos/editorial/karther-presskit-photo-01hq.jpg",
        label: "Editorial Photo 01",
    },
    {
        src: "/multimedia-karther/photos/editorial/karther-presskit-photo-02lq.webp",
        downloadUrl: "/multimedia-karther/photos/editorial/karther-presskit-photo-02hq.jpg",
        label: "Editorial Photo 02",
    },
    {
        src: "/multimedia-karther/photos/editorial/karther-presskit-photo-03lq.webp",
        downloadUrl: "/multimedia-karther/photos/editorial/karther-presskit-photo-03hq.jpg",
        label: "Editorial Photo 03",
    },
    {
        src: "/multimedia-karther/photos/editorial/karther-presskit-photo-04lq.webp",
        downloadUrl: "/multimedia-karther/photos/editorial/karther-presskit-photo-04hq.jpg",
        label: "Editorial Photo 04",
    },
    {
        src: "/multimedia-karther/photos/editorial/karther-presskit-photo-05lq.webp",
        downloadUrl: "/multimedia-karther/photos/editorial/karther-presskit-photo-05hq.jpg",
        label: "Editorial Photo 05",
    },
    {
        src: "/multimedia-karther/photos/editorial/karther-presskit-photo-07lq.webp",
        downloadUrl: "/multimedia-karther/photos/editorial/karther-presskit-photo-07hq.jpg",
        label: "Editorial Photo 07",
    },
    {
        src: "/multimedia-karther/photos/editorial/karther-presskit-photo-08lq.webp",
        downloadUrl: "/multimedia-karther/photos/editorial/karther-presskit-photo-08hq.jpg",
        label: "Editorial Photo 08",
    },
    {
        src: "/multimedia-karther/photos/editorial/karther-presskit-photo-09lq.webp",
        downloadUrl: "/multimedia-karther/photos/editorial/karther-presskit-photo-09hq.jpg",
        label: "Editorial Photo 09",
    },
];

const bwGallery: GalleryItem[] = [
    {
        src: "/multimedia-karther/photos/performance/karther-presskit-photo-performance-02lq.webp",
        downloadUrl: "/multimedia-karther/photos/performance/karther-presskit-photo-performance-02hq.jpg",
        label: "Performance Photo 01",
    },
    {
        src: "/multimedia-karther/photos/performance/karther-presskit-photo-performance-03lq.webp",
        downloadUrl: "/multimedia-karther/photos/performance/karther-presskit-photo-performance-03hq.PNG",
        label: "Performance Photo 02",
    },
    {
        src: "/multimedia-karther/photos/performance/karther-presskit-photo-performance-04lq.webp",
        downloadUrl: "/multimedia-karther/photos/performance/karther-presskit-photo-performance-04hq.PNG",
        label: "Performance Photo 03",
    },
    {
        src: "/multimedia-karther/photos/performance/karther-presskit-photo-performance-05lq.webp",
        downloadUrl: "/multimedia-karther/photos/performance/karther-presskit-photo-performance-05hq.PNG",
        label: "Performance Photo 04",
    },
    {
        src: "/multimedia-karther/photos/performance/karther-presskit-photo-performance-06lq.webp",
        downloadUrl: "/multimedia-karther/photos/performance/karther-presskit-photo-performance-06hq.PNG",
        label: "Performance Photo 05",
    },
    {
        src: "/multimedia-karther/photos/performance/karther-presskit-photo-lq10.webp",
        downloadUrl: "/multimedia-karther/photos/performance/karther-presskit-photo-10hq.png",
        label: "Performance Photo 06",
    },
];

const brandingGallery: GalleryItem[] = [
    {
        src: "/multimedia-karther/logo/logo-karther-white-letters.png",
        downloadUrl: "/multimedia-karther/logo/logo-karther-white-letters.png",
        label: "Karther Logo White",
    },
    {
        src: "/multimedia-karther/logo/logo-karther-black-letters.png",
        downloadUrl: "/multimedia-karther/logo/logo-karther-black-letters.png",
        label: "Karther Logo Black",
    },
    {
        src: "/multimedia-karther/logo/logo-booth.png",
        downloadUrl: "/multimedia-karther/logo/logo-booth.png",
        label: "Booth Agency Logo",
    },
    {
        src: "/multimedia-karther/logo/logo-dance-different.png",
        downloadUrl: "/multimedia-karther/logo/logo-dance-different.png",
        label: "Dance Different Logo",
    },
];

const GOOGLE_DRIVE_VIDEOS_URL = "https://drive.google.com/drive/folders/1gbgBdXJ6LXq_PWTJ9vumtsU4RF38zybJ";

const videoGallery: GalleryItem[] = [
    {
        src: "/multimedia-karther/photos/videos/karther-dj-presskit-video01hq.MP4",
        downloadUrl: GOOGLE_DRIVE_VIDEOS_URL,
        label: "Press Video 01",
        isVideo: true,
    },
    {
        src: "/multimedia-karther/photos/videos/karther-dj-presskit-video02lq.mp4",
        downloadUrl: GOOGLE_DRIVE_VIDEOS_URL,
        label: "Press Video 02",
        isVideo: true,
    },
    {
        src: "/multimedia-karther/photos/videos/karther-dj-presskit-video03lq.mp4",
        downloadUrl: GOOGLE_DRIVE_VIDEOS_URL,
        label: "Press Video 03",
        isVideo: true,
    },
];

const assets = [
    {
        src: mainPressGallery[0].src,
        alt: "Artist Portrait (Default)",
        label: "Editorial Photos",
        isGallery: true,
        galleryType: 'main' as const,
    },
    {
        src: bwGallery[0].src,
        alt: "Artist Portrait (Performance)",
        label: "Performance Photos",
        isGallery: true,
        galleryType: 'bw' as const,
    },
    {
        src: brandingGallery[0].src,
        alt: "Karther & Agency Logos",
        label: "Logos & Branding",
        isGallery: true,
        galleryType: 'branding' as const,
        isLogo: true,
    },
    {
        src: videoGallery[0].src,
        alt: "Karther Live Videos",
        label: "Videos",
        isGallery: true,
        galleryType: 'videos' as const,
        isVideo: true,
    },
];

export function PhotographyBranding() {
    const [activeGallery, setActiveGallery] = useState<'main' | 'bw' | 'branding' | 'videos' | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const galleries = {
        main: mainPressGallery,
        bw: bwGallery,
        branding: brandingGallery,
        videos: videoGallery,
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
                                        {asset.isVideo ? (
                                            <div className="h-full w-full bg-black/60 flex items-center justify-center opacity-40">
                                                <Video className="h-8 w-8 text-white/40" />
                                            </div>
                                        ) : (
                                            <Image
                                                src={galleries[asset.galleryType as keyof typeof galleries][2].src}
                                                alt="Stack Background"
                                                fill
                                                className={`opacity-40 ${asset.isLogo ? 'object-contain p-4' : 'object-cover'}`}
                                            />
                                        )}
                                    </div>
                                )}
                                {galleries[asset.galleryType as keyof typeof galleries].length > 1 && (
                                    <div className={`absolute inset-0 translate-x-1.5 -translate-y-1.5 overflow-hidden rounded border border-border bg-card transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 ${asset.isLogo ? 'bg-white/5' : ''}`}>
                                        {asset.isVideo ? (
                                            <div className="h-full w-full bg-black/50 flex items-center justify-center opacity-60">
                                                <Video className="h-8 w-8 text-white/50" />
                                            </div>
                                        ) : (
                                            <Image
                                                src={galleries[asset.galleryType as keyof typeof galleries][1].src}
                                                alt="Stack Background"
                                                fill
                                                className={`opacity-60 ${asset.isLogo ? 'object-contain p-4' : 'object-cover'}`}
                                            />
                                        )}
                                    </div>
                                )}

                                <div className={`relative h-full w-full overflow-hidden rounded border border-border bg-card transition-all duration-300 group-hover:border-accent shadow-xl ${asset.isLogo ? 'bg-white/5' : ''}`}>
                                    {asset.isVideo ? (
                                        <div className="relative h-full w-full bg-black">
                                            <video
                                                src={asset.src}
                                                muted
                                                playsInline
                                                loop
                                                autoPlay
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <Image
                                            src={asset.src}
                                            alt={asset.alt}
                                            fill
                                            className={`${asset.isLogo ? 'object-contain p-4' : 'object-cover'}`}
                                        />
                                    )}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <div className="flex flex-col items-center gap-2">
                                            {asset.isVideo ? (
                                                <Video className="h-6 w-6 text-white" />
                                            ) : (
                                                <Camera className="h-6 w-6 text-white" />
                                            )}
                                            <span className="text-[8px] font-bold uppercase tracking-tighter text-white">
                                                {asset.isVideo ? 'Watch Videos' : 'View Gallery'}
                                            </span>
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

                        {/* Title & Download for active image/video */}
                        <div className="z-10 flex w-full items-center justify-between md:mb-4">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
                                    {activeGallery === 'bw' ? 'LIVE ' : activeGallery === 'branding' ? 'BRANDING ' : activeGallery === 'videos' ? 'VIDEO ' : ''}
                                    {currentGallery[currentIndex].label}
                                </h3>
                                <p className="text-[10px] text-muted-foreground uppercase mt-1 tracking-tighter">
                                    {activeGallery === 'branding'
                                        ? 'Logo & Brand Assets 2026'
                                        : activeGallery === 'videos'
                                            ? 'Video Reel Collection 2026'
                                            : 'Photography Collection 2026'}
                                </p>
                            </div>
                            {currentGallery[currentIndex].downloadUrl?.startsWith('http') ? (
                                <a
                                    href={currentGallery[currentIndex].downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-background transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
                                >
                                    <Download className="h-3 w-3" />
                                    Download HQ (Drive)
                                </a>
                            ) : (
                                <a
                                    href={`${currentGallery[currentIndex].downloadUrl || currentGallery[currentIndex].src}`}
                                    download
                                    className="flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-background transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
                                >
                                    <Download className="h-3 w-3" />
                                    Download HI-RES
                                </a>
                            )}
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

                            {/* Main Asset (Image or Video) */}
                            <div className="relative h-full w-full max-w-3xl flex items-center justify-center animate-in zoom-in-95 duration-500">
                                {currentGallery[currentIndex].isVideo ? (
                                    <video
                                        key={currentGallery[currentIndex].src}
                                        src={currentGallery[currentIndex].src}
                                        controls
                                        autoPlay
                                        playsInline
                                        className="max-h-[75vh] w-auto max-w-full rounded-lg shadow-2xl object-contain bg-black"
                                    />
                                ) : (
                                    <Image
                                        src={currentGallery[currentIndex].src}
                                        alt={currentGallery[currentIndex].label}
                                        fill
                                        className={`${activeGallery === 'branding' ? 'object-contain p-12' : 'object-contain'} select-none`}
                                        priority
                                    />
                                )}
                            </div>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="mt-4 flex w-full justify-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
                            {currentGallery.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded border-2 transition-all duration-300 ${currentIndex === idx ? 'border-accent scale-110 shadow-lg shadow-accent/20' : 'border-white/10 opacity-50 hover:opacity-100'}`}
                                >
                                    {item.isVideo ? (
                                        <div className="relative h-full w-full bg-black flex items-center justify-center">
                                            <video
                                                src={item.src}
                                                muted
                                                playsInline
                                                className="h-full w-full object-cover opacity-60"
                                            />
                                            <Video className="absolute h-4 w-4 text-white" />
                                        </div>
                                    ) : (
                                        <Image
                                            src={item.src}
                                            alt={item.label}
                                            fill
                                            className={`${activeGallery === 'branding' ? 'object-contain p-2' : 'object-cover'}`}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-8 rounded border border-accent/20 bg-accent/5 p-4 flex gap-4 items-start">
                <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                    <p className="text-xs leading-relaxed text-muted-foreground italic">
                        Before publishing any event flyer, specific graphic requirements must be met and approved by me or my creative team.
                    </p>
                    <div className="mt-2 flex flex-col gap-1 border-t border-accent/10 pt-2">
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground/60 flex items-center gap-1.5">
                            <span className="text-[10px]">©</span> Booth Logotype by Booth
                        </p>
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground/60 flex items-center gap-1.5">
                            <span className="text-[10px]">©</span> #DanceDifferent Design by Booth
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
