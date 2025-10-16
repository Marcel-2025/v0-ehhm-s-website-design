import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Instagram, Play, Headphones, Volume2 } from "lucide-react"
import { YouTubePlaylist } from "@/components/youtube-playlist"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/techno-festival-bg.png"
            alt="Dark techno festival background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            Ehhm.s
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Electronic music producer crafting atmospheric soundscapes and ethereal beats. Blending ambient textures
            with modern production to create immersive sonic experiences.
          </p>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Music className="w-8 h-8 text-purple-400" />
            Latest Music
          </h2>

          {/* YouTube Playlist Component */}
          <YouTubePlaylist playlistId="PLK7zy0yroTVgAPP7TJZPSYaQHHXFv0xs9" />

          {/* Spotify Embed */}
          <Card className="bg-gray-900/50 border-gray-800 rounded-2xl mb-12 overflow-hidden backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Music className="w-6 h-6 text-green-500" />
                Spotify Player
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://open.spotify.com/embed/artist/2UsXLtDjv2GLjXuBqEtNUW?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-xl"
                />
              </div>
            </CardContent>
          </Card>

          {/* Streaming Platform Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Link
              href="https://open.spotify.com/intl-de/artist/2UsXLtDjv2GLjXuBqEtNUW"
              target="_blank"
              className="group"
            >
              <Button className="w-full h-16 bg-green-600 hover:bg-green-500 text-white rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-green-500/25">
                <div className="flex flex-col items-center gap-1">
                  <Music className="w-5 h-5" />
                  <span className="text-sm font-medium">Spotify</span>
                </div>
              </Button>
            </Link>

            <Link href="https://music.apple.com/de/artist/ehhm-s/1813716914" target="_blank" className="group">
              <Button className="w-full h-16 bg-gray-800 hover:bg-gray-700 text-white rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-gray-500/25">
                <div className="flex flex-col items-center gap-1">
                  <Play className="w-5 h-5" />
                  <span className="text-sm font-medium">Apple Music</span>
                </div>
              </Button>
            </Link>

            <Link href="https://music.amazon.de/artists/B0F89B4G8H/ehhm-s" target="_blank" className="group">
              <Button className="w-full h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                <div className="flex flex-col items-center gap-1">
                  <Headphones className="w-5 h-5" />
                  <span className="text-sm font-medium">Amazon Music</span>
                </div>
              </Button>
            </Link>

            <Link href="https://www.youtube.com/@ehhm.s" target="_blank" className="group">
              <Button className="w-full h-16 bg-red-600 hover:bg-red-500 text-white rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-red-500/25">
                <div className="flex flex-col items-center gap-1">
                  <Volume2 className="w-5 h-5" />
                  <span className="text-sm font-medium">YouTube</span>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Connect</h2>

          <div className="flex justify-center gap-8">
            <Link href="https://instagram.com/ehhm.s" target="_blank" className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-pink-500/30">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <p className="text-gray-400 mt-3 group-hover:text-white transition-colors">Instagram</p>
            </Link>

            <Link href="https://tiktok.com/@ehhm.s" target="_blank" className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-black via-gray-800 to-white rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-gray-500/30">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Music className="w-6 h-6 text-black" />
                </div>
              </div>
              <p className="text-gray-400 mt-3 group-hover:text-white transition-colors">TikTok</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">© 2024 Ehhm.s. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
