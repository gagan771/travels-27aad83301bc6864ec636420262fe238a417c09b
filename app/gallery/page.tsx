"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

// GALLERY DATA - EDIT HERE
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1593611771033-27d91265ab29?q=80&w=2072&auto=format&fit=crop",
    alt: "River rafting in Rishikesh",
    caption: "Thrilling white water rafting on the Ganges",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
    alt: "Nainital lake view",
    caption: "Serene views of Naini Lake",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1614087434853-25e6c5f0d377?q=80&w=2070&auto=format&fit=crop",
    alt: "Kedarnath Temple",
    caption: "The sacred Kedarnath Temple",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=2070&auto=format&fit=crop",
    alt: "Mussoorie hillside",
    caption: "Beautiful hillside views in Mussoorie",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1562654501-a69aaa1b51f6?q=80&w=2064&auto=format&fit=crop",
    alt: "Auli ski slopes",
    caption: "Snow-covered slopes in Auli",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1554201470-526e04a794cf?q=80&w=2070&auto=format&fit=crop",
    alt: "Bungee jumping",
    caption: "Bungee jumping adventure in Rishikesh",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1598431458534-027ff3adc4d8?q=80&w=2069&auto=format&fit=crop",
    alt: "Yamunotri Temple",
    caption: "The sacred Yamunotri Temple",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1598432969810-5c2d62202409?q=80&w=2070&auto=format&fit=crop",
    alt: "Gangotri Temple",
    caption: "The holy Gangotri Temple",
  },
]

// YOUTUBE VIDEOS - EDIT HERE
const youtubeVideos = [
  {
    id: "video1",
    title: "Rishikesh Travel Guide",
    embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1593611771033-27d91265ab29?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "video2",
    title: "Uttarakhand: Land of Gods",
    embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1614087434853-25e6c5f0d377?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "video3",
    title: "Adventure Sports in Rishikesh",
    embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1554201470-526e04a794cf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "video4",
    title: "Char Dham Yatra Guide",
    embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1598431458534-027ff3adc4d8?q=80&w=2069&auto=format&fit=crop",
  },
]

export default function GalleryPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Our Gallery</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore stunning images and videos from our adventures across Uttarakhand.
        </p>
      </div>

      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="photos" className="mt-6">
          {/* Image Slider */}
          <div className="relative overflow-hidden rounded-xl aspect-[16/9] bg-muted mb-6">
            <div className="relative h-full">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-lg">{image.caption}</p>
                  </div>
                </div>
              ))}

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white rounded-full"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`cursor-pointer rounded-md overflow-hidden transition-all ${
                  index === currentImageIndex ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-16 object-cover" />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          {selectedVideo ? (
            <div className="mb-6">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>

              <Button variant="outline" className="mt-4" onClick={() => setSelectedVideo(null)}>
                Back to Video Gallery
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {youtubeVideos.map((video) => (
                <div
                  key={video.id}
                  className="relative rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedVideo(video.embedId)}
                >
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <Play className="h-10 w-10 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-medium">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

