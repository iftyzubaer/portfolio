import PageTransition from "../components/PageTransition.jsx";
import { Link } from "react-router-dom";
import About from "./About.jsx";
import BeyondCode from "./BeyondCode.jsx";
import Projects from "./Projects.jsx";
import TechStack from "./TechStack.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";

function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          {/* Poetic intro line */}
          <p className="font-body text-sm uppercase tracking-widest text-accent-purple mb-4 animate-pulse">
            Builder · Learner · Explorer
          </p>
          
          <h1 className="font-heading text-6xl md:text-7xl mb-6 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-amber bg-clip-text text-transparent">
            Ifty Zubaer
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-light-text dark:text-dark-text mb-3">
            Software Engineering & Management Student
          </p>
          
          <p className="font-body text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8">
            Göteborg Universitet x Chalmers tekniska högskola
          </p>
          
          {/* Poetic tagline */}
          <p className="font-body text-lg md:text-xl italic text-accent-blue leading-relaxed mb-12">
            "I build tools that solve problems,<br />
            craft interfaces that breathe,<br />
            and bridge the gap between code and humanity."
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/projects"
              className="px-8 py-3 bg-accent-blue hover:bg-accent-blue/80 text-white rounded-lg transition-all hover:scale-105"
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-3 border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white rounded-lg transition-all"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
      
      <About />
      <TechStack />
      <Projects />
      <BeyondCode />
      <Education />
      <Contact />
    </PageTransition>
  )
}

export default Home