import { PackageCarousel } from "@/components/package-carousel"
import { FAQAccordion } from "@/components/faq-accordion"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

// WhatsApp link
const WHATSAPP_LINK = "https://api.whatsapp.com/message/DOHUV3RWQJ5AJ1?autoload=1&app_absent=0"

// Package images
const packageImages = [
  {
    src: "https://images.unsplash.com/photo-1593611771033-27d91265ab29?q=80&w=2072&auto=format&fit=crop",
    alt: "Rafting in Rishikesh",
    title: "White water rafting adventure",
  },
  {
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
    alt: "Temples in Rishikesh",
    title: "Local temples and ashrams",
  },
  {
    src: "https://images.unsplash.com/photo-1619083382085-9452904eaad8?q=80&w=2070&auto=format&fit=crop",
    alt: "Ganga Aarti ceremony",
    title: "Evening Ganga Aarti",
  },
  {
    src: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070&auto=format&fit=crop",
    alt: "Local market",
    title: "Exploring local markets",
  },
]

// Accommodation images
const accommodationImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    alt: "Budget hotel room",
    title: "Comfortable Standard Room",
  },
  {
    src: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?q=80&w=2069&auto=format&fit=crop",
    alt: "Hostel dormitory",
    title: "Budget-Friendly Accommodation",
  },
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
    alt: "Hotel exterior",
    title: "Hotel Exterior View",
  },
]

// FAQ items
const faqItems = [
  {
    question: "Is this package suitable for solo travelers?",
    answer:
      "Yes, this package is perfect for solo travelers! Many of our guests are solo adventurers looking to explore Rishikesh on a budget. You'll have opportunities to meet other travelers during group activities like rafting, while still having personal time to explore at your own pace.",
  },
  {
    question: "What type of accommodation is provided?",
    answer:
      "We offer clean, comfortable budget accommodations in well-located guesthouses or hostels. Rooms typically include basic amenities like clean bedding, towels, and private or shared bathrooms depending on your preference. While not luxury accommodations, they provide everything you need for a pleasant stay.",
  },
  {
    question: "How difficult is the white water rafting?",
    answer:
      "The rafting experience included in this package covers a 16km stretch with Grade II and III rapids, suitable for beginners and those with no prior experience. Professional guides provide safety instructions and equipment, ensuring a thrilling yet safe adventure for everyone.",
  },
  {
    question: "Is food included in the package?",
    answer:
      "The package includes daily breakfast. For other meals, we've intentionally left them flexible so you can explore local eateries and cafes, which is part of the authentic Rishikesh experience. Your guide can recommend affordable and delicious local restaurants.",
  },
  {
    question: "Can I extend my stay or add additional activities?",
    answer:
      "Many travelers choose to extend their stay in Rishikesh. We can help arrange additional nights at our partner accommodations at special rates. We also offer add-on activities like bungee jumping, cliff jumping, or additional rafting experiences at discounted prices for our package guests.",
  },
]

export default function Package4Page() {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      {/* Package Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Package 4: Budget Adventure</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the best of Rishikesh without breaking the bank with our value-packed budget adventure
        </p>
      </div>

      {/* Package Category */}
      <div className="bg-primary/10 rounded-lg p-6 mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">Budget-Friendly Experience</h2>
        <p className="text-muted-foreground">
          An affordable adventure combining essential Rishikesh experiences with comfortable budget accommodations
        </p>
      </div>

      {/* Package Carousel */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Adventure Highlights</h2>
        <PackageCarousel images={packageImages} />
      </div>

      {/* Inclusions & Exclusions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-background rounded-lg p-6 border">
          <h2 className="text-2xl font-semibold mb-4">Inclusions</h2>
          <ul className="space-y-3">
            {[
              "3 nights accommodation in budget-friendly hotels or hostels",
              "Daily breakfast",
              "One white water rafting session (16km stretch)",
              "Guided tour of local temples and ashrams",
              "Evening Ganga Aarti experience",
              "Walking tour of Rishikesh",
              "Local English-speaking guide for tours",
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
              "Transportation to/from Rishikesh",
              "Lunches and dinners",
              "Personal expenses and shopping",
              "Travel insurance",
              "Additional activities not mentioned in inclusions",
              "Tips and gratuities",
              "Premium accommodation upgrades",
              "Private transportation (local shared transport is used)",
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
        <h2 className="text-2xl font-semibold mb-4">Budget Accommodation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <PackageCarousel images={accommodationImages} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-medium mb-3">Comfortable Budget Stays</h3>
            <p className="text-muted-foreground mb-4">
              Our carefully selected budget accommodations offer clean, comfortable rooms in convenient locations. While
              simple in amenities, these properties provide everything you need for a good night's rest after your daily
              adventures, allowing you to experience Rishikesh without spending a fortune on lodging.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Clean, comfortable rooms",
                "Hot water",
                "Wi-Fi in common areas",
                "Convenient locations near main attractions",
                "24-hour reception",
                "Luggage storage",
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
            <h3 className="text-xl font-medium">Day 1: Arrival & Orientation</h3>
            <p className="text-muted-foreground mt-2">
              Arrive in Rishikesh and check into your accommodation. Meet your local guide for an orientation walk
              around the area to get your bearings. Evening visit to Triveni Ghat for the Ganga Aarti ceremony, a
              spiritual highlight of Rishikesh. Free time for dinner at local cafes (your guide will recommend
              affordable options).
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Day 2: Rafting Adventure</h3>
            <p className="text-muted-foreground mt-2">
              After breakfast, enjoy a thrilling white water rafting experience on the Ganges (16km stretch).
              Professional guides will provide all necessary equipment and safety instructions. The afternoon is free
              for personal exploration or optional activities (available at additional cost). Evening at leisure to
              explore Rishikesh's vibrant cafe scene.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Day 3: Spiritual Rishikesh</h3>
            <p className="text-muted-foreground mt-2">
              Morning guided tour of famous temples and ashrams including Laxman Jhula, Ram Jhula, and the Beatles
              Ashram. Learn about the spiritual significance of these sites and the history of yoga in Rishikesh.
              Afternoon free for shopping at local markets or optional activities. Evening farewell gathering with
              fellow travelers (optional, not included).
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Day 4: Departure</h3>
            <p className="text-muted-foreground mt-2">
              After breakfast, check-out from your accommodation. Depending on your departure time, enjoy some
              last-minute exploration or shopping. End of services with departure assistance if needed.
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
        <h2 className="text-3xl font-bold mb-4">Adventure Awaits - Book Your Budget Trip!</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Experience the magic of Rishikesh without breaking the bank. Our Budget Adventure package offers all the
          essential experiences at an unbeatable price.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Book Now via WhatsApp
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Questions about our budget package? Contact us directly through WhatsApp for quick answers.
        </p>
      </div>
    </div>
  )
}

