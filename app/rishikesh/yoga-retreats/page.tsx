import { PackageCarousel } from "@/components/package-carousel"
import { FAQAccordion } from "@/components/faq-accordion"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

// WhatsApp link
const WHATSAPP_LINK = "https://api.whatsapp.com/message/DOHUV3RWQJ5AJ1?autoload=1&app_absent=0"

// Package images
const packageImages = [
  {
    src: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2064&auto=format&fit=crop",
    alt: "Yoga session in Rishikesh",
    title: "Morning yoga by the Ganges",
  },
  {
    src: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070&auto=format&fit=crop",
    alt: "Meditation session",
    title: "Guided meditation sessions",
  },
  {
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
    alt: "Ashram in Rishikesh",
    title: "Traditional ashram experience",
  },
  {
    src: "https://images.unsplash.com/photo-1619083382085-9452904eaad8?q=80&w=2070&auto=format&fit=crop",
    alt: "Ganga Aarti ceremony",
    title: "Evening spiritual ceremonies",
  },
]

// Accommodation images
const accommodationImages = [
  {
    src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    alt: "Yoga retreat room",
    title: "Peaceful Retreat Room",
  },
  {
    src: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=2072&auto=format&fit=crop",
    alt: "Yoga hall",
    title: "Spacious Yoga Hall",
  },
  {
    src: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop",
    alt: "Meditation space",
    title: "Serene Meditation Space",
  },
]

// FAQ items
const faqItems = [
  {
    question: "Is this retreat suitable for beginners?",
    answer:
      "Yes, our yoga retreat is designed to accommodate practitioners of all levels, from complete beginners to advanced yogis. Our experienced instructors will provide modifications and personalized guidance as needed.",
  },
  {
    question: "What yoga styles are taught during the retreat?",
    answer:
      "The retreat includes a variety of yoga styles including Hatha, Vinyasa, Kundalini, and Yin yoga. This gives participants exposure to different practices and helps them discover which resonates most with them.",
  },
  {
    question: "What should I bring to the yoga retreat?",
    answer:
      "We recommend bringing comfortable yoga clothes, a light shawl or sweater for meditation sessions, a reusable water bottle, sunscreen, insect repellent, and any personal items you may need. Yoga mats and props are provided at the retreat center.",
  },
  {
    question: "Are the meals vegetarian?",
    answer:
      "Yes, all meals served during the retreat are vegetarian and prepared with fresh, locally-sourced ingredients. We can accommodate vegan, gluten-free, and other dietary requirements with advance notice.",
  },
  {
    question: "Is there free time during the retreat?",
    answer:
      "Yes, the schedule includes free time for personal reflection, relaxation, or exploring the local area. While we encourage participation in all sessions, we understand the importance of personal space and downtime during your retreat experience.",
  },
]

export default function Package2Page() {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      {/* Package Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Package 2: Transformative Yoga Retreat</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Immerse yourself in a week of yoga, meditation, and spiritual growth in the yoga capital of the world
        </p>
      </div>

      {/* Package Category */}
      <div className="bg-primary/10 rounded-lg p-6 mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">Premium Wellness Experience</h2>
        <p className="text-muted-foreground">
          A holistic retreat combining traditional yoga practices, meditation, Ayurvedic treatments, and spiritual
          teachings
        </p>
      </div>

      {/* Package Carousel */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Retreat Highlights</h2>
        <PackageCarousel images={packageImages} />
      </div>

      {/* Inclusions & Exclusions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-background rounded-lg p-6 border">
          <h2 className="text-2xl font-semibold mb-4">Inclusions</h2>
          <ul className="space-y-3">
            {[
              "6 nights accommodation in a traditional ashram or yoga retreat",
              "Three vegetarian meals daily",
              "Daily morning and evening yoga sessions",
              "Guided meditation practices",
              "Pranayama (breathing) workshops",
              "One Ayurvedic massage treatment",
              "Philosophy and spiritual discussions",
              "Participation in ashram rituals and ceremonies",
              "Visit to sacred sites in Rishikesh",
              "All yoga equipment and materials",
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
              "Airport/station transfers (can be arranged at additional cost)",
              "Additional Ayurvedic treatments beyond included session",
              "Personal expenses and shopping",
              "Travel insurance",
              "Additional activities not mentioned in inclusions",
              "Tips and gratuities",
              "Special dietary requirements (may incur additional charges)",
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
        <h2 className="text-2xl font-semibold mb-4">Retreat Accommodation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <PackageCarousel images={accommodationImages} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-medium mb-3">Peaceful Ganges Yoga Retreat</h3>
            <p className="text-muted-foreground mb-4">
              Our retreat center is located in a tranquil setting by the Ganges River, offering the perfect environment
              for deep yoga practice and spiritual connection. The accommodations are simple yet comfortable, designed
              to help you disconnect from distractions and focus on your inner journey.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Clean, comfortable rooms with private or shared bathrooms",
                "Dedicated yoga and meditation halls",
                "Peaceful gardens for relaxation",
                "Organic vegetarian kitchen",
                "River-facing meditation spots",
                "Wi-Fi in common areas (limited hours to encourage digital detox)",
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
        <h2 className="text-2xl font-semibold mb-4">Retreat Schedule</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Daily Schedule (Monday-Friday)</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <strong>5:30 AM:</strong> Wake-up bell
              </li>
              <li>
                <strong>6:00 - 7:30 AM:</strong> Morning yoga practice (Hatha/Vinyasa)
              </li>
              <li>
                <strong>8:00 - 9:00 AM:</strong> Breakfast
              </li>
              <li>
                <strong>9:30 - 11:00 AM:</strong> Pranayama and meditation workshop
              </li>
              <li>
                <strong>11:30 - 12:30 PM:</strong> Yoga philosophy discussion
              </li>
              <li>
                <strong>1:00 - 2:00 PM:</strong> Lunch
              </li>
              <li>
                <strong>2:00 - 4:00 PM:</strong> Free time / Optional Ayurvedic treatments
              </li>
              <li>
                <strong>4:30 - 6:00 PM:</strong> Evening yoga practice (Gentle/Yin)
              </li>
              <li>
                <strong>6:30 - 7:30 PM:</strong> Dinner
              </li>
              <li>
                <strong>8:00 - 9:00 PM:</strong> Evening meditation or kirtan (chanting)
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Special Activities</h3>
            <p className="text-muted-foreground mt-2">
              In addition to the daily schedule, the retreat includes special activities:
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <strong>Day 1:</strong> Welcome ceremony and orientation
              </li>
              <li>
                <strong>Day 3:</strong> Excursion to local temples and sacred sites
              </li>
              <li>
                <strong>Day 5:</strong> Participation in Ganga Aarti ceremony
              </li>
              <li>
                <strong>Day 6:</strong> Silent morning practice and closing ceremony
              </li>
            </ul>
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
        <h2 className="text-3xl font-bold mb-4">Transform Your Life Through Yoga</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Join our transformative yoga retreat in Rishikesh and embark on a journey of self-discovery and inner peace.
          Limited spots available for upcoming retreat dates.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Book Now via WhatsApp
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Have questions about the retreat? Contact us directly through WhatsApp for personalized assistance.
        </p>
      </div>
    </div>
  )
}

