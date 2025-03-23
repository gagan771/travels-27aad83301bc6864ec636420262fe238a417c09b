import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RishikeshPage() {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Explore Rishikesh</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the yoga capital of the world, situated on the banks of the holy Ganges River and surrounded by the
          majestic Himalayas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {[
          {
            title: "Spiritual Tours",
            description: "Experience the spiritual side of Rishikesh with guided temple visits and sacred rituals.",
            href: "/rishikesh/spiritual-tours",
            image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
          },
          {
            title: "Yoga Retreats",
            description: "Find inner peace with yoga by the Ganges at world-renowned ashrams and retreat centers.",
            href: "/rishikesh/yoga-retreats",
            image: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2064&auto=format&fit=crop",
          },
          {
            title: "Ganga Aarti",
            description: "Witness the divine Ganga Aarti ritual by the river at Triveni Ghat or Parmarth Niketan.",
            href: "/rishikesh/ganga-aarti",
            image: "https://images.unsplash.com/photo-1619083382085-9452904eaad8?q=80&w=2070&auto=format&fit=crop",
          },
        ].map((item, index) => (
          <div key={index} className="group relative rounded-xl overflow-hidden">
            <div className="relative h-80 w-full overflow-hidden rounded-xl">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-4 text-sm text-white/80">{item.description}</p>
              <Button asChild size="sm" className="rounded-full">
                <Link href={item.href}>Explore More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

