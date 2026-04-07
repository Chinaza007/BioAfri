import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'

const projectThemes = [
  'Technology commercialization pipelines',
  'Research-to-market strategic partnerships',
  'Agriculture and food systems innovation programs',
  'IP and regulatory compliance frameworks',
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
            <Card key={theme}>
              <h2 className="text-lg font-semibold text-brand-800">{theme}</h2>
              <p className="mt-2 text-sm text-neutral">
                Case study details and measurable outcomes can be presented here for each focus
                area as your portfolio expands.
              </p>
            </Card>
          ))}
        </div>
        </div>
      </section>
    </>
  )
}
