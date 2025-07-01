import { Outlet } from 'react-router-dom'
import  Navbar  from '../../Components/Admin/Navbar'
import  Asidebar  from '../../Components/Admin/Asidebar'

export default function AdminRoot() {
  return (
    <>
      <Navbar />
      <Asidebar />
          <main className="min-h-screen bg-white">
        <Outlet />
      </main>
    </>
  )
}
