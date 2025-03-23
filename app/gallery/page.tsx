"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// GALLERY DATA - EDIT HERE
const galleryImages = [
  { id: 1, src: "/1.png" },
  { id: 2, src: "/2.png" },
  { id: 3, src: "/3.png" },
  { id: 4, src: "/49.png" },
  { id: 5, src: "/50.png" },
  
  { id: 7, src: "/52.png" },
  { id: 8, src: "/53.png" },  
  { id: 9, src: "/54.png" },
  { id: 10, src: "/55.png" },
  { id: 11, src: "/56.png" },
  { id: 12, src: "/57.png" },
  { id: 13, src: "/58.png" },
  { id: 14, src: "/59.png" },
  { id: 15, src: "/60.png" },
  
  { id: 17, src: "/62.png" },   
  { id: 18, src: "/63.png" },
  { id: 19, src: "/64.png" },
  { id: 20, src: "/65.png" },
  { id: 21, src: "/66.png" },
  { id: 22, src: "/67.png" },
  { id: 23, src: "/68.png" },
  { id: 24, src: "/69.png" },
  { id: 25, src: "/70.png" },
  { id: 26, src: "/71.png" },
  { id: 27, src: "/72.png" },
  { id: 28, src: "/73.png" },
  { id: 29, src: "/74.png" },
  
  { id: 31, src: "/76.png" },
]

// INSTAGRAM REELS - EDIT HERE
const instagramReels = [
  { id: "reel1", embedUrl: "https://www.instagram.com/reel/DFSQkdlyJy8/embed" },
  { id: "reel2", embedUrl: "https://www.instagram.com/reel/DGzp77iRbj8/embed" },
  { id: "reel3", embedUrl: "https://www.instagram.com/reel/CpRsCwnDr1n/embed" },
  { id: "reel4", embedUrl: "https://www.instagram.com/reel/DHgFuy_TWKE/embed" },
  { id: "reel5", embedUrl: "https://www.instagram.com/reel/DHe-G45IIjv/embed" },
  { id: "reel6", embedUrl: "https://www.instagram.com/reel/DHbL8U8ThNH/embed" },
  { id: "reel7", embedUrl: "https://www.instagram.com/reel/DHXwr78u59y/embed" },
  { id: "reel8", embedUrl: "https://www.instagram.com/reel/DHILyynRA0h/embed" },
]

export default function GalleryPage() {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative rounded-xl overflow-hidden">
                <img src={image.src} alt="Gallery Image" className="w-full h-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {instagramReels.map((reel) => (
              <div key={reel.id} className="relative rounded-xl overflow-hidden">
                <iframe
                  src={reel.embedUrl}
                  title="Instagram Reel"
                  allowFullScreen
                  className="w-full aspect-[3/4] md:aspect-[4/5] border-0 rounded-lg"
                ></iframe>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
