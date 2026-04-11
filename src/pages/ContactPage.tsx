import { ArrowRight, Building2, CalendarClock, Mail, MessageCircle, Phone, Presentation, Target } from 'lucide-react'
import type { FormEvent } from 'react'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { TagPill } from '../components/ui/TagPill'
import { TransitionLink } from '../components/ui/TransitionLink'

const conversationPaths = [
  {
    title: 'Strategic Advisory',
    description: 'For commercialization, institutional advisory, and innovation growth mandates.',
    detail: 'Best for organizations seeking a focused discovery call and scoped next steps.',
    icon: Target,
  },
  {
    title: 'Partnerships & Programs',
    description: 'For collaborative initiatives, ecosystem work, and research-to-market opportunities.',
    detail: 'Ideal when multiple stakeholders, public agencies, or institutions are involved.',
    icon: Building2,
  },
  {
    title: 'Training & Capacity Development',
    description: 'For learning programs, leadership development, and human-capital interventions.',
    detail: 'Useful for teams exploring workshops, capability tracks, or tailored training support.',
    icon: Presentation,
  },
]

const contactMethods = [
  {
    title: 'WhatsApp',
    href: 'https://wa.me/2348023318530',
    label: 'Reach us quickly for direct conversation.',
    icon: MessageCircle,
    external: true,
  },
  {
    title: 'Email',
    href: 'mailto:info@bioafri-connect.com',
    label: 'info@bioafri-connect.com',
    icon: Mail,
    external: false,
  },
  {
    title: 'Call',
    href: 'tel:+254797066024',
    label: '+254 (797) 066 024',
    icon: Phone,
    external: false,
  },
]

const responseGuidance = [
  'The type of challenge, opportunity, or mandate you are exploring',
  'Any institution, team, or sector context that shapes the engagement',
  'Desired outcomes, timing, or milestones you are working toward',
]

export function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const inquiryType = String(form.get('inquiryType') || '').trim()
    const name = String(form.get('name') || '').trim()
    const organization = String(form.get('organization') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()

    if (!inquiryType || !name || !email || !message) {
      return
    }

    const subject = encodeURIComponent('BioAfri-Connect Inquiry')
    const body = encodeURIComponent(
      `Inquiry Type: ${inquiryType}\nName: ${name}\nOrganization: ${organization || 'Not provided'}\nEmail: ${email}\n\nMessage:\n${message}`,
    )
    window.location.href = `mailto:hello@bioafri-connect.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHero
        title="Contact"
        description="Start a conversation with BioAfri-Connect to explore advisory, partnership, commercialization, or capacity-building opportunities."
      />
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ee_100%)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,198,162,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(9,107,58,0.06),transparent_24%)]" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <div className="flex max-w-3xl flex-col gap-4">
            <TagPill>Choose Your Best Entry Point</TagPill>
            <h2 className="text-3xl font-bold tracking-tight text-brand-900 md:text-[2.4rem]">
              Select the conversation path that best matches your next move.
            </h2>
            <p className="text-sm leading-7 text-neutral md:text-[0.97rem]">
              We work with organizations, institutions, and growth-focused teams that need clear
              strategic guidance, implementation support, and measurable outcomes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {conversationPaths.map((path) => {
              const Icon = path.icon

              return (
                <Card
                  key={path.title}
                  className="rounded-[24px] border-brand-100/90 bg-[linear-gradient(180deg,#ffffff_0%,#faf8f2_100%)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 via-white to-[#f7eedb] text-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-brand-900">{path.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-neutral">{path.description}</p>
                  <p className="mt-4 rounded-2xl border border-brand-100 bg-white px-4 py-3 text-sm leading-6 text-brand-700">
                    {path.detail}
                  </p>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-brand-100 bg-white p-6 shadow-[0_28px_64px_-44px_rgba(3,56,30,0.34)] md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-brand-900">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral">
                    Share a brief outline of your objective, and we will route the conversation to
                    the most relevant advisory path.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-[#f8f5ee] px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-brand-600">
                  <CalendarClock size={14} strokeWidth={1.9} />
                  Professional Response Flow
                </div>
              </div>

              <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-2 text-sm text-slate-700 md:col-span-2">
                  Inquiry Type
                  <select
                    name="inquiryType"
                    required
                    defaultValue=""
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  >
                    <option value="" disabled>
                      Select the primary focus of your inquiry
                    </option>
                    <option value="Strategic Advisory">Strategic Advisory</option>
                    <option value="Partnerships & Programs">Partnerships & Programs</option>
                    <option value="Training & Capacity Development">Training & Capacity Development</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm text-slate-700">
                  Full Name
                  <input
                    name="name"
                    type="text"
                    required
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="Your full name"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm text-slate-700">
                  Email Address
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="you@company.com"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm text-slate-700 md:col-span-2">
                  Organization
                  <input
                    name="organization"
                    type="text"
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="Institution, company, or team name"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm text-slate-700 md:col-span-2">
                  Message
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="Tell us about your objective, context, and the type of support you are exploring..."
                  />
                </label>

                <button type="submit" className="btn-accent md:col-span-2 md:w-fit">
                  Send Inquiry
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-brand-100 bg-[linear-gradient(180deg,#ffffff_0%,#faf8f2_100%)] p-6 shadow-[0_26px_64px_-46px_rgba(3,56,30,0.32)]">
                <h2 className="text-xl font-semibold text-brand-900">Direct Contact Channels</h2>
                <p className="mt-3 text-sm leading-7 text-neutral">
                  Prefer to start the conversation another way? Reach us through the route that fits
                  your pace and context.
                </p>
                <div className="mt-6 space-y-4">
                  {contactMethods.map((method) => {
                    const Icon = method.icon

                    return (
                      <a
                        key={method.title}
                        href={method.href}
                        target={method.external ? '_blank' : undefined}
                        rel={method.external ? 'noreferrer' : undefined}
                        className="group flex items-start gap-4 rounded-2xl border border-brand-100 bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_18px_36px_-28px_rgba(3,56,30,0.3)]"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 via-white to-[#f7eedb] text-brand-700">
                          <Icon size={19} strokeWidth={1.8} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-brand-900">{method.title}</div>
                          <div className="mt-1 text-sm leading-6 text-neutral">{method.label}</div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="rounded-[28px] border border-brand-100 bg-white p-6 shadow-[0_24px_58px_-44px_rgba(3,56,30,0.3)]">
                <h2 className="text-xl font-semibold text-brand-900">What Helps Us Respond Faster</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral">
                  {responseGuidance.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight size={15} className="mt-1 shrink-0 text-brand-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl border border-brand-100 bg-[#f8f5ee] px-4 py-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                    Next Step
                  </div>
                  <p className="mt-2 text-sm leading-7 text-brand-800">
                    If you would rather review service areas before reaching out, explore our
                    service portfolio and then return with a more focused brief.
                  </p>
                  <TransitionLink
                    to="/services"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                  >
                    View service areas
                    <ArrowRight size={16} />
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
