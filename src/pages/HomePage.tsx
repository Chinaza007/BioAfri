import { AboutSection } from '../components/sections/AboutSection'
import { CtaSection } from '../components/sections/CtaSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { ProfileHighlightsSection } from '../components/sections/ProfileHighlightsSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { TrustStripSection } from '../components/sections/TrustStripSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStripSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <ProfileHighlightsSection />
      <CtaSection />
    </>
  )
}
