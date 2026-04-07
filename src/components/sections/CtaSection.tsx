import { HoneycombPattern } from '../ui/HoneycombPattern'

export function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-20 bg-brand-700 text-white">
      <HoneycombPattern className="text-brand-100" />
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="rounded-2xl border border-brand-300/50 bg-gradient-to-r from-brand-800/70 to-brand-600/70 p-8">
          <h2 className="text-3xl font-bold">Ready to Build BioAfri&apos;s Digital Presence?</h2>
          <p className="mt-3 max-w-2xl text-white/90">
            Launch with a complete, conversion-focused Home page and scale into the full 20-page
            architecture in phases.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:hello@bioafri-connect.com" className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-brand-800">
              Book Discovery Call
            </a>
            <a
              href="#resources"
              className="rounded-md border border-brand-200 px-5 py-3 text-sm font-semibold text-white"
            >
              Download Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
