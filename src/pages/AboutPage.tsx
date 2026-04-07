import { EditorialVisual } from '../components/ui/EditorialVisual'
import { AboutSection } from '../components/sections/AboutSection'
import { ProfileHighlightsSection } from '../components/sections/ProfileHighlightsSection'

const aboutHighlights = [
  'Commercialization strategy with cross-functional insight',
  'Sector fluency spanning innovation, agriculture, and training',
  'Structured engagement model focused on measurable outcomes',
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
              Learn about our vision, mission, integrated approach, and why organizations trust us
              to translate knowledge into measurable impact.
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
            variant="partnership"
            ariaLabel="Illustrative placeholder visual representing BioAfri-Connect strategic collaboration and integrated advisory work"
            className="min-h-[360px]"
          />
        </div>
      </section>
      <AboutSection />
      <ProfileHighlightsSection />
    </>
  )
}
