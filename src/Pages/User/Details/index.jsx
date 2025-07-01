"use client"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import FeatureRooms  from "../../../Components/User/FeatureRooms"
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Bed,
  Wifi,
  Car,
  Coffee,
  Tv,
  Wind,
  Star,
  Heart,
  Share2,
  Maximize2,
  Play,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  X,
} from "lucide-react"

export default function RoomDetailPage({ onBackToRooms }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [checkInDate, setCheckInDate] = useState("")
  const [checkOutDate, setCheckOutDate] = useState("")
  const [roomType, setRoomType] = useState("")
  const [guests, setGuests] = useState(2)
  const [isBookingLoading, setIsBookingLoading] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showBookingSuccess, setShowBookingSuccess] = useState(false)
  const [selectedOffer, setSelectedOffer] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Room data
  const roomData = {
    id: 1,
    name: "Emerald Deluxe Room",
    price: "250.00",
    originalPrice: "320.00",
    rating: 4.8,
    reviews: 124,
    description:
      "Experience luxury in our spacious Emerald Deluxe Room featuring modern amenities, stunning city views, and premium comfort for an unforgettable stay.",
    images: [
      "/room-hero.jpg",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    ],
    features: [
      { icon: Users, label: "4-6 Guests", value: "4-6" },
      { icon: Bed, label: "King Bed", value: "1 King" },
      { icon: Wifi, label: "Free WiFi", value: "High Speed" },
      { icon: Car, label: "Parking", value: "Free" },
      { icon: Coffee, label: "Mini Bar", value: "Included" },
      { icon: Tv, label: "Smart TV", value: "65 inch" },
      { icon: Wind, label: "AC", value: "Climate Control" },
      { icon: MapPin, label: "City View", value: "Premium" },
    ],
    amenities: [
      "24/7 Room Service",
      "Complimentary Breakfast",
      "Airport Shuttle",
      "Spa Access",
      "Fitness Center",
      "Business Center",
      "Concierge Service",
      "Laundry Service",
    ],
  }

  const roomOffers = [
    {
      id: 1,
      name: "The Sunset Penthouse",
      price: "260.00",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop",
      rating: 4.9,
      discount: "15% OFF",
    },
    {
      id: 2,
      name: "Emerald Deluxe Room",
      price: "250.00",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=300&h=200&fit=crop",
      rating: 4.8,
      discount: "20% OFF",
    },
    {
      id: 3,
      name: "Royal Suite",
      price: "380.00",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=300&h=200&fit=crop",
      rating: 5.0,
      discount: "10% OFF",
    },
  ]

  // Auto-advance image gallery
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isImageModalOpen) {
        setCurrentImageIndex((prev) => (prev + 1) % roomData.images.length)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isImageModalOpen, roomData.images.length])

  // Set default dates
  useEffect(() => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    setCheckInDate(today.toISOString().split("T")[0])
    setCheckOutDate(tomorrow.toISOString().split("T")[0])
  }, [])

  const handleImageNavigation = (direction) => {
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % roomData.images.length)
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + roomData.images.length) % roomData.images.length)
    }
  }

  const handleBooking = async () => {
    setIsBookingLoading(true)
    // Simulate booking process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsBookingLoading(false)
    setShowBookingSuccess(true)
    setTimeout(() => setShowBookingSuccess(false), 3000)
  }

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const checkIn = new Date(checkInDate)
      const checkOut = new Date(checkOutDate)
      const diffTime = Math.abs(checkOut - checkIn)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    }
    return 1
  }

  const totalPrice = (Number.parseFloat(roomData.price) * calculateNights()).toFixed(2)

  return (
    <div className="mt-20 min-h-screen bg-gray-50">

      {/* Success Modal */}
      {showBookingSuccess && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center animate-in slide-in-from-bottom duration-300">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-6">Your reservation has been successfully submitted.</p>
            <button
              onClick={() => setShowBookingSuccess(false)}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={roomData.images[currentImageIndex] || "/placeholder.svg"}
              alt="Room view"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => handleImageNavigation("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button
              onClick={() => handleImageNavigation("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={onBackToRooms}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span><NavLink to="/rooms">Back to Rooms</NavLink></span>
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden group">
                <img
                  src={roomData.images[currentImageIndex] || "/placeholder.svg"}
                  alt="Room view"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleImageNavigation("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleImageNavigation("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Expand Button */}
                  <button
                    onClick={() => setIsImageModalOpen(true)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>

                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Play className="w-5 h-5" />
                  </button>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {roomData.images.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                {roomData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-amber-500 scale-105"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Room Info */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{roomData.name}</h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(roomData.rating) ? "text-amber-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-gray-600 ml-2">
                        {roomData.rating} ({roomData.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-2 rounded-full transition-colors ${isFavorite ? "text-red-500 bg-red-50" : "text-gray-400 hover:text-red-500 hover:bg-red-50"}`}
                  >
                    <Heart className={`w-6 h-6 ${isFavorite ? "fill-current" : ""}`} />
                  </button>
                  <button className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">{roomData.description}</p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {roomData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <feature.icon className="w-5 h-5 text-amber-600" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{feature.label}</div>
                      <div className="text-gray-500 text-xs">{feature.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {roomData.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Form */}
            <div className="bg-white rounded-2xl p-6 shadow-sm top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Room</h2>

              <div className="space-y-4">
                {/* Check-in */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-In *</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-Out *</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      min={checkInDate || new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

                {/* Room Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                    <span className="text-gray-900">{roomData.roomType || 'Deluxe Room'}</span>
                    <span className="text-gray-400 text-sm">Fixed</span>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium w-8 text-center">{guests}</span>
                    <button
                      onClick={() => setGuests(Math.min(6, guests + 1))}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Rs.{roomData.price} × {calculateNights()} nights
                    </span>
                    <span className="text-gray-900">Rs.{totalPrice}</span>
                  </div>
                  {roomData.originalPrice && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Discount</span>
                      <span className="text-green-600">
                        -Rs.
                        {(
                          (Number.parseFloat(roomData.originalPrice) - Number.parseFloat(roomData.price)) *
                          calculateNights()
                        ).toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span className="text-amber-600">Rs.{totalPrice}</span>
                  </div>
                </div>

                {/* Book Button */}
                <button
                  onClick={handleBooking}
                  disabled={isBookingLoading}
                  className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isBookingLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>Book Now</span>
                  )}
                </button>

                {/* Contact Info */}
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-2">Need help?</p>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <a
                      href="tel:+1234567890"
                      className="flex items-center space-x-1 text-amber-600 hover:text-amber-700"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </a>
                    <a
                      href="mailto:info@hotel.com"
                      className="flex items-center space-x-1 text-amber-600 hover:text-amber-700"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Offers */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Room Offers</h3>
              <div className="space-y-4">
                {roomOffers.map((offer) => (
                  <div
                    key={offer.id}
                    onClick={() => setSelectedOffer(offer)}
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      selectedOffer?.id === offer.id ? "bg-amber-50 border border-amber-200" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={offer.image || "/placeholder.svg"}
                        alt={offer.name}
                        className="w-16 h-12 rounded-lg object-cover"
                      />
                      {offer.discount && (
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded">
                          {offer.discount}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{offer.name}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(offer.rating) ? "text-amber-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-green-600 font-bold text-sm">Rs.{offer.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Quick Info</span>
              </div>
              <div className="space-y-2 text-sm">
                <div>Check-in: 3:00 PM</div>
                <div>Check-out: 11:00 AM</div>
                <div>Free cancellation until 24h before</div>
                <div>Instant confirmation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeatureRooms />
    </div>
  )
}
