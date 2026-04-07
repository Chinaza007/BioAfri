import type { MouseEvent } from 'react'
import { Link, type LinkProps, useHref, useLocation } from 'react-router-dom'
import { useRouteTransition } from './routeTransition'

type TransitionLinkProps = LinkProps & {
  disableLoader?: boolean
}

function isModifiedEvent(event: MouseEvent<HTMLAnchorElement>) {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
}

function shouldAnimateNavigation(href: string, currentPath: string) {
  if (!href || href.startsWith('#')) {
    return false
  }

  const currentUrl = new URL(currentPath, window.location.origin)
  const targetUrl = new URL(href, window.location.origin)
  const isSameDocument =
    currentUrl.pathname === targetUrl.pathname && currentUrl.search === targetUrl.search

  return !isSameDocument
}

export function TransitionLink({
  to,
  onClick,
  target,
  reloadDocument,
  disableLoader = false,
  ...props
}: TransitionLinkProps) {
  const href = useHref(to)
  const location = useLocation()
  const { beginTransition } = useRouteTransition()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (
      event.defaultPrevented ||
      disableLoader ||
      event.button !== 0 ||
      isModifiedEvent(event) ||
      target === '_blank' ||
      reloadDocument
    ) {
      return
    }

    const currentPath = `${location.pathname}${location.search}${location.hash}`
    if (!shouldAnimateNavigation(href, currentPath)) {
      return
    }

    beginTransition(href)
  }

  return <Link to={to} target={target} reloadDocument={reloadDocument} onClick={handleClick} {...props} />
}
