"use client"

import { useRef, useEffect } from "react"
import { MorphingText } from "@/components/morphing-text"
import { Carousel } from "@/components/carousel"
import { cn } from "@/lib/utils"

export function FeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".reveal")
    elements.forEach((el) => {
      el.classList.add("opacity-0")
      observer.observe(el)
    })

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const featureImages = [
    {
      src: "https://images.unsplash.com/photo-1662303221668-26975b68f62d?q=80&w=2071&auto=format&fit=crop",
      alt: "Beautiful coastal landscape",
      title: "Breathtaking Coastal Viewpoints",
    },
    {
      src: "https://images.unsplash.com/photo-1504731231146-c0f65fba8a0f?q=80&w=2070&auto=format&fit=crop",
      alt: "Hiking trail",
      title: "Guided Nature Hikes",
    },
    {
      src: "https://images.unsplash.com/photo-1587982649760-70c2f63573b2?q=80&w=2288&auto=format&fit=crop",
      alt: "Local cuisine",
      title: "Authentic Local Cuisine",
    },
    {
      src: "https://images.unsplash.com/photo-1605909388460-74ec8b204127?q=80&w=2069&auto=format&fit=crop",
      alt: "Snorkeling activity",
      title: "Marine Life Adventures",
    },
  ]

  return (
    <section id="about-section" ref={sectionRef} className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <MorphingText
                words={["Paradise", "Adventure", "Discovery", "Relaxation", "Magic"]}
                baseText="Experience"
                interval={3000}
              />
            </h2>
            <p className="text-muted-foreground mb-6">
              At Island*, we curate extraordinary journeys to the world's most captivating islands. Our expert guides
              and thoughtfully crafted itineraries ensure you experience the perfect balance of adventure, culture, and
              relaxation.
            </p>

            <div className="space-y-6 mt-8">
              {[
                {
                  title: "Expert Local Guides",
                  description:
                    "Our guides are local experts with deep knowledge of island history, culture, and hidden gems.",
                },
                {
                  title: "Sustainable Tourism",
                  description:
                    "We're committed to preserving the natural beauty and cultural heritage of the islands we visit.",
                },
                {
                  title: "Personalized Experiences",
                  description: "We tailor each journey to your preferences, ensuring a truly unique adventure.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex relative pl-8 reveal",
                    "before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-primary/20 before:border before:border-primary/40",
                  )}
                >
                  <div>
                    <h3 className="font-medium text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <Carousel images={featureImages} />
          </div>
        </div>
      </div>
    </section>
  )
}

