function Projects() {
  // Dummy project data - we'll replace this with real data later
  const projects = [
    {
      id: 1,
      title: "MERN Project 1",
      description: "A full-stack web application built with MongoDB, Express, React, and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Web Application"
    },
    {
      id: 2,
      title: "Terminal App",
      description: "A command-line tool for productivity",
      tags: ["Python", "CLI"],
      category: "Academic"
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-heading text-5xl mb-12 text-center">Projects</h1>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-dark-surface p-6 rounded-lg border border-dark-text-secondary/20 hover:border-accent-blue/50 transition-colors"
            >
              <span className="text-sm text-accent-amber">{project.category}</span>
              <h3 className="font-heading text-2xl mt-2 mb-3">{project.title}</h3>
              <p className="text-dark-text-secondary mb-4">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects