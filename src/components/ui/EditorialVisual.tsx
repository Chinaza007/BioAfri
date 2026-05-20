import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Briefcase,
  FileText,
  FlaskConical,
  GraduationCap,
  Leaf,
  Network,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { HoneycombPattern } from './HoneycombPattern'
import type { EditorialImageAsset } from '../../data/editorialVisuals'
import type { EditorialVisualVariant } from '../../types/visuals'

type EditorialVisualProps = {
  variant: EditorialVisualVariant
  ariaLabel: string
  badge?: string
  className?: string
  image?: EditorialImageAsset
}

type EditorialVisualTheme = {
  badge: string
  shellClassName: string
  glowPrimaryClassName: string
  glowSecondaryClassName: string
  tileClassName: string
  primaryIcon: LucideIcon
  secondaryIcon: LucideIcon
  tertiaryIcon: LucideIcon
  metrics: [string, string, string]
}

const themes: Record<EditorialVisualVariant, EditorialVisualTheme> = {
  partnership: {
    badge: 'Integrated Advisory',
    shellClassName: 'from-brand-900 via-brand-700 to-brand-500',
    glowPrimaryClassName: 'bg-brand-100/25',
    glowSecondaryClassName: 'bg-accent/25',
    tileClassName: 'bg-white/10',
    primaryIcon: Network,
    secondaryIcon: Users,
    tertiaryIcon: Briefcase,
    metrics: ['Partners', 'Strategy', 'Growth'],
  },
  commercialization: {
    badge: 'Tech Transfer',
    shellClassName: 'from-brand-900 via-brand-800 to-brand-600',
    glowPrimaryClassName: 'bg-accent/30',
    glowSecondaryClassName: 'bg-brand-100/20',
    tileClassName: 'bg-accent/20',
    primaryIcon: FlaskConical,
    secondaryIcon: BarChart3,
    tertiaryIcon: ArrowUpRight,
    metrics: ['IP', 'Deals', 'Scale'],
  },
  agriculture: {
    badge: 'Agri-Innovation',
    shellClassName: 'from-brand-900 via-brand-700 to-brand-400',
    glowPrimaryClassName: 'bg-brand-100/20',
    glowSecondaryClassName: 'bg-accent/25',
    tileClassName: 'bg-white/10',
    primaryIcon: Leaf,
    secondaryIcon: BarChart3,
    tertiaryIcon: Users,
    metrics: ['Field', 'Market', 'Impact'],
  },
  training: {
    badge: 'Capability Building',
    shellClassName: 'from-brand-900 via-brand-700 to-brand-500',
    glowPrimaryClassName: 'bg-accent/25',
    glowSecondaryClassName: 'bg-brand-100/20',
    tileClassName: 'bg-white/10',
    primaryIcon: GraduationCap,
    secondaryIcon: Users,
    tertiaryIcon: ArrowUpRight,
    metrics: ['Skills', 'Teams', 'Results'],
  },
  projects: {
    badge: 'Project Delivery',
    shellClassName: 'from-brand-900 via-brand-800 to-brand-500',
    glowPrimaryClassName: 'bg-brand-100/20',
    glowSecondaryClassName: 'bg-accent/25',
    tileClassName: 'bg-accent/20',
    primaryIcon: Briefcase,
    secondaryIcon: Network,
    tertiaryIcon: BarChart3,
    metrics: ['Plans', 'Timelines', 'Value'],
  },
  resources: {
    badge: 'Knowledge Assets',
    shellClassName: 'from-brand-900 via-brand-700 to-brand-600',
    glowPrimaryClassName: 'bg-brand-100/20',
    glowSecondaryClassName: 'bg-accent/30',
    tileClassName: 'bg-white/10',
    primaryIcon: BookOpen,
    secondaryIcon: FileText,
    tertiaryIcon: BarChart3,
    metrics: ['Briefs', 'Reports', 'Tools'],
  },
  compliance: {
    badge: 'Compliance Systems',
    shellClassName: 'from-brand-900 via-brand-800 to-brand-600',
    glowPrimaryClassName: 'bg-accent/20',
    glowSecondaryClassName: 'bg-brand-100/15',
    tileClassName: 'bg-white/10',
    primaryIcon: ShieldCheck,
    secondaryIcon: FileText,
    tertiaryIcon: Network,
    metrics: ['Policy', 'Risk', 'Assurance'],
  },
  leadership: {
    badge: 'Leadership Growth',
    shellClassName: 'from-brand-900 via-brand-700 to-brand-500',
    glowPrimaryClassName: 'bg-accent/25',
    glowSecondaryClassName: 'bg-brand-100/20',
    tileClassName: 'bg-accent/20',
    primaryIcon: Users,
    secondaryIcon: GraduationCap,
    tertiaryIcon: BarChart3,
    metrics: ['People', 'Culture', 'Momentum'],
  },
}

export function EditorialVisual({
  variant,
  ariaLabel,
  badge,
  className = '',
  image,
}: EditorialVisualProps) {
  const theme = themes[variant]
  const PrimaryIcon = theme.primaryIcon
  const SecondaryIcon = theme.secondaryIcon
  const TertiaryIcon = theme.tertiaryIcon

  if (image) {
    return (
      <figure
        role="img"
        aria-label={ariaLabel}
        className={`relative overflow-hidden rounded-[28px] border border-brand-100 bg-slate-950 text-white shadow-[0_24px_70px_-32px_rgba(3,56,30,0.65)] ${className}`}
      >
        <img
          src={image.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full ${
            image.fit === 'contain' ? 'bg-white object-contain p-6' : 'object-cover'
          }`}
          style={{ objectPosition: image.position ?? 'center center' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,31,18,0.06)_0%,rgba(3,31,18,0.18)_38%,rgba(3,31,18,0.84)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,198,162,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(9,107,58,0.22),transparent_26%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-45 mix-blend-screen">
          <HoneycombPattern className="text-brand-100/45" />
        </div>

        <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-between p-5">
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/84 backdrop-blur-md">
            {badge ?? theme.badge}
          </span>

          <div className="ml-auto max-w-[15rem] rounded-[24px] border border-white/14 bg-[rgba(3,21,13,0.56)] p-4 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                <PrimaryIcon className="h-5 w-5 text-white" strokeWidth={1.8} />
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/14 bg-white/10">
                <SecondaryIcon className="h-4.5 w-4.5 text-white/92" strokeWidth={1.8} />
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/14 bg-white/10">
                <TertiaryIcon className="h-4.5 w-4.5 text-white/92" strokeWidth={1.8} />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {theme.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/78"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>
      </figure>
    )
  }

  return (
    <figure
      role="img"
      aria-label={ariaLabel}
      className={`relative overflow-hidden rounded-[28px] border border-brand-100 bg-gradient-to-br p-5 text-white shadow-[0_24px_70px_-32px_rgba(3,56,30,0.65)] ${theme.shellClassName} ${className}`}
    >
      <HoneycombPattern className="text-brand-100" />
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl ${theme.glowPrimaryClassName}`}
        />
        <div
          className={`absolute -bottom-14 -left-10 h-36 w-36 rounded-full blur-3xl ${theme.glowSecondaryClassName}`}
        />
      </div>

      <div className="relative z-10 flex h-full min-h-[220px] flex-col">
        <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-md">
          {badge ?? theme.badge}
        </span>

        <div className="relative mt-5 flex-1">
          <div className="absolute left-0 top-4 w-32 rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur-xl shadow-2xl">
            <PrimaryIcon className="h-9 w-9 text-white" strokeWidth={1.7} />
            <div className="mt-5 space-y-2.5">
              <div className="h-2.5 w-16 rounded-full bg-white/60" />
              <div className="h-2.5 w-20 rounded-full bg-white/35" />
              <div className="h-2.5 w-12 rounded-full bg-accent/80" />
            </div>
          </div>

          <div className="absolute right-0 top-0 w-[60%] rounded-[30px] border border-white/15 bg-slate-950/20 p-5 backdrop-blur-xl shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                  Placeholder Visual
                </div>
                <div className="mt-3 h-3 w-24 rounded-full bg-white/65" />
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-3">
                <SecondaryIcon className="h-5 w-5 text-white" strokeWidth={1.7} />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {theme.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3 text-center backdrop-blur-sm"
                >
                  <div className="mx-auto h-8 w-8 rounded-full border border-white/15 bg-white/10" />
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    {metric}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 h-2.5 w-full rounded-full bg-white/15">
              <div className="h-2.5 w-[68%] rounded-full bg-accent" />
            </div>
          </div>

          <div
            className={`absolute bottom-0 left-[15%] rounded-[24px] border border-white/15 px-4 py-3 backdrop-blur-xl shadow-xl ${theme.tileClassName}`}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-2.5">
                <TertiaryIcon className="h-5 w-5 text-white" strokeWidth={1.7} />
              </div>
              <div className="space-y-2">
                <div className="h-2.5 w-20 rounded-full bg-white/60" />
                <div className="h-2.5 w-14 rounded-full bg-white/35" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}
