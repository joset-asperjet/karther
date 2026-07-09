'use client';

import { useState } from 'react';
import { Newspaper, ChevronDown, ChevronUp, Twitter, ExternalLink, Calendar } from 'lucide-react';
import Image from 'next/image';

const newsItems = [
    {
        title: "Joset x Discos Eterna: Digital Presskit Revolution",
        date: "May 2026",
        description: "A strategic alliance to empower artists through professional digital presskits, personalized mentorship, and project scaling strategies, proud to feature brand ambassadors like Kamilo Sanclemente and Koleto.",
        tag: "Alliance",
        detailedContent: "Discos Eterna has partnered with Joset to redefine how artists present themselves to the world. This collaboration combines cutting-edge digital presskit technology with expert consulting and growth plans, ensuring creators have the tools to scale their artistic vision globally, proudly backed by brand ambassadors Kamilo Sanclemente and Koleto.",
        image: "/images/latest-news/joset-digital-presskit-2026-joset-and-discos-eterna.webp",
        websiteUrl: "https://discoseterna.info"
    },
    {
        title: "SNARE WARS Radio Premiere",
        date: "22 December 2025",
        description: "Launching a new era in sonic curation: SNARE WARS is a dedicated radio show celebrating the most aggressive and powerful snares in the electronic underground.",
        tag: "Radio",
        detailedContent: "SNARE WARS was born from a desire to curate electronic gems often overlooked for their eccentricities, focusing on the intricate architecture of the snare. This project extends into a monthly Spotify playlist curation, ensuring these 80s-inspired, high-end rhythmic textures are accessible across all digital platforms.",
        image: "/images/latest-news/joset-digital-presskit-2026-snare-wars-radio-show.webp",
        soundcloudUrl: "https://soundcloud.com/joset-audiofiles/snare-wars-2025-year-mix-mixed-by-joset"
    },
    {
        title: "Sala Kbron Residency Announcement",
        date: "January 2025",
        description: "Joset joins the elite roster at Sala Kbron, one of Latin America's premier underground clubs, establishing a permanent home for his signature sound.",
        tag: "Residency",
        detailedContent: "The residency at Sala Kbron marks a significant milestone. Known as a pinnacle of the Colombian electronic scene and a top-tier venue in LATAM, the club provides the perfect atmospheric backdrop for Joset's curated blend of Indie Dance, Dark Disco, and Italo Body Music. This partnership delivers immersive sonic journeys in one of the region's most iconic dancefloors.",
        image: "/images/latest-news/joset-digital-presskit-news-sala-kbron-residency.jpg",
        websiteUrl: "https://www.instagram.com/salakbron/"
    },
    {
        title: "Ghostly Sounds for 'Poveglia'",
        date: "11 November 2024",
        description: "Collaborating with WBS Studios as Music Producer and Foley Artist for 'Poveglia', an upcoming horror game inspired by the cursed Italian island.",
        tag: "Gamer",
        detailedContent: "Driven by a passion for interactive mysteries, I've partnered with WBS Studios Games on 'Poveglia'. This project merges my musical foundations with avant-garde foley design, crafting an immersive auditory landscape that pushes the boundaries of horror gaming.",
        image: "/images/latest-news/joset-digital-presskit-2026-poveglia-videogame.webp",
        steamUrl: "https://store.steampowered.com/app/2260450/Poveglia_The_Island_of_No_Return/?l=spanish"
    },
    {
        title: "Nostalgic Waters: 'Aquatic' Tribute",
        date: "May 2024",
        description: "Joset pays homage to David Wise's legendary 'Aquatic Ambiance' from the Donkey Kong OST. His new track 'Aquatic' is a cinematic reimagining.",
        tag: "Tribute",
        detailedContent: "A cinematic love letter to the 16-bit era, 'Aquatic' reimagines David Wise’s legacy through a modern lens. By pairing vintage analogue synthesis with contemporary production standards, I’ve aimed to capture that elusive balance of serenity and mystery.",
        spotifyUrl: "https://open.spotify.com/track/example"
    },
    {
        title: "WinRar Reacts to 'Pay For Winrar'",
        date: "16 May 2023",
        description: "The developers behind the legendary software WinRAR have officially acknowledged Joset's track 'Pay For Winrar', a viral piece that playfully uses the iconic nag screen.",
        tag: "Viral",
        detailedContent: "This project stems from a nostalgic affinity for a brand that defined my early digital years. WinRAR's unique business model of persistent functionality alongside its iconic 'nag screen' inspired this viral tribute, recently garnering official recognition from the RARLAB team themselves.",
        tweetUrl: "https://x.com/WinRAR_RARLAB/status/1658461779775635457?s=20"
    }
];

export function LatestNews() {
    const [showAll, setShowAll] = useState(false);
    const [expandedItem, setExpandedItem] = useState<number | null>(null);
    const displayedNews = showAll ? newsItems : newsItems.slice(0, 3);

    return (
        <section className="border-t border-border px-4 py-12">
            <div className="mb-8 flex items-end justify-between">
                <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                        Latest News
                    </h2>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                        Global Updates & Projects
                    </p>
                </div>
            </div>

            <div className="relative space-y-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-border/50 pl-6">
                {displayedNews.map((item, idx) => (
                    <div key={idx} className="relative group">
                        {/* Timeline Dot */}
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[27px] top-6 h-2 w-2 rounded-full border-2 border-background ring-4 ring-background transition-all duration-500 ${expandedItem === idx ? 'bg-white scale-150 shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'bg-accent group-hover:scale-125'}`} />

                        <div className="flex flex-col gap-3 p-4 rounded-xl transition-all duration-300 hover:bg-white/[0.03] group-hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="rounded-full bg-accent/20 px-2 py-1 text-[8px] font-black uppercase tracking-[0.15em] text-accent border border-accent/30 shadow-[0_0_10px_rgba(var(--accent),0.1)]">
                                        {item.tag}
                                    </span>
                                    <span className="flex items-center gap-1 text-[9px] font-medium text-muted-foreground/60 uppercase tracking-tight">
                                        <Calendar className="h-2.5 w-2.5" />
                                        {item.date}
                                    </span>
                                </div>
                            </div>

                            {item.image && (
                                <div className="group/img relative my-2 aspect-video w-full overflow-hidden rounded-lg border border-white/5 shadow-inner transition-all duration-500">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={280}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                </div>
                            )}

                            <h3 className="text-[15px] font-bold text-foreground leading-tight group-hover:text-accent transition-colors tracking-tight">
                                {item.title}
                            </h3>

                            <p className="text-[11px] leading-relaxed text-muted-foreground/90 text-justify line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                                {item.description}
                            </p>

                            <button
                                onClick={() => setExpandedItem(expandedItem === idx ? null : idx)}
                                className={`mt-1 flex w-fit items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${expandedItem === idx ? 'text-foreground' : 'text-accent hover:gap-2.5'}`}
                            >
                                {expandedItem === idx ? (
                                    <>
                                        Close Details
                                        <ChevronUp className="h-3 w-3" />
                                    </>
                                ) : (
                                    <>
                                        Explore Story
                                        <ChevronDown className="h-3 w-3" />
                                    </>
                                )}
                            </button>

                            {/* Expanded Content Section */}
                            {expandedItem === idx && (
                                <div className="mt-6 animate-in fade-in slide-in-from-top-4 duration-500 ease-out">
                                    <div className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-1 shadow-2xl backdrop-blur-md">
                                        <div className="rounded-lg bg-background/40 p-5">
                                            <p className="text-[12px] leading-relaxed text-foreground/80 text-justify italic font-light border-l-2 border-accent/30 pl-4 py-1">
                                                "{item.detailedContent}"
                                            </p>
                                            <div className="mt-4 flex flex-col gap-3">
                                                {item.websiteUrl && (
                                                    <a
                                                        href={item.websiteUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-between rounded bg-accent/10 p-3 border border-accent/20 hover:bg-accent/20 transition-all group/cta"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="bg-accent p-1.5 rounded-full">
                                                                <ExternalLink className="h-3 w-3 text-background" />
                                                            </div>
                                                            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">
                                                                {item.title.includes('Discos Eterna') ? 'Visit discoseterna.info' : 'Explore More'}
                                                            </span>
                                                        </div>
                                                        <ExternalLink className="h-3 w-3 text-accent opacity-50 group-hover/cta:opacity-100 transition-opacity" />
                                                    </a>
                                                )}
                                                {item.soundcloudUrl && (
                                                    <a
                                                        href={item.soundcloudUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-between rounded bg-[#FF5500]/10 p-3 border border-[#FF5500]/20 hover:bg-[#FF5500]/20 transition-all group/cta"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="bg-[#FF5500] p-1 rounded-full flex items-center justify-center">
                                                                <Image
                                                                    src="/images/logos/soundcloud-logo.png"
                                                                    alt="SoundCloud"
                                                                    width={14}
                                                                    height={14}
                                                                    className="object-contain"
                                                                />
                                                            </div>
                                                            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Listen to the latest SNARE WARS episode</span>
                                                        </div>
                                                        <ExternalLink className="h-3 w-3 text-[#FF5500] opacity-50 group-hover/cta:opacity-100 transition-opacity" />
                                                    </a>
                                                )}

                                                {item.tweetUrl && (
                                                    <a
                                                        href={item.tweetUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-between rounded bg-[#1DA1F2]/10 p-3 border border-[#1DA1F2]/20 hover:bg-[#1DA1F2]/20 transition-all group/cta"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="bg-[#1DA1F2] p-1.5 rounded-full">
                                                                <Twitter className="h-3 w-3 text-white" />
                                                            </div>
                                                            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">View Official Response</span>
                                                        </div>
                                                        <ExternalLink className="h-3 w-3 text-[#1DA1F2] opacity-50 group-hover/cta:opacity-100 transition-opacity" />
                                                    </a>
                                                )}

                                                {item.spotifyUrl && (
                                                    <a
                                                        href={item.spotifyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-between rounded bg-[#1DB954]/10 p-3 border border-[#1DB954]/20 hover:bg-[#1DB954]/20 transition-all group/cta"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="bg-[#1DB954] p-1.5 rounded-full">
                                                                <svg className="h-3 w-3 text-white fill-current" viewBox="0 0 24 24">
                                                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S17.627 0 12 0zm5.496 17.306c-.215.353-.674.464-1.027.249-2.863-1.748-6.467-2.144-10.713-1.173-.404.092-.811-.161-.903-.565-.092-.404.161-.811.565-.903 4.654-1.066 8.647-.611 11.83 1.328.353.21.464.674.248 1.024zm1.465-3.264c-.27.441-.846.58-1.287.31-3.277-2.013-8.272-2.597-12.146-1.421-.497.151-1.026-.131-1.177-.628-.151-.497.131-1.026.628-1.177 4.437-1.346 9.941-.699 13.672 1.593.441.269.58.845.31 1.287zm.135-3.37c-.322.528-1.016.694-1.544.372-3.837-2.28-10.165-2.489-13.844-1.372-.607.184-1.251-.158-1.435-.765-.184-.607.158-1.251.765-1.435 4.314-1.31 11.314-1.077 15.746 1.558.528.322.694 1.017.372 1.545z" />
                                                                </svg>
                                                            </div>
                                                            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Listen on Spotify</span>
                                                        </div>
                                                        <ExternalLink className="h-3 w-3 text-[#1DB954] opacity-50 group-hover/cta:opacity-100 transition-opacity" />
                                                    </a>
                                                )}

                                                {item.steamUrl && (
                                                    <a
                                                        href={item.steamUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-between rounded bg-[#1b2838]/10 p-3 border border-[#66c0f4]/20 hover:bg-[#1b2838]/20 transition-all group/cta"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="bg-[#1b2838] p-1 rounded-full flex items-center justify-center">
                                                                <Image
                                                                    src="/images/logos/steam-logo.png"
                                                                    alt="Steam"
                                                                    width={14}
                                                                    height={14}
                                                                    className="object-contain"
                                                                />
                                                            </div>
                                                            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">View Poveglia on Steam</span>
                                                        </div>
                                                        <ExternalLink className="h-3 w-3 text-[#66c0f4] opacity-50 group-hover/cta:opacity-100 transition-opacity" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="mt-4 h-[1px] w-12 bg-gradient-to-r from-border to-transparent group-hover:w-full transition-all duration-700" />
                        </div>
                    </div>
                ))}
            </div>

            {!showAll && newsItems.length > 3 && (
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="rounded-full border border-border px-6 py-2 text-xs font-medium uppercase tracking-widest text-foreground transition-all duration-200 hover:bg-muted hover:border-accent"
                    >
                        View All News
                    </button>
                </div>
            )}
        </section>
    );
}
