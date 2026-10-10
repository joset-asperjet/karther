import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import { Loader } from '@/components/loader'
import { AudioPlayerProvider } from '@/context/audio-player-context'
import { GlobalAudioPlayer } from '@/components/global-audio-player'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://karthermusic.info"),
  title: "KARTHER | Digital Presskit 2026",
  description: "KARTHER es un artista en ascenso dentro de la escena electrónica colombiana, con una propuesta sonora marcada por la energía del dancefloor, la cultura underground y una identidad street propia.",
  openGraph: {
    type: "website",
    url: "https://karthermusic.info/",
    title: "KARTHER | Digital Presskit 2026",
    description: "KARTHER es un artista en ascenso dentro de la escena electrónica colombiana, con una propuesta sonora marcada por la energía del dancefloor, la cultura underground y una identidad street propia.",
    images: ["/opengraph.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <AudioPlayerProvider>
          <Loader />
          {children}
          <GlobalAudioPlayer />
        </AudioPlayerProvider>
      </body>
    </html>
  );
}
