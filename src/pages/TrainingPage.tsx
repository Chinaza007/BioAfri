import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'

const trainingAreas = [
  'Innovation and entrepreneurship',
  'IP management and commercialization',
  'Leadership and R&D team development',
  'Digital-age skills and workforce planning',
]

export function TrainingPage() {
  return (
    <>
      <PageHero
        title="Training"
        description="Bespoke capability-building programs designed to help institutions and teams thrive in innovation-focused environments."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {trainingAreas.map((area) => (
            <Card key={area}>
              <h2 className="text-lg font-semibold text-brand-800">{area}</h2>
              <p className="mt-2 text-sm text-neutral">
                Structured workshops, practical frameworks, and implementation support tailored to
                your organizational context.
              </p>
            </Card>
          ))}
        </div>
        </div>
      </section>
    </>
  )
}
