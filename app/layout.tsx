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
  title: "KARTHER | Digital Presskit 2026",
  description: "Karther construye desde la pista. Con grooves percusivos y una marcada estética inspirada en la cultura rap, hip hop y street de los 90 y 2000.",
  openGraph: {
    type: "website",
    url: "https://snarewarsradio.info/",
    title: "KARTHER | Digital Presskit 2026",
    description: "Karther construye desde la pista. Con grooves percusivos y una marcada estética inspirada en la cultura rap, hip hop y street de los 90 y 2000.",
    images: ["/multimedia-karther/hero-photos/1.avif"],
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
