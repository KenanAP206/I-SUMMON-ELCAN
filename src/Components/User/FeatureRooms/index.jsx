import { Users, Bed, Wifi } from "lucide-react"

export default function FeatureRooms() {
  const rooms = [
    {
      id: 1,
      name: "Grand Family Stay",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      price: "190.00",
      adults: "4-5",
      bedrooms: "2",
      isNew: true,
    },
    {
      id: 2,
      name: "Imperial Luxury Suite",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      price: "220.00",
      adults: "4-5",
      bedrooms: "2",
      isNew: true,
    },
    {
      id: 3,
      name: "Ocean Breeze Room",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
      price: "200.00",
      adults: "4-5",
      bedrooms: "2",
      isNew: true,
    },
    {
      id: 4,
      name: "Royal Deluxe Suite",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop",
      price: "180.00",
      adults: "4-5",
      bedrooms: "2",
      isNew: true,
    },
  ]

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-amber-600"></div>
              <span className="text-gray-700 text-sm font-semibold tracking-wider uppercase">Feature Rooms</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Discover Our Stunning
              <br />
              <span className="text-amber-600">Suites & Rooms</span>
            </h2>
          </div>
          <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full">
            View All Products
          </button>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Room Image */}
              <div className="relative">
                <img src={room.image || "/placeholder.svg"} alt={room.name} className="w-full h-48 object-cover" />
                {room.isNew && (
                  <div className="absolute top-4 left-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                    New
                  </div>
                )}
              </div>

              {/* Room Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Step into the Golden Sunset Room, where elegance meets tranquility.......
                </p>

                <div className="text-2xl font-bold text-green-600">
                  Rs.{room.price}
                  <span className="text-sm font-normal text-gray-500">/Per Night</span>
                </div>

                {/* Room Features */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{room.adults} Adult</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{room.bedrooms} Bedroom</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Wifi className="w-4 h-4" />
                      <span className="text-sm">Wifi</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{room.bedrooms} Bedroom</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Wifi className="w-4 h-4" />
                      <span className="text-sm">Wifi</span>
                    </div>
                    <div className="w-16"></div> {/* Spacer for alignment */}
                  </div>
                </div>

                {/* Book Now Button */}
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg transition-all duration-300 mt-6">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
