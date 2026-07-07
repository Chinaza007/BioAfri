import { HeroBanner, HeroCopyFrame, heroAccentText } from './HeroBanner'

type PageHeroProps = {
  eyebrow?: string
  title: string
  highlight?: string
  description: string
  scrollTarget?: string
}

export function PageHero({
  eyebrow = 'Knowledge To Value',
  title,
  highlight,
  description,
  scrollTarget,
}: PageHeroProps) {
  const highlightIndex = highlight ? title.indexOf(highlight) : -1
  const titleContent =
    highlight && highlightIndex >= 0 ? (
      <>
        {title.slice(0, highlightIndex)}
        {heroAccentText(highlight)}
        {title.slice(highlightIndex + highlight.length)}
      </>
    ) : (
      title
    )

  const copy = (compact: boolean) => (
    <HeroCopyFrame compact={compact} eyebrow={eyebrow} title={titleContent} description={description} />
  )

  return (
    <HeroBanner
      overlay={copy(true)}
      stacked={copy(false)}
      scrollTarget={scrollTarget}
    />
  )
}
