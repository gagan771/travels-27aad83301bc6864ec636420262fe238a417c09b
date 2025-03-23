"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  images: {
    src: string
    alt: string
    title?: string
  }[]
  autoPlay?: boolean
  interval?: number
  showControls?: boolean
  showIndicators?: boolean
}

export function Carousel({
  images,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const startAutoPlay = () => {
    if (autoPlay && images.length > 1) {
      autoPlayRef.current = setInterval(handleNext, interval)
    }
  }

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }

  useEffect(() => {
    if (isHovering) {
      stopAutoPlay()
    } else {
      startAutoPlay()
    }

    return () => stopAutoPlay()
  }, [isHovering])

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("mouseenter", handleMouseEnter)
      carousel.addEventListener("mouseleave", handleMouseLeave)

      // Touch events
      carousel.addEventListener("touchstart", handleMouseEnter)
      carousel.addEventListener("touchend", handleMouseLeave)
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("mouseenter", handleMouseEnter)
        carousel.removeEventListener("mouseleave", handleMouseLeave)
        carousel.removeEventListener("touchstart", handleMouseEnter)
        carousel.removeEventListener("touchend", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={carouselRef} className="relative overflow-hidden rounded-xl aspect-[16/9] bg-muted">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-lg font-semibold">{image.title}</h3>
              </div>
            )}
          </div>
        ))}
      </div>

      {showControls && images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white rounded-full opacity-70 hover:opacity-100 transition-opacity"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white rounded-full opacity-70 hover:opacity-100 transition-opacity"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                activeIndex === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/80",
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

