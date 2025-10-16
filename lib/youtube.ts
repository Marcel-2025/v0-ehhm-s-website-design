// YouTube Data API helper functions
export interface YouTubeVideo {
  id: string
  title: string
  thumbnail: string
  duration: string
  publishedAt: string
}

export async function getPlaylistVideos(playlistId: string): Promise<YouTubeVideo[]> {
  // In einer echten Implementierung würdest du hier die YouTube Data API verwenden
  // Für jetzt verwende ich die bekannten Video-IDs aus deiner Playlist

  // Diese IDs müssten durch die echten ersetzt werden - sie sind Beispiele
  const videoIds = [
    "dQw4w9WgXcQ", // Beispiel-ID - muss ersetzt werden
    "oHg5SJYRHA0", // Beispiel-ID - muss ersetzt werden
    "kJQP7kiw5Fk", // Beispiel-ID - muss ersetzt werden
    "fJ9rUzIMcZQ", // Beispiel-ID - muss ersetzt werden
    "Zi_XLOBDo_Y", // Beispiel-ID - muss ersetzt werden
    "iik25wqIuFo", // Beispiel-ID - muss ersetzt werden
    "C0DPdy98e4c", // Beispiel-ID - muss ersetzt werden
    "EgqUJOudrcM", // Beispiel-ID - muss ersetzt werden
  ]

  const titles = [
    "Dawn of Emotions",
    "Dopamine Loops",
    "Feel the Energy",
    "Festival Rising",
    "Eternal Echoes",
    "Euphoric Rave",
    "Echoes of Minimalism",
    "Rebel Echoes",
  ]

  return videoIds.map((id, index) => ({
    id,
    title: titles[index] || `Video ${index + 1}`,
    thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    duration: "2:30", // Placeholder - würde von API kommen
    publishedAt: new Date().toISOString(),
  }))
}
