import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'

const resources = [
  'Insight articles on tech transfer and innovation strategy',
  'Regulatory and compliance guidance briefs',
  'Agriculture and market intelligence reports',
  'Training resources and downloadable frameworks',
]

export function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        description="Explore curated knowledge assets designed to support strategic decision-making and innovation execution."
      />
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {resources.map((item) => (
            <Card key={item}>
              <h2 className="text-lg font-semibold text-brand-800">{item}</h2>
              <p className="mt-2 text-sm text-neutral">
                This section is ready for downloadable documents, case notes, and media assets.
              </p>
            </Card>
          ))}
        </div>
        </div>
      </section>
    </>
  )
}
