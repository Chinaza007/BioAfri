import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { BrandLogo } from '../ui/BrandLogo'
import { TransitionLink } from '../ui/TransitionLink'

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Training', href: '/training' },
  { label: 'Resources', href: '/resources' },
]

const focusAreas = [
  'Innovation commercialization',
  'Institutional advisory',
  'Agriculture systems',
  'Human-capital development',
]

const contactChannels = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348023318530',
    icon: MessageCircle,
    detail: 'Quick initial conversation',
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:info@bioafri-connect.com',
    icon: Mail,
    detail: 'info@bioafri-connect.com',
    external: false,
  },
  {
    label: 'Call',
    href: 'tel:+254797066024',
    icon: Phone,
    detail: '+254 (797) 066 024',
    external: false,
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-900 bg-[#031f12] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(78,175,124,0.12),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(216,198,162,0.12),transparent_24%)]" />

      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-[linear-gradient(135deg,rgba(7,90,49,0.92),rgba(3,38,22,0.94))] p-8 shadow-[0_34px_80px_-46px_rgba(0,0,0,0.7)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,198,162,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_20%)]" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-100">
                Let’s Build Something Valuable
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-[2.5rem]">
                Turn strategy, innovation, and capability into coordinated action.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 md:text-[0.97rem]">
                Whether you are shaping a commercialization plan, institutional initiative,
                training mandate, or research-to-market opportunity, BioAfri-Connect can help
                frame the next step clearly.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <TransitionLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-brand-900 shadow-[0_20px_40px_-24px_rgba(216,198,162,0.62)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e3d2ae]"
              >
                Book a Consultation
              </TransitionLink>
              <TransitionLink
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/14"
              >
                Explore Services
              </TransitionLink>
            </div>
          </div>
        </div>

        <div className="relative mt-12 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.15fr_0.75fr_0.75fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo variant="darkBg" className="h-10 w-auto" />
              <div>
                <p className="text-lg font-semibold tracking-tight text-white">BioAfri-Connect</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-200/75">
                  Knowledge To Value
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/72">
              Integrated support across legal advisory, innovation commercialization, research,
              agriculture systems, and human-capital development.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200/80">
              Quick Links
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
                <TransitionLink
                  key={link.label}
                  to={link.href}
                  className="inline-flex items-center gap-2 text-white/72 transition-colors hover:text-white"
                >
                  <ArrowRight size={14} className="text-brand-200/70" />
                  {link.label}
                </TransitionLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200/80">
              Focus Areas
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/72">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-300" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200/80">
              Reach Us
            </h3>
            <div className="mt-5 space-y-4">
              {contactChannels.map((channel) => {
                const Icon = channel.icon

                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noreferrer' : undefined}
                    className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-all duration-300 hover:border-brand-300/35 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-100">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{channel.label}</div>
                      <div className="mt-1 text-sm text-white/68">{channel.detail}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} BioAfri-Connect. All rights reserved.</p>
          <p>Built for research-led growth, institutional readiness, and measurable impact.</p>
        </div>
      </div>
    </footer>
  )
}
