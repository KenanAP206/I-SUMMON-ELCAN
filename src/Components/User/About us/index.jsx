export default function AboutUs() {
    return (
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Images */}
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white p-3">
                <img
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=450&fit=crop"
                  alt="Luxury hotel lobby with warm amber lighting and modern design"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
  
              {/* Smaller Image Overlay */}
              <div className="absolute -bottom-6 -right-6 w-72 h-52 rounded-2xl overflow-hidden shadow-xl bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=350&h=200&fit=crop"
                  alt="Hotel owners - Ethan Rodriguez and partner in hotel lobby"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
  
            {/* Right Side - Content */}
            <div className="space-y-8 pl-8">
              {/* Section Header */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-0.5 bg-amber-600"></div>
                  <span className="text-gray-700 text-sm font-semibold tracking-wider uppercase">About Us</span>
                </div>
  
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Our Story of <span className="text-amber-600 italic">Hospitality</span>
                </h2>
              </div>
  
              {/* Description */}
              <div className="space-y-6 text-gray-600 leading-relaxed text-base">
                <p>
                  From the moment you step into our hotel, you are welcomed into a world of elegance, comfort, and
                  personalized service. Our journey began with a vision to create a space where luxury meets warmth,
                  offering guests an unforgettable experience. Every detail, from our thoughtfully designed rooms to our
                  exceptional amenities, reflects our commitment to excellence.
                </p>
  
                <p>
                  At the heart of our hospitality is a passion for making every stay seamless and memorable. Whether you
                  are here for business or leisure, our dedicated team ensures that your experience is nothing short of
                  extraordinary. With world-class services, fine dining, and a relaxing ambiance, we redefine what it
                  means to feel at home away from home.
                </p>
              </div>
  
              {/* CEO Section */}
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-gray-900">Ethan Rodriguez</h4>
                    <p className="text-amber-600 font-semibold">CEO - Owner</p>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-amber-600 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                      alt="Ethan Rodriguez - CEO & Owner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
  
                {/* Signature */}
                <div className="mt-6 text-right">
                  <div className="text-4xl text-gray-800 font-script italic">Ethan Rodriguez</div>
                </div>
              </div>
  
              {/* Read More Button */}
              <div className="pt-6">
                <button className="px-10 py-4 border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full text-base">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  