import { BrandLogo } from './BrandLogo'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Training', href: '/training' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(location.pathname || '/')
  const navRef = useRef<HTMLElement | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })

  useEffect(() => {
    setActiveHref(location.pathname || '/')
  }, [location.pathname])

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
    <header className="sticky top-0 z-40 border-b border-brand-100/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-bold text-brand-700">
          <BrandLogo variant="lightBg" />
          <span className="hidden sm:inline">BioAfri-Connect</span>
        </Link>
        <nav ref={navRef} className="relative hidden items-center gap-1 md:flex">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-brand-700 transition-all duration-300"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
            }}
          />
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                activeHref === link.href
                  ? 'text-brand-800'
                  : 'text-neutral hover:bg-brand-50 hover:text-brand-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-accent ml-2 px-4 py-2"
          >
            Contact Us
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg border border-brand-200 p-2 text-brand-700 transition hover:bg-brand-50 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div
        className={`overflow-hidden border-t border-brand-100 bg-white/95 transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 ${
                activeHref === link.href
                  ? 'bg-brand-100 text-brand-800'
                  : 'text-neutral hover:bg-brand-50 hover:text-brand-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-accent mt-1 px-4 py-3"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
