import { PackageCarousel } from "@/components/package-carousel"
import { FAQAccordion } from "@/components/faq-accordion"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

// WhatsApp link
const WHATSAPP_LINK = "https://api.whatsapp.com/message/DOHUV3RWQJ5AJ1?autoload=1&app_absent=0"

// Package images
const packageImages = [
  {
    src: "https://images.unsplash.com/photo-1619083382085-9452904eaad8?q=80&w=2070&auto=format&fit=crop",
    alt: "Ganga Aarti ceremony",
    title: "Evening Ganga Aarti ceremony at Parmarth Niketan",
  },
  {
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
    alt: "Temples in Rishikesh",
    title: "Ancient temples along the Ganges",
  },
  {
    src: "https://images.unsplash.com/photo-1593611771033-27d91265ab29?q=80&w=2072&auto=format&fit=crop",
    alt: "Rafting in Rishikesh",
    title: "White water rafting adventure",
  },
  {
    src: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070&auto=format&fit=crop",
    alt: "Meditation in Rishikesh",
    title: "Peaceful meditation sessions",
  },
]

// Accommodation images
const accommodationImages = [
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    alt: "Luxury hotel room",
    title: "Riverside Suite",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Hotel exterior",
    title: "Hotel Exterior with Mountain Views",
  },
  {
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop",
    alt: "Hotel lobby",
    title: "Elegant Hotel Lobby",
  },
]

// FAQ items
const faqItems = [
  {
    question: "What is Ganga Aarti and why is it significant?",
    answer:
      "Ganga Aarti is a powerful spiritual ritual performed every evening on the banks of the Ganges River to honor the sacred river. It involves fire, chanting, flowers, and incense, creating a mesmerizing spiritual experience. The ceremony is significant as it represents gratitude to the river Goddess Ganga for her life-giving properties.",
  },
  {
    question: "What is the best time to witness Ganga Aarti?",
    answer:
      "The Ganga Aarti ceremony typically takes place at sunset, around 6:30-7:00 PM depending on the season. We recommend arriving at least 30 minutes early to get the best viewing spot. Our package includes VIP seating arrangements for an unobstructed view of the ceremony.",
  },
  {
    question: "What should I wear for the Ganga Aarti ceremony?",
    answer:
      "We recommend modest clothing that covers shoulders and knees as a sign of respect at this spiritual ceremony. Comfortable footwear is advised as you may need to remove shoes at certain locations. During winter months (November-February), bring a light jacket as evenings can be cool.",
  },
  {
    question: "Can I take photographs during the ceremony?",
    answer:
      "Yes, photography is permitted during the Ganga Aarti ceremony. However, we ask that you be respectful of the spiritual nature of the event and of other attendees. Our guide will advise on the best moments and angles for photography without disturbing the ceremony.",
  },
  {
    question: "Is this package suitable for elderly travelers?",
    answer:
      "Yes, this package is designed to be accessible for travelers of all ages, including elderly visitors. Our vehicles provide comfortable transportation, and the walking distances are moderate with plenty of rest opportunities. Please inform us of any specific mobility concerns when booking so we can make appropriate arrangements.",
  },
]

export default function Package3Page() {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      {/* Package Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Package 3: Sacred Ganga Experience</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Immerse yourself in the spiritual essence of Rishikesh with VIP access to the divine Ganga Aarti ceremony
        </p>
      </div>

      {/* Package Category */}
      <div className="bg-primary/10 rounded-lg p-6 mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">Premium Cultural Experience</h2>
        <p className="text-muted-foreground">
          A luxurious journey combining spiritual ceremonies, cultural immersion, and comfortable accommodations
        </p>
      </div>

      {/* Package Carousel */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience Highlights</h2>
        <PackageCarousel images={packageImages} />
      </div>

      {/* Inclusions & Exclusions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-background rounded-lg p-6 border">
          <h2 className="text-2xl font-semibold mb-4">Inclusions</h2>
          <ul className="space-y-3">
            {[
              "2 nights accommodation in a premium riverside hotel",
              "Daily breakfast and dinner",
              "VIP seating for Ganga Aarti ceremony at Parmarth Niketan",
              "Private guided tour of Rishikesh's spiritual landmarks",
              "Traditional puja ceremony with a local priest",
              "Evening boat ride on the Ganges",
              "Half-day white water rafting experience",
              "Private air-conditioned transportation",
              "Professional English-speaking guide",
              "All applicable taxes and service charges",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-background rounded-lg p-6 border">
          <h2 className="text-2xl font-semibold mb-4">Exclusions</h2>
          <ul className="space-y-3">
            {[
              "Airfare or train tickets to/from Rishikesh",
              "Lunches and personal meals",
              "Personal expenses and shopping",
              "Travel insurance",
              "Additional activities not mentioned in inclusions",
              "Tips and gratuities",
              "Camera fees at certain locations (if applicable)",
              "Anything not specifically mentioned in inclusions",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Accommodation Details */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Luxury Accommodation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <PackageCarousel images={accommodationImages} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-medium mb-3">Divine Ganges Resort</h3>
            <p className="text-muted-foreground mb-4">
              Our selected premium accommodation offers spectacular views of the Ganges River and surrounding mountains.
              Located just a short walk from the main ghats, this hotel combines traditional architecture with modern
              amenities to provide a comfortable and authentic stay experience.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Elegantly appointed rooms with river views",
                "En-suite bathrooms with premium toiletries",
                "Restaurant serving international and Indian cuisine",
                "Rooftop yoga and meditation space",
                "Free high-speed WiFi",
                "24-hour room service",
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tour Details */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Itinerary Details</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Day 1: Arrival & Evening Ceremony</h3>
            <p className="text-muted-foreground mt-2">
              Arrive in Rishikesh and check into your riverside hotel. After refreshments, enjoy an orientation walk
              along the ghats. In the evening, witness your first Ganga Aarti ceremony at Triveni Ghat with expert
              commentary from your guide explaining the rituals and their significance. Welcome dinner at the hotel.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Day 2: Spiritual Exploration & Adventure</h3>
            <p className="text-muted-foreground mt-2">
              Morning visit to key spiritual sites including Ram Jhula, Laxman Jhula, and ancient temples. Participate
              in a traditional puja ceremony with a local priest. After lunch, experience white water rafting on the
              Ganges (suitable for beginners). Evening VIP access to the grand Ganga Aarti ceremony at Parmarth Niketan
              Ashram with special seating and photo opportunities.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Day 3: Sunrise Boat Ride & Departure</h3>
            <p className="text-muted-foreground mt-2">
              Early morning boat ride on the Ganges to witness the sunrise over the Himalayas and observe morning
              rituals along the riverbanks. After breakfast, time for shopping at local markets for spiritual items and
              souvenirs. Check-out and departure with transfer assistance.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqItems} />
      </div>

      {/* Booking CTA */}
      <div className="bg-primary/10 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Experience the Divine Ganga Aarti</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Book this exclusive package now for a spiritually enriching experience with VIP access to Rishikesh's most
          sacred ceremonies. Limited availability for upcoming dates.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Book Now via WhatsApp
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Have questions? Contact us directly through WhatsApp for personalized assistance.
        </p>
      </div>
    </div>
  )
}

