import { AboutSection } from '../components/sections/AboutSection'
import { ProfileHighlightsSection } from '../components/sections/ProfileHighlightsSection'

export function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <h1 className="text-4xl font-bold text-brand-700 md:text-5xl">About BioAfri-Connect</h1>
          <p className="mt-4 max-w-3xl text-neutral">
            Learn about our vision, mission, integrated approach, and why organizations trust us
            to translate knowledge into measurable impact.
          </p>
        </div>
      </section>
      <AboutSection />
      <ProfileHighlightsSection />
    </>
  )
}
