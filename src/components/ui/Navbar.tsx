import { BrandLogo } from './BrandLogo'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { TransitionLink } from './TransitionLink'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Training', href: '/training' },
  { label: 'Resources', href: '/resources' },
]

const contactLink = { label: 'Contact', href: '/contact' }
const mobileMenuId = 'primary-mobile-navigation'

export function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const activeHref = location.pathname || '/'
  const navRef = useRef<HTMLElement | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })

  useEffect(() => {
    const updateIndicator = () => {
      if (!navRef.current) {
        return
      }

      const activeEl = navRef.current.querySelector<HTMLAnchorElement>(`a[href="${activeHref}"]`)
      if (!activeEl) {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }))
        return
      }

      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
      })
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeHref])

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-white shadow-[0_22px_48px_-40px_rgba(3,56,30,0.4)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <TransitionLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3 rounded-2xl px-1 py-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2"
        >
          <BrandLogo variant="lightBg" className="h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-[1.02]" />
          <span className="hidden min-[420px]:flex flex-col leading-none">
            <span className="text-base font-bold tracking-[-0.03em] text-brand-800">
              BioAfri-Connect
            </span>
            <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-brand-500">
              Knowledge To Value
            </span>
          </span>
        </TransitionLink>

        <div className="hidden items-center gap-3 lg:flex">
          <nav
            ref={navRef}
            aria-label="Primary navigation"
            className="relative flex items-center gap-1 rounded-full border border-brand-100 bg-[#faf8f2] p-1 shadow-[0_18px_40px_-30px_rgba(3,56,30,0.34)]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-1 rounded-full border border-brand-200/80 bg-gradient-to-r from-brand-50 via-white to-[#f6efe2] shadow-[0_10px_24px_-18px_rgba(3,56,30,0.4)] transition-all duration-300"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
            />
            {navLinks.map((link) => {
              const isActive = activeHref === link.href

              return (
                <TransitionLink
                  key={link.label}
                  to={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 ${
                    isActive
                      ? 'text-brand-900'
                      : 'text-neutral hover:text-brand-700'
                  }`}
                >
                  {link.label}
                </TransitionLink>
              )
            })}
          </nav>

          <TransitionLink
            to={contactLink.href}
            aria-current={activeHref === contactLink.href ? 'page' : undefined}
            className={`inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 ${
              activeHref === contactLink.href
                ? 'border-brand-700 bg-brand-700 text-white shadow-[0_18px_34px_-22px_rgba(3,56,30,0.58)]'
                : 'border-accent/70 bg-accent text-brand-800 shadow-[0_16px_32px_-24px_rgba(216,198,162,0.7)] hover:-translate-y-0.5 hover:bg-[#e3d4b5]'
            }`}
          >
            {contactLink.label}
          </TransitionLink>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls={mobileMenuId}
          className="rounded-xl border border-brand-200 bg-white p-2 text-brand-700 shadow-sm transition hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div
        id={mobileMenuId}
        className={`overflow-hidden border-t border-brand-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? 'pointer-events-auto max-h-[420px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile navigation" className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href

            return (
              <TransitionLink
                key={link.label}
                to={link.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-brand-100 text-brand-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]'
                    : 'text-neutral hover:bg-brand-50 hover:text-brand-700'
                }`}
              >
                {link.label}
              </TransitionLink>
            )
          })}

          <TransitionLink
            to={contactLink.href}
            aria-current={activeHref === contactLink.href ? 'page' : undefined}
            onClick={() => setIsOpen(false)}
            className={`mt-2 inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 ${
              activeHref === contactLink.href
                ? 'bg-brand-700 text-white shadow-[0_18px_34px_-22px_rgba(3,56,30,0.58)]'
                : 'bg-accent text-brand-800 shadow-[0_16px_32px_-24px_rgba(216,198,162,0.7)] hover:-translate-y-0.5 hover:bg-[#e3d4b5]'
            }`}
          >
            {contactLink.label}
          </TransitionLink>
        </nav>
      </div>
    </header>
  )
}
