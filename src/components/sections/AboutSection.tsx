import { editorialImages } from '../../data/editorialVisuals'
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
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-24 lg:py-28">
        <SectionHeader
          tag="Company Profile"
          title={<span className="text-brand-700">BioAfri-Connect LLC</span>}
          description="BioAfri-Connect is a dynamic and multifaceted firm at the nexus of agriculture and food systems tech-innovation, legal expertise, research excellence, and human potential. We empower organisations and individuals to navigate the complexities of the modern knowledge economy, driving growth, fostering innovation, and maximizing their impact."
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
          <div className="space-y-6 rounded-[28px] border border-brand-100 bg-white/90 p-8 shadow-sm">
            <p className="text-sm leading-7 text-neutral">
              Our integrated approach provides a holistic solution for clients looking to capitalize on intellectual assets, ensure legal compliance, leverage data-driven insights, and cultivate a highly skilled workforce.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-brand-800">What We Do</h3>
              <p className="mt-3 text-sm leading-7 text-neutral">
                We empower organisations to navigate the complexities of the modern knowledge economy, driving growth, fostering innovation, and maximizing their impact through coordinated legal, technical, research, and human development support.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-800">Our Vision</h3>
              <p className="mt-3 text-sm leading-7 text-neutral">
                To be the leading partner in translating knowledge into value, fostering a culture of continuous learning, and accelerating societal progress through strategic innovation commercialization and human development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-800">Our Mission</h3>
              <p className="mt-3 text-sm leading-7 text-neutral">
                To provide unparalleled expertise and comprehensive solutions in tech transfer and innovation commercialization services; bio-economy, agri-food systems and climate change; and human capital development, enabling our clients to achieve their strategic objectives and unlock their full potential.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="group overflow-hidden rounded-[28px] border border-brand-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_78px_-34px_rgba(3,56,30,0.34)]">
              <img
                src={editorialImages.strategyHandshake.src}
                srcSet={editorialImages.strategyHandshake.srcSet}
                sizes={editorialImages.strategyHandshake.sizes}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: editorialImages.strategyHandshake.position ?? 'center center' }}
              />
              <div className="p-5">
                <h3 className="font-semibold text-brand-800">Strategic Collaboration</h3>
                <p className="mt-2 text-sm leading-7 text-neutral">
                  We connect institutions, innovators, and partners to strengthen adoption, delivery, and enduring value.
                </p>
              </div>
            </div>
            <Card>
              <h3 className="font-semibold text-brand-800">Core Values</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral">
                {coreValues.map((value) => (
                  <li key={value} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-brand-500" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="font-semibold text-brand-800">Core Service Areas</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral">
                <li>Tech transfer & innovation commercialization services</li>
                <li>Bio-economy, agri-food systems and climate change</li>
                <li>Human development consultancy & training</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
