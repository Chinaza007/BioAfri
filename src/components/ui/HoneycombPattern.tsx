type HoneycombPatternProps = {
  className?: string
}

export function HoneycombPattern({ className = '' }: HoneycombPatternProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg className="h-full w-full opacity-25" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexPattern" width="56" height="48.5" patternUnits="userSpaceOnUse">
            <path
              d="M14 1l14 8v16l-14 8-14-8V9z M42 25l14 8v16l-14 8-14-8V33z M42-23l14 8V1L42 9 28 1v-16z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>
    </div>
  )
}
