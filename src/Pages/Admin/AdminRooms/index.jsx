"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  Plus,
  RefreshCw,
  Download,
  Edit,
  Trash2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function AdminRooms() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRooms, setSelectedRooms] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [filterType, setFilterType] = useState("all")

  const roomsData = [
    {
      id: 1,
      roomNumber: "103",
      roomType: "Delux",
      acStatus: "AC",
      mealIncluded: "Free Lunch",
      capacity: 2,
      rent: 30,
    },
    {
      id: 2,
      roomNumber: "101",
      roomType: "Super Delux",
      acStatus: "Non AC",
      mealIncluded: "Free Dinner",
      capacity: 1,
      rent: 28,
    },
    {
      id: 3,
      roomNumber: "105",
      roomType: "Double",
      acStatus: "AC",
      mealIncluded: "Free Dinner",
      capacity: 1,
      rent: 32,
    },
    {
      id: 4,
      roomNumber: "109",
      roomType: "Double",
      acStatus: "Non AC",
      mealIncluded: "Free Lunch",
      capacity: 3,
      rent: 26,
    },
    {
      id: 5,
      roomNumber: "104",
      roomType: "Delux",
      acStatus: "AC",
      mealIncluded: "None",
      capacity: 2,
      rent: 27,
    },
    {
      id: 6,
      roomNumber: "107",
      roomType: "Single",
      acStatus: "Non AC",
      mealIncluded: "None",
      capacity: 2,
      rent: 30,
    },
    {
      id: 7,
      roomNumber: "108",
      roomType: "Super Delux",
      acStatus: "AC",
      mealIncluded: "None",
      capacity: 4,
      rent: 26,
    },
    {
      id: 8,
      roomNumber: "110",
      roomType: "Double",
      acStatus: "Non AC",
      mealIncluded: "Free Lunch",
      capacity: 3,
      rent: 27,
    },
    {
      id: 9,
      roomNumber: "111",
      roomType: "Delux",
      acStatus: "AC",
      mealIncluded: "Free Lunch",
      capacity: 4,
      rent: 32,
    },
    {
      id: 10,
      roomNumber: "112",
      roomType: "Single",
      acStatus: "AC",
      mealIncluded: "Free Dinner",
      capacity: 4,
      rent: 27,
    },
    {
      id: 11,
      roomNumber: "113",
      roomType: "Delux",
      acStatus: "Non AC",
      mealIncluded: "Free Lunch",
      capacity: 2,
      rent: 29,
    },
    {
      id: 12,
      roomNumber: "114",
      roomType: "Single",
      acStatus: "AC",
      mealIncluded: "None",
      capacity: 1,
      rent: 25,
    },
    {
      id: 13,
      roomNumber: "115",
      roomType: "Super Delux",
      acStatus: "AC",
      mealIncluded: "Free Dinner",
      capacity: 3,
      rent: 35,
    },
    {
      id: 14,
      roomNumber: "116",
      roomType: "Double",
      acStatus: "Non AC",
      mealIncluded: "Free Lunch",
      capacity: 2,
      rent: 28,
    },
    {
      id: 15,
      roomNumber: "117",
      roomType: "Delux",
      acStatus: "AC",
      mealIncluded: "None",
      capacity: 3,
      rent: 31,
    },
    {
      id: 16,
      roomNumber: "118",
      roomType: "Single",
      acStatus: "Non AC",
      mealIncluded: "Free Dinner",
      capacity: 1,
      rent: 24,
    },
  ]

  // Filter rooms based on search term and filter type
  const filteredRooms = roomsData.filter((room) => {
    const matchesSearch =
      room.roomNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.roomType.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      filterType === "all" ||
      (filterType === "ac" && room.acStatus === "AC") ||
      (filterType === "non-ac" && room.acStatus === "Non AC") ||
      filterType === room.roomType.toLowerCase().replace(" ", "-")

    return matchesSearch && matchesFilter
  })

  // Pagination
  const totalPages = Math.ceil(filteredRooms.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentRooms = filteredRooms.slice(startIndex, endIndex)

  // Handle checkbox selection
  const handleSelectRoom = (roomId) => {
    setSelectedRooms((prev) => (prev.includes(roomId) ? prev.filter((id) => id !== roomId) : [...prev, roomId]))
  }

  const handleSelectAll = () => {
    if (selectedRooms.length === currentRooms.length) {
      setSelectedRooms([])
    } else {
      setSelectedRooms(currentRooms.map((room) => room.id))
    }
  }

  return (
    <div className="p-6 bg-slate-800 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-white">All Rooms</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
              <Filter className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
              <Plus className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
              <RefreshCw className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4 px-6">
                  <input
                    type="checkbox"
                    checked={selectedRooms.length === currentRooms.length && currentRooms.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Room Number</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Room Type</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">AC/Non-AC</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Meal Included</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Capacity</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Rent</th>
                <th className="text-left py-4 px-6 text-slate-300 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRooms.map((room) => (
                <tr key={room.id} className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      checked={selectedRooms.includes(room.id)}
                      onChange={() => handleSelectRoom(room.id)}
                      className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                  </td>
                  <td className="py-4 px-6 text-white font-medium">{room.roomNumber}</td>
                  <td className="py-4 px-6 text-slate-300">{room.roomType}</td>
                  <td className="py-4 px-6 text-slate-300">{room.acStatus}</td>
                  <td className="py-4 px-6 text-slate-300">{room.mealIncluded}</td>
                  <td className="py-4 px-6 text-slate-300">{room.capacity}</td>
                  <td className="py-4 px-6 text-slate-300">{room.rent}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-colors">
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
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-400">Items per page:</span>
            <div className="relative">
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value))
                  setCurrentPage(1)
                }}
                className="appearance-none bg-slate-700 border border-slate-600 rounded px-3 py-1 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-400">
              {startIndex + 1} - {Math.min(endIndex, filteredRooms.length)} of {filteredRooms.length}
            </span>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-1 text-sm rounded transition-colors ${
                        currentPage === pageNum
                          ? "bg-blue-600 text-white"
                          : "text-slate-400 hover:text-white hover:bg-slate-700"
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
