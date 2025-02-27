import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calendar, Settings, Users, BarChart, Search } from 'lucide-react'

export default function Home() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <h2 className="text-4xl font-bold tracking-tight">Welcome to Imperecta Suite</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/departments" className="block">
                    <Card className="hover:shadow-lg transition-shadow h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Users className="h-8 w-8 text-primary" />
                                Departments
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-lg">
                            Manage and maintain your departments
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/documents" className="block">
                    <Card className="hover:shadow-lg transition-shadow h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <FileText className="h-8 w-8 text-primary" />
                                Documents
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-lg">
                            Manage and organize all your important documents
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/schedule" className="block">
                    <Card className="hover:shadow-lg transition-shadow h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Calendar className="h-8 w-8 text-primary" />
                                Schedule
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-lg">
                            Plan and schedule your tasks and meetings
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/teams" className="block">
                    <Card className="hover:shadow-lg transition-shadow h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Users className="h-8 w-8 text-primary" />
                                Teams
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-lg">
                            Collaborate with your team members effectively
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/analytics" className="block">
                    <Card className="hover:shadow-lg transition-shadow h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <BarChart className="h-8 w-8 text-primary" />
                                Analytics
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-lg">
                            Track and analyze your business metrics
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/settings" className="block">
                    <Card className="hover:shadow-lg transition-shadow h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Settings className="h-8 w-8 text-primary" />
                                Settings
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-lg">
                            Configure your workspace preferences
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    )
}