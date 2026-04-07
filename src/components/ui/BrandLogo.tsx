type BrandLogoProps = {
  variant?: 'lightBg' | 'darkBg'
  className?: string
}

export function BrandLogo({ variant = 'lightBg', className = 'h-9 w-auto' }: BrandLogoProps) {
  const src = variant === 'darkBg' ? '/logo-dark.png' : '/logo.png'

  return <img src={src} alt="BioAfri-Connect logo" className={className} />
}
