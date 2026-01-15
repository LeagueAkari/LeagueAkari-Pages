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
        className='rounded-md p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors'
        aria-label='Toggle theme'>
        <span className='sr-only'>Toggle theme</span>
        <div className='w-5 h-5' />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className='rounded-md p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer'
      aria-label='Toggle theme'>
      {resolvedTheme === 'light' ? (
        <Sun className='h-5 w-5' />
      ) : (
        <Moon className='h-5 w-5' />
      )}
    </button>
  )
}
