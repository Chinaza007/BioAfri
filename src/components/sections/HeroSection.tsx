import { PrimaryButton } from '../ui/PrimaryButton'
import { heroStats } from '../../data/siteData'
import { CountUpText } from '../ui/CountUpText'
import { HeroBanner, HeroCopyFrame, heroAccentText } from '../ui/HeroBanner'

function HeroStats({ className = '' }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[24px] border border-brand-100/90 bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(246,250,247,0.97)_100%)] px-5 py-4 shadow-[0_20px_60px_-36px_rgba(3,56,30,0.35)] backdrop-blur-sm sm:px-6 sm:py-5 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-100/80 pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-600/80">
          Trusted Growth Partner
        </p>
        <div className="flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand-600" />
          Rapid advisory support
        </div>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-3 sm:gap-6">
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

function HeroCopy({ compact = false }: { compact?: boolean }) {
  return (
    <HeroCopyFrame
      compact={compact}
      eyebrow="Translating Knowledge into Value"
      title={
        <>
          Where Innovation Meets {heroAccentText('Strategic Growth')}
        </>
      }
      description="BioAfri-Connect empowers organisations and individuals to navigate the knowledge economy through tech transfer, legal advisory, agri-food systems, and human capital development."
    >
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
    </HeroCopyFrame>
  )
}

export function HeroSection() {
  return (
    <HeroBanner
      id="home"
      overlay={<HeroCopy compact />}
      stacked={
        <>
          <HeroCopy />
          <HeroStats className="mt-8" />
        </>
      }
      footer={<HeroStats />}
      scrollTarget="#trust"
    />
  )
}
