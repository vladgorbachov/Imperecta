import { departments } from "@/data/departments"
import { Sidebar } from "@/components/Sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from 'next/navigation'

export default function Department({ params }: { params: { slug: string } }) {
    const department = departments.find(dept => dept.name === decodeURIComponent(params.slug))

    if (!department) {
        notFound()
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 ml-4">
                <h2 className="text-3xl font-bold mb-6">{department.name}</h2>
                <p className="mb-6">{department.description}</p>
                <h3 className="text-2xl font-bold mb-4">Subdepartments</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {department.subdepartments.map((subdept) => (
                        <Card key={subdept.name}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    {subdept.icon && <img src={subdept.icon || "/placeholder.svg"} alt={subdept.name} className="w-5 h-5" />}
                                    {subdept.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{subdept.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}