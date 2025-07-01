import { Calendar, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Hero() {
  const navigate = useNavigate()
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [roomType, setRoomType] = useState('')

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const bookingData = {
      checkIn: formData.get('checkIn'),
      checkOut: formData.get('checkOut'),
      roomType: formData.get('roomType'),
      timestamp: Date.now()
    }

    // Validate dates
    if (!bookingData.checkIn || !bookingData.checkOut) {
      alert('Please select both check-in and check-out dates')
      return
    }

    if (new Date(bookingData.checkIn) >= new Date(bookingData.checkOut)) {
      alert('Check-out date must be after check-in date')
      return
    }

    // Navigate to rooms page with search parameters
    const searchParams = new URLSearchParams()
    searchParams.set('checkIn', bookingData.checkIn)
    searchParams.set('checkOut', bookingData.checkOut)
    searchParams.set('roomType', bookingData.roomType)
    navigate(`/rooms?${searchParams.toString()}`)
  }

  const handleCheckInChange = (date) => {
    setCheckInDate(date)
    if (date && checkOutDate && date >= checkOutDate) {
      setCheckOutDate(null)
    }
  }

  const handleCheckOutChange = (date) => {
    if (date && checkInDate && date <= checkInDate) {
      setCheckInDate(null)
    }
    setCheckOutDate(date)
  }

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="https://wellingtons-hotel.myshopify.com/cdn/shop/files/image-bg.png?v=1744091796" alt="Luxury hotel lobby" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-8 pt-32 pb-16 h-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Content */}
            <div className="text-white space-y-8 pt-8">
              <p className="text-amber-400 text-base font-light tracking-wide">Welcome to Wellingtons</p>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Unforgettable
                  <br />
                  Stays,{" "}
                  <span className="relative">
                    Unmatched
                    <span className="absolute bottom-1 left-0 right-0 h-1 bg-amber-400"></span>
                  </span>
                  <br />
                  Comfort
                </h1>
              </div>

              {/* Staff Avatars */}
              <div className="flex items-center space-x-4 py-2">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full border-3 border-white overflow-hidden bg-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
                      alt="Hotel staff member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-3 border-white overflow-hidden bg-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face"
                      alt="Hotel staff member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <p className="text-gray-200 text-lg leading-relaxed max-w-lg font-light">
                From the moment you step into our hotel, you are welcomed into a world of elegance, comfort, and
                personalized service...
              </p>

              <div className="pt-4">
                <button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded transition-all duration-300 hover:scale-105">
                  Explore Our Rooms
                </button>
              </div>
            </div>

            {/* Right Content - Booking Form */}
            <div className="flex justify-center lg:justify-end pt-8">
              <div className="w-full max-w-sm bg-white shadow-2xl rounded-2xl overflow-hidden">
                <form onSubmit={handleBookingSubmit} className="p-8 space-y-6">
                  {/* Check-in */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500 font-medium">Check - In*</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="checkIn"
                        required
                        className="w-full h-12 pr-12 px-4 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none rounded-lg"
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 pointer-events-none" />
                    </div>
                  </div>

                  {/* Check-out */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500 font-medium">Check - Out*</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="checkOut"
                        required
                        className="w-full h-12 pr-12 px-4 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none rounded-lg"
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 pointer-events-none" />
                    </div>
                  </div>

                  {/* Room Type */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500 font-medium">Room Type</label>
                    <div className="relative">
                      <select 
                        name="roomType"
                        className="w-full h-12 px-4 pr-10 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none rounded-lg appearance-none bg-white"
                      >
                        <option value="">Room Select</option>
                        <option value="standard">Standard Room</option>
                        <option value="deluxe">Deluxe Room</option>
                        <option value="suite">Suite</option>
                        <option value="presidential">Presidential Suite</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Check Availability Button */}
                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white h-12 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      Check Availability
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
