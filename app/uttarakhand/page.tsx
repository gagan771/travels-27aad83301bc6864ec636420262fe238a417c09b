import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function UttarakhandPage() {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Discover Uttarakhand</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore the "Land of Gods" with its majestic Himalayan peaks, sacred rivers, and pristine natural beauty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {[
          {
            title: "Nainital",
            description: "Visit the city of lakes, surrounded by mountains and featuring the beautiful Naini Lake.",
            href: "/uttarakhand/nainital",
            image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
          },
          {
            title: "Mussoorie",
            description: "Explore the queen of hills with stunning views of the Doon Valley and Himalayan ranges.",
            href: "/uttarakhand/mussoorie",
            image: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=2070&auto=format&fit=crop",
          },
          {
            title: "Auli",
            description: "Ski in the Himalayan slopes and witness breathtaking panoramic views of mountains.",
            href: "/uttarakhand/auli",
            image: "https://images.unsplash.com/photo-1562654501-a69aaa1b51f6?q=80&w=2064&auto=format&fit=crop",
          },
          {
            title: "Corbett",
            description: "Experience wildlife safari in India's oldest national park, home to Bengal tigers.",
            href: "/uttarakhand/corbett",
            image: "https://images.unsplash.com/photo-1614112539959-4b807ebd8c97?q=80&w=2070&auto=format&fit=crop",
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

