import type { ReactNode } from 'react'
import { TagPill } from './TagPill'

type SectionHeaderProps = {
  title: ReactNode
  description?: string
  tag?: string
  centered?: boolean
}

export function SectionHeader({ title, description, tag, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {tag ? <TagPill className="mb-4">{tag}</TagPill> : null}
      <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">{title}</h2>
      {description ? (
        <p className={`mt-4 text-neutral ${centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
