'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useIsClient } from '../hooks/use-is-client'

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const isMounted = useIsClient()

  if (!isMounted) {
    return (
      <button
        className="rounded-md p-2 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800"
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
        <div className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="cursor-pointer rounded-md p-2 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
