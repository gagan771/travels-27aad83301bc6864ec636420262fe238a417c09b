"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Clock, Star } from "lucide-react"

// PACKAGE DATA - EDIT HERE
const packages = [
  {
    id: 1,
    title: "Rishikesh Adventure Package",
    image: "https://images.unsplash.com/photo-1593611771033-27d91265ab29?q=80&w=2072&auto=format&fit=crop",
    location: "Rishikesh, Uttarakhand",
    duration: "3 Days / 2 Nights",
    groupSize: "2-8 people",
    price: "₹12,999",
    rating: 4.8,
    popular: true,
    description:
      "Experience thrilling white water rafting, camping by the Ganges, and explore the spiritual side of Rishikesh.",
    href: "/rishikesh/spiritual-tours",
  },
  {
    id: 2,
    title: "Nainital Lake Retreat",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
    location: "Nainital, Uttarakhand",
    duration: "4 Days / 3 Nights",
    groupSize: "2-6 people",
    price: "₹15,499",
    rating: 4.7,
    popular: false,
    description:
      "Enjoy boating on Naini Lake, cable car rides, and stunning mountain views in this charming hill station.",
    href: "/rishikesh/yoga-retreats",
  },
  {
    id: 3,
    title: "Char Dham Yatra",
    image: "https://images.unsplash.com/photo-1614087434853-25e6c5f0d377?q=80&w=2070&auto=format&fit=crop",
    location: "Uttarakhand",
    duration: "12 Days / 11 Nights",
    groupSize: "10-20 people",
    price: "₹45,999",
    rating: 4.9,
    popular: true,
    description: "Complete pilgrimage to all four sacred sites: Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    href: "/rishikesh/ganga-aarti",
  },
  {
    id: 4,
    title: "Mussoorie Weekend Getaway",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=2070&auto=format&fit=crop",
    location: "Mussoorie, Uttarakhand",
    duration: "2 Days / 1 Night",
    groupSize: "2-4 people",
    price: "₹8,999",
    rating: 4.5,
    popular: false,
    description: "Perfect weekend escape with Mall Road strolls, Kempty Falls visit, and panoramic mountain views.",
    href: "/rishikesh/package-4",
  },
  {
    id: 5,
    title: "Auli Ski Adventure",
    image: "https://images.unsplash.com/photo-1562654501-a69aaa1b51f6?q=80&w=2064&auto=format&fit=crop",
    location: "Auli, Uttarakhand",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 people",
    price: "₹22,999",
    rating: 4.6,
    popular: true,
    description: "Ski in the Himalayan slopes with professional instructors and enjoy Asia's longest cable car ride.",
    href: "/rishikesh/package-4",
  },
]

// WhatsApp link
const WHATSAPP_LINK = "https://api.whatsapp.com/message/DOHUV3RWQJ5AJ1?autoload=1&app_absent=0"

export function PackagesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Travel Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated travel experiences designed to showcase the best of Uttarakhand. From
            adventure to spirituality, we have something for everyone.
          </p>
        </div>

        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {packages.slice(0, 3).map((pkg) => (
            <Card
              key={pkg.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCard === pkg.id ? "scale-110" : "scale-100"
                  }`}
                />
                {pkg.popular && (
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Popular</Badge>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{pkg.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {pkg.groupSize}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-yellow-500 fill-yellow-500" />
                    <span>{pkg.rating}</span>
                  </div>
                  <p className="mt-2">{pkg.description}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-lg">{pkg.price}</div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href={pkg.href}>Details</Link>
                  </Button>
                  <Button size="sm" variant="default" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Second row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.slice(3, 5).map((pkg) => (
            <Card
              key={pkg.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCard === pkg.id ? "scale-110" : "scale-100"
                  }`}
                />
                {pkg.popular && (
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Popular</Badge>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{pkg.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {pkg.groupSize}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-yellow-500 fill-yellow-500" />
                    <span>{pkg.rating}</span>
                  </div>
                  <p className="mt-2">{pkg.description}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-lg">{pkg.price}</div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href={pkg.href}>Details</Link>
                  </Button>
                  <Button size="sm" variant="default" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

