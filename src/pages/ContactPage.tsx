import { Mail, MessageCircle, Phone } from 'lucide-react'
import { Card } from '../components/ui/Card'

export function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <h1 className="text-4xl font-bold text-brand-700 md:text-5xl">Contact</h1>
        <p className="mt-4 max-w-3xl text-neutral">
          Start a conversation with BioAfri-Connect to discuss your project goals and growth
          objectives.
        </p>
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
      </div>
    </section>
  )
}
