"use client"

import { Marquee } from "@/components/marquee"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "New York, USA",
    text: "Our trip to Rishikesh was absolutely incredible! The rafting experience was thrilling and the guides were so professional. Will definitely be back!",
    rating: 5,
  },
  {
    name: "David Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "London, UK",
    text: "The Char Dham pilgrimage was a life-changing experience. Everything was perfectly organized and the spiritual guidance was exceptional.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Delhi, India",
    text: "The yoga retreat in Rishikesh exceeded all my expectations. The instructors were world-class and the accommodation was perfect.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Sydney, Australia",
    text: "Bungee jumping in Rishikesh was the highlight of our trip! The staff made us feel safe while still having the thrill of a lifetime.",
    rating: 4,
  },
  {
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Toronto, Canada",
    text: "The trekking experience in Uttarakhand was breathtaking. Our guide knew all the best spots and shared fascinating stories about the region.",
    rating: 5,
  },
  {
    name: "Raj Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Mumbai, India",
    text: "From booking to the actual trip, everything was seamless. The camping experience in Bir was magical and the paragliding was unforgettable!",
    rating: 5,
  },
]

export function TestimonialSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Travelers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from travelers who have experienced our adventures firsthand.
          </p>
        </div>
      </div>

      <Marquee speed="slow" className="py-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Marquee>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <Card className="w-[350px] mx-4 shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{testimonial.location}</div>
          </div>
        </div>
        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
            />
          ))}
        </div>
        <p className="text-sm">{testimonial.text}</p>
      </CardContent>
    </Card>
  )
}

