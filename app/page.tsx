import { HeroSlider } from "@/components/hero-slider"
import { FeatureSection } from "@/components/feature-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { PackagesSection } from "@/components/packages-section"

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeatureSection />
      {/* Added Packages Section before Testimonials */}
      <PackagesSection />
      <TestimonialSection />
    </>
  )
}

