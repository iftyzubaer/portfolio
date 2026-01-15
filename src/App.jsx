import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import BeyondCode from './pages/BeyondCode'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        
        {/* Add padding to account for fixed navbar */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/beyond-code" element={<BeyondCode />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App