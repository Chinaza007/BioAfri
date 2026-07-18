import { ChevronDown } from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'

const heroImages = [
  new URL('../../../images/hero-1.png', import.meta.url).href,
  new URL('../../../images/hero-2.png', import.meta.url).href,
  new URL('../../../images/hero-3.png', import.meta.url).href,
  new URL('../../../images/hero-4.png', import.meta.url).href,
  new URL('../../../images/hero-5.png', import.meta.url).href,
  new URL('../../../images/hero-6.png', import.meta.url).href,
]

type HeroBannerProps = {
  id?: string
  overlay: ReactNode
  stacked: ReactNode
  footer?: ReactNode
  scrollTarget?: string
}

export function HeroBanner({ id, overlay, stacked, footer, scrollTarget }: HeroBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      id={id}
      className="relative bg-[linear-gradient(180deg,#f7faf8_0%,#ffffff_100%)] text-brand-900"
    >
      <div className="relative isolate overflow-hidden">
        <img
          key={heroImages[activeIndex]}
          src={heroImages[activeIndex]}
          alt=""
          aria-hidden="true"
          className="block h-[420px] w-full object-cover object-center transition-opacity duration-700 ease-out sm:h-[520px] lg:h-[680px]"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center gap-2 lg:bottom-6">
          {heroImages.map((image, index) => (
            <span
              key={image}
              className={`h-2.5 w-2.5 rounded-full border border-white/70 transition-all duration-300 ${
                index === activeIndex ? 'scale-110 bg-white shadow-sm' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-[62%] bg-gradient-to-r from-[#f7fbf8]/95 via-[#f2f8f3]/85 to-transparent lg:block xl:w-[56%] xl:from-[#f7fbf8]/96 xl:via-[#eef7f1]/88"
          aria-hidden="true"
        />

        <div className="absolute inset-0 hidden items-center lg:flex">
          <div className="mx-auto w-full max-w-6xl px-8 xl:px-10">{overlay}</div>
        </div>

        {scrollTarget && (
          <a
            href={scrollTarget}
            className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-brand-600/75 transition-colors hover:text-brand-800 lg:flex"
            aria-label="Scroll down"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.18em]">Scroll</span>
            <ChevronDown size={18} className="animate-bounce" />
          </a>
        )}

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-10 bg-gradient-to-b from-transparent to-[#f4f8f5] lg:block"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8 md:py-10 lg:hidden">{stacked}</div>

      <div className="relative border-t border-brand-100/70 bg-[linear-gradient(180deg,#f6faf7_0%,#ffffff_100%)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-6">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-600/80">
            <span className="rounded-full border border-brand-200/70 bg-white/80 px-3 py-1.5 shadow-sm">
              Trusted by growth-minded institutions
            </span>
            <span className="rounded-full border border-brand-200/70 bg-white/80 px-3 py-1.5 shadow-sm">
              Impact delivered across innovation, research, and capability building
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-brand-700/90">
            <span className="rounded-full border border-brand-200/70 bg-white/70 px-3 py-1.5 shadow-sm">
              4 service domains
            </span>
            <span className="rounded-full border border-brand-200/70 bg-white/70 px-3 py-1.5 shadow-sm">
              20+ experts
            </span>
            <span className="rounded-full border border-brand-200/70 bg-white/70 px-3 py-1.5 shadow-sm">
              100% client-centric
            </span>
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200/80 to-transparent" />
      </div>

      {footer && (
        <div className="hidden border-t border-brand-100/70 bg-[linear-gradient(180deg,#f4f8f5_0%,#ffffff_100%)] lg:block">
          <div className="mx-auto max-w-6xl px-8 py-7 xl:px-10">{footer}</div>
        </div>
      )}
    </section>
  )
}

type HeroCopyFrameProps = {
  compact?: boolean
  eyebrow: string
  title: ReactNode
  description: string
  children?: ReactNode
}

export function HeroCopyFrame({
  compact = false,
  eyebrow,
  title,
  description,
  children,
}: HeroCopyFrameProps) {
  return (
    <div className={compact ? 'max-w-md xl:max-w-lg' : 'max-w-xl'}>
      <div
        className={`inline-flex items-center gap-2.5 rounded-full border border-brand-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-brand-800 shadow-[0_10px_30px_-16px_rgba(3,56,30,0.4)] backdrop-blur-sm ${
          compact ? 'mb-4' : 'mb-5 md:mb-6'
        }`}
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-brand-600" />
        {eyebrow}
      </div>

      <h1
        className={`font-display font-semibold leading-[1.04] tracking-[0.01em] text-[#062f1f] ${
          compact
            ? 'text-3xl xl:text-[2.65rem]'
            : 'text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl'
        }`}
      >
        {title}
      </h1>

      <p
        className={`max-w-lg leading-relaxed text-[#10472f]/95 ${
          compact ? 'mt-3 text-base xl:text-[1.05rem]' : 'mt-4 text-base sm:mt-5 sm:text-lg'
        }`}
      >
        {description}
      </p>

      {children}
    </div>
  )
}

export function heroAccentText(text: string) {
  return (
    <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-accent bg-clip-text text-transparent">
      {text}
    </span>
  )
}
