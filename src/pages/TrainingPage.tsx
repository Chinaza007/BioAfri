import { Card } from '../components/ui/Card'
import { EditorialVisual } from '../components/ui/EditorialVisual'
import { PageHero } from '../components/ui/PageHero'
import type { EditorialVisualVariant } from '../types/visuals'

const trainingAreas = [
  {
    title: 'Innovation and entrepreneurship',
    description:
      'Programs designed to help founders, researchers, and emerging teams shape ideas into practical, investment-ready opportunities.',
    visual: 'training' as EditorialVisualVariant,
  },
  {
    title: 'IP management and commercialization',
    description:
      'Applied workshops that connect protection strategy, valuation thinking, and commercialization decision-making.',
    visual: 'commercialization' as EditorialVisualVariant,
  },
  {
    title: 'Leadership and R&D team development',
    description:
      'Capability-building experiences that strengthen team alignment, communication, and execution in innovation-led environments.',
    visual: 'leadership' as EditorialVisualVariant,
  },
  {
    title: 'Digital-age skills and workforce planning',
    description:
      'Practical development tracks focused on future-ready talent, adaptive learning systems, and organizational resilience.',
    visual: 'projects' as EditorialVisualVariant,
  },
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
              <Card key={area.title} className="flex flex-col">
                <EditorialVisual
                  variant={area.visual}
                  ariaLabel={`Illustrative placeholder visual for ${area.title}`}
                  className="min-h-[220px]"
                />
                <h2 className="mt-6 text-lg font-semibold text-brand-800">{area.title}</h2>
                <p className="mt-2 text-sm text-neutral">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
