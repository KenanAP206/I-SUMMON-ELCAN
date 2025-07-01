import { Users, BarChart3, Settings, Calendar, FileText } from 'lucide-react'

export default function AdminDashboard() {
  const dashboardItems = [
    {
      title: 'Total Users',
      value: '1,234',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Total Rooms',
      value: '56',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Bookings',
      value: '345',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: 'Revenue',
      value: '$12,345',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-3xl font-bold text-gray-900">{item.value}</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-full">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Activities
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">New Booking</p>
                <p className="font-medium text-gray-900">Room 101</p>
              </div>
              <span className="px-2 py-1 text-xs text-green-600 bg-green-100 rounded-full">
                Success
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">User Registration</p>
                <p className="font-medium text-gray-900">John Doe</p>
              </div>
              <span className="px-2 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
                New
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
