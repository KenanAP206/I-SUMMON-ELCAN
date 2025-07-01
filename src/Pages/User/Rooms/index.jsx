"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronDown, Grid3X3, List, Users, Bed, Wifi, ChevronRight, ArrowLeft } from "lucide-react"

export default function RoomsPage({ searchParams, onBackToHome }) {
  const navigate = useNavigate()
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("best-selling")
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({
    availability: "",
    price: "",
    rooms: "",
    washroom: "",
    guest: "",
  })

  // Apply search params from hero booking form
  useEffect(() => {
    if (searchParams) {
      setFilters((prev) => ({
        ...prev,
        availability: "available", // Set to available when coming from booking
      }))
    }
  }, [searchParams])

  const rooms = [
    {
      id: 1,
      name: "Grand Family Stay",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      price: "190.00",
      originalPrice: null,
      nights: "Per Night",
      description: "Step into the Golden Sunset Room, where elegance meets tranquility......",
      adults: "4-5",
      bedrooms: "2",
      wifi: true,
      isNew: true,
      available: true,
      roomType: "standard",
      features: ["4-5 Adult", "2 Bedroom", "Wifi", "2 Bedroom", "Wifi"],
    },
    {
      id: 2,
      name: "Grand Family Stay",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      price: "1,700.00",
      originalPrice: null,
      nights: "2 nights",
      description: "Step into the Golden Sunset Room, where elegance meets tranquility......",
      adults: "4-5",
      bedrooms: "2",
      wifi: true,
      isNew: true,
      available: true,
      roomType: "deluxe",
      features: ["4-5 Adult", "2 Bedroom", "Wifi", "2 Bedroom", "Wifi"],
    },
    {
      id: 3,
      name: "Imperial Luxury Suite",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
      price: "220.00",
      originalPrice: null,
      nights: "Per Night",
      description: "Step into the Golden Sunset Room, where elegance meets tranquility......",
      adults: "4-5",
      bedrooms: "2",
      wifi: true,
      isNew: true,
      available: false, // This room is not available
      roomType: "suite",
      features: ["4-5 Adult", "2 Bedroom", "Wifi", "2 Bedroom", "Wifi"],
    },
    {
      id: 4,
      name: "King Avenue Homestay",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop",
      price: "360.00",
      originalPrice: null,
      nights: "Per Night",
      description: "Step into the Golden Sunset Room, where elegance meets tranquility......",
      adults: "4-5",
      bedrooms: "2",
      wifi: true,
      isNew: true,
      available: true,
      roomType: "presidential",
      features: ["4-5 Adult", "2 Bedroom", "Wifi", "2 Bedroom", "Wifi"],
    },{
      id: 5,
      name: "Imperial Luxury Suite",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
      price: "220.00",
      originalPrice: null,
      nights: "Per Night",
      description: "Step into the Golden Sunset Room, where elegance meets tranquility......",
      adults: "4-5",
      bedrooms: "2",
      wifi: true,
      isNew: true,
      available: false, // This room is not available
      roomType: "suite",
      features: ["4-5 Adult", "2 Bedroom", "Wifi", "2 Bedroom", "Wifi"],
    },
  ]

  // Filter rooms based on search params and filters
  const filteredRooms = rooms.filter((room) => {
    // If coming from booking form, filter by availability and room type
    if (searchParams) {
      if (searchParams.roomType && room.roomType !== searchParams.roomType) {
        return false
      }
      if (filters.availability === "available" && !room.available) {
        return false
      }
    }

    // Apply other filters
    if (filters.availability === "available" && !room.available) return false
    if (filters.availability === "booked" && room.available) return false

    return true
  })

  // Sort rooms
  const sortedRooms = [...filteredRooms].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return Number.parseFloat(a.price.replace(",", "")) - Number.parseFloat(b.price.replace(",", ""))
      case "price-high":
        return Number.parseFloat(b.price.replace(",", "")) - Number.parseFloat(a.price.replace(",", ""))
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  // Pagination
  const itemsPerPage = 4 // Show 4 rooms per page
  const totalPages = Math.ceil(sortedRooms.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedRooms = sortedRooms.slice(startIndex, endIndex)

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const handleSortChange = (value) => {
    setSortBy(value)
  }

  const formatDate = (dateString) => {
    if (!dateString) return ""
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [filters, sortBy])

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-amber-900 to-amber-700">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=400&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-light mb-4">Available Rooms</h1>
            {searchParams && (
              <div className="flex items-center justify-center space-x-6 text-sm">
                {searchParams.checkIn && <span>Check-in: {formatDate(searchParams.checkIn)}</span>}
                {searchParams.checkOut && <span>Check-out: {formatDate(searchParams.checkOut)}</span>}
                {searchParams.roomType && (
                  <span>Room: {searchParams.roomType.charAt(0).toUpperCase() + searchParams.roomType.slice(1)}</span>
                )}
              </div>
            )}
          </div>
        </div>

       
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Search Results Info */}
        {searchParams && (
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-amber-800">Search Results</h3>
                <p className="text-amber-700 text-sm">
                  Found {sortedRooms.length} available rooms for your dates
                  {searchParams.checkIn && searchParams.checkOut && (
                    <span>
                      {" "}
                      ({formatDate(searchParams.checkIn)} - {formatDate(searchParams.checkOut)})
                    </span>
                  )}
                </p>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="text-amber-600 hover:text-amber-800 text-sm font-medium"
              >
                Clear Search
              </button>
            </div>
          </div>
        )}

        {/* Filters Section */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* Filter Dropdowns */}
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                value={filters.availability}
                onChange={(e) => handleFilterChange("availability", e.target.value)}
              >
                <option value="">All Rooms</option>
                <option value="available">Available</option>
                <option value="booked">Booked</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                value={filters.price}
                onChange={(e) => handleFilterChange("price", e.target.value)}
              >
                <option value="">Price</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                value={filters.rooms}
                onChange={(e) => handleFilterChange("rooms", e.target.value)}
              >
                <option value="">Rooms</option>
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3+ Rooms</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                value={filters.washroom}
                onChange={(e) => handleFilterChange("washroom", e.target.value)}
              >
                <option value="">Washroom</option>
                <option value="1">1 Washroom</option>
                <option value="2">2 Washrooms</option>
                <option value="3">3+ Washrooms</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                value={filters.guest}
                onChange={(e) => handleFilterChange("guest", e.target.value)}
              >
                <option value="">Guest</option>
                <option value="1-2">1-2 Guests</option>
                <option value="3-4">3-4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* View Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-gray-200 text-gray-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-gray-200 text-gray-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Sort by:</span>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option value="best-selling">Best selling</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, sortedRooms.length)} of {sortedRooms.length} rooms
          </div>
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
        </div>

        {/* Rooms Grid */}
        <div
          className={`grid gap-8 mb-12 ${
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {paginatedRooms.map((room) => (
            <div
              key={room.id}
              className={`group bg-white rounded-3xl border-2 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                room.available ? "border-gray-100 hover:border-gray-200" : "border-red-100 bg-gray-50 opacity-75"
              }`}
            >
              {/* Room Image */}
              <div className="relative overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {room.isNew && (
                  <div className="absolute top-4 left-4 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                    New
                  </div>
                )}
                {!room.available && (
                  <div className="absolute top-4 right-4 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                    Not Available
                  </div>
                )}
              </div>

              {/* Room Content */}
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">{room.name}</h3>

                <p className="text-gray-500 text-sm leading-relaxed font-light">{room.description}</p>

                <div className="text-3xl font-bold text-emerald-600">
                  Rs.{room.price}
                  <span className="text-sm font-light text-gray-400 ml-1">{room.nights}</span>
                </div>

                {/* Room Features */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-light">{room.adults} Adult</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm font-light">{room.bedrooms} Bedroom</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Wifi className="w-4 h-4" />
                      <span className="text-sm font-light">Wifi</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm font-light">2 Bedroom</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Wifi className="w-4 h-4" />
                      <span className="text-sm font-light">Wifi</span>
                    </div>
                    <div className="w-16"></div>
                  </div>
                </div>

                {/* Book Now Button */}
                <button
                  onClick={() => navigate(`/rooms/${room.id}`)}
                  className={`w-full font-semibold py-4 rounded-xl transition-all duration-300 text-base tracking-wide ${
                    room.available
                      ? "bg-gray-900 hover:bg-gray-800 text-white hover:scale-105"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!room.available}
                >
                  {room.available ? "Book Now" : "Not Available"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedRooms.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🏨</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No rooms found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or dates</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1
              const isCurrentPage = currentPage === pageNumber

              // Show first page, last page, current page, and pages around current page
              const showPage = pageNumber === 1 || pageNumber === totalPages || Math.abs(pageNumber - currentPage) <= 1

              if (!showPage) {
                // Show ellipsis for gaps
                if (pageNumber === 2 && currentPage > 4) {
                  return (
                    <span key={pageNumber} className="px-2 text-gray-400">
                      ...
                    </span>
                  )
                }
                if (pageNumber === totalPages - 1 && currentPage < totalPages - 3) {
                  return (
                    <span key={pageNumber} className="px-2 text-gray-400">
                      ...
                    </span>
                  )
                }
                return null
              }

              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
                    isCurrentPage ? "bg-amber-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            })}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
