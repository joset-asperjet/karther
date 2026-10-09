'use client';

import { useState } from 'react';
import { Newspaper, ChevronDown, ChevronUp, Twitter, ExternalLink, Calendar } from 'lucide-react';
import Image from 'next/image';

const newsItems = [
    {
        title: "Karther Nominated for Breakthrough Producer of the Year at CDA 2025",
        date: "2025",
        description: "Recognition of his musical trajectory with a nomination for Breakthrough Producer of the Year at the prestigious CDA 2025 Awards.",
        tag: "Awards",
        detailedContent: "Karther received a nomination for Breakthrough Producer of the Year at the prestigious CDA 2025 Awards, recognizing his exponential growth within the industry. This milestone marks a significant step in his career, cementing his signature sound in the national scene.",
        image: "/multimedia-karther/latest-news/premios cda.webp"
    },
    {
        title: "Sonic Expansion: New Collaborations with Víctor Vergara",
        date: "Current",
        description: "Joining forces with emerging and established talents to push his music into new horizons.",
        tag: "Collab",
        detailedContent: "Karther has collaborated with artists such as Víctor Vergara and has an upcoming release alongside Jonathan Jaramillo. These creative synergies continue to expand the reach of his music, enriching his sonic proposition with every new release.",
        soundcloudUrl: "https://soundcloud.com/kartherdj/victor-vergara-karther-1",
        ctaText: "Listen on SoundCloud",
        image: "/multimedia-karther/latest-news/Sonic Expansion New Collaborations with Víctor Vergara.jpg"
    },
    {
        title: "Sharing the Stage with International Heavyweights",
        date: "2023 - 2024",
        description: "Karther delivered a dynamic warm-up set in a B2B format with Koleto, setting the tone for global figures.",
        tag: "Live",
        detailedContent: "Karther delivered dynamic warm-up sets for renowned artists like Classmatic and Rafa Barrios, sharing the stage with electronic music royalty. He also performed a high-impact B2B session alongside Koleto, while his presentation at Waff's party added an invaluable experience to his artistic trajectory."
    },
    {
        title: "Karther Makes His Debut at Gordo's Event",
        date: "2023",
        description: "A milestone in the local scene, participating in one of the biggest events of the year alongside Gordo.",
        tag: "Event",
        detailedContent: "In 2023, Karther performed at Gordo's massive event, taking a major step in his growth within the scene. This large-scale presentation allowed his sound to reach brand new audiences and established his presence on major stages.",
        soundcloudUrl: "https://soundcloud.com/kartherdj/karther-set-debut-cali-gordo-x-booth-alib-15-10-2023?si=267bc6bcd682401393788e9bc53b667d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        ctaText: "Listen to the Set on SoundCloud",
        image: "/multimedia-karther/latest-news/Karther Makes His Debut at Gordo's Event.webp"
    },
    {
        title: "Karther Remixes the Legendary Classic '21 Questions'",
        date: "Breakthrough",
        description: "The remix that became a turning point in his national recognition.",
        tag: "Release",
        detailedContent: "Karther's remix of the legendary classic '21 Questions' skyrocketed his recognition across Colombia and opened new doors for his project. Its massive reception on the dancefloors proved the impact of his unique style and laid the groundwork for his subsequent industry moves.",
        soundcloudUrl: "https://soundcloud.com/kartherdj/50-cent-21-questions-karther-edit-master",
        ctaText: "Listen to the Remix on SoundCloud",
        image: "/multimedia-karther/latest-news/Karther Remixes the Legendary Classic '21 Questions'.webp"
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

                            <h3 className="text-[15px] font-bold text-foreground leading-tight group-hover:text-accent transition-colors tracking-tight">
                                {item.title}
                            </h3>

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
                                                            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{('ctaText' in item) ? item.ctaText : 'Listen on SoundCloud'}</span>
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
