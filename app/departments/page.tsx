import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/Sidebar"
import { departments } from "@/data/departments"
import Link from 'next/link'

export default function Departments() {
    return (
        <div className="flex gap-8">
            <Sidebar className="w-64 flex-shrink-0" />
            <div className="flex-grow">
                <h2 className="text-4xl font-bold mb-8">Departments</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {departments.map((dept) => (
                        <Link href={`/departments/${encodeURIComponent(dept.name)}`} key={dept.name}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-2xl">
                                        {dept.icon && <img src={dept.icon || "/placeholder.svg"} alt={dept.name} className="w-8 h-8" />}
                                        {dept.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-lg">
                                    <p>{dept.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}