import { AboutSection } from './components/sections/AboutSection'
import { CtaSection } from './components/sections/CtaSection'
import { Footer } from './components/sections/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { PageSection } from './components/sections/PageSection'
import { ProfileHighlightsSection } from './components/sections/ProfileHighlightsSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { Navbar } from './components/ui/Navbar'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProfileHighlightsSection />
        <PageSection
          id="training"
          title="Training"
          description="We design bespoke learning programs in innovation, entrepreneurship, IP management, leadership development, and digital-age skills for high-impact teams."
        />
        <PageSection
          id="resources"
          title="Resources"
          description="Explore practical guides and thought leadership designed to help institutions transform ideas into impact and sustain long-term growth."
        />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
