import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function Card({ children, className = '', id }: CardProps) {
  return (
    <article
      id={id}
      className={`rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {children}
    </article>
  )
}
