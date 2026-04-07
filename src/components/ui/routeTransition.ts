import { createContext, useContext } from 'react'

export type RouteTransitionContextValue = {
  beginTransition: (href: string) => void
}

export const RouteTransitionContext = createContext<RouteTransitionContextValue | null>(null)

export function useRouteTransition() {
  const context = useContext(RouteTransitionContext)

  if (!context) {
    throw new Error('useRouteTransition must be used within a RouteTransitionProvider')
  }

  return context
}
