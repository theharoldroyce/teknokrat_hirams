'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import LoadingBar from 'react-top-loading-bar'

export function NavigationProgress() {
  const ref = useRef(null)
  const pathname = usePathname()

  useEffect(() => {

    ref.current?.continuousStart()

    const timeout = setTimeout(() => {
      ref.current?.complete()
    }, 0)

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <LoadingBar
      color='var(--primary)'
      ref={ref}
      shadow={true}
      height={1.3}
    />
  )
}
