import { Card } from '../components/ui/Card'

const projectThemes = [
  'Technology commercialization pipelines',
  'Research-to-market strategic partnerships',
  'Agriculture and food systems innovation programs',
  'IP and regulatory compliance frameworks',
]

export function ProjectsPage() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <h1 className="text-4xl font-bold text-brand-700 md:text-5xl">Projects</h1>
        <p className="mt-4 max-w-3xl text-neutral">
          Our projects combine legal precision, technical innovation, and market strategy to
          generate long-term value.
        </p>
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
  )
}
