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
      src: "/1.png",
      alt: "Beautiful coastal landscape",
      title: "Breathtaking Coastal Viewpoints",
    },
    {
      src: "/2.png",
      alt: "Hiking trail",
      title: "Guided Nature Hikes",
    },
    {
      src: "/3.png",
      alt: "Local cuisine",
      title: "Authentic Local Cuisine",
    },
    {
      src: "/4.png",
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
            At Akii Tales, we craft unforgettable journeys to the world's most mesmerizing islands. With expert guides and meticulously designed itineraries, we ensure the perfect blend of adventure, culture, and relaxation.
            </p>

            <div className="space-y-6 mt-8">
                {[
                {
                  title: "Expert Local Guides",
                  description:
                  "Our guides are local experts with deep knowledge of island history, culture, and hidden gems., We tailor each journey to your preferences, ensuring a truly unique adventure.",
                },
                
                {
                  title: "Thrilling Adventures",
                  description: "From rafting and bungee jumping to camping, we’ve got the perfect plan for thrill-seekers.",
                },
                {
                  title: "Budget-Friendly Trips",
                  description: "Enjoy stays, rafting, camping, and meals starting at just ₹3K per person.",
                },
                {
                  title: "Group Getaways",
                  description: "Perfect for groups of 4+ people with waterfalls, temples, bonfires, and adventure activities.",
                },
                {
                  title: "Romantic Couple Packages",
                  description: "Experience romantic stays paired with adventure combos for unforgettable memories.",
                },
                {
                  title: "Customized Trips",
                  description: "From Rishikesh to Auli, Chopta, Tungnath, and Jim Corbett, we plan trips your way., Stay in hostels, resorts, or campsites with delicious meals, private transfers, bonfires, and certified guides.",
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

