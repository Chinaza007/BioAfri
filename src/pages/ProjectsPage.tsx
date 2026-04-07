import { Card } from '../components/ui/Card'
import { EditorialVisual } from '../components/ui/EditorialVisual'
import { PageHero } from '../components/ui/PageHero'
import type { EditorialVisualVariant } from '../types/visuals'

const projectThemes = [
  {
    title: 'Technology commercialization pipelines',
    description:
      'Roadmaps for moving validated research into market-ready partnerships, licensing strategies, and growth pathways.',
    visual: 'commercialization' as EditorialVisualVariant,
  },
  {
    title: 'Research-to-market strategic partnerships',
    description:
      'Collaboration structures that align universities, investors, technical teams, and operating partners around shared outcomes.',
    visual: 'partnership' as EditorialVisualVariant,
  },
  {
    title: 'Agriculture and food systems innovation programs',
    description:
      'Initiatives connecting field insights, product development, and commercialization planning for sustainable food-system growth.',
    visual: 'agriculture' as EditorialVisualVariant,
  },
  {
    title: 'IP and regulatory compliance frameworks',
    description:
      'Governance models that reduce risk while supporting confident execution across regulated and knowledge-intensive environments.',
    visual: 'compliance' as EditorialVisualVariant,
  },
]

export function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        description="Our projects combine legal precision, technical innovation, and market strategy to generate long-term value."
      />
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projectThemes.map((theme) => (
              <Card key={theme.title} className="flex flex-col">
                <EditorialVisual
                  variant={theme.visual}
                  ariaLabel={`Illustrative placeholder visual for ${theme.title}`}
                  className="min-h-[220px]"
                />
                <h2 className="mt-6 text-lg font-semibold text-brand-800">{theme.title}</h2>
                <p className="mt-2 text-sm text-neutral">{theme.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
