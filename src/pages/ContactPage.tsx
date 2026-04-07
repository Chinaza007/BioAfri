import { Mail, MessageCircle, Phone } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'

export function ContactPage() {
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
            <p className="mt-2 text-sm text-neutral">Reach us quickly for direct conversation.</p>
          </Card>
          <Card>
            <Mail className="text-brand-700" />
            <h2 className="mt-3 text-lg font-semibold text-brand-800">Email</h2>
            <p className="mt-2 text-sm text-neutral">hello@bioafri-connect.com</p>
          </Card>
          <Card>
            <Phone className="text-brand-700" />
            <h2 className="mt-3 text-lg font-semibold text-brand-800">Call</h2>
            <p className="mt-2 text-sm text-neutral">+234 (000) 000 0000</p>
          </Card>
        </div>
        <div className="mt-10 rounded-2xl border border-brand-100 bg-slate-50 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-brand-800">Send Us a Message</h2>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              Full Name
              <input
                type="text"
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                placeholder="Your full name"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              Email Address
              <input
                type="email"
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                placeholder="you@company.com"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-700 md:col-span-2">
              Message
              <textarea
                rows={5}
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                placeholder="Tell us about your project goals..."
              />
            </label>
            <button
              type="submit"
              className="rounded-xl bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 md:col-span-2 md:w-fit"
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
