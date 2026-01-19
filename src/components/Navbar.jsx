import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  
  return (
    <nav className="fixed top-0 w-full bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-md border-b border-light-text-secondary/30 dark:border-dark-text-secondary/30 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <Link to="/" className="font-heading text-2xl hover:text-accent-blue transition-colors" onClick={closeMenu}>
            IZ
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="font-body hover:text-accent-blue transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-body hover:text-accent-blue transition-colors">
              About
            </Link>
            <Link to="/projects" className="font-body hover:text-accent-blue transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="font-body hover:text-accent-blue transition-colors">
              Contact
            </Link>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg bg-accent-blue/10 hover:bg-accent-blue/20 transition-all hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun className="text-lg text-accent-amber" /> : <FaMoon className="text-lg text-accent-blue" />}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-accent-blue/10 hover:bg-accent-blue/20 transition-all hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun className="text-lg text-accent-amber" /> : <FaMoon className="text-lg text-accent-blue" />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-accent-blue/10 hover:bg-accent-blue/20 transition-all hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className="block font-body hover:text-accent-blue transition-colors" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="block font-body hover:text-accent-blue transition-colors" onClick={closeMenu}>
              About
            </Link>
            <Link to="/projects" className="block font-body hover:text-accent-blue transition-colors" onClick={closeMenu}>
              Projects
            </Link>
            <Link to="/contact" className="block font-body hover:text-accent-blue transition-colors" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar