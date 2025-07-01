"use client"
import { NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import {
  Home,
  Calendar,
  Users,
  Bed,
  Building2,
  UserCheck,
  Plus,
  ContactIcon as Contacts,
  ClipboardList,
  Mail,
  Archive,
  Sun,
  Moon,
  Settings,
} from "lucide-react"

export default function AdminSidebar({ isCollapsed = false }) {
  const [activeItem, setActiveItem] = useState("inbox")
  const [showSettings, setShowSettings] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  useEffect(() => {
    // Set dark mode from localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const adminData = {
    name: "Ethan Rodriguez",
    role: "Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  }

  const mainMenuItems = [
    { key: "home", label: "Home", icon: Home, to: "/admin" },
    { key: "booking", label: "Booking", icon: Calendar, to: "/admin/bookings" },
    { key: "rooms", label: "Rooms", icon: Bed, to: "/admin/rooms" },
    { key: "user-list", label: "User List", icon: UserCheck, to: "/admin/user-list" },
    { key: "staff", label: "Staff", icon: UserCheck, to: "/admin/staff" },
  ]

  const appsMenuItems = [
    { key: "calendar", label: "Calendar", icon: Calendar, badge: "New" },
    { key: "task", label: "Task", icon: ClipboardList },
    { key: "contacts", label: "Contacts", icon: Contacts },
  ]

  const emailFolders = [
    { key: "inbox", label: "Inbox", count: 6, active: true },
    { key: "sent", label: "Sent" },
    { key: "draft", label: "Draft" },
    { key: "bin", label: "Bin" },
    { key: "important", label: "Important" },
    { key: "starred", label: "Starred" },
  ]

  const emailLabels = [
    { key: "family", label: "Family", color: "bg-red-500" },
    { key: "work", label: "Work", color: "bg-blue-500" },
    { key: "shop", label: "Shop", color: "bg-yellow-500" },
    { key: "themeforest", label: "Themeforest", color: "bg-teal-500" },
    { key: "google", label: "Google", color: "bg-gray-500" },
  ]

  const onlineUsers = [
    { name: "Sachin", status: "online", color: "bg-green-500" },
    { name: "John Smith", status: "online", color: "bg-blue-500" },
    { name: "Askay", status: "away", color: "bg-yellow-500" },
    { name: "Dhavan", status: "online", color: "bg-green-500" },
  ]

  return (
    <>
      <div className="w-64 bg-slate-900 flex flex-col h-full border-r border-slate-700">
        {/* User Profile */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex flex-col items-center text-center">
            <img
              src={adminData.avatar || "/placeholder.svg"}
              alt={adminData.name}
              className="w-16 h-16 rounded-full border-2 border-slate-600 mb-3"
            />
            <h3 className="font-semibold text-white text-sm">{adminData.name}</h3>
            <p className="text-slate-400 text-xs">{adminData.role}</p>
          </div>

          {/* Quick Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <Users className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <Mail className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <Calendar className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <Archive className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6 overflow-y-auto">
          {/* Main Section */}
          <div className="mb-6">
            <h4 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-2">— MAIN</h4>
            <div className="space-y-1">
              {mainMenuItems.map((item) => (
                <div key={item.key} className="space-y-1">
                  <button
                    key={item.key}
                    onClick={() => {
                      setActiveItem(item.key);
                      navigate(`${item.to}/add`);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors group ${
                      document.documentElement.classList.contains('dark') ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">Add {item.label}</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Settings Button */}
          <div className="mt-4">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                document.documentElement.classList.contains('dark') ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-4 h-4" />
                <span className="text-sm font-medium">Settings</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="fixed bottom-4 left-4 z-50">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg transition-all duration-500`}
               style={{
                 boxShadow: isDarkMode ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
               }}>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Sun className={`w-5 h-5 ${isDarkMode ? 'text-yellow-400' : 'text-gray-400'}`} />
                <label className="ml-2 text-sm font-medium">Light Mode</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  className={`w-4 h-4 ${
                    isDarkMode ? 'text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' : 
                    'text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2'
                  }`}
                />
              </div>
              <div className="flex items-center">
                <Moon className={`w-5 h-5 ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`} />
                <label className="ml-2 text-sm font-medium">Dark Mode</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
