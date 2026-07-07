import { Bug, Cpu, Droplet, Lightbulb, Sprout } from 'lucide-react'

type FloatingIconProps = {
  icon: typeof Cpu
  className: string
  size?: number
}

function FloatingIcon({ icon: Icon, className, size = 22 }: FloatingIconProps) {
  return (
    <div
      className={`absolute flex items-center justify-center rounded-2xl border border-white/40 bg-white/90 text-brand-700 shadow-[0_10px_30px_-8px_rgba(3,56,30,0.45)] backdrop-blur-sm ${className}`}
    >
      <Icon size={size} strokeWidth={1.75} />
    </div>
  )
}

export function HeroGraphic() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]">
      {/* "Farmland at golden hour" panel — built from gradients, not a photo */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, #cfe3f2 0%, #eaf1e0 32%, #9fcf6a 42%, #4d9a3f 58%, #2f6d2b 100%)
          `,
        }}
      />
      {/* Sun glow low on the horizon */}
      <div
        className="absolute left-[18%] top-[38%] h-40 w-40 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(255,224,153,0.9) 0%, rgba(255,224,153,0) 70%)' }}
      />
      {/* Rows suggesting cultivated fields */}
      <div className="absolute inset-x-0 bottom-0 top-[46%] opacity-40">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-[-10%] right-[-10%] h-px origin-left bg-brand-900/40"
            style={{ top: `${(i + 1) * 12}%`, transform: 'rotate(-2deg)' }}
          />
        ))}
      </div>
      {/* A faint path/road cutting through, echoing the reference image */}
      <div
        className="absolute bottom-0 left-[46%] top-[46%] w-[6%] bg-[#cbb98a]/50"
        style={{ clipPath: 'polygon(30% 0, 70% 0, 100% 100%, 0% 100%)' }}
      />

      {/* Honeycomb texture overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="heroHex" width="56" height="48.5" patternUnits="userSpaceOnUse">
            <path
              d="M14 1l14 8v16l-14 8-14-8V9z M42 25l14 8v16l-14 8-14-8V33z M42-23l14 8V1L42 9 28 1v-16z"
              fill="none"
              stroke="white"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroHex)" />
      </svg>

      {/* Diagonal triangle accents, brand green + gold, bottom-right corner */}
      <div
        className="absolute bottom-0 right-0 h-2/3 w-2/3"
        style={{
          background: 'linear-gradient(135deg, transparent 45%, rgba(3,56,30,0.85) 46%)',
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-1/3 w-1/3"
        style={{
          background: 'linear-gradient(135deg, transparent 45%, rgba(216,198,162,0.9) 46%)',
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
        }}
      />

      {/* Vignette to sit content nicely on top */}
      <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 60px 20px rgba(0,0,0,0.25)' }} />

      {/* Floating hexagon icon badges, arranged like the reference banner */}
      <FloatingIcon icon={Lightbulb} className="left-[14%] top-[10%] h-12 w-12" />
      <FloatingIcon icon={Cpu} className="left-[6%] top-[38%] h-14 w-14" size={24} />
      <FloatingIcon icon={Bug} className="right-[10%] top-[8%] h-12 w-12" />
      <FloatingIcon icon={Droplet} className="right-[22%] top-[28%] h-11 w-11" size={18} />
      <FloatingIcon icon={Sprout} className="left-[24%] bottom-[16%] h-12 w-12" />
    </div>
  )
}