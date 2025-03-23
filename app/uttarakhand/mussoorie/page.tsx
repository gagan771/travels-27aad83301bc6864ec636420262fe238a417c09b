import { PackageCarousel } from "@/components/package-carousel"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

// WhatsApp link
const WHATSAPP_LINK = "https://api.whatsapp.com/message/DOHUV3RWQJ5AJ1?autoload=1&app_absent=0"

// Mussoorie images
const mussoorieImages = [
  {
    src: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=2070&auto=format&fit=crop",
    alt: "Mussoorie hillside",
    title: "Beautiful hillside views in Mussoorie",
  },
  {
    src: "https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?q=80&w=2070&auto=format&fit=crop",
    alt: "Mall Road Mussoorie",
    title: "The famous Mall Road",
  },
  {
    src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop",
    alt: "Kempty Falls",
    title: "Refreshing Kempty Falls",
  },
  {
    src: "https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=2069&auto=format&fit=crop",
    alt: "Mussoorie sunrise",
    title: "Sunrise over the Himalayas from Mussoorie",
  },
]

// Accommodation images
const accommodationImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    alt: "Luxury hotel room",
    title: "Heritage Hotel Room",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Hotel exterior",
    title: "Colonial-style Resort",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop",
    alt: "Hotel restaurant",
    title: "Dining with Valley Views",
  },
]

export default function MussoooriePage() {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Mussoorie - Queen of Hills</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore the charming hill station with panoramic views of the Doon Valley and Himalayan ranges.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="mb-12">
        <PackageCarousel images={mussoorieImages} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Mussoorie</h2>
          <div className="prose dark:prose-invert">
            <p>
              Mussoorie, fondly known as the "Queen of Hills," is a popular hill station perched at an altitude of 2,000
              meters in the foothills of the Garhwal Himalayan range. Founded by the British in 1823 as a summer
              retreat, Mussoorie today offers a delightful blend of colonial charm and natural splendor.
            </p>

            <p>
              With its pleasant climate, panoramic views of the Doon Valley and snow-capped Himalayan peaks, Mussoorie
              has been a favorite destination for honeymooners, families, and nature enthusiasts for nearly two
              centuries. The town's rich literary heritage is evident in its association with famous authors like Ruskin
              Bond.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          <ul className="space-y-3">
            {[
              "Strolling along the vibrant Mall Road with shops, cafes, and colonial buildings",
              "Visiting the magnificent Kempty Falls for a refreshing experience",
              "Taking a cable car ride to Gun Hill for panoramic Himalayan views",
              "Exploring Lal Tibba, the highest point in Mussoorie",
              "Visiting the historic Christ Church and Sir George Everest's House",
              "Enjoying adventure activities like zip-lining and paragliding",
              "Day trips to nearby attractions like Dhanaulti and Kanatal",
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
              Mussoorie offers a wide range of accommodation options from luxury heritage hotels to budget guesthouses.
              Many properties are located along the Mall Road or offer stunning views of the Doon Valley and Himalayan
              ranges. The colonial-era hotels provide a glimpse into the town's British heritage with their architecture
              and ambiance.
            </p>
            <h3 className="text-xl font-medium mb-3">Popular Stay Options:</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Welcomhotel by ITC Hotels - Luxury property with valley views</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>JW Marriott Mussoorie Walnut Grove - Premium resort with modern amenities</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Fortune Resort Grace - Mid-range option with comfortable rooms</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Hotel Himalaya Castle - Heritage property with colonial charm</span>
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
              The most popular time to visit Mussoorie when the weather is pleasant with temperatures ranging from 10°C
              to 30°C. Perfect for outdoor activities and sightseeing.
            </p>
            <p>
              <strong>Highlights:</strong> Mall Road strolls, waterfall visits, cable car rides, summer festivals
            </p>
          </div>
          <div className="bg-primary/10 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Post-Monsoon & Winter (September - February)</h3>
            <p className="mb-4">
              September to November offers clear skies and spectacular views. Winter (December-February) brings
              occasional snowfall, transforming Mussoorie into a winter wonderland with temperatures between 1°C to
              10°C.
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
        <h2 className="text-2xl font-semibold mb-4">How to Reach Mussoorie</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">By Air</h3>
            <p>
              The nearest airport is Jolly Grant Airport in Dehradun (60 km). From there, you can hire a taxi to reach
              Mussoorie in approximately 1.5-2 hours.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">By Train</h3>
            <p>
              The nearest railway station is Dehradun (35 km). Regular trains connect Dehradun to Delhi, Mumbai, and
              other major cities. Taxis and shared cabs are available from the station to Mussoorie.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">By Road</h3>
            <p>
              Mussoorie is well-connected by road to major cities. Regular buses operate from Delhi's ISBT Kashmere Gate
              to Mussoorie. The journey from Delhi takes approximately 6-7 hours.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/10 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Plan Your Mussoorie Getaway</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Experience the charm of Mussoorie with our customized packages including valley-view accommodations, guided
          tours, adventure activities, and more. Perfect for family vacations, honeymoons, or weekend getaways.
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

