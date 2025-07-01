"use client"

import { useState, useRef, useEffect } from "react"
import { Star } from "lucide-react"

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const sliderRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "Olivia Wilson",
      title: "Customer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "An unforgettable stay with breathtaking views and top-notch service. Every detail was perfect, making it a truly luxurious experience!",
    },
    {
      id: 2,
      name: "Jason K. Manato",
      title: "Customer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "An unforgettable stay with breathtaking views and top-notch service. Every detail was perfect, making it a truly luxurious experience!",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      title: "Customer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "An unforgettable stay with breathtaking views and top-notch service. Every detail was perfect, making it a truly luxurious experience!",
    },
    {
      id: 4,
      name: "Michael Chen",
      title: "Customer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "An unforgettable stay with breathtaking views and top-notch service. Every detail was perfect, making it a truly luxurious experience!",
    },
    {
      id: 5,
      name: "Emma Davis",
      title: "Customer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "An unforgettable stay with breathtaking views and top-notch service. Every detail was perfect, making it a truly luxurious experience!",
    },
    {
      id: 6,
      name: "David Rodriguez",
      title: "Customer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "An unforgettable stay with breathtaking views and top-notch service. Every detail was perfect, making it a truly luxurious experience!",
    },
  ]

  const partners = [
    { name: "mapbox", logo: "https://via.placeholder.com/120x40/666666/FFFFFF?text=mapbox" },
    { name: "Abstract", logo: "https://via.placeholder.com/120x40/666666/FFFFFF?text=Abstract" },
    { name: "maze", logo: "https://via.placeholder.com/120x40/666666/FFFFFF?text=maze" },
    { name: "mailchimp", logo: "https://via.placeholder.com/120x40/666666/FFFFFF?text=mailchimp" },
    { name: "Vercel", logo: "https://via.placeholder.com/120x40/666666/FFFFFF?text=Vercel" },
    { name: "ramp", logo: "https://via.placeholder.com/120x40/666666/FFFFFF?text=ramp" },
  ]

  const maxSlides = Math.ceil(testimonials.length / 2)

  // Handle drag start
  const handleDragStart = (e) => {
    setIsDragging(true)
    const clientX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX
    setStartX(clientX)
    setTranslateX(0)
  }

  // Handle drag move
  const handleDragMove = (e) => {
    if (!isDragging) return
    e.preventDefault()

    const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX
    const diff = clientX - startX
    setTranslateX(diff)
  }

  // Handle drag end
  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 100
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      } else if (translateX < 0 && currentSlide < maxSlides - 1) {
        setCurrentSlide(currentSlide + 1)
      }
    }
    setTranslateX(0)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % maxSlides)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isDragging, maxSlides])

  const currentTestimonials = testimonials.slice(currentSlide * 2, currentSlide * 2 + 2)

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-px bg-amber-600"></div>
            <span className="text-gray-500 text-xs font-medium tracking-[0.2em] uppercase">Testimonials</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
            Trusted Reviews from
            <br />
            <span className="text-amber-600 font-normal">Our Guests</span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="mb-16 overflow-hidden">
          <div
            ref={sliderRef}
            className="cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div
              className="grid md:grid-cols-2 gap-8 transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(${translateX}px)`,
              }}
            >
              {currentTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-6">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-2xl object-cover border-2 border-gray-100"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Rating */}
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-600 leading-relaxed text-base font-light italic">
                        "{testimonial.review}"
                      </p>

                      {/* Customer Info */}
                      <div className="space-y-1 pt-2 border-t border-gray-100">
                        <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-amber-600 text-sm font-medium">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-20">
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 h-3 bg-amber-600 rounded-full"
                  : "w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Partners Section */}
        <div className="border-t-2 border-gray-200 pt-16">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center group">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
