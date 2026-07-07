import { Card } from '../components/ui/Card'
import { EditorialVisual } from '../components/ui/EditorialVisual'
import { editorialImages, type EditorialImageAsset } from '../data/editorialVisuals'
import { PageHero } from '../components/ui/PageHero'
import type { EditorialVisualVariant } from '../types/visuals'

const trainingAreas = [
  {
    title: 'Innovation and entrepreneurship',
    description:
      'Programs designed to help founders, researchers, and emerging teams shape ideas into practical, investment-ready opportunities.',
    visual: 'training',
    image: editorialImages.advisoryRoundtable,
  },
  {
    title: 'IP management and commercialization',
    description:
      'Applied workshops that connect protection strategy, valuation thinking, and commercialization decision-making.',
    visual: 'commercialization',
    image: editorialImages.researchDesk,
  },
  {
    title: 'Leadership and R&D team development',
    description:
      'Capability-building experiences that strengthen team alignment, communication, and execution in innovation-led environments.',
    visual: 'leadership',
    image: editorialImages.strategyHandshake,
  },
  {
    title: 'Digital-age skills and workforce planning',
    description:
      'Practical development tracks focused on future-ready talent, adaptive learning systems, and organizational resilience.',
    visual: 'projects',
    image: editorialImages.advisoryRoundtable,
  },
] satisfies Array<{
  title: string
  description: string
  visual: EditorialVisualVariant
  image: EditorialImageAsset
}>

export function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Capability Building"
        title="Training Programs"
        highlight="Programs"
        description="Bespoke capability-building programs designed to help institutions and teams thrive in innovation-focused environments."
        scrollTarget="#training-content"
      />
      <section id="training-content" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {trainingAreas.map((area) => (
              <Card key={area.title} className="flex flex-col">
                <EditorialVisual
                  variant={area.visual}
                  image={area.image}
                  ariaLabel={`Editorial visual representing ${area.title}`}
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
