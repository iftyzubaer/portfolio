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
          
          {/* Center: Quick Links */}
          <div className="flex gap-6 text-sm">
            <a 
              href="https://github.com/iftyzubaer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-blue transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/iftyzubaer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-blue transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:iftyzubaer1304@gmail.com"
              target="_blank"
              className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-blue transition-colors"
            >
              Email
            </a>
          </div>
          
          {/* Right: Built with */}
          <div className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
            Built with <span className="text-accent-blue">React</span> & <span className="text-accent-blue">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer