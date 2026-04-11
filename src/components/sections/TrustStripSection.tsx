import { BarChart3, Building2, Layers3, Rocket } from 'lucide-react'
import { trustSignals } from '../../data/siteData'
import { TagPill } from '../ui/TagPill'

const iconBySignal = {
  integration: Layers3,
  institutional: Building2,
  execution: Rocket,
  impact: BarChart3,
}

export function TrustStripSection() {
  return (
    <section className="relative z-10 -mt-12 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-brand-100/90 bg-[linear-gradient(180deg,#ffffff_0%,#f6f2e8_100%)] px-6 py-8 shadow-[0_32px_90px_-48px_rgba(3,56,30,0.48)] md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,198,162,0.22),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(9,107,58,0.08),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          <div className="relative z-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <TagPill className="border-brand-200/90 bg-white text-brand-700">Why Organizations Trust Us</TagPill>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-900 md:text-[2.35rem]">
                  Strategic capability, grounded execution, and a clear route to measurable value.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-neutral md:text-[0.96rem]">
                BioAfri-Connect works at the intersection of innovation, institutional advisory,
                research excellence, and human-capital development, helping clients move from
                ambition to action with confidence.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {trustSignals.map((signal) => {
                const Icon = iconBySignal[signal.id]

                return (
                  <article
                    key={signal.id}
                    className="group rounded-[24px] border border-brand-100/90 bg-white/90 p-5 shadow-[0_22px_46px_-36px_rgba(3,56,30,0.34)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_60px_-42px_rgba(3,56,30,0.42)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 via-white to-[#f7eedb] text-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-transform duration-300 group-hover:scale-105">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-500">
                        {signal.eyebrow}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold leading-7 text-brand-900">
                      {signal.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-neutral">{signal.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
