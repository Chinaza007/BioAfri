import { HoneycombPattern } from '../ui/HoneycombPattern'
import { Link } from 'react-router-dom'

export function CtaSection() {
  return (
    <section id="home-cta" className="relative overflow-hidden scroll-mt-20 bg-brand-700 text-white">
      <HoneycombPattern className="text-brand-100" />
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="rounded-2xl border border-brand-300/50 bg-gradient-to-r from-brand-800/70 to-brand-600/70 p-8">
          <h2 className="text-3xl font-bold">Partner with BioAfri-Connect for Strategic Impact</h2>
          <p className="mt-3 max-w-2xl text-white/90">
            We help organizations translate knowledge into value through integrated expertise in
            tech transfer, legal advisory, research excellence, and human capital development.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-accent rounded-md px-5 py-3">
              Book a Consultation
            </Link>
            <Link
              to="/resources"
              className="btn-accent rounded-md px-5 py-3"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
