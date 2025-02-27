"use client"

import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"
import { departments } from "../../data/departments"

export default function Department() {
  const router = useRouter()
  const { id } = router.query
  const department = departments.find((dept) => dept.id === id)

  if (!department) {
    return <div>Department not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{department.name} - Imperecta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">{department.name}</h1>
            <Link href="/">
              <a className="text-blue-600 hover:text-blue-800">Back to Home</a>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {department.subdepartments.map((subdept) => (
                <div key={subdept.id} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img className="h-12 w-12" src={subdept.icon || "/placeholder.svg"} alt={subdept.name} />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">{subdept.name}</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">{subdept.description}</div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

