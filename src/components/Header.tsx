import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-50 shadow-sm sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 font-reigo">
            Szu-Yun's Website
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </a>
            <a href="#ongoing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Ongoing
            </a>
            <a href="#events" className="text-gray-600 hover:text-gray-900 transition-colors">
              Events
            </a>
            <a href="#media" className="text-gray-600 hover:text-gray-900 transition-colors">
              Media
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </a>
              <a href="#ongoing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Ongoing
              </a>
              <a href="#events" className="text-gray-600 hover:text-gray-900 transition-colors">
                Events
              </a>
              <a href="#media" className="text-gray-600 hover:text-gray-900 transition-colors">
                Media
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
