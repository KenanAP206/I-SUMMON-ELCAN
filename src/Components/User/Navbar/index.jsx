import { ChevronDown, Phone } from "lucide-react"
import { NavLink } from "react-router-dom"
export default function Navbar() {
  return (
    <nav className="bg-black/30 absolute top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-white text-2xl font-medium">Wellingtons</span>
          </div>
        </NavLink>

        {/* Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-12">
          <div className="flex items-center space-x-1 text-white hover:text-amber-400 cursor-pointer transition-colors">
      
            <NavLink to="/">
              <span className="text-base">Home</span>
            </NavLink>
          
          </div>
          <div className="flex items-center space-x-1 text-white hover:text-amber-400 cursor-pointer transition-colors">
            <span className="text-base">        <NavLink to="/rooms">
              <span className="text-base">Rooms</span>
            </NavLink></span>
            
          </div>
          <div className="flex items-center space-x-1 text-white hover:text-amber-400 cursor-pointer transition-colors">
            <span className="text-base">Shop</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="text-white hover:text-amber-400 cursor-pointer transition-colors">
            <span className="text-base">Blog</span>
          </div>
          <div className="flex items-center space-x-1 text-white hover:text-amber-400 cursor-pointer transition-colors">
            <span className="text-base">Pages</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Phone Number */}
        <div className="hidden lg:flex items-center space-x-2 text-white">
          <Phone className="w-5 h-5 text-amber-400" />
          <span className="text-base">+001 123 456 789</span>
        </div>
      </div>
    </nav>
  )
}
