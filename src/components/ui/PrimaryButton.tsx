import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { TransitionLink } from './TransitionLink'

type PrimaryButtonProps = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline' | 'light'
  className?: string
}

export function PrimaryButton({
  href,
  children,
  variant = 'solid',
  className = '',
}: PrimaryButtonProps) {
  const base =
    'btn-accent group inline-flex items-center gap-2 rounded-[999px] border border-transparent px-7 py-4 text-base font-semibold tracking-[0.01em] shadow-[0_12px_32px_-20px_rgba(3,56,30,0.38)] transition-all duration-300 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-18px_rgba(3,56,30,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2'
  const styleByVariant = {
    solid: '',
    outline: '',
    light: 'border-brand-200/80 bg-white/90 text-brand-800 hover:border-brand-300 hover:bg-brand-50',
  }

  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
  const isAnchor = href.startsWith('#')

  if (isExternal || isAnchor) {
    return (
      <a href={href} className={`${base} ${styleByVariant[variant]} ${className}`}>
        {children}
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    )
  }

  return (
    <TransitionLink to={href} className={`${base} ${styleByVariant[variant]} ${className}`}>
      {children}
      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
    </TransitionLink>
  )
}
