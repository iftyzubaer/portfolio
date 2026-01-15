function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <h1 className="font-heading text-5xl mb-8 text-center">Let's Connect</h1>
        <p className="text-center text-dark-text-secondary mb-12 text-lg italic">
          "Open to conversations, collaborations, and opportunities to learn."
        </p>
        
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input 
              type="text"
              className="w-full bg-dark-surface border border-dark-text-secondary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-blue"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email"
              className="w-full bg-dark-surface border border-dark-text-secondary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-blue"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              rows="5"
              className="w-full bg-dark-surface border border-dark-text-secondary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-blue resize-none"
              placeholder="What's on your mind?"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-accent-blue hover:bg-accent-blue/80 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
        
        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-dark-text-secondary mb-4">Or reach out directly:</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:your@email.com" target="_blank" className="text-accent-blue hover:text-accent-amber transition-colors">
              Email
            </a>
            <a href="https://github.com/iftyzubaer" target="_blank" className="text-accent-blue hover:text-accent-amber transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/iftyzubaer/" target="_blank" className="text-accent-blue hover:text-accent-amber transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact