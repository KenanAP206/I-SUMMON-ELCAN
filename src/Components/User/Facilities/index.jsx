export default function Facilities() {
    const facilities = [
      {
        id: 1,
        category: "TOP FACILITIES",
        title: "Gym Training Grounds",
        description:
          "Our Deluxe & Superior Rooms offer the perfect blend of elegance and comfort, designed for a relaxing stay. Enjoy premium amenities, stylish interiors, and breathtaking views for a truly luxurious experience.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        imagePosition: "left",
      },
      {
        id: 2,
        category: "SWIMMING POOL",
        title: "Indoor Swimming Pool",
        description:
          "Our Deluxe & Superior Rooms offer the perfect blend of elegance and comfort, designed for a relaxing stay. Enjoy premium amenities, stylish interiors, and breathtaking views for a truly luxurious experience.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
        imagePosition: "right",
      },
      {
        id: 3,
        category: "RESTAURANT",
        title: "The Restaurant Center",
        description:
          "Our Deluxe & Superior Rooms offer the perfect blend of elegance and comfort, designed for a relaxing stay. Enjoy premium amenities, stylish interiors, and breathtaking views for a truly luxurious experience.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
        imagePosition: "left",
      },
      {
        id: 4,
        category: "WELLNESS",
        title: "Spa & Wellness",
        description:
          "Our Deluxe & Superior Rooms offer the perfect blend of elegance and comfort, designed for a relaxing stay. Enjoy premium amenities, stylish interiors, and breathtaking views for a truly luxurious experience.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
        imagePosition: "right",
      },
    ]
  
    return (
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-20">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                Elevate Your Stay with
                <br />
                <span className="text-amber-600 font-normal">Top Facilities</span>
              </h2>
            </div>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-500 rounded-full text-sm tracking-wide">
              Learn More Hotel
            </button>
          </div>
  
          {/* Facilities Grid */}
          <div className="space-y-16">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-gray-100/50 transition-all duration-700 hover:-translate-y-2"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-0 min-h-[400px] ${facility.imagePosition === "right" ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div
                    className={`p-12 lg:p-16 flex flex-col justify-center space-y-8 ${facility.imagePosition === "right" ? "lg:col-start-1" : ""}`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-px bg-amber-600"></div>
                        <span className="text-gray-500 text-xs font-medium tracking-[0.2em] uppercase">
                          {facility.category}
                        </span>
                      </div>
  
                      <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">{facility.title}</h3>
                    </div>
  
                    <p className="text-gray-600 leading-relaxed text-lg font-light max-w-lg">{facility.description}</p>
                  </div>
  
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${facility.imagePosition === "right" ? "lg:col-start-2" : ""}`}
                  >
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  