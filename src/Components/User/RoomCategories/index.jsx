"use client"

import { useState } from "react"

export default function RoomCategories() {
  const [activeTab, setActiveTab] = useState(0)

  const categories = [
    {
      name: "Suites & Premium Rooms",
      title: "Deluxe & Superior Rooms",
      description:
        "Our Deluxe & Superior Rooms offer the perfect blend of elegance and comfort, designed for a relaxing stay. Enjoy premium amenities, stylish interiors, and breathtaking views for a truly luxurious experience.",
      rooms: ["Skyline Luxe Haven", "Golden Horizon Suite", "Serene Panorama Stay", "Grand Vista Retreat"],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop",
    },
    {
      name: "Suites & Premium Rooms",
      title: "Executive & Business Suites",
      description:
        "Perfect for business travelers, our Executive Suites combine luxury with functionality. Featuring spacious work areas, premium amenities, and stunning city views for the ultimate business experience.",
      rooms: ["Executive Business Suite", "Corporate Luxury Room", "Premium Office Suite", "Business Elite Haven"],
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
    },
    {
      name: "Luxury & Exclusive Rooms",
      title: "Presidential & Royal Suites",
      description:
        "Experience the pinnacle of luxury in our Presidential Suites. These exclusive accommodations feature the finest amenities, personalized service, and unparalleled comfort for discerning guests.",
      rooms: ["Presidential Palace Suite", "Royal Crown Room", "Imperial Luxury Haven", "Exclusive Elite Retreat"],
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=500&fit=crop",
    },
  ]

  const currentCategory = categories[activeTab]

  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-0.5 bg-amber-600"></div>
                <span className="text-gray-700 text-sm font-semibold tracking-wider uppercase">Categories</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Room by <span className="text-amber-600">Categories</span>
              </h2>
            </div>

            {/* Category Tabs */}
            <div className="space-y-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                    activeTab === index
                      ? "bg-amber-100 border-l-4 border-amber-600 text-gray-900"
                      : "bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span className="font-semibold">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Active Category Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">{currentCategory.title}</h3>

              <p className="text-gray-600 leading-relaxed">{currentCategory.description}</p>

              {/* Room List */}
              <div className="grid grid-cols-2 gap-4">
                {currentCategory.rooms.map((room, index) => (
                  <div key={index} className="text-gray-700">
                    <span className="font-medium">
                      {index + 1}. {room}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentCategory.image || "/placeholder.svg"}
                alt={currentCategory.title}
                className="w-full h-96 lg:h-[500px] object-cover transition-all duration-500"
              />
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {categories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTab === index ? "bg-amber-600" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
