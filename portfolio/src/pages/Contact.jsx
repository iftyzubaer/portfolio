import PageTransition from "../components/PageTransition.jsx";
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    
    try {
      const response = await fetch('https://formspree.io/f/xlggnpgv', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full">
          <h1 className="font-heading text-5xl mb-4 text-center">Let's Connect</h1>
          <p className="text-center text-accent-purple italic mb-12 text-lg">
            "Open to conversations, collaborations, and opportunities to learn."
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-light-surface dark:bg-dark-surface border border-light-text-secondary/20 dark:border-dark-text-secondary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-light-surface dark:bg-dark-surface border border-light-text-secondary/20 dark:border-dark-text-secondary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows="5"
                id="message"
                name="message"
                required
                className="w-full bg-light-surface dark:bg-dark-surface border border-light-text-secondary/20 dark:border-dark-text-secondary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-blue resize-none transition-colors"
                placeholder="What's on your mind?"
              />
            </div>
            
            {status === 'success' && (
              <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded-lg">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg">
                ✗ Something went wrong. Please try again or email me directly.
              </div>
            )}
            
            <button 
              type="submit"
              className="w-full bg-accent-blue hover:bg-accent-blue/80 text-white font-medium py-3 rounded-lg transition-all hover:scale-105"
            >
              Send Message
            </button>
          </form>
          
          {/* Social Links with Icons */}
          <div className="mt-12 text-center">
            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">Or reach out directly:</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="mailto:iftyzubaer1304@gmail.com" 
                className="flex items-center justify-center gap-2 text-accent-blue hover:text-accent-amber transition-colors font-medium group"
              >
                <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
                <span>iftyzubaer1304@gmail.com</span>
              </a>
              
              <a 
                href="https://github.com/iftyzubaer" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-accent-blue hover:text-accent-amber transition-colors font-medium group"
              >
                <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/iftyzubaer/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-accent-blue hover:text-accent-amber transition-colors font-medium group"
              >
                <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-light-text-secondary dark:text-dark-text-secondary text-sm">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent-blue" />
                Gothenburg, Sweden
              </span>
              <span className="flex items-center gap-2">
                <FaPhone className="text-accent-blue" />
                +46 736778217
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Contact