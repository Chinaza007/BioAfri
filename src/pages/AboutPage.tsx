import { EditorialVisual } from '../components/ui/EditorialVisual'
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
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8">
          <div>
            <h1 className="text-4xl font-bold text-brand-700 md:text-5xl">
              About BioAfri-Connect
            </h1>
            <p className="mt-4 max-w-2xl text-neutral">
              Discover our vision, mission, and how BioAfri-Connect integrates agriculture,
              food systems innovation, legal expertise, research excellence, and human
              capital development to deliver measurable value.
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
