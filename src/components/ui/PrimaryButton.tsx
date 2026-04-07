import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

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
    'group inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5'
  const styleByVariant = {
    solid: 'bg-brand-700 text-white hover:bg-brand-800',
    outline: 'border-2 border-white/40 text-white hover:bg-white/10',
    light: 'bg-white text-brand-700 shadow-lg hover:shadow-2xl',
  }

  return (
    <a href={href} className={`${base} ${styleByVariant[variant]} ${className}`}>
      {children}
      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}
