import { PackageCarousel } from "@/components/package-carousel"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

// WhatsApp link
const WHATSAPP_LINK = "https://api.whatsapp.com/message/DOHUV3RWQJ5AJ1?autoload=1&app_absent=0"

// Nainital images
const nainitalImages = [
  {
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
    alt: "Naini Lake",
    title: "Beautiful Naini Lake",
  },
  {
    src: "https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?q=80&w=2070&auto=format&fit=crop",
    alt: "Mall Road Nainital",
    title: "Bustling Mall Road",
  },
  {
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
    alt: "Nainital sunset",
    title: "Sunset over Naini Lake",
  },
  {
    src: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=2070&auto=format&fit=crop",
    alt: "Nainital viewpoint",
    title: "Panoramic view from Snow View Point",
  },
]

// Accommodation images
const accommodationImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    alt: "Luxury hotel room",
    title: "Comfortable Lake View Room",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Hotel exterior",
    title: "Colonial-style Hotel",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop",
    alt: "Hotel restaurant",
    title: "Dining with Lake Views",
  },
]

export default function NainitalPage() {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Nainital - The Lake City</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the shimmering jewel of Uttarakhand, nestled in the Kumaon hills.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="mb-12">
        <PackageCarousel images={nainitalImages} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Nainital</h2>
          <div className="prose dark:prose-invert">
            <p>
              Nainital, also known as the "City of Lakes," is a charming hill station that captivates visitors with its
              natural beauty, serene lakes, and colonial atmosphere. Founded by the British in 1841, this popular
              destination offers a perfect escape from the summer heat of the plains.
            </p>

            <p>
              The heart of Nainital is the eye-shaped Naini Lake, surrounded by seven hills. The town's colonial
              heritage is evident in its architecture, while the surrounding forests and mountains provide ample
              opportunities for nature lovers and adventure seekers.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          <ul className="space-y-3">
            {[
              "Boating on the emerald waters of Naini Lake",
              "Shopping and strolling along The Mall Road",
              "Cable car ride to Snow View Point for panoramic Himalayan views",
              "Visit to the sacred Naina Devi Temple",
              "Trekking to China Peak (Naina Peak) - the highest point in Nainital",
              "Bird watching at Sattal and Kilbury Bird Sanctuary",
              "Day trips to nearby attractions like Bhimtal and Naukuchiatal",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Accommodation Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Where to Stay</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <PackageCarousel images={accommodationImages} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-muted-foreground mb-4">
              Nainital offers a wide range of accommodation options from luxury heritage hotels to budget guesthouses.
              Many properties are located along the Mall Road or offer stunning views of Naini Lake. The colonial-era
              hotels provide a glimpse into the town's British heritage with their architecture and ambiance.
            </p>
            <h3 className="text-xl font-medium mb-3">Popular Stay Options:</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>The Naini Retreat - Heritage hotel with panoramic lake views</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Manu Maharani - Luxury hotel with modern amenities</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Alka Hotel - Mid-range option on Mall Road</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>KMVN Rest House - Budget-friendly government accommodation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Best Time to Visit */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Time to Visit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary/10 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Summer Season (March - June)</h3>
            <p className="mb-4">
              The most popular time to visit Nainital when the weather is pleasant with temperatures ranging from 10°C
              to 25°C. Perfect for outdoor activities and lake boating.
            </p>
            <p>
              <strong>Highlights:</strong> Boating on Naini Lake, Mall Road strolls, cable car rides, summer festivals
            </p>
          </div>
          <div className="bg-primary/10 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Post-Monsoon & Winter (September - February)</h3>
            <p className="mb-4">
              September to November offers clear skies and spectacular views. Winter (December-February) brings
              occasional snowfall, transforming Nainital into a winter wonderland with temperatures between -3°C to
              15°C.
            </p>
            <p>
              <strong>Highlights:</strong> Snow-covered landscapes, fewer tourists, winter sports, Christmas and New
              Year celebrations
            </p>
          </div>
        </div>
      </div>

      {/* How to Reach */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How to Reach Nainital</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">By Air</h3>
            <p>
              The nearest airport is Pantnagar Airport (65 km). From there, you can hire a taxi to reach Nainital.
              Alternatively, Delhi's Indira Gandhi International Airport (290 km) offers better connectivity.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">By Train</h3>
            <p>
              The nearest railway station is Kathgodam (35 km). Regular trains connect Kathgodam to Delhi, Howrah, and
              other major cities. Taxis and shared cabs are available from the station to Nainital.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">By Road</h3>
            <p>
              Nainital is well-connected by road to major cities. Regular buses operate from Delhi's ISBT Anand Vihar to
              Nainital. The journey from Delhi takes approximately 7-8 hours.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/10 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Plan Your Nainital Getaway</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Experience the charm of Nainital with our customized packages including lake-view accommodations, boating
          experiences, guided tours, and more. Perfect for family vacations, honeymoons, or weekend getaways.
        </p>
        <Button size="lg" asChild>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Book Now via WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}

