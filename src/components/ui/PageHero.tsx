import { BrandBackdrop } from './BrandBackdrop'

type PageHeroProps = {
  title: string
  description: string
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 text-white">
      <BrandBackdrop />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-16">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-white/90">{description}</p>
      </div>
    </section>
  )
}
