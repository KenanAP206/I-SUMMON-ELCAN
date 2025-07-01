"use client"

import { useState } from "react"
import { Home, Calendar, Users, Bed, Building2, UserCheck, ClipboardList, BarChart3, Settings, Bell, Mail, Phone, Lock, Plus, ChevronDown, ChevronRight, Star, DollarSign, MessageSquare, Clock, Shield, FileText, CreditCard, TrendingUp, Utensils, Car, Wifi } from 'lucide-react'

export default function AdminSidebar({ isCollapsed = false, onToggle }) {
  const [expandedMenus, setExpandedMenus] = useState({})
  const [activeItem, setActiveItem] = useState("dashboard")

  const toggleMenu = (menuKey) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }))
  }

  const adminData = {
    name: "Ethan Rodriguez",
    role: "Hotel Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    stats: {
      occupancy: "87%",
      revenue: "$45.2K",
      rating: "4.8",
    },
  }

  const mainMenuItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: Home,
      path: "/admin",
      badge: null,
    },
    {
      key: "bookings",
      label: "Bookings",
      icon: Calendar,
      path: "/admin/bookings",
      badge: "12",
      hasSubmenu: true,
      submenu: [
        { key: "all-bookings", label: "All Bookings", icon: ClipboardList, path: "/admin/bookings" },
        { key: "check-ins", label: "Check-ins Today", icon: UserCheck, badge: "5", path: "/admin/bookings/check-ins" },
        { key: "check-outs", label: "Check-outs Today", icon: Users, badge: "3", path: "/admin/bookings/check-outs" },
        { key: "reservations", label: "Reservations", icon: Calendar, path: "/admin/bookings/reservations" },
      ],
    },
    {
      key: "rooms",
      label: "Rooms",
      icon: Bed,
      path: "/admin/rooms",
      hasSubmenu: true,
      submenu: [
        { key: "room-list", label: "Room List", icon: Bed, path: "/admin/rooms" },
        { key: "room-types", label: "Room Types", icon: Building2, path: "/admin/rooms/types" },
        { key: "housekeeping", label: "Housekeeping", icon: Shield, badge: "4", path: "/admin/rooms/housekeeping" },
        { key: "maintenance", label: "Maintenance", icon: Settings, badge: "2", path: "/admin/rooms/maintenance" },
      ],
    },
    {
      key: "guests",
      label: "Guests",
      icon: Users,
      path: "/admin/guests",
      hasSubmenu: true,
      submenu: [
        { key: "guest-list", label: "Guest List", icon: Users, path: "/admin/guests" },
        { key: "vip-guests", label: "VIP Guests", icon: Star, path: "/admin/guests/vip" },
        { key: "guest-reviews", label: "Reviews", icon: MessageSquare, badge: "8", path: "/admin/guests/reviews" },
        { key: "loyalty", label: "Loyalty Program", icon: Star, path: "/admin/guests/loyalty" },
      ],
    },
    {
      key: "staff",
      label: "Staff",
      icon: UserCheck,
      path: "/admin/staff",
      hasSubmenu: true,
      submenu: [
        { key: "staff-list", label: "Staff List", icon: Users, path: "/admin/staff" },
        { key: "schedules", label: "Schedules", icon: Clock, path: "/admin/staff/schedules" },
        { key: "payroll", label: "Payroll", icon: DollarSign, path: "/admin/staff/payroll" },
        { key: "performance", label: "Performance", icon: TrendingUp, path: "/admin/staff/performance" },
      ],
    },
    {
      key: "services",
      label: "Services",
      icon: Utensils,
      path: "/admin/services",
      hasSubmenu: true,
      submenu: [
        { key: "restaurant", label: "Restaurant", icon: Utensils, path: "/admin/services/restaurant" },
        { key: "room-service", label: "Room Service", icon: Bell, path: "/admin/services/room-service" },
        { key: "spa", label: "Spa & Wellness", icon: Star, path: "/admin/services/spa" },
        { key: "parking", label: "Parking", icon: Car, path: "/admin/services/parking" },
      ],
    },
  ]

  const appsMenuItems = [
    {
      key: "analytics",
      label: "Analytics",
      icon: BarChart3,
      path: "/admin/analytics",
      badge: null,
    },
    {
      key: "finances",
      label: "Finances",
      icon: CreditCard,
      path: "/admin/finances",
      badge: "New",
    },
    {
      key: "reports",
      label: "Reports",
      icon: FileText,
      path: "/admin/reports",
      badge: null,
    },
    {
      key: "communications",
      label: "Communications",
      icon: Mail,
      path: "/admin/communications",
      badge: "6",
    },
    {
      key: "settings",
      label: "Settings",
      icon: Settings,
      path: "/admin/settings",
      badge: null,
    },
  ]

  const MenuItem = ({ item, level = 0 }) => {
    const isActive = activeItem === item.key
    const isExpanded = expandedMenus[item.key]
    const hasSubmenu = item.hasSubmenu && item.submenu

    return (
      <div className="mb-1">
        <button
          onClick={() => {
            setActiveItem(item.key)
            if (hasSubmenu) {
              toggleMenu(item.key)
            }
          }}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
            isActive
              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
              : "text-gray-300 hover:text-white hover:bg-gray-700/50"
          } ${level > 0 ? "ml-4 mr-2" : ""}`}
        >
          <div className="flex items-center space-x-3">
            <item.icon
              className={`w-5 h-5 transition-colors ${
                isActive ? "text-white" : "text-gray-400 group-hover:text-amber-400"
              }`}
            />
            {!isCollapsed && <span className="font-medium text-sm">{item.label}</span>}
          </div>

          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              {item.badge && (
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    item.badge === "New"
                      ? "bg-green-500 text-white"
                      : isActive
                        ? "bg-white/20 text-white"
                        : "bg-amber-500 text-white"
                  }`}
                >
                  {item.badge}
                </span>
              )}
              {hasSubmenu && (
                <div className="flex items-center">
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </div>
              )}
              {item.hasSubmenu && !hasSubmenu && <Plus className="w-4 h-4 opacity-60" />}
            </div>
          )}
        </button>

        {/* Submenu */}
        {hasSubmenu && isExpanded && !isCollapsed && (
          <div className="mt-2 space-y-1">
            {item.submenu.map((subItem) => (
              <MenuItem key={subItem.key} item={subItem} level={1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={`bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-80"
      } min-h-screen flex flex-col shadow-2xl`}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Wellingtons
              </h1>
              <p className="text-gray-400 text-xs">Hotel Management</p>
            </div>
          )}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={adminData.avatar || "/placeholder.svg"}
              alt={adminData.name}
              className="w-12 h-12 rounded-xl object-cover border-2 border-amber-500/30"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <h3 className="font-semibold text-white">{adminData.name}</h3>
              <p className="text-gray-400 text-sm">{adminData.role}</p>
            </div>
          )}
        </div>

        {!isCollapsed && (
          <>
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                <div className="text-amber-400 font-bold text-sm">{adminData.stats.occupancy}</div>
                <div className="text-gray-400 text-xs">Occupancy</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                <div className="text-green-400 font-bold text-sm">{adminData.stats.revenue}</div>
                <div className="text-gray-400 text-xs">Revenue</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                <div className="text-blue-400 font-bold text-sm">{adminData.stats.rating}</div>
                <div className="text-gray-400 text-xs">Rating</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center justify-center space-x-3 mt-4">
              <button className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors">
                <Bell className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors">
                <Mail className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors">
                <Phone className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors">
                <Lock className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        {/* Main Section */}
        <div className="mb-8">
          {!isCollapsed && (
            <h4 className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 px-2">— MAIN</h4>
          )}
          <div className="space-y-1">
            {mainMenuItems.map((item) => (
              <MenuItem key={item.key} item={item} />
            ))}
          </div>
        </div>

        {/* Apps Section */}
        <div>
          {!isCollapsed && (
            <h4 className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 px-2">— APPS</h4>
          )}
          <div className="space-y-1">
            {appsMenuItems.map((item) => (
              <MenuItem key={item.key} item={item} />
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}
