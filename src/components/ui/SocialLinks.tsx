import { socialLinks, type SocialLink } from '../../data/siteData'

type SocialLinksProps = {
  variant?: 'dark' | 'light'
  className?: string
  showLabels?: boolean
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function SocialIcon({ id, className }: { id: SocialLink['id']; className?: string }) {
  switch (id) {
    case 'linkedin':
      return <LinkedinIcon className={className} />
    case 'facebook':
      return <FacebookIcon className={className} />
    case 'instagram':
      return <InstagramIcon className={className} />
    case 'x':
      return <XIcon className={className} />
  }
}

export function SocialLinks({ variant = 'dark', className = '', showLabels = false }: SocialLinksProps) {
  const iconButtonClass =
    variant === 'dark'
      ? 'border-white/12 bg-white/10 text-white hover:border-brand-300/35 hover:bg-white/14 hover:text-white'
      : 'border-brand-100 bg-white text-brand-700 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-900'

  const labelClass = variant === 'dark' ? 'text-white/72 hover:text-white' : 'text-neutral hover:text-brand-800'

  return (
    <div className={className}>
      {!showLabels && (
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${
            variant === 'dark' ? 'text-brand-200/80' : 'text-brand-500'
          }`}
        >
          Follow Us
        </p>
      )}

      <div className={`${showLabels ? 'grid gap-3' : 'mt-4 flex flex-wrap gap-3'}`}>
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${link.label} (${link.handle})`}
            className={
              showLabels
                ? `group flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-300 ${labelClass} ${
                    variant === 'dark'
                      ? 'border-white/10 bg-white/[0.03] hover:border-brand-300/35 hover:bg-white/[0.05]'
                      : 'border-brand-100 bg-white hover:border-brand-200 hover:shadow-[0_18px_36px_-28px_rgba(3,56,30,0.3)]'
                  }`
                : `inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${iconButtonClass}`
            }
          >
            <SocialIcon id={link.id} className={showLabels ? 'h-[18px] w-[18px] shrink-0' : 'h-[18px] w-[18px]'} />
            {showLabels && (
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{link.label}</span>
                <span className="block text-sm opacity-80">{link.handle}</span>
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  )
}
