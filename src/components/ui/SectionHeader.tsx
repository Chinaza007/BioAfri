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
      <h2 className="font-display text-4xl font-semibold tracking-[0.01em] text-slate-900 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 max-w-3xl text-base leading-8 text-neutral ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
