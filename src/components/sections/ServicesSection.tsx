import { ArrowRight } from 'lucide-react'
import { services } from '../../data/siteData'
import { Card } from '../ui/Card'
import { PrimaryButton } from '../ui/PrimaryButton'
import { SectionHeader } from '../ui/SectionHeader'

export function ServicesSection() {
  return (
    <section id="services" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
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
              className={`group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl ${
                index % 2 === 0 ? 'bg-slate-50' : 'bg-white'
              }`}
            >
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
              <a
                href="#resources"
                className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
              >
                Learn more
                <ArrowRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center md:justify-start">
          <PrimaryButton href="#resources" className="justify-center">
            View All Services
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}
