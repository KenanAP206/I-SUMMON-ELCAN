import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-gray-800 text-2xl font-medium">Wellingtons</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Amet ut viverra morbi in venenatis augue turpis. Quisque at leo
              amet urna volutpat ac...
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+222-1800-2628</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">stationarytales@domain.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">502 New Design Str, Melbourne</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-gray-800 text-lg font-semibold">Quick links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-amber-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-amber-600 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-amber-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-amber-600 transition-colors">
                  Our Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-amber-600 transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Rooms */}
          <div className="space-y-6">
            <h3 className="text-gray-800 text-lg font-semibold">Rooms</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-amber-600 transition-colors">
                  Royal Deluxe Suite
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-amber-600 transition-colors">
                  Imperial Luxury Suite
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-amber-600 transition-colors">
                  Ocean Breeze Room
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-amber-600 transition-colors">
                  The Sapphire Suite
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-amber-600 transition-colors">
                  Emerald Deluxe Room
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-amber-600 transition-colors">
                  The Sunset Penthouse
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-gray-800 text-lg font-semibold">Sign Up To Newsletter</h3>
            <p className="text-gray-600 text-sm">
              Sign up for exclusive updates, new arrivals & insider only discounts
            </p>

            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
              />
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-gray-800 font-semibold">Follow us!</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-2.54v5.79c0 2.84-2.26 5.14-5.09 5.14-1.09 0-2.09-.41-2.84-1.08.24 3.15 2.91 5.6 6.16 5.6 3.45 0 6.25-2.85 6.25-6.35 0-.81-.12-1.58-.34-2.31.38.31.85.5 1.37.5.24 0 .48-.03.71-.09-.15.24-.32.46-.51.66z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-600 text-sm">
              ©2025 All Rights Copyright <span className="font-semibold">Skyline Luxey</span>. Design & Developed By{" "}
              <span className="font-semibold">UIPARADOX</span>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-6 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">a</span>
              </div>
              <div className="w-10 h-6 bg-black rounded flex items-center justify-center">
                <svg className="w-6 h-4 text-white" viewBox="0 0 24 16" fill="currentColor">
                  <path d="M7.076 6.4c0-.538.433-.97.97-.97s.97.432.97.97-.433.97-.97.97-.97-.432-.97-.97zm9.848 0c0-.538.433-.97.97-.97s.97.432.97.97-.433.97-.97.97-.97-.432-.97-.97z" />
                </svg>
              </div>
              <div className="w-10 h-6 bg-red-600 rounded flex items-center justify-center">
                <div className="w-4 h-3 bg-white rounded-sm"></div>
              </div>
              <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <div className="w-10 h-6 bg-blue-800 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
