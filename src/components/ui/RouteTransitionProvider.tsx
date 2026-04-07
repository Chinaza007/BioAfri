import { startTransition, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { HoneycombPattern } from './HoneycombPattern'
import { RouteTransitionContext } from './routeTransition'

type LoaderState = {
  visible: boolean
  settling: boolean
  progress: number
  destination: string
}

const MIN_VISIBLE_MS = 720
const EXIT_DURATION_MS = 320
const SAFETY_TIMEOUT_MS = 2400

const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/projects': 'Projects',
  '/training': 'Training',
  '/resources': 'Resources',
  '/contact': 'Contact',
}

function getDestinationLabel(href: string) {
  const url = new URL(href, window.location.href)
  return routeLabels[url.pathname] ?? 'Next Page'
}

function RouteTransitionOverlay({
  visible,
  settling,
  progress,
  destination,
}: LoaderState) {
  const progressAngle = Math.max(24, progress * 3.6)

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-500 ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <div className="absolute inset-0 bg-[rgba(2,8,5,0.92)] backdrop-blur-md" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,107,58,0.26),transparent_16%),radial-gradient(circle_at_18%_22%,rgba(78,175,124,0.14),transparent_24%),radial-gradient(circle_at_82%_76%,rgba(216,198,162,0.14),transparent_24%),linear-gradient(180deg,rgba(3,56,30,0.2),rgba(1,8,5,0.92))]" />
      <HoneycombPattern className="text-brand-100/10" />

      <div className="relative flex h-full items-center justify-center px-5">
        <div
          className={`w-full max-w-3xl text-center transition-all duration-500 ${
            settling ? 'translate-y-1 scale-[0.985] opacity-95' : 'translate-y-0 scale-100 opacity-100'
          }`}
        >
          <div className="relative mx-auto h-[18rem] w-[18rem] sm:h-[22rem] sm:w-[22rem]">
            <div className="route-loader-breathe absolute inset-[18%] rounded-full bg-brand-500/20 blur-3xl" />
            <div className="route-loader-breathe-delayed absolute inset-[28%] rounded-full bg-accent/14 blur-3xl" />

            <div
              className="route-loader-spin-slow absolute inset-0 rounded-full"
              style={{
                backgroundImage:
                  'repeating-conic-gradient(from 140deg, rgba(167,215,190,0) 0deg 8deg, rgba(167,215,190,0.95) 8deg 12deg, rgba(9,107,58,0) 12deg 20deg, rgba(216,198,162,0.72) 20deg 23deg, rgba(9,107,58,0) 23deg 31deg)',
              }}
            >
              <div className="absolute inset-[16px] rounded-full bg-[rgba(4,12,8,0.96)]" />
            </div>

            <div
              className="route-loader-spin-reverse absolute inset-[8%] rounded-full opacity-80"
              style={{
                backgroundImage:
                  'repeating-conic-gradient(from 22deg, rgba(255,255,255,0) 0deg 6deg, rgba(216,198,162,0.82) 6deg 7.4deg, rgba(255,255,255,0) 7.4deg 14deg, rgba(78,175,124,0.7) 14deg 16deg, rgba(255,255,255,0) 16deg 24deg)',
              }}
            >
              <div className="absolute inset-[10px] rounded-full bg-[rgba(4,12,8,0.95)]" />
            </div>

            <div className="absolute inset-[17%] rounded-full border border-white/8 shadow-[0_0_0_1px_rgba(167,215,190,0.12),0_0_36px_rgba(9,107,58,0.22)]" />

            <div
              className="absolute inset-[20%] rounded-full p-[12px] shadow-[0_0_58px_rgba(9,107,58,0.18)]"
              style={{
                backgroundImage: `conic-gradient(from -90deg, rgba(167,215,190,0.18) 0deg, rgba(216,198,162,0.98) ${progressAngle * 0.6}deg, rgba(78,175,124,0.98) ${progressAngle}deg, rgba(255,255,255,0.06) ${progressAngle + 5}deg, rgba(255,255,255,0.02) 360deg)`,
              }}
            >
              <div className="absolute inset-[12px] rounded-full bg-[rgba(5,13,9,0.96)]" />
            </div>

            <div
              className="route-loader-orbit absolute inset-[28%] rounded-full"
              style={{
                backgroundImage:
                  'repeating-conic-gradient(from 250deg, rgba(216,198,162,0) 0deg 4deg, rgba(216,198,162,0.92) 4deg 6deg, rgba(216,198,162,0) 6deg 12deg, rgba(167,215,190,0.76) 12deg 13.4deg, rgba(216,198,162,0) 13.4deg 19deg)',
              }}
            >
              <div className="absolute inset-[12px] rounded-full bg-[rgba(5,14,9,0.95)]" />
            </div>

            <div className="absolute inset-[35%] rounded-full border border-brand-100/12 bg-[radial-gradient(circle_at_center,rgba(8,34,20,0.94),rgba(3,10,7,0.98))] shadow-[inset_0_0_34px_rgba(216,198,162,0.12),0_0_30px_rgba(9,107,58,0.18)]">
              <div className="route-loader-pulse-ring absolute inset-3 rounded-full border border-white/10" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(216,198,162,0.16),transparent_60%)]" />
              <div className="relative flex h-full flex-col items-center justify-center">
                <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {Math.round(progress)}%
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-brand-100/72">
                  Route Sync
                </span>
              </div>
            </div>

            <span className="route-loader-node absolute left-[8%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand-200" />
            <span className="route-loader-node route-loader-node-delayed absolute right-[10%] top-[28%] h-2 w-2 rounded-full bg-accent" />
            <span className="route-loader-node absolute bottom-[13%] left-[28%] h-2 w-2 rounded-full bg-brand-300" />
          </div>

         
        </div>
      </div>
    </div>
  )
}

export function RouteTransitionProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const [loaderState, setLoaderState] = useState<LoaderState>({
    visible: false,
    settling: false,
    progress: 0,
    destination: 'Next Page',
  })
  const startedAtRef = useRef(0)
  const progressIntervalRef = useRef<number | null>(null)
  const completeTimeoutRef = useRef<number | null>(null)
  const exitTimeoutRef = useRef<number | null>(null)
  const safetyTimeoutRef = useRef<number | null>(null)
  const isTransitioningRef = useRef(false)
  const isCompletingRef = useRef(false)

  const clearTimers = useCallback(() => {
    if (progressIntervalRef.current !== null) {
      window.clearInterval(progressIntervalRef.current)
      progressIntervalRef.current = null
    }

    if (completeTimeoutRef.current !== null) {
      window.clearTimeout(completeTimeoutRef.current)
      completeTimeoutRef.current = null
    }

    if (exitTimeoutRef.current !== null) {
      window.clearTimeout(exitTimeoutRef.current)
      exitTimeoutRef.current = null
    }

    if (safetyTimeoutRef.current !== null) {
      window.clearTimeout(safetyTimeoutRef.current)
      safetyTimeoutRef.current = null
    }
  }, [])

  const finishTransition = useCallback(() => {
    if (!isTransitioningRef.current || isCompletingRef.current) {
      return
    }

    isCompletingRef.current = true
    if (progressIntervalRef.current !== null) {
      window.clearInterval(progressIntervalRef.current)
      progressIntervalRef.current = null
    }

    const elapsed = performance.now() - startedAtRef.current
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed)

    completeTimeoutRef.current = window.setTimeout(() => {
      setLoaderState((current) => ({
        ...current,
        progress: 100,
        settling: true,
      }))

      exitTimeoutRef.current = window.setTimeout(() => {
        clearTimers()
        isTransitioningRef.current = false
        isCompletingRef.current = false

        startTransition(() => {
          setLoaderState((current) => ({
            ...current,
            visible: false,
            settling: false,
            progress: 0,
          }))
        })
      }, EXIT_DURATION_MS)
    }, remaining)
  }, [clearTimers])

  const beginTransition = useCallback((href: string) => {
    clearTimers()
    startedAtRef.current = performance.now()
    isTransitioningRef.current = true
    isCompletingRef.current = false

    setLoaderState({
      visible: true,
      settling: false,
      progress: 14,
      destination: getDestinationLabel(href),
    })

    progressIntervalRef.current = window.setInterval(() => {
      setLoaderState((current) => ({
        ...current,
        progress: current.progress >= 84 ? current.progress : current.progress + (90 - current.progress) * 0.16,
      }))
    }, 90)

    safetyTimeoutRef.current = window.setTimeout(() => {
      finishTransition()
    }, SAFETY_TIMEOUT_MS)
  }, [clearTimers, finishTransition])

  useEffect(() => {
    if (!isTransitioningRef.current) {
      return
    }

    finishTransition()
  }, [finishTransition, location.hash, location.pathname, location.search])

  useEffect(() => {
    return clearTimers
  }, [clearTimers])

  return (
    <RouteTransitionContext.Provider value={{ beginTransition }}>
      {children}
      <RouteTransitionOverlay {...loaderState} />
    </RouteTransitionContext.Provider>
  )
}
