"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
]

// INSTAGRAM REELS - EDIT HERE
const instagramReels = [
  {
    id: "reel1",
    title: "",
    embedUrl: "https://www.instagram.com/reel/DFSQkdlyJy8/embed",
  },
  {
    id: "reel2",
    title: "",
    embedUrl: "https://www.instagram.com/reel/DGzp77iRbj8/embed",
  },
  {
    id: "reel3",
    title: "",
    embedUrl: "https://www.instagram.com/reel/CpRsCwnDr1n/embed",
  },
  {
    id: "reel4",
    title: "",
    embedUrl: "https://www.instagram.com/reel/DHgFuy_TWKE/embed",
  },
  {
    id: "reel5",
    title: "",
    embedUrl: "https://www.instagram.com/reel/DHe-G45IIjv/embed",
  },
  {
    id: "reel6",
    title: "",
    embedUrl: "https://www.instagram.com/reel/DHbL8U8ThNH/embed",
  },
  {
    id: "reel7",
    title: "",
    embedUrl: "https://www.instagram.com/reel/DHXwr78u59y/embed",
  },
  {
    id: "reel8",
    title: "",
    embedUrl: "https://www.instagram.com/reel/DHILyynRA0h/embed",
  },
  
  
]



export default function GalleryPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-24 px-6 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Our Gallery</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore stunning images and Instagram Reels from our adventures across Uttarakhand.
        </p>
      </div>

      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="videos">Reels</TabsTrigger>
        </TabsList>

        <TabsContent value="photos" className="mt-6">
          {/* Image Slider */}
          <div className="relative overflow-hidden rounded-xl aspect-[16/7] bg-muted mb-6">
            <div className="relative h-full">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
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
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {instagramReels.map((reel) => (
              <div key={reel.id} className="relative rounded-xl overflow-hidden">
                <iframe
                  src={reel.embedUrl}
                  title={reel.title}
                  allowFullScreen
                  className="w-full aspect-[3/4] md:aspect-[4/5] border-0 rounded-lg"

                ></iframe>
                <div className="p-4 bg-black/60 text-white text-center">{reel.title}</div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}