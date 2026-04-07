import { HoneycombPattern } from '../ui/HoneycombPattern'
import { ChevronDown } from 'lucide-react'
import { PrimaryButton } from '../ui/PrimaryButton'
import { heroStats } from '../../data/siteData'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 text-white"
    >
      <HoneycombPattern className="text-brand-100" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-brand-200/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-green-100">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-300" />
            Translating Knowledge into Value
          </div>
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Where Innovation Meets <span className="bg-gradient-to-r from-green-200 to-green-100 bg-clip-text text-transparent">Strategic Growth</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            BioAfri-Connect empowers organisations and individuals to navigate the knowledge
            economy through tech transfer, legal advisory, agri-innovation, and human capital
            development.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton href="#services" variant="light">
              Explore Our Services
            </PrimaryButton>
            <PrimaryButton href="#contact" variant="outline">
              Partner With Us
            </PrimaryButton>
          </div>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold">Trusted Growth Partner</h2>
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-white/20 bg-white/5 px-6 py-4">
            {heroStats.map((item, index) => (
              <div key={item.label} className="flex items-center gap-4">
                {index > 0 && <div className="hidden h-8 w-px bg-white/20 sm:block" />}
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{item.value}</div>
                  <div className="text-sm text-green-100">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-green-200 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
