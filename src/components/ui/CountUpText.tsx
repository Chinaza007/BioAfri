import { useEffect, useMemo, useState } from 'react'

type ParsedValue =
  | {
      hasNumeric: true
      prefix: string
      suffix: string
      target: number
      decimals: number
    }
  | {
      hasNumeric: false
      raw: string
    }

type CountUpTextProps = {
  value: string
  durationMs?: number
  delayMs?: number
}

function parseValue(value: string): ParsedValue {
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/)

  if (!match) {
    return { hasNumeric: false, raw: value }
  }

  const [, prefix, numeric, suffix] = match

  return {
    hasNumeric: true,
    prefix,
    suffix,
    target: Number(numeric),
    decimals: (numeric.split('.')[1] || '').length,
  }
}

function formatValue(value: number, decimals: number) {
  if (decimals > 0) {
    return value.toFixed(decimals)
  }

  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value)
}

export function CountUpText({
  value,
  durationMs = 1400,
  delayMs = 0,
}: CountUpTextProps) {
  const parsedValue = useMemo(() => parseValue(value), [value])
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!parsedValue.hasNumeric) {
      return
    }

    let frameId = 0
    let timeoutId = 0

    timeoutId = window.setTimeout(() => {
      const startTime = performance.now()

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / durationMs, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        const nextValue = parsedValue.target * easedProgress

        setDisplayValue(progress === 1 ? parsedValue.target : nextValue)

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick)
        }
      }

      frameId = window.requestAnimationFrame(tick)
    }, delayMs)

    return () => {
      window.clearTimeout(timeoutId)
      window.cancelAnimationFrame(frameId)
    }
  }, [delayMs, durationMs, parsedValue])

  if (!parsedValue.hasNumeric) {
    return <>{parsedValue.raw}</>
  }

  const resolvedValue =
    parsedValue.decimals > 0 ? displayValue : Math.round(displayValue)

  return (
    <>
      {parsedValue.prefix}
      {formatValue(resolvedValue, parsedValue.decimals)}
      {parsedValue.suffix}
    </>
  )
}
