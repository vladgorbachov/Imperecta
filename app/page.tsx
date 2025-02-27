import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { LayoutGrid, Search, FileText, Calendar, Settings, Users, Bell, BarChart } from 'lucide-react'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <LayoutGrid className="h-6 w-6" />
                        <h1 className="font-bold text-lg">Imperecta Suite</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Bell className="h-4 w-4" />
                        </Button>
                        <ModeToggle />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container py-8">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold tracking-tight">Welcome to Imperecta Suite</h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Search className="h-5 w-5 text-primary" />
                                    Monitor
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Monitor and detect system anomalies in real-time
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-primary" />
                                    Documents
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Manage and organize all your important documents
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-primary" />
                                    Schedule
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Plan and schedule your tasks and meetings
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-primary" />
                                    Teams
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Collaborate with your team members effectively
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BarChart className="h-5 w-5 text-primary" />
                                    Analytics
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Track and analyze your business metrics
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Settings className="h-5 w-5 text-primary" />
                                    Settings
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Configure your workspace preferences
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t bg-background mt-auto">
                <div className="container flex h-14 items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        © 2024 Imperecta Suite. All rights reserved.
                    </p>
                    <nav className="flex gap-4">
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
        </div>
    )
}