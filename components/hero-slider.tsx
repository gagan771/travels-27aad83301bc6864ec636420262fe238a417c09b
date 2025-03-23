"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// WhatsApp link
const WHATSAPP_LINK = "https://api.whatsapp.com/message/DOHUV3RWQJ5AJ1?autoload=1&app_absent=0"

interface SlideData {
  id: number
  image: string
  title: string
  subtitle: string
}

const slideData: SlideData[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1720819029162-8500607ae232?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Explore the sights of the Azores",
    subtitle: "A place where nature and adventure unite",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1713340546638-5e30e2b7b1fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Discover hidden beaches",
    subtitle: "Crystal clear waters and pristine shores await",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1603867106100-0d2039fc8757?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Experience local culture",
    subtitle: "Immerse yourself in island traditions",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dp",
    title: "Adventure in Rishikesh",
    subtitle: "Thrilling white water rafting and more",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1699974406515-2b8edd2f812a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sacred Char Dham Yatra",
    subtitle: "Embark on a spiritual journey in the Himalayas",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
    title: "Serene Nainital",
    subtitle: "Discover the beauty of the lake city",
  },
]

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const handleNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const handlePrev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
    setTouchStart(null)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [handleNext])

  const scrollToContent = () => {
    const contentElement = document.getElementById("about-section")
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative h-screen overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {slideData.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 md:px-8 max-w-5xl">
              <h1
                className="text-white text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-4"
                style={{
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  opacity: activeSlide === index ? 1 : 0,
                  transform: activeSlide === index ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                  transitionDelay: "0.2s",
                }}
              >
                {slide.title}
              </h1>
              <p
                className="text-white text-lg md:text-xl font-medium mb-4"
                style={{
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  opacity: activeSlide === index ? 1 : 0,
                  transform: activeSlide === index ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                  transitionDelay: "0.4s",
                }}
              >
                {slide.subtitle}
              </p>

              {/* Added tagline */}
              <div
                className="text-white text-sm md:text-base bg-black/40 p-2 md:p-3 rounded-lg inline-block mb-8 backdrop-blur-sm"
                style={{
                  opacity: activeSlide === index ? 1 : 0,
                  transform: activeSlide === index ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                  transitionDelay: "0.5s",
                }}
              >
                <span className="font-medium">We got all what you need in</span>
                <br />
                <span className="font-bold">📍Rishikesh 📍Bir 📍India</span>
                <br />
                <span className="italic">Hotels | Camps | Rafting | Bungee | Itinerary & lots more🧚🏻</span>
                <br />
                <span className="italic">
                  Your dream adventure awaits - Book now and create memories that last a lifetime!
                </span>
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 px-8"
                  style={{
                    opacity: activeSlide === index ? 1 : 0,
                    transform: activeSlide === index ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                    transitionDelay: "0.6s",
                  }}
                  asChild
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Book now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full border-white/20 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full border-white/20 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToContent}
          className="rounded-full border-white/20 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 animate-float"
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-8 z-20">
        <div className="text-white/70 text-sm flex items-center space-x-2">
          {slideData.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeSlide === index ? "bg-white w-8" : "bg-white/40 hover:bg-white/60",
              )}
              onClick={() => {
                setIsTransitioning(true)
                setActiveSlide(index)
                setTimeout(() => setIsTransitioning(false), 600)
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

