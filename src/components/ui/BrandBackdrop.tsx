import { HoneycombPattern } from './HoneycombPattern'

type BrandBackdropProps = {
  patternClassName?: string
}

export function BrandBackdrop({
  patternClassName = 'text-brand-100',
}: BrandBackdropProps) {
  return (
    <>
      <HoneycombPattern className={patternClassName} />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-brand-200/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
      </div>
    </>
  )
}
