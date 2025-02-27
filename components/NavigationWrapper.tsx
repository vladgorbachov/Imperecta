'use client'

import { usePathname } from 'next/navigation'
import { NavigationOverlay } from './NavigationOverlay'

export function NavigationWrapper() {
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    if (isHomePage) {
        return null
    }

    return <NavigationOverlay />
}