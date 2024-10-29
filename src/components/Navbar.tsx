import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from "../assets/asset 0.png"
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate();

  return (
    <nav className="bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img className="h-12 sm:h-24 w-auto" src={logo} alt="Zomato Logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-white hover:bg-yellow-500 px-3 py-2 rounded-md text-lg font-medium">
                Advertise
              </a>
              <button className="px-6 py-2 text-white border-2 border-white rounded-md hover:bg-yellow-500 text-lg font-medium" onClick={() =>{
                navigate("/login")
              }}>
                Login
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white hover:bg-yellow-500 block px-3 py-2 rounded-md text-lg font-medium"
            >
              Advertise
            </a>
            <button
              className="text-white hover:bg-yellow-500 block w-full text-left px-3 py-2 rounded-md text-lg font-medium"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}