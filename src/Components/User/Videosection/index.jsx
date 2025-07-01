export default function VideoSection() {
    return (
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop"
          >
            <source
              src="https://wellingtons-hotel.myshopify.com/cdn/shop/videos/c/vp/edff9d3eba984d628e2f003fc542ae55/edff9d3eba984d628e2f003fc542ae55.HD-1080p-7.2Mbps-44294775.mp4"
              type="video/mp4"
            />
            {/* Fallback image if video fails to load */}
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop"
              alt="Luxury hotel reception area"
              className="w-full h-full object-cover"
            />
          </video>
  
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
  
        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full px-8">
          <div className="text-center text-white space-y-8 max-w-4xl">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-0.5 bg-amber-600"></div>
                <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Experience</span>
                <div className="w-16 h-0.5 bg-amber-600"></div>
              </div>
  
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                Welcome to
                <br />
                <span className="text-amber-400">Exceptional Service</span>
              </h2>
            </div>
  
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              From the moment you step into our lobby, experience world-class hospitality that redefines luxury and
              comfort
            </p>
  
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                Book Your Stay
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                Explore Services
              </button>
            </div>
          </div>
        </div>
  
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center space-y-2 text-white">
            <span className="text-sm font-light tracking-wider">Scroll Down</span>
            <div className="w-0.5 h-8 bg-white animate-pulse"></div>
          </div>
        </div>
      </section>
    )
  }
  