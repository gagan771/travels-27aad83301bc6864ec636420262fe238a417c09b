import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdventurePage() {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Adventure in Rishikesh</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience thrilling adventures in the adventure capital of India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {[
          {
            title: "River Rafting",
            description: "Experience white water rafting on the Ganges with rapids ranging from Grade I to Grade IV.",
            href: "/adventure/rafting",
            image: "https://images.unsplash.com/photo-1593611771033-27d91265ab29?q=80&w=2072&auto=format&fit=crop",
          },
          {
            title: "Bungee Jumping",
            description: "Take a leap of faith from 83 meters height over a natural creek with stunning views.",
            href: "/adventure/bungee-jumping",
            image: "https://images.unsplash.com/photo-1554201470-526e04a794cf?q=80&w=2070&auto=format&fit=crop",
          },
          {
            title: "Cliff Jumping",
            description:
              "Jump into the crystal clear waters of the Ganges from various heights for an adrenaline rush.",
            href: "/adventure/cliff-jumping",
            image: "https://images.unsplash.com/photo-1551524358-f34c0214781d?q=80&w=2071&auto=format&fit=crop",
          },
          {
            title: "Trekking",
            description: "Trek through breathtaking Himalayan trails with panoramic views of mountains and valleys.",
            href: "/adventure/trekking",
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
          },
        ].map((item, index) => (
          <div key={index} className="group relative rounded-xl overflow-hidden h-[500px]">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-6 text-white/80">{item.description}</p>
              <Button asChild size="lg" className="rounded-full">
                <Link href={item.href}>Explore More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

