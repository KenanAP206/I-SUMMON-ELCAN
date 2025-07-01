"use client"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import {
  Calendar,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Download,
  User,
  Clock,
  DollarSign,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"

export default function AdminBookings() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  const bookings = [
    {
      id: "BK001",
      guest: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 234 567 8900",
      room: "Deluxe Suite 201",
      roomType: "Deluxe Suite",
      checkIn: "2025-01-02",
      checkOut: "2025-01-05",
      nights: 3,
      guests: 2,
      status: "confirmed",
      amount: 450,
      paid: 450,
      bookingDate: "2024-12-15",
      source: "Website",
    },
    {
      id: "BK002",
      guest: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 234 567 8901",
      room: "Standard Room 105",
      roomType: "Standard Room",
      checkIn: "2025-01-03",
      checkOut: "2025-01-06",
      nights: 3,
      guests: 1,
      status: "pending",
      amount: 320,
      paid: 0,
      bookingDate: "2024-12-20",
      source: "Phone",
    },
    {
      id: "BK003",
      guest: "Mike Wilson",
      email: "mike.wilson@email.com",
      phone: "+1 234 567 8902",
      room: "Presidential Suite",
      roomType: "Presidential Suite",
      checkIn: "2025-01-04",
      checkOut: "2025-01-08",
      nights: 4,
      guests: 4,
      status: "confirmed",
      amount: 1200,
      paid: 600,
      bookingDate: "2024-12-18",
      source: "Booking.com",
    },
    {
      id: "BK004",
      guest: "Lisa Chen",
      email: "lisa.chen@email.com",
      phone: "+1 234 567 8903",
      room: "Deluxe Room 302",
      roomType: "Deluxe Room",
      checkIn: "2025-01-05",
      checkOut: "2025-01-07",
      nights: 2,
      guests: 2,
      status: "cancelled",
      amount: 380,
      paid: 0,
      bookingDate: "2024-12-22",
      source: "Website",
    },
    {
      id: "BK005",
      guest: "David Brown",
      email: "david.brown@email.com",
      phone: "+1 234 567 8904",
      room: "Ocean View Suite 401",
      roomType: "Ocean View Suite",
      checkIn: "2025-01-06",
      checkOut: "2025-01-10",
      nights: 4,
      guests: 3,
      status: "checked-in",
      amount: 800,
      paid: 800,
      bookingDate: "2024-12-10",
      source: "Expedia",
    },
  ]

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.room.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || booking.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "pending":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case "cancelled":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "checked-in":
        return <CheckCircle className="w-4 h-4 text-blue-500" />
      case "checked-out":
        return <CheckCircle className="w-4 h-4 text-gray-500" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      case "checked-in":
        return "bg-blue-100 text-blue-800"
      case "checked-out":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bookings</h1>
          <p className="text-gray-600">Manage all hotel reservations and bookings</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <NavLink to="/admin/bookings/add">
            <span>New Booking</span>
          </NavLink>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search bookings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="checked-in">Checked In</option>
              <option value="checked-out">Checked Out</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="all">All Dates</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>

            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 text-gray-600" />
            </button>

            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Booking ID</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Guest</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Room</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Dates</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Amount</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">{booking.id}</div>
                    <div className="text-sm text-gray-600">{booking.source}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{booking.guest}</div>
                        <div className="text-sm text-gray-600">{booking.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">{booking.room}</div>
                    <div className="text-sm text-gray-600">{booking.guests} guests</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{booking.checkIn}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{booking.nights} nights</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(booking.status)}
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status.replace("-", " ")}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-900">${booking.amount}</span>
                    </div>
                    <div className="text-sm text-gray-600">Paid: ${booking.paid}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-amber-600 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
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
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {filteredBookings.length} of {bookings.length} bookings
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 text-sm bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors">
                1
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 transition-colors">
                2
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
