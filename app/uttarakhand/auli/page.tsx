import { PackageCarousel } from "@/components/package-carousel"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

// WhatsApp link
const WHATSAPP_LINK = "https://api.whatsapp.com/message/DOHUV3RWQJ5AJ1?autoload=1&app_absent=0"

// Auli images
const auliImages = [
  {
    src: "https://images.unsplash.com/photo-1562654501-a69aaa1b51f6?q=80&w=2064&auto=format&fit=crop",
    alt: "Auli ski slopes",
    title: "Pristine ski slopes of Auli",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Himalayan mountains",
    title: "Breathtaking Himalayan views",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Cable car in Auli",
    title: "Asia's longest cable car ride",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2074&auto=format&fit=crop",
    alt: "Snow covered landscape",
    title: "Winter wonderland in Auli",
  },
]

// Accommodation images
const accommodationImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    alt: "Mountain resort",
    title: "Cozy mountain resort",
  },
  {
    src: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?q=80&w=2069&auto=format&fit=crop",
    alt: "Ski lodge",
    title: "Ski-in ski-out accommodations",
  },
  {
    src: "https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=2069&auto=format&fit=crop",
    alt: "Mountain view room",
    title: "Rooms with stunning mountain views",
  },
]

export default function AuliPage() {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Auli - Himalayan Ski Paradise</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience skiing in the majestic Himalayas and witness breathtaking panoramic mountain views.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="mb-12">
        <PackageCarousel images={auliImages} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Auli</h2>
          <div className="prose dark:prose-invert">
            <p>
              Auli, situated at an altitude of 2,500 to 3,050 meters in the Chamoli district of Uttarakhand, is one of
              India's premier ski destinations. Once a training ground for the Indo-Tibetan Border Police, Auli has
              transformed into a world-class ski resort that attracts winter sports enthusiasts from around the globe.
            </p>

            <p>
              With its pristine slopes covered in powdery snow during winter and lush green meadows in summer, Auli
              offers a year-round destination for nature lovers and adventure seekers alike. The panoramic views of some
              of the highest Himalayan peaks, including Nanda Devi, Kamet, Mana Parvat, and Dunagiri, make Auli a
              photographer's paradise.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          <ul className="space-y-3">
            {[
              "Asia's longest cable car (gondola) - 3.8 km connecting Joshimath to Auli",
              "Pristine ski slopes perfect for beginners and intermediate skiers",
              "Panoramic views of Nanda Devi and other Himalayan peaks",
              "Professional ski instructors and equipment rentals",
              "Artificial lake for snow production ensuring longer ski season",
              "Lush meadows and oak forests for summer trekking",
              "Nearby attractions including Valley of Flowers and Hemkund Sahib",
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
              Auli offers a range of accommodation options from luxury resorts to budget-friendly guesthouses. Most
              properties provide stunning views of the Himalayan peaks and easy access to the ski slopes. During peak
              winter season (December-February), it's advisable to book well in advance as accommodations fill up
              quickly.
            </p>
            <h3 className="text-xl font-medium mb-3">Popular Stay Options:</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>GMVN Ski Resort - Government-run resort with ski-in ski-out access</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Cliff Top Club - Luxury resort with panoramic views</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Blue Poppy Resort - Mid-range option with comfortable amenities</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Himalayan Eco Lodges - Eco-friendly accommodations</span>
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
            <h3 className="text-xl font-medium mb-3">Winter Season (December - March)</h3>
            <p className="mb-4">
              The perfect time for skiing and snow activities. The slopes are covered with powdery snow, and the ski
              season is in full swing. Temperatures range from -8°C to 5°C, so pack warm clothing.
            </p>
            <p>
              <strong>Highlights:</strong> Skiing, snowboarding, cable car rides with snow-covered views, winter
              festivals
            </p>
          </div>
          <div className="bg-primary/10 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Summer Season (April - June)</h3>
            <p className="mb-4">
              Ideal for those who want to enjoy the lush green meadows and pleasant weather. The temperature ranges from
              15°C to 30°C, making it perfect for trekking and outdoor activities.
            </p>
            <p>
              <strong>Highlights:</strong> Trekking, camping, photography, botanical exploration, bird watching
            </p>
          </div>
        </div>
      </div>

      {/* How to Reach */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How to Reach Auli</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">By Air</h3>
            <p>
              The nearest airport is Jolly Grant Airport in Dehradun (290 km). From there, you can hire a taxi or take a
              bus to Joshimath, followed by the cable car to Auli.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">By Train</h3>
            <p>
              The nearest railway station is Rishikesh (250 km). From Rishikesh, you can hire a taxi or take a bus to
              Joshimath and then take the cable car to Auli.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">By Road</h3>
            <p>
              Auli is well-connected by road to major cities in Uttarakhand. Regular buses and taxis are available from
              Rishikesh, Dehradun, and Haridwar to Joshimath, from where you can take the cable car to Auli.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/10 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Auli?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Book your Auli adventure with us and enjoy skiing, breathtaking views, and unforgettable Himalayan
          experiences. We offer customized packages including accommodation, ski equipment, lessons, and guided tours.
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

