'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useIsClient } from '../hooks/use-is-client'
import { SITE_BASE } from '@/config/site'

export function AkariLogo({ invert = true }: { invert?: boolean }) {
  const { resolvedTheme } = useTheme()
  const isClient = useIsClient()

  if (!isClient) {
    return null
  }

  return (
    <Image
      src={
        invert
          ? resolvedTheme === 'dark'
            ? `${SITE_BASE}/images/logo-light.png`
            : `${SITE_BASE}/images/logo-dark.png`
          : resolvedTheme === 'dark'
            ? `${SITE_BASE}/images/logo-dark.png`
            : `${SITE_BASE}/images/logo-light.png`
      }
      alt="League Akari"
      fill
    />
  )
}
