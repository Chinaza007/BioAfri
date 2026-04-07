import { services } from '../data/siteData'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { PrimaryButton } from '../components/ui/PrimaryButton'

export function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        description="Comprehensive, integrated service offerings across commercialization, agriculture, and human-capital development."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <h2 className="text-xl font-semibold text-brand-800">{service.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-neutral">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
          <div className="mt-10 flex justify-center md:justify-start">
            <PrimaryButton href="/contact">Discuss Your Service Needs</PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}
