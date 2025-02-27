import type { Department } from "../types"

interface SidebarProps {
  onSelectDepartment: (department: Department) => void
}

const departments: Department[] = [
  { id: "hr", name: "Human Resources" },
  { id: "finance", name: "Finance & Accounting" },
  { id: "sales", name: "Sales & Marketing" },
  { id: "production", name: "Production & Operations" },
  { id: "rd", name: "Research & Development" },
]

export default function Sidebar({ onSelectDepartment }: SidebarProps) {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-5">Departments</h2>
      <nav>
        <ul>
          {departments.map((dept) => (
            <li key={dept.id} className="mb-2">
              <button
                onClick={() => onSelectDepartment(dept)}
                className="w-full text-left py-2 px-4 rounded hover:bg-gray-700 transition-colors"
              >
                {dept.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

