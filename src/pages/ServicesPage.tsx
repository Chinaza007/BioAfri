import { services } from '../data/siteData'
import { Card } from '../components/ui/Card'

export function ServicesPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <h1 className="text-4xl font-bold text-brand-700 md:text-5xl">Services</h1>
        <p className="mt-4 max-w-3xl text-neutral">
          Comprehensive, integrated service offerings across commercialization, agriculture, and
          human-capital development.
        </p>
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
      </div>
    </section>
  )
}
