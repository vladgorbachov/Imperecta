import { useState } from "react"
import type { Department, File } from "../types"

interface FileExplorerProps {
  department: Department
}

// Моковые данные для демонстрации
const mockFiles: Record<string, File[]> = {
  hr: [
    { id: "1", name: "Employee Handbook.pdf", type: "file" },
    { id: "2", name: "Policies", type: "folder" },
  ],
  finance: [
    { id: "3", name: "Q2 Financial Report.xlsx", type: "file" },
    { id: "4", name: "Invoices", type: "folder" },
  ],
  // ... добавьте моковые данные для других отделов
}

export default function FileExplorer({ department }: FileExplorerProps) {
  const [currentFolder, setCurrentFolder] = useState<string | null>(null)

  const files = mockFiles[department.id] || []

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{department.name}</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <ul className="space-y-2">
          {currentFolder && (
            <li>
              <button onClick={() => setCurrentFolder(null)} className="text-blue-600 hover:underline">
                ../ (Back)
              </button>
            </li>
          )}
          {files.map((file) => (
            <li key={file.id} className="flex items-center">
              {file.type === "folder" ? (
                <button onClick={() => setCurrentFolder(file.id)} className="text-blue-600 hover:underline">
                  📁 {file.name}
                </button>
              ) : (
                <span>📄 {file.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

