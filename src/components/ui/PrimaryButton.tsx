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
    'btn-accent group inline-flex gap-2 px-7 py-4 text-base'
  const styleByVariant = {
    solid: '',
    outline: '',
    light: 'shadow-lg hover:shadow-2xl',
  }

  return (
    <a href={href} className={`${base} ${styleByVariant[variant]} ${className}`}>
      {children}
      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}
