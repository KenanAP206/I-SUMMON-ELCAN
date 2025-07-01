import { Outlet } from 'react-router-dom'
import { useState } from "react"
import  Navbar  from '../../Components/Admin/Navbar'
import  Asidebar  from '../../Components/Admin/Asidebar'
export default function AdminRoot({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <>
       <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Asidebar isCollapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <Navbar  onSidebarToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

        {/* Content Outlet */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
     
    </>
  )
}


