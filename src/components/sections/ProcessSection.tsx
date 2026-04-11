import { ArrowRight, Compass, Handshake, Layers3, LineChart } from 'lucide-react'
import { processSteps } from '../../data/siteData'
import { SectionHeader } from '../ui/SectionHeader'

const processIcons = [Compass, Layers3, Handshake, LineChart]

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f4ec_0%,#ffffff_62%,#f6f8f4_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,198,162,0.2),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(9,107,58,0.08),transparent_26%)]" />
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8">
        <SectionHeader
          tag="How We Work"
          title={
            <>
              A structured approach for <span className="text-brand-700">complex growth mandates</span>
            </>
          }
          description="Our engagements are built to reduce ambiguity, align stakeholders, and translate strategy into tangible progress across commercialization, research, advisory, and capability development."
        />

        <div className="relative mt-10">
          <div className="pointer-events-none absolute left-7 right-7 top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent xl:block" />
          <div className="grid gap-5 xl:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = processIcons[index]

              return (
                <article
                  key={step.step}
                  className="group relative rounded-[26px] border border-brand-100 bg-white/95 p-6 shadow-[0_24px_60px_-42px_rgba(3,56,30,0.38)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_32px_70px_-44px_rgba(3,56,30,0.45)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 via-white to-[#f7eedb] text-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-500">
                      Step {step.step}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-brand-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral">{step.description}</p>

                  <div className="mt-6 rounded-2xl border border-brand-100 bg-[#f8f5ee] px-4 py-3">
                    <div className="flex items-start gap-3">
                      <ArrowRight size={16} className="mt-1 shrink-0 text-brand-600" />
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                          Outcome
                        </div>
                        <p className="mt-2 text-sm font-medium leading-6 text-brand-800">
                          {step.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
