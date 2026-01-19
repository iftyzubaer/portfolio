import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-light-surface dark:bg-dark-surface border-t border-light-text-secondary/20 dark:border-dark-text-secondary/20 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Copyright */}
          <div className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
            © {currentYear} Ifty Zubaer. All rights reserved.
          </div>
          
          {/* Center: Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/iftyzubaer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-blue transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com/in/iftyzubaer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-blue transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:iftyzubaer1304@gmail.com"
              className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-blue transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl hover:scale-110 transition-transform" />
            </a>
          </div>
          
          {/* Right: Built with */}
          <div className="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary text-sm">
            <span>Built with</span>
            <FaReact className="text-accent-blue text-lg" />
            <span className="text-accent-blue">React</span>
            <span>&</span>
            <SiTailwindcss className="text-accent-blue text-lg" />
            <span className="text-accent-blue">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer