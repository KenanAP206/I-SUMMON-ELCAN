"use client"

import { useState } from "react"
import { Menu, Bell, MessageSquare, Calendar, Clock, User, Settings } from "lucide-react"

export default function AdminNavbar({ onSidebarToggle }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)

  const adminData = {
    name: "Ethan Rodriguez",
    role: "Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  }

  const notifications = [
    {
      id: 1,
      type: "booking",
      title: "New Booking",
      message: "John Smith booked Deluxe Suite for 3 nights",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      type: "maintenance",
      title: "Maintenance Alert",
      message: "Room 205 AC unit needs attention",
      time: "15 min ago",
      unread: true,
    },
    {
      id: 3,
      type: "checkin",
      title: "VIP Check-in",
      message: "Mr. Anderson arriving at Presidential Suite",
      time: "1 hour ago",
      unread: false,
    },
    {
      id: 4,
      type: "review",
      title: "New Review",
      message: "5-star review from Sarah Johnson",
      time: "2 hours ago",
      unread: false,
    },
  ]

  const quickActions = [
    { icon: Calendar, label: "New Booking", color: "bg-blue-500" },
    { icon: User, label: "Add Guest", color: "bg-green-500" },
    { icon: MessageSquare, label: "Send Message", color: "bg-purple-500" },
    { icon: Clock, label: "Schedule Task", color: "bg-orange-500" },
  ]

  return (
    <header className="bg-slate-900 border-b border-slate-700 px-6 py-4 relative z-10">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button onClick={onSidebarToggle} className="p-2 rounded-lg hover:bg-slate-700 transition-colors">
            <Menu className="w-5 h-5 text-slate-300" />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-white text-lg font-medium">Wellingtons</span>
          </div>
        </div>

        {/* Center Section - Search */}

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Quick Actions */}

          {/* Fullscreen Toggle */}

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative p-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <Bell className="w-5 h-5 text-slate-300" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Notifications Dropdown */}
            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <p className="text-sm text-gray-600">
                    You have {notifications.filter((n) => n.unread).length} unread notifications
                  </p>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 ${
                        notification.unread ? "border-amber-500 bg-amber-50/30" : "border-transparent"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                          <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
                        </div>
                        <span className="text-xs text-gray-400">{notification.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                  <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-white hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors"
            >
              <span className="text-sm font-medium">{adminData.name}</span>
              <img
                src={adminData.avatar || "/placeholder.svg"}
                alt="Profile"
                className="w-8 h-8 rounded-full border border-slate-600"
              />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <div className="font-medium text-gray-900">{adminData.name}</div>
                  <div className="text-sm text-gray-600">{adminData.role}</div>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </button>
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2">
                    <Menu className="w-4 h-4" />
                    <span>Sign out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Close dropdowns when clicking outside */}
      {(isProfileOpen || isNotificationOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsProfileOpen(false)
            setIsNotificationOpen(false)
          }}
        />
      )}
    </header>
  )
}
