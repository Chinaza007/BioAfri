import { differentiators, whoWeServe } from '../../data/siteData'
import { Card } from '../ui/Card'

export function ProfileHighlightsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden scroll-mt-20 bg-[linear-gradient(180deg,#ffffff_0%,#f8f7f2_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(9,107,58,0.07),transparent_22%)]" />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-2 md:px-8">
        <Card className="bg-brand-50">
          <h3 className="text-2xl font-bold text-brand-700">Our Differentiators</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral">
            {differentiators.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>
        <Card className="border-[#d8c6a255] bg-gradient-to-br from-white to-[#d8c6a21f]">
          <h3 className="text-2xl font-bold text-brand-700">Who We Serve</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral">
            {whoWeServe.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
