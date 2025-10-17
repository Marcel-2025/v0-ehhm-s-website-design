"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Youtube, ExternalLink, Play } from "lucide-react"
import type { YouTubeVideo } from "@/lib/youtube"

interface YouTubePlaylistProps {
  playlistId: string
}

export function YouTubePlaylist({ playlistId }: YouTubePlaylistProps) {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simuliere das Laden der Playlist-Daten
    // In einer echten App würdest du hier eine API-Route aufrufen
    const loadVideos = async () => {
      try {
        // Hier würdest du deine echten Video-IDs einsetzen
        const playlistVideos: YouTubeVideo[] = [
          {
            id: "DEINE_VIDEO_ID_1", // Ersetze mit echter ID
            title: "Dawn of Emotions",
            thumbnail: "https://img.youtube.com/vi/DEINE_VIDEO_ID_1/maxresdefault.jpg",
            duration: "2:30",
          },
          {
            id: "DEINE_VIDEO_ID_2", // Ersetze mit echter ID
            title: "Dopamine Loops",
            thumbnail: "https://img.youtube.com/vi/DEINE_VIDEO_ID_2/maxresdefault.jpg",
            duration: "3:03",
          },
          {
            id: "DEINE_VIDEO_ID_3", // Ersetze mit echter ID
            title: "Feel the Energy",
            thumbnail: "https://img.youtube.com/vi/DEINE_VIDEO_ID_3/maxresdefault.jpg",
            duration: "2:47",
          },
          {
            id: "DEINE_VIDEO_ID_4", // Ersetze mit echter ID
            title: "Festival Rising",
            thumbnail: "https://img.youtube.com/vi/DEINE_VIDEO_ID_4/maxresdefault.jpg",
            duration: "2:29",
          },
          {
            id: "DEINE_VIDEO_ID_5", // Ersetze mit echter ID
            title: "Eternal Echoes",
            thumbnail: "https://img.youtube.com/vi/DEINE_VIDEO_ID_5/maxresdefault.jpg",
            duration: "3:00",
          },
          {
            id: "DEINE_VIDEO_ID_6", // Ersetze mit echter ID
            title: "Euphoric Rave",
            thumbnail: "https://img.youtube.com/vi/DEINE_VIDEO_ID_6/maxresdefault.jpg",
            duration: "2:56",
          },
          {
            id: "DEINE_VIDEO_ID_7", // Ersetze mit echter ID
            title: "Echoes of Minimalism",
            thumbnail: "https://img.youtube.com/vi/DEINE_VIDEO_ID_7/maxresdefault.jpg",
            duration: "2:16",
          },
          {
            id: "DEINE_VIDEO_ID_8", // Ersetze mit echter ID
            title: "Rebel Echoes",
            thumbnail: "https://img.youtube.com/vi/DEINE_VIDEO_ID_8/maxresdefault.jpg",
            duration: "2:45",
          },
        ]

        setVideos(playlistVideos)
      } catch (error) {
        console.error("Error loading playlist:", error)
      } finally {
        setLoading(false)
      }
    }

    loadVideos()
  }, [playlistId])

  if (loading) {
    return (
      <Card className="bg-gray-900/50 border-gray-800 rounded-2xl mb-8 overflow-hidden backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Youtube className="w-6 h-6 text-red-500" />
              Music Videos
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-video bg-gray-800 rounded-xl animate-pulse" />
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800 rounded-2xl mb-8 overflow-hidden backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Youtube className="w-6 h-6 text-red-500" />
            Music Videos
          </h3>
          <Link href={`https://youtube.com/playlist?list=${playlistId}`} target="_blank">
            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Playlist
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <Link key={video.id} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" className="group">
              <div className="relative overflow-hidden rounded-xl bg-gray-800 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-red-500/25">
                <div className="aspect-video relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover transition-all duration-300 group-hover:brightness-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-red-600 rounded-full p-3">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-semibold text-sm text-white group-hover:text-red-400 transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">Ehhm.s</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
