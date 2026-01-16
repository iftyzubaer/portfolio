import PageTransition from '../components/PageTransition'

function Projects() {
  const projects = [
    // You can add your actual projects here from GitHub
    // For now, I'll create placeholders based on your CV
    {
      id: 1,
      title: "Full-Stack MERN Application",
      description: "A complete web application built with MongoDB, Express, React, and Node.js. Features authentication, CRUD operations, and responsive design.",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "TailwindCSS"],
      category: "Web Application",
      github: "https://github.com/iftyzubaer",
      demo: null
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills. Built with React, Tailwind CSS, and Framer Motion for smooth animations.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      category: "Web Application",
      github: "https://github.com/iftyzubaer/portfolio",
      demo: null
    },
    {
      id: 3,
      title: "Terminal-Based Application",
      description: "Academic project: A command-line application demonstrating OOP principles and data structures.",
      tags: ["Python", "CLI"],
      category: "Academic Project"
    },
    {
      id: 4,
      title: "Java OOP Project",
      description: "Object-oriented programming project showcasing software design patterns and clean architecture.",
      tags: ["Java", "OOP"],
      category: "Academic Project"
    }
  ]

  const categories = ["All", "Web Application", "Academic Project", "Personal Software"]
  
  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading text-5xl mb-4 text-center">Projects</h1>
          <p className="text-center text-accent-purple italic mb-12 text-lg">
            From academic assignments to personal experiments
          </p>
          
          {/* Category filters - placeholder for future */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button 
                key={cat}
                className="px-4 py-2 rounded-full border border-accent-blue/30 hover:bg-accent-blue/10 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div> */}
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-text-secondary/20 dark:border-dark-text-secondary/20 hover:border-accent-blue/50 transition-all hover:shadow-lg"
              >
                <span className="text-xs uppercase tracking-wider text-accent-amber font-medium">
                  {project.category}
                </span>
                <h3 className="font-heading text-2xl mt-2 mb-3">{project.title}</h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full border border-accent-blue/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue hover:text-accent-amber transition-colors text-sm font-medium"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue hover:text-accent-amber transition-colors text-sm font-medium"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Note to add more */}
          <p className="text-center text-light-text-secondary dark:text-dark-text-secondary mt-12 italic">
            More projects coming soon as I continue building...
          </p>
        </div>
      </div>
    </PageTransition>
  )
}

export default Projects