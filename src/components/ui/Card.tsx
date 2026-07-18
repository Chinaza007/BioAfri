import { useEffect, useRef, type ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function Card({ children, className = '', id }: CardProps) {
  const cardRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = cardRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={cardRef}
      id={id}
      className={`card-motion relative isolate overflow-hidden rounded-[24px] border border-brand-100/90 bg-white/90 p-6 shadow-[0_10px_32px_-24px_rgba(3,56,30,0.26)] ring-1 ring-brand-100/60 transition-[transform,box-shadow,border-color,background-color] duration-500 ease-out will-change-transform hover:-translate-y-2 hover:border-brand-200/90 hover:shadow-[0_24px_78px_-34px_rgba(3,56,30,0.35)] hover:ring-brand-200/80 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <div className="pointer-events-none absolute -right-6 top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(216,198,162,0.18),transparent_70%)] blur-2xl" />
      {children}
    </article>
  )
}
