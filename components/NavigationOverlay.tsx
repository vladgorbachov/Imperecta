'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function NavigationOverlay() {
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const threshold = 20 // пикселей от края экрана
            setShowLeft(e.clientX <= threshold)
            setShowRight(window.innerWidth - e.clientX <= threshold)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const handleNavigate = (direction: 'back' | 'forward') => {
        if (direction === 'back') {
            router.back()
        } else {
            router.forward()
        }
    }

    return (
        <>
            {showLeft && (
                <div
                    className="fixed left-0 top-0 bottom-0 w-14 bg-background/80 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-opacity duration-300"
                    onClick={() => handleNavigate('back')}
                >
                    <ChevronLeft className="w-8 h-8" />
                </div>
            )}
            {showRight && (
                <div
                    className="fixed right-0 top-0 bottom-0 w-14 bg-background/80 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-opacity duration-300"
                    onClick={() => handleNavigate('forward')}
                >
                    <ChevronRight className="w-8 h-8" />
                </div>
            )}
        </>
    )
}