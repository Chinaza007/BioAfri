import { AboutSection } from '../components/sections/AboutSection'
import { CtaSection } from '../components/sections/CtaSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ProfileHighlightsSection } from '../components/sections/ProfileHighlightsSection'
import { ServicesSection } from '../components/sections/ServicesSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProfileHighlightsSection />
      <CtaSection />
    </>
  )
}
