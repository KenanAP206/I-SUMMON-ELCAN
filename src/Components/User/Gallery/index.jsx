export default function Gallery() {
    const galleryImages = [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
        alt: "Business meeting in hotel lobby",
        category: "Business",
        span: "col-span-1",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop",
        alt: "Outdoor restaurant terrace dining",
        category: "Dining",
        span: "col-span-1",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=400&fit=crop",
        alt: "Rooftop pool with city skyline view",
        category: "Pool",
        span: "col-span-2",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=400&fit=crop",
        alt: "Hotel exterior with terrace and city view",
        category: "Exterior",
        span: "col-span-2",
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=400&fit=crop",
        alt: "Couples spa and wellness treatment",
        category: "Spa",
        span: "col-span-1",
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop",
        alt: "Couple with luggage arriving at hotel",
        category: "Experience",
        span: "col-span-1",
      },
    ]
  
    return (
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              Discover Stunning Moments
              <br />
              Through <span className="text-amber-600 font-normal">Our Gallery</span>
            </h2>
          </div>
  
          {/* Gallery Grid */}
          <div className="grid grid-cols-4 gap-4 mb-16">
            {/* First Row */}
            <div className="col-span-1 aspect-square overflow-hidden rounded-2xl group cursor-pointer">
              <img
                src={galleryImages[0].src || "/placeholder.svg"}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
  
            <div className="col-span-1 aspect-square overflow-hidden rounded-2xl group cursor-pointer">
              <img
                src={galleryImages[1].src || "/placeholder.svg"}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
  
            <div className="col-span-2 aspect-[2/1] overflow-hidden rounded-2xl group cursor-pointer">
              <img
                src={galleryImages[2].src || "/placeholder.svg"}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
  
            {/* Second Row */}
            <div className="col-span-2 aspect-[2/1] overflow-hidden rounded-2xl group cursor-pointer">
              <img
                src={galleryImages[3].src || "/placeholder.svg"}
                alt={galleryImages[3].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
  
            <div className="col-span-1 aspect-square overflow-hidden rounded-2xl group cursor-pointer">
              <img
                src={galleryImages[4].src || "/placeholder.svg"}
                alt={galleryImages[4].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
  
            <div className="col-span-1 aspect-square overflow-hidden rounded-2xl group cursor-pointer">
              <img
                src={galleryImages[5].src || "/placeholder.svg"}
                alt={galleryImages[5].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
  
         
        </div>
      </section>
    )
  }
  