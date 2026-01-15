import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import TechStack from './pages/TechStack'
import Projects from './pages/Projects'
import BeyondCode from './pages/BeyondCode'
import Education from './pages/Education'
import Contact from './pages/Contact'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 flex flex-col">
          <Navbar />
          
          <div className="pt-16 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tech-stack" element={<TechStack />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/beyond-code" element={<BeyondCode />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App