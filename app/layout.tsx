import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Bell, LayoutGrid } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { NavigationWrapper } from '@/components/NavigationWrapper'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col min-h-screen bg-background">
                {/* Header */}
                <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <LayoutGrid className="h-8 w-8" />
                            <h1 className="font-bold text-xl">Imperecta Suite</h1>
                        </Link>
                        <div className="flex items-center gap-6">
                            <Button variant="ghost" size="icon">
                                <Bell className="h-6 w-6" />
                            </Button>
                            <ModeToggle />
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-grow max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </main>

                {/* Footer */}
                <footer className="border-t bg-background mt-auto">
                    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                            © 2024 Imperecta Suite. All rights reserved.
                        </p>
                        <nav className="flex gap-6">
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Terms
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Privacy
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Contact
                            </a>
                        </nav>
                    </div>
                </footer>

                <NavigationWrapper />
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}