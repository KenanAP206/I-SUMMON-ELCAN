"use client"

import { useState } from "react"
import { MoreVertical, Edit, Trash2, FileText, Search, Filter, Download, Plus } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function AdminUserList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const bookingData = [
    {
      id: 1,
      name: "John Deo",
      avatar: "/guest1.jpg",
      checkIn: "12-08-2019",
      checkOut: "15-08-2019",
      status: "Paid",
      phone: "(123)123456",
      roomType: "Single",
    },
    {
      id: 2,
      name: "Jens Brincker",
      avatar: "/guest2.jpg",
      checkIn: "13-08-2019",
      checkOut: "16-08-2019",
      status: "Unpaid",
      phone: "(123)123456",
      roomType: "Double",
    },
    {
      id: 3,
      name: "Mark Hay",
      avatar: "/guest3.jpg",
      checkIn: "15-08-2019",
      checkOut: "18-08-2019",
      status: "Paid",
      phone: "(123)123456",
      roomType: "Single",
    },
    {
      id: 4,
      name: "Anthony Davie",
      avatar: "/guest4.jpg",
      checkIn: "16-08-2019",
      checkOut: "17-08-2019",
      status: "Unpaid",
      phone: "(123)123456",
      roomType: "King",
    },
    {
      id: 5,
      name: "Alan Gilchrist",
      avatar: "/guest5.jpg",
      checkIn: "21-08-2019",
      checkOut: "23-08-2019",
      status: "Paid",
      phone: "(123)123456",
      roomType: "Apartment",
    },
    {
      id: 6,
      name: "Sue Woodger",
      avatar: "/guest6.jpg",
      checkIn: "25-08-2019",
      checkOut: "26-08-2019",
      status: "Pending",
      phone: "(123)123456",
      roomType: "Single",
    },
    {
      id: 7,
      name: "David Perry",
      avatar: "/guest7.jpg",
      checkIn: "26-08-2019",
      checkOut: "29-08-2019",
      status: "Unpaid",
      phone: "(123)123456",
      roomType: "Single",
    },
    {
      id: 8,
      name: "Sneha Pandit",
      avatar: "/guest8.jpg",
      checkIn: "27-08-2019",
      checkOut: "28-08-2019",
      status: "Paid",
      phone: "(123)123456",
      roomType: "Double",
    },
  ]

  const filteredBookings = bookingData.filter((booking) => {
    const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || booking.status.toLowerCase() === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-500/20 text-green-400 border border-green-500/30"
      case "unpaid":
        return "bg-red-500/20 text-red-400 border border-red-500/30"
      case "pending":
        return "bg-orange-500/20 text-orange-400 border border-orange-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border border-gray-500/30"
    }
  }

  return (
    <div className="p-6 bg-slate-800 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-1">Booking Details</h1>
          <p className="text-slate-400">Manage guest bookings and reservations</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus className="w-4 h-4" />
            <NavLink to="/admin/user-list/add">
              <span>Add User</span>
            </NavLink>
          </button>
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex items-center space-x-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search guests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All Status</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">#</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Name</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Check In</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Check Out</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Status</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Phone</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Room Type</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Documents</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking, index) => (
                <tr key={booking.id} className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 text-slate-400 text-sm">{index + 1}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={booking.avatar || "/placeholder.svg"}
                        alt={booking.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-slate-600"
                      />
                      <span className="text-white font-medium">{booking.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-300 text-sm">{booking.checkIn}</td>
                  <td className="py-4 px-6 text-slate-300 text-sm">{booking.checkOut}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-300 text-sm">{booking.phone}</td>
                  <td className="py-4 px-6 text-slate-300 text-sm">{booking.roomType}</td>
                  <td className="py-4 px-6">
                    <button className="p-2 text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-colors">
                      <FileText className="w-4 h-4" />
                    </button>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-700 flex items-center justify-between">
          <div className="text-sm text-slate-400">
            Showing {filteredBookings.length} of {bookingData.length} bookings
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm text-slate-400 hover:text-white border border-slate-600 rounded hover:bg-slate-700 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              1
            </button>
            <button className="px-3 py-1 text-sm text-slate-400 hover:text-white border border-slate-600 rounded hover:bg-slate-700 transition-colors">
              2
            </button>
            <button className="px-3 py-1 text-sm text-slate-400 hover:text-white border border-slate-600 rounded hover:bg-slate-700 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

