import { ArrowRight } from 'lucide-react'
import { services } from '../../data/siteData'
import { Card } from '../ui/Card'
import { PrimaryButton } from '../ui/PrimaryButton'
import { SectionHeader } from '../ui/SectionHeader'
import { TransitionLink } from '../ui/TransitionLink'

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fbfaf6_100%)] scroll-mt-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(216,198,162,0.16),transparent_68%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.36)_50%,transparent_100%)] opacity-80" />
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-24 lg:py-28">
        <SectionHeader
          tag="What We Do"
          title={
            <>
              Comprehensive Solutions, <span className="text-brand-700">One Partner</span>
            </>
          }
          description="We provide integrated legal, technical, research, and human-capital solutions that translate knowledge into measurable value."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => (
            <Card
              key={item.title}
              className={`group overflow-hidden rounded-[24px] border p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl ${
                index % 2 === 0 ? 'bg-[#faf8f3]' : 'bg-white'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image.src}
                  srcSet={item.image.srcSet}
                  sizes={item.image.sizes}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: item.image.position ?? 'center center' }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,31,18,0.02)_0%,rgba(3,31,18,0.26)_100%)]" />
              </div>
              <div className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-accent font-bold text-brand-700 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-brand-800">{item.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-brand-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <TransitionLink
                  to={`/services#${item.id}`}
                  className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                >
                  Learn more
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </TransitionLink>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center md:justify-start">
          <PrimaryButton href="/services" className="justify-center">
            View All Services
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}
