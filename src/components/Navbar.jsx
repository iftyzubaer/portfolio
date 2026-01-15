import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'

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
    <nav className="fixed top-0 w-full bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-sm border-b border-light-text-secondary/20 dark:border-dark-text-secondary/20 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-heading text-2xl hover:text-accent-blue transition-colors" onClick={closeMenu}>
            IZ
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center text-sm">
            <Link to="/" className="font-body hover:text-accent-blue transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-body hover:text-accent-blue transition-colors">
              About
            </Link>
            <Link to="/tech-stack" className="font-body hover:text-accent-blue transition-colors">
              Tech Stack
            </Link>
            <Link to="/projects" className="font-body hover:text-accent-blue transition-colors">
              Projects
            </Link>
            <Link to="/beyond-code" className="font-body hover:text-accent-blue transition-colors">
              Beyond Code
            </Link>
            <Link to="/education" className="font-body hover:text-accent-blue transition-colors">
              Education
            </Link>
            <Link to="/contact" className="font-body hover:text-accent-blue transition-colors">
              Contact
            </Link>
            
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg bg-light-surface dark:bg-dark-surface hover:bg-accent-blue/20 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-light-surface dark:bg-dark-surface hover:bg-accent-blue/20 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-light-surface dark:bg-dark-surface hover:bg-accent-blue/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
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
            <Link to="/tech-stack" className="block font-body hover:text-accent-blue transition-colors" onClick={closeMenu}>
              Tech Stack
            </Link>
            <Link to="/projects" className="block font-body hover:text-accent-blue transition-colors" onClick={closeMenu}>
              Projects
            </Link>
            <Link to="/beyond-code" className="block font-body hover:text-accent-blue transition-colors" onClick={closeMenu}>
              Beyond Code
            </Link>
            <Link to="/education" className="block font-body hover:text-accent-blue transition-colors" onClick={closeMenu}>
              Education
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