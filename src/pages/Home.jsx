import PageTransition from "../components/PageTransition.jsx";
import About from "./About.jsx";
import BeyondCode from "./BeyondCode.jsx";
import Projects from "./Projects.jsx";
import TechStack from "./TechStack.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";

function Home() {
  return (
    <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="font-heading text-6xl mb-4">
            Ifty Zubaer
            </h1>
            <p className="font-body text-xl text-dark-text-secondary mb-2">
            Software Engineering Student
            </p>
            <p className="font-body text-lg text-dark-text-secondary">
            Göteborg Universitiet x Chalmers tekniska högskola
            </p>
            <p className="font-body text-lg italic mt-6 text-accent-blue">
            "I build tools that solve problems,<br />
            and interfaces that feel human."
            </p>
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