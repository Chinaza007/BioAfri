import { Card } from '../components/ui/Card'
import { EditorialVisual } from '../components/ui/EditorialVisual'
import { editorialImages, type EditorialImageAsset } from '../data/editorialVisuals'
import { PageHero } from '../components/ui/PageHero'
import type { EditorialVisualVariant } from '../types/visuals'

const resources = [
  {
    title: 'Insight articles on tech transfer and innovation strategy',
    description:
      'Thought pieces and executive-ready explainers covering commercialization models, strategic growth, and partnership design.',
    visual: 'resources',
    image: editorialImages.researchDesk,
  },
  {
    title: 'Regulatory and compliance guidance briefs',
    description:
      'Reference materials built to simplify policy interpretation, reduce execution risk, and support confident decision-making.',
    visual: 'compliance',
    image: editorialImages.documentReview,
  },
  {
    title: 'Agriculture and market intelligence reports',
    description:
      'Curated sector snapshots combining demand signals, operational context, and actionable market observations.',
    visual: 'agriculture',
    image: editorialImages.farmerInField,
  },
  {
    title: 'Training resources and downloadable frameworks',
    description:
      'Practical tools, templates, and learning materials teams can use to support workshops and internal capability development.',
    visual: 'training',
    image: editorialImages.advisoryRoundtable,
  },
] satisfies Array<{
  title: string
  description: string
  visual: EditorialVisualVariant
  image: EditorialImageAsset
}>

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
              <Card key={item.title} className="flex flex-col">
                <EditorialVisual
                  variant={item.visual}
                  image={item.image}
                  ariaLabel={`Editorial visual representing ${item.title}`}
                  className="min-h-[220px]"
                />
                <h2 className="mt-6 text-lg font-semibold text-brand-800">{item.title}</h2>
                <p className="mt-2 text-sm text-neutral">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
