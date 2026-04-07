import type { ReactNode } from 'react'

type TagPillProps = {
  children: ReactNode
  className?: string
}

export function TagPill({ children, className = '' }: TagPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 ${className}`}
    >
      {children}
    </span>
  )
}
