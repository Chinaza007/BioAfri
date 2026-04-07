type PageSectionProps = {
  id: 'projects' | 'training' | 'resources'
  title: string
  description: string
}

export function PageSection({ id, title, description }: PageSectionProps) {
  return (
    <section id={id} className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <h2 className="text-3xl font-bold text-brand-700">{title}</h2>
        <p className="mt-3 max-w-3xl text-neutral">{description}</p>
      </div>
    </section>
  )
}
