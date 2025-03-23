import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CharDhamPage() {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Char Dham - The Sacred Pilgrimage</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Embark on the most sacred Hindu pilgrimage to the four divine abodes in the Himalayas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {[
          {
            title: "Yamunotri",
            description: "The source of River Yamuna and home to the temple of Goddess Yamuna.",
            href: "/char-dham/yamunotri",
            image: "https://images.unsplash.com/photo-1598431458534-027ff3adc4d8?q=80&w=2069&auto=format&fit=crop",
          },
          {
            title: "Gangotri",
            description: "The origin of the holy Ganges and site of the Gangotri Temple dedicated to Goddess Ganga.",
            href: "/char-dham/gangotri",
            image: "https://images.unsplash.com/photo-1598432969810-5c2d62202409?q=80&w=2070&auto=format&fit=crop",
          },
          {
            title: "Kedarnath",
            description:
              "The abode of Lord Shiva, featuring one of the 12 Jyotirlingas in a stunning Himalayan setting.",
            href: "/char-dham/kedarnath",
            image: "https://images.unsplash.com/photo-1614087434853-25e6c5f0d377?q=80&w=2070&auto=format&fit=crop",
          },
          {
            title: "Badrinath",
            description: "The sacred temple of Lord Vishnu nestled between the Nar and Narayan mountain ranges.",
            href: "/char-dham/badrinath",
            image: "https://images.unsplash.com/photo-1589307357824-96a0ee3a2594?q=80&w=2070&auto=format&fit=crop",
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

