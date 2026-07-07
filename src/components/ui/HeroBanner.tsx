import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'

const heroBackground = new URL('../../../images/hero-1.png', import.meta.url).href

type HeroBannerProps = {
  id?: string
  overlay: ReactNode
  stacked: ReactNode
  footer?: ReactNode
  scrollTarget?: string
}

export function HeroBanner({ id, overlay, stacked, footer, scrollTarget }: HeroBannerProps) {
  return (
    <section
      id={id}
      className="relative bg-[linear-gradient(180deg,#f7faf8_0%,#ffffff_100%)] text-brand-900"
    >
      <div className="relative isolate overflow-hidden">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="block h-auto w-full"
        />

        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-[54%] bg-gradient-to-r from-white/92 via-white/55 to-transparent lg:block xl:w-[50%] xl:from-white/88 xl:via-white/40"
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
        className={`inline-flex items-center gap-2.5 rounded-full border border-brand-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-brand-700 shadow-sm backdrop-blur-sm ${
          compact ? 'mb-4' : 'mb-5 md:mb-6'
        }`}
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
        {eyebrow}
      </div>

      <h1
        className={`font-bold leading-[1.08] tracking-tight text-brand-900 ${
          compact
            ? 'text-3xl xl:text-[2.65rem]'
            : 'text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl'
        }`}
      >
        {title}
      </h1>

      <p
        className={`max-w-lg leading-relaxed text-brand-700/90 ${
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
