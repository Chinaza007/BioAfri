import { ChevronDown } from 'lucide-react'
import { PrimaryButton } from '../ui/PrimaryButton'
import { heroStats } from '../../data/siteData'
import { CountUpText } from '../ui/CountUpText'

const heroBackground = new URL('../../../images/hero-1.png', import.meta.url).href

function HeroCopy({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'max-w-md xl:max-w-lg' : 'max-w-xl'}>
      <div
        className={`inline-flex items-center gap-2.5 rounded-full border border-brand-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-brand-700 shadow-sm backdrop-blur-sm ${
          compact ? 'mb-4' : 'mb-5 md:mb-6'
        }`}
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
        Translating Knowledge into Value
      </div>

      <h1
        className={`font-bold leading-[1.08] tracking-tight text-brand-900 ${
          compact
            ? 'text-3xl xl:text-[2.65rem]'
            : 'text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl'
        }`}
      >
        Where Innovation Meets{' '}
        <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-accent bg-clip-text text-transparent">
          Strategic Growth
        </span>
      </h1>

      <p
        className={`max-w-lg leading-relaxed text-brand-700/90 ${
          compact ? 'mt-3 text-base xl:text-[1.05rem]' : 'mt-4 text-base sm:mt-5 sm:text-lg'
        }`}
      >
        BioAfri-Connect empowers organisations and individuals to navigate the knowledge
        economy through tech transfer, legal advisory, agri-innovation, and human capital
        development.
      </p>

      <div
        className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 ${
          compact ? 'mt-5' : 'mt-6 sm:mt-8'
        }`}
      >
        <PrimaryButton href="#services" className="justify-center shadow-md sm:justify-start">
          Explore Our Services
        </PrimaryButton>
        <PrimaryButton
          href="/contact"
          className="justify-center border-2 border-brand-600/30 bg-white/85 !text-brand-800 shadow-sm backdrop-blur-sm hover:!bg-brand-50 sm:justify-start"
        >
          Partner With Us
        </PrimaryButton>
      </div>
    </div>
  )
}

function HeroStats({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-brand-100/90 bg-white/85 px-5 py-4 shadow-[0_16px_48px_-32px_rgba(3,56,30,0.18)] backdrop-blur-sm sm:px-6 sm:py-5 ${className}`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-600/80">
        Trusted Growth Partner
      </p>
      <div className="mt-3 grid gap-4 sm:mt-4 sm:grid-cols-3 sm:gap-6">
        {heroStats.map((item, index) => (
          <div
            key={item.label}
            className={`min-w-0 ${index > 0 ? 'sm:border-l sm:border-brand-100 sm:pl-6' : ''}`}
          >
            <div className="text-2xl font-bold tabular-nums text-brand-900 sm:text-3xl">
              <CountUpText
                value={item.value}
                delayMs={index * 180}
                durationMs={index === 2 ? 1600 : 1300}
              />
            </div>
            <div className="mt-0.5 text-sm leading-snug text-brand-600/90">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="home" className="relative bg-[linear-gradient(180deg,#f7faf8_0%,#ffffff_100%)] text-brand-900">
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
          <div className="mx-auto w-full max-w-6xl px-8 xl:px-10">
            <HeroCopy compact />
          </div>
        </div>

        <a
          href="#trust"
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-brand-600/75 transition-colors hover:text-brand-800 lg:flex"
          aria-label="Scroll down"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.18em]">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-10 bg-gradient-to-b from-transparent to-[#f4f8f5] lg:block"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8 md:py-10 lg:hidden">
        <HeroCopy />
        <HeroStats className="mt-8" />
      </div>

      <div className="hidden border-t border-brand-100/70 bg-[linear-gradient(180deg,#f4f8f5_0%,#ffffff_100%)] lg:block">
        <div className="mx-auto max-w-6xl px-8 py-7 xl:px-10">
          <HeroStats />
        </div>
      </div>
    </section>
  )
}
