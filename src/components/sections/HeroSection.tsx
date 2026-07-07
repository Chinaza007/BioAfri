import { PrimaryButton } from '../ui/PrimaryButton'
import { heroStats } from '../../data/siteData'
import { CountUpText } from '../ui/CountUpText'
import { HeroBanner, HeroCopyFrame, heroAccentText } from '../ui/HeroBanner'

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
      description="BioAfri-Connect empowers organisations and individuals to navigate the knowledge economy through tech transfer, legal advisory, agri-innovation, and human capital development."
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
