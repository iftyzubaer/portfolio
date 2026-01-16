import PageTransition from '../components/PageTransition'

function About() {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl mb-4 text-center">About Me</h1>
          <p className="text-center text-accent-purple italic mb-12">
            A curious mind at the intersection of code and creativity
          </p>
          
          <div className="space-y-6 font-body text-lg leading-relaxed">
            <p className="text-light-text dark:text-dark-text">
              I'm a Software Engineering and Management student at the University of Gothenburg, 
              collaborating with Chalmers University of Technology. My journey with technology began 
              long before formal education—teaching myself HTML, CSS, and JavaScript, then growing 
              into the MERN stack.
            </p>
            
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              What drives me is the belief that great software isn't just about clean code—it's about 
              understanding people, systems, and the spaces where they intersect. I'm a jack-of-all-trades 
              by nature: developer, leader, organizer, and someone who finds poetry in problem-solving.
            </p>
            
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              Beyond the screen, I've led teams as President of Interact Club, served as a board member 
              in BNCC, competed in business challenges, and won Excel competitions. I believe that 
              leadership, curiosity, and technical skill aren't separate—they're threads of the same story.
            </p>
            
            <p className="text-accent-blue italic">
              Currently, I'm building my portfolio of projects, learning every day, and staying open 
              to the unexpected paths that curiosity leads me down.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default About