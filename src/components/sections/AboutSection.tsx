import { coreValues } from '../../data/siteData'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden scroll-mt-20 bg-gradient-to-b from-[#f7f6f3] to-[#eef5f1]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_left,rgba(216,198,162,0.18),transparent_64%)]" />
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <SectionHeader
          tag="About BioAfri-Connect"
          title={<span className="text-brand-700">A Firm Built at the Nexus of Knowledge</span>}
          description="BioAfri-Connect is a dynamic and multifaceted firm at the nexus of tech innovation, legal expertise, research excellence, and human potential. We empower organizations and individuals to navigate the complexities of the modern knowledge economy."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Card>
            <h3 className="font-semibold text-brand-800">Vision</h3>
            <p className="mt-2 text-sm text-neutral">
              To be the leading partner in translating knowledge into value, fostering continuous
              learning, and accelerating societal progress through innovation and human
              development.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-brand-800">Mission</h3>
            <p className="mt-2 text-sm text-neutral">
              To provide unparalleled expertise and comprehensive solutions in tech transfer,
              legal advisory, research, and human capital development.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-brand-800">Core Values</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral">
              {coreValues.map((value) => (
                <li key={value} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {value}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
