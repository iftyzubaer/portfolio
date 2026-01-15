import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-dark-bg/90 backdrop-blur-sm border-b border-dark-text-secondary/20 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <Link to="/" className="font-heading text-2xl hover:text-accent-blue transition-colors">
            IZ
          </Link>
          
          {/* Navigation Links */}
          <div className="flex gap-8">
            <Link 
              to="/" 
              className="font-body hover:text-accent-blue transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-body hover:text-accent-blue transition-colors"
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="font-body hover:text-accent-blue transition-colors"
            >
              Projects
            </Link>
            <Link 
              to="/beyond-code" 
              className="font-body hover:text-accent-blue transition-colors"
            >
              Beyond Code
            </Link>
            <Link 
              to="/contact" 
              className="font-body hover:text-accent-blue transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar