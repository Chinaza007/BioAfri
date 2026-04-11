import { BriefcaseBusiness, ChevronDown, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import {
  boardMembers,
  managementTeam,
  type LeadershipProfile,
} from '../../data/siteData'
import { SectionHeader } from '../ui/SectionHeader'

type LeadershipGroupProps = {
  title: string
  description: string
  profiles: LeadershipProfile[]
  icon: 'board' | 'management'
  expandedId: string | null
  onToggle: (id: string) => void
}

function getInitials(name: string) {
  const ignoredParts = new Set(['Dr.', 'Dr', 'Alhaji', 'Mr.', 'Mr', 'Mrs.', 'Mrs', 'Ms.', 'Ms'])

  return name
    .split(' ')
    .filter((part) => /^[A-Z]/.test(part) && !ignoredParts.has(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

function LeadershipPortrait({
  name,
  image,
  imageFit,
  imagePosition,
  imageScale,
}: Pick<
  LeadershipProfile,
  'name' | 'image' | 'imageFit' | 'imagePosition' | 'imageScale'
>) {
  const initials = getInitials(name)

  return (
    <div className="relative aspect-square overflow-hidden rounded-[26px] border border-brand-100 bg-[linear-gradient(145deg,rgba(3,56,30,0.96),rgba(9,107,58,0.84),rgba(42,150,94,0.68))] shadow-[0_24px_70px_-44px_rgba(3,56,30,0.55)] md:h-[208px] md:min-h-0 md:self-start">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(216,198,162,0.22),transparent_30%)]" />
      <div className="absolute inset-[10px] rounded-[22px] bg-[linear-gradient(180deg,#f7f7f3_0%,#edf1eb_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]" />

      {image ? (
        <>
          <img
            src={image}
            alt={`${name} portrait`}
            loading="lazy"
            className={`absolute inset-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)] rounded-[22px] ${
              imageFit === 'contain' ? 'object-contain p-3' : 'object-cover'
            }`}
            style={{
              objectPosition: imagePosition ?? 'center 18%',
              transform: `scale(${imageScale ?? 1})`,
            }}
          />
          <div className="absolute inset-[10px] rounded-[22px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_64%,rgba(3,24,15,0.08)_100%)]" />
        </>
      ) : (
        <>
          <div className="absolute -right-8 top-8 h-28 w-28 rounded-full border border-white/14" />
          <div className="absolute left-6 top-14 h-20 w-20 rounded-[28px] border border-white/14 bg-white/10" />
          <div className="absolute bottom-16 right-8 h-16 w-16 rounded-2xl border border-accent/25 bg-accent/10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(2,20,12,0)_0%,rgba(2,20,12,0.48)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-[26px] border border-white/16 bg-white/10 text-3xl font-semibold tracking-[0.08em] text-white backdrop-blur-sm">
              {initials}
            </div>
          </div>
        </>
      )}

    </div>
  )
}

function LeadershipCard({
  profile,
  expandedId,
  onToggle,
}: {
  profile: LeadershipProfile
  expandedId: string | null
  onToggle: (id: string) => void
}) {
  const isExpanded = expandedId === profile.id
  const hasBiography = Boolean(profile.biography?.length)
  const contentId = `${profile.id}-bio`

  return (
    <article className="group relative overflow-hidden rounded-[30px] border border-brand-100 bg-[linear-gradient(180deg,#ffffff_0%,#fbfaf6_100%)] p-3 shadow-[0_30px_72px_-54px_rgba(3,56,30,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_82px_-48px_rgba(3,56,30,0.34)]">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(216,198,162,0.95),transparent)]" />

      <div className="grid gap-6 rounded-[26px] bg-white/85 p-3 md:grid-cols-[minmax(0,208px)_1fr] md:p-4">
        <LeadershipPortrait
          name={profile.name}
          image={profile.image}
          imageFit={profile.imageFit}
          imagePosition={profile.imagePosition}
          imageScale={profile.imageScale}
        />

        <div className="flex min-w-0 flex-col justify-between">
          <div>
            <div className="flex flex-col gap-4 border-b border-brand-100/80 pb-5 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <span className="inline-flex rounded-full border border-brand-100 bg-[#f8f5ee] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                  Leadership Profile
                </span>
                <h3 className="mt-4 text-[1.6rem] font-semibold tracking-tight text-brand-900">
                  {profile.name}
                </h3>
                <p className="mt-2 max-w-2xl text-sm font-medium leading-7 text-brand-700/88">
                  {profile.role}
                </p>
              </div>

              {hasBiography ? (
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={contentId}
                  onClick={() => onToggle(profile.id)}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 transition-colors hover:border-brand-200 hover:text-brand-800"
                >
                  {isExpanded ? 'Hide Profile' : 'View Profile'}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>
              ) : (
                <span className="inline-flex shrink-0 rounded-full border border-brand-100 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                  Details Soon
                </span>
              )}
            </div>

            <p className="mt-5 text-sm leading-7 text-neutral">{profile.preview}</p>

            {profile.expertise?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {hasBiography ? (
            <div
              id={contentId}
              className={`${isExpanded ? 'mt-6 rounded-[24px] border border-brand-100 bg-[linear-gradient(180deg,#ffffff_0%,#f9f6ef_100%)] px-5 py-5' : 'hidden'}`}
            >
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Full Biography
              </div>
              <div className="space-y-4 text-sm leading-7 text-slate-700">
                {profile.biography?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : profile.availabilityNote ? (
            <div className="mt-6 rounded-[24px] border border-dashed border-brand-100 bg-[#fcfbf7] px-5 py-4 text-sm leading-6 text-neutral">
              {profile.availabilityNote}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}

function LeadershipGroup({
  title,
  description,
  profiles,
  icon,
  expandedId,
  onToggle,
}: LeadershipGroupProps) {
  const Icon = icon === 'board' ? ShieldCheck : BriefcaseBusiness

  return (
    <section className="rounded-[34px] border border-brand-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,247,242,0.98))] p-6 shadow-[0_28px_72px_-52px_rgba(3,56,30,0.26)] md:p-8">
      <div className="flex flex-col gap-4 border-b border-brand-100 pb-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 via-white to-[#f3ebdc] text-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]">
              <Icon size={18} strokeWidth={1.9} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-brand-900">{title}</h3>
              <p className="mt-1 text-sm leading-7 text-neutral">{description}</p>
            </div>
          </div>
        </div>
        <div className="inline-flex w-fit rounded-full border border-brand-100 bg-[#f8f5ee] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
          {profiles.length} Profiles
        </div>
      </div>

      <div className="mt-6 grid gap-6">
        {profiles.map((profile) => (
          <LeadershipCard
            key={profile.id}
            profile={profile}
            expandedId={expandedId}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  )
}

export function LeadershipSection() {
  const [expandedId, setExpandedId] = useState<string | null>('sylvester-oikeh')

  const handleToggle = (id: string) => {
    setExpandedId((currentId) => (currentId === id ? null : id))
  }

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f6faf7_0%,#ffffff_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(9,107,58,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(216,198,162,0.18),transparent_26%)]" />
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <SectionHeader
          tag="Governance & Leadership"
          title={
            <span className="text-brand-700">
              Experienced leadership presented with an executive, photo-ready finish.
            </span>
          }
          description="Meet the board and management team shaping BioAfri-Connect's direction across innovation commercialization, agriculture, digital delivery, finance, and institutional growth."
        />

        <div className="mt-10 space-y-8">
          <LeadershipGroup
            title="Board Members"
            description="Strategic oversight, institutional guidance, and long-term stewardship for the firm's mission and growth."
            profiles={boardMembers}
            icon="board"
            expandedId={expandedId}
            onToggle={handleToggle}
          />
          <LeadershipGroup
            title="Management"
            description="Operational leadership across core practice areas that turn strategy into delivery and measurable client outcomes."
            profiles={managementTeam}
            icon="management"
            expandedId={expandedId}
            onToggle={handleToggle}
          />
        </div>
      </div>
    </section>
  )
}
