import { BrandLogo } from './BrandLogo'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Training', href: '#training' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3 text-lg font-bold text-brand-700">
          <BrandLogo variant="lightBg" />
          <span>BioAfri-Connect</span>
        </a>
        <nav className="hidden gap-5 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral transition hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
