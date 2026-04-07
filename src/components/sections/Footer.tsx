import { BrandLogo } from '../ui/BrandLogo'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-brand-800 bg-brand-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <BrandLogo variant="darkBg" className="h-8 w-auto" />
          <p>© {new Date().getFullYear()} BioAfri Connect. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <Link to="/contact" className="hover:text-accent">
            WhatsApp
          </Link>
          <Link to="/contact" className="hover:text-accent">
            Email
          </Link>
          <Link to="/contact" className="hover:text-accent">
            Call
          </Link>
        </div>
      </div>
    </footer>
  )
}
