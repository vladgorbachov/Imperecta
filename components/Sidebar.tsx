import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Sidebar({ className = "" }) {
    return (
        <div className={`p-4 space-y-6 ${className}`}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                </CardContent>
            </Card>
        </div>
    )
}