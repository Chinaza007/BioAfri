import { EditorialVisual } from '../components/ui/EditorialVisual'
import { PageHero } from '../components/ui/PageHero'
import { AboutSection } from '../components/sections/AboutSection'
import { LeadershipSection } from '../components/sections/LeadershipSection'
import { ProfileHighlightsSection } from '../components/sections/ProfileHighlightsSection'
import { editorialImages } from '../data/editorialVisuals'

const aboutHighlights = [
  'Integrated support for tech transfer, bioeconomy, and human development',
  'Sector fluency spanning agriculture, research, and legal advisory',
  'Proven leadership in commercialization, institutional readiness, and capability building',
]

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About BioAfri-Connect"
        highlight="BioAfri-Connect"
        description="Discover our vision, mission, and how BioAfri-Connect integrates agriculture, food systems innovation, legal expertise, research excellence, and human capital development to deliver measurable value."
        scrollTarget="#about-content"
      />
      <section id="about-content" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-900 md:text-4xl">
              A partner built for complex, knowledge-led growth
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-neutral">
              BioAfri-Connect brings together advisory depth, research excellence, and
              implementation support for organizations navigating innovation, agriculture,
              and human-capital priorities.
            </p>
            <div className="mt-8 space-y-3">
              {aboutHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-slate-50 px-4 py-3"
                >
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-brand-500" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <EditorialVisual
            variant="leadership"
            image={editorialImages.strategyHandshake}
            badge="Leadership & Strategy"
            ariaLabel="Editorial visual representing BioAfri-Connect leadership, strategic collaboration, and integrated advisory work"
            className="min-h-[360px]"
          />
        </div>
      </section>
      <AboutSection />
      <LeadershipSection />
      <ProfileHighlightsSection />
    </>
  )
}
