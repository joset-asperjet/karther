'use client';

import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { useState, useEffect } from 'react'
import { Loader } from '@/components/loader'
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>JOSET | Digital Presskit 2026</title>
        <meta name="description" content="Joset is a Cali-born DJ and producer whose distinctive sonic identity is defined by a sophisticated fusion of Italo disco and cinematic soundscapes. His signature style evokes the atmospheric depth of classic video game environments." />
        <meta name="generator" content="v0.app" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://snarewarsradio.info/" />
        <meta property="og:title" content="JOSET | Digital Presskit 2026" />
        <meta property="og:description" content="Joset is a Cali-born DJ and producer whose distinctive sonic identity is defined by a sophisticated fusion of Italo disco and cinematic soundscapes. His signature style evokes the atmospheric depth of classic video game environments." />
        <meta property="og:image" content="https://snarewarsradio.info/images/joset-presskit-2026-artist-photo.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://snarewarsradio.info/" />
        <meta property="twitter:title" content="JOSET | Digital Presskit 2026" />
        <meta property="twitter:description" content="Joset is a Cali-born DJ and producer whose distinctive sonic identity is defined by a sophisticated fusion of Italo disco and cinematic soundscapes. His signature style evokes the atmospheric depth of classic video game environments." />
        <meta property="twitter:image" content="https://snarewarsradio.info/images/joset-presskit-2026-artist-photo.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {isLoading ? <Loader /> : children}
        <Analytics />
      </body>
    </html>
  )
}
