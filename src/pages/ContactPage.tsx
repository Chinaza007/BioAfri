import { Mail, MessageCircle, Phone } from 'lucide-react'
import type { FormEvent } from 'react'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'

export function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()

    if (!name || !email || !message) {
      return
    }

    const subject = encodeURIComponent('BioAfri-Connect Inquiry')
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )
    window.location.href = `mailto:hello@bioafri-connect.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHero
        title="Contact"
        description="Start a conversation with BioAfri-Connect to discuss your project goals and growth objectives."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Card>
            <MessageCircle className="text-brand-700" />
            <h2 className="mt-3 text-lg font-semibold text-brand-800">WhatsApp</h2>
            <a
              href="https://wa.me/2340000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-sm text-neutral underline decoration-brand-200 underline-offset-2 hover:text-brand-700"
            >
              Reach us quickly for direct conversation.
            </a>
          </Card>
          <Card>
            <Mail className="text-brand-700" />
            <h2 className="mt-3 text-lg font-semibold text-brand-800">Email</h2>
            <a
              href="mailto:hello@bioafri-connect.com"
              className="mt-2 text-sm text-neutral underline decoration-brand-200 underline-offset-2 hover:text-brand-700"
            >
              hello@bioafri-connect.com
            </a>
          </Card>
          <Card>
            <Phone className="text-brand-700" />
            <h2 className="mt-3 text-lg font-semibold text-brand-800">Call</h2>
            <a
              href="tel:+2340000000000"
              className="mt-2 text-sm text-neutral underline decoration-brand-200 underline-offset-2 hover:text-brand-700"
            >
              +234 (000) 000 0000
            </a>
          </Card>
        </div>
        <div className="mt-10 rounded-2xl border border-brand-100 bg-slate-50 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-brand-800">Send Us a Message</h2>
          <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
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
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                placeholder="Tell us about your project goals..."
              />
            </label>
            <button
              type="submit"
              className="btn-accent md:col-span-2 md:w-fit"
            >
              Send Inquiry
            </button>
          </form>
        </div>
        </div>
      </section>
    </>
  )
}
