import { PackageCarousel } from "@/components/package-carousel"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

// WhatsApp link
const WHATSAPP_LINK = "https://api.whatsapp.com/message/DOHUV3RWQJ5AJ1?autoload=1&app_absent=0"

// Corbett images
const corbettImages = [
  {
    src: "https://images.unsplash.com/photo-1614112539959-4b807ebd8c97?q=80&w=2070&auto=format&fit=crop",
    alt: "Tiger in Corbett",
    title: "Bengal Tiger in its natural habitat",
  },
  {
    src: "https://images.unsplash.com/photo-1581996323777-9fde24488c9b?q=80&w=2070&auto=format&fit=crop",
    alt: "Elephant safari",
    title: "Elephant safari through the jungle",
  },
  {
    src: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?q=80&w=2070&auto=format&fit=crop",
    alt: "Corbett landscape",
    title: "Lush green landscapes of Corbett",
  },
  {
    src: "https://images.unsplash.com/photo-1566466440107-1e0db8f0e3f5?q=80&w=2070&auto=format&fit=crop",
    alt: "Ramganga river",
    title: "Scenic Ramganga river flowing through the park",
  },
]

// Accommodation images
const accommodationImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    alt: "Jungle resort",
    title: "Luxury Jungle Resort",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Resort exterior",
    title: "Eco-friendly Accommodation",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop",
    alt: "Resort restaurant",
    title: "Dining amidst nature",
  },
]

export default function CorbettPage() {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-6 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Corbett National Park</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore India's oldest national park, home to Bengal tigers, elephants, and diverse wildlife.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="mb-12">
        <PackageCarousel images={corbettImages} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Corbett National Park</h2>
          <div className="prose dark:prose-invert">
            <p>
              Jim Corbett National Park, established in 1936, is India's oldest national park and a premier destination
              for wildlife enthusiasts. Named after the legendary hunter-turned-conservationist Jim Corbett, this
              diverse ecosystem spans over 520 square kilometers in the foothills of the Himalayas in Uttarakhand.
            </p>

            <p>
              The park is renowned for its significant population of Bengal tigers, but it's also home to a rich variety
              of flora and fauna including Asian elephants, leopards, different species of deer, and over 650 species of
              birds. The varied landscape of dense forests, grasslands, and the Ramganga River creates diverse habitats
              supporting this remarkable biodiversity.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Wildlife Highlights</h2>
          <ul className="space-y-3">
            {[
              "Bengal Tigers - The park's most famous residents",
              "Asian Elephants - Often spotted in herds near water bodies",
              "Leopards - Elusive but present throughout the park",
              "Himalayan Black Bears - Found in the higher regions",
              "Gharials and Mugger Crocodiles - Seen basking along the Ramganga River",
              "Over 650 species of birds including kingfishers, eagles, and hornbills",
              "Various deer species including sambar, chital, and barking deer",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Safari Options */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Safari Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Jeep Safari</h3>
            <p className="mb-4">
              The most popular way to explore Corbett, jeep safaris allow you to cover more ground and access different
              zones of the park. Each jeep accommodates 6 visitors plus a naturalist guide.
            </p>
            <p>
              <strong>Duration:</strong> 3-4 hours per safari
              <br />
              <strong>Timings:</strong> Morning (6:00 AM - 10:00 AM) and Evening (2:00 PM - 6:00 PM)
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Elephant Safari</h3>
            <p className="mb-4">
              A traditional and unique way to experience the jungle, elephant safaris offer a higher vantage point and
              the ability to move quietly through the forest, increasing chances of wildlife sightings.
            </p>
            <p>
              <strong>Duration:</strong> 2 hours per safari
              <br />
              <strong>Timings:</strong> Morning (5:30 AM - 7:30 AM) and Evening (3:30 PM - 5:30 PM)
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Canter Safari</h3>
            <p className="mb-4">
              Open-top vehicles that can accommodate up to 16-20 people, canter safaris are more economical and operate
              only in the Dhikala zone of the park.
            </p>
            <p>
              <strong>Duration:</strong> 5-6 hours per safari
              <br />
              <strong>Timings:</strong> Morning (5:30 AM - 11:30 AM) and Evening (12:00 PM - 6:00 PM)
            </p>
          </div>
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
              Corbett offers a range of accommodation options from luxury wildlife resorts to budget-friendly forest
              lodges. Properties are located in different zones around the park, each offering a unique experience.
              Staying inside the park (government-run forest rest houses) requires advance booking but provides an
              immersive wildlife experience.
            </p>
            <h3 className="text-xl font-medium mb-3">Popular Stay Options:</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Dhikala Forest Lodge - Located inside the park with basic amenities</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Corbett Jungle Lore - Luxury resort with excellent naturalist guides</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Jim's Jungle Retreat - Eco-friendly luxury resort</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                <span>Namah Resort - Premium property with modern amenities</span>
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
            <h3 className="text-xl font-medium mb-3">November to February</h3>
            <p className="mb-4">
              The winter months offer pleasant weather with temperatures ranging from 5°C to 30°C. This is the best time
              for wildlife sightings as animals frequently visit water 30°C. This is the best time for wildlife
              sightings as animals frequently visit water bodies due to reduced water availability in the forest.
            </p>
            <p>
              <strong>Highlights:</strong> Clear visibility through thinner vegetation, comfortable weather for safaris,
              higher chances of tiger sightings
            </p>
          </div>
          <div className="bg-primary/10 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">March to June</h3>
            <p className="mb-4">
              The summer months are hot with temperatures reaching up to 40°C, but this is considered one of the best
              times for tiger sightings as animals gather around limited water sources. The park's Dhikala zone remains
              open during this period.
            </p>
            <p>
              <strong>Highlights:</strong> Highest probability of tiger sightings, bird watching opportunities, fewer
              tourists in the hotter months
            </p>
          </div>
        </div>
      </div>

      {/* How to Reach */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How to Reach Corbett</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">By Air</h3>
            <p>
              The nearest airport is Pantnagar Airport (80 km). Alternatively, Delhi's Indira Gandhi International
              Airport (260 km) offers better connectivity. From either airport, you can hire a taxi to reach Corbett.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">By Train</h3>
            <p>
              The nearest railway station is Ramnagar (12 km), which is well-connected to Delhi, Lucknow, and other
              major cities. Taxis and shared cabs are available from the station to various zones of Corbett.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">By Road</h3>
            <p>
              Corbett is well-connected by road to major cities in North India. Regular buses operate from Delhi's ISBT
              Anand Vihar to Ramnagar. The journey from Delhi takes approximately 5-6 hours.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/10 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Experience the Wild at Corbett</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Book your wildlife adventure with us and enjoy guided safaris, comfortable accommodations, and expert
          naturalists who maximize your chances of spotting the majestic Bengal tiger and other wildlife.
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

