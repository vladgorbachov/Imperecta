import Head from "next/head"
import Link from "next/link"
import { departments } from "../data/departments"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Imperecta - Admin Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Imperecta</h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <Link key={dept.id} href={`/department/${dept.id}`}>
                  <a className="block bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img className="h-16 w-16" src={dept.icon || "/placeholder.svg"} alt={dept.name} />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">{dept.name}</dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900">{dept.description}</div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

