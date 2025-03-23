import { PackageCarousel } from "@/components/package-carousel"
import { FAQAccordion } from "@/components/faq-accordion"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

// WhatsApp link
const WHATSAPP_LINK = "https://api.whatsapp.com/message/DOHUV3RWQJ5AJ1?autoload=1&app_absent=0"

// Package images
const packageImages = [
  {
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
    alt: "Spiritual tour in Rishikesh",
    title: "Sacred temples by the Ganges",
  },
  {
    src: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2064&auto=format&fit=crop",
    alt: "Yoga session in Rishikesh",
    title: "Yoga and meditation sessions",
  },
  {
    src: "https://images.unsplash.com/photo-1619083382085-9452904eaad8?q=80&w=2070&auto=format&fit=crop",
    alt: "Ganga Aarti ceremony",
    title: "Evening Ganga Aarti ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1593611771033-27d91265ab29?q=80&w=2072&auto=format&fit=crop",
    alt: "Rafting in Rishikesh",
    title: "Adventure activities",
  },
]

// Accommodation images
const accommodationImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    alt: "Luxury hotel room",
    title: "Deluxe Room",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Hotel exterior",
    title: "Hotel Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop",
    alt: "Hotel restaurant",
    title: "Dining Area",
  },
]

// FAQ items
const faqItems = [
  {
    question: "What is the best time to visit Rishikesh?",
    answer:
      "The best time to visit Rishikesh is from September to April when the weather is pleasant. Summers (May-June) can be hot, and monsoon season (July-August) may see heavy rainfall with occasional landslides.",
  },
  {
    question: "Is this package suitable for families with children?",
    answer:
      "Yes, this package is suitable for families with children. We offer activities that can be enjoyed by all age groups, and our guides are experienced in ensuring safety and engagement for younger travelers.",
  },
  {
    question: "What should I pack for this trip?",
    answer:
      "We recommend packing comfortable clothing, walking shoes, sunscreen, insect repellent, a hat, sunglasses, and a light jacket or shawl for evenings. For temple visits, modest clothing that covers shoulders and knees is appropriate.",
  },
  {
    question: "Are meals included in the package?",
    answer:
      "Yes, the package includes daily breakfast and dinner. Lunches are not included to give you flexibility to explore local cuisine at your own pace during day excursions.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Yes, we can accommodate various dietary restrictions including vegetarian, vegan, gluten-free, and other specific requirements. Please inform us of your needs when booking.",
  },
]

export default function Package1Page() {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      {/* Package Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Package 1: Spiritual Rishikesh Journey</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the spiritual heart of Rishikesh with our premium guided tour package
        </p>
      </div>

      {/* Package Category */}
      <div className="bg-primary/10 rounded-lg p-6 mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">Luxury Spiritual Experience</h2>
        <p className="text-muted-foreground">
          A carefully curated journey combining spiritual exploration, luxury accommodations, and authentic local
          experiences
        </p>
      </div>

      {/* Package Carousel */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tour Highlights</h2>
        <PackageCarousel images={packageImages} />
      </div>

      {/* Inclusions & Exclusions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-background rounded-lg p-6 border">
          <h2 className="text-2xl font-semibold mb-4">Inclusions</h2>
          <ul className="space-y-3">
            {[
              "3 nights accommodation in a luxury hotel",
              "Daily breakfast and dinner",
              "Private air-conditioned transportation",
              "Professional English-speaking guide",
              "All temple and attraction entrance fees",
              "Guided meditation and yoga sessions",
              "Evening Ganga Aarti ceremony",
              "White water rafting experience (Grade II-III)",
              "Welcome drink on arrival",
              "All applicable taxes",
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
              "Camera fees at monuments (if applicable)",
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
            <h3 className="text-xl font-medium mb-3">Riverside Luxury Resort & Spa</h3>
            <p className="text-muted-foreground mb-4">
              Our handpicked 5-star accommodation offers stunning views of the Ganges River and the surrounding
              Himalayan foothills. The resort features spacious rooms with modern amenities, a spa offering traditional
              Ayurvedic treatments, an outdoor pool, and multiple dining options serving both international and
              authentic local cuisine.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Spacious rooms with river views",
                "Free high-speed WiFi",
                "24-hour room service",
                "Spa and wellness center",
                "Outdoor swimming pool",
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
        <h2 className="text-2xl font-semibold mb-4">Tour Itinerary</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Day 1: Arrival & Welcome</h3>
            <p className="text-muted-foreground mt-2">
              Arrive in Rishikesh and transfer to your luxury hotel. Enjoy a welcome drink and orientation session.
              Evening visit to Triveni Ghat to witness the mesmerizing Ganga Aarti ceremony. Welcome dinner at the
              hotel.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Day 2: Spiritual Exploration</h3>
            <p className="text-muted-foreground mt-2">
              Morning yoga and meditation session by the Ganges. After breakfast, visit the famous Beatles Ashram, Swarg
              Ashram, and other spiritual centers. Afternoon free for personal exploration or optional spa treatments.
              Evening lecture on Hindu philosophy and spirituality.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Day 3: Adventure & Nature</h3>
            <p className="text-muted-foreground mt-2">
              Morning white water rafting experience on the Ganges (16km stretch). After lunch, trek to nearby
              waterfalls and natural caves. Evening visit to Parmarth Niketan for the grand Ganga Aarti ceremony with
              VIP seating.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Day 4: Departure</h3>
            <p className="text-muted-foreground mt-2">
              Final morning yoga session followed by breakfast. Visit to local markets for souvenir shopping. Check-out
              and transfer to your onward destination with beautiful memories of Rishikesh.
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
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Spiritual Rishikesh?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Book this exclusive package now and embark on a journey of spiritual discovery and adventure. Limited spots
          available for upcoming dates.
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

