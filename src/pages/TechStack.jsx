import PageTransition from '../components/PageTransition'

function TechStack() {
  const techCategories = [
    {
      category: "Core Stack",
      techs: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      category: "Languages",
      techs: ["JavaScript", "Python", "Java", "SQL"]
    },
    {
      category: "Tools & Others",
      techs: ["Git", "VS Code", "Tailwind CSS", "Framer Motion"]
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading text-5xl mb-8 text-center">Tech Stack</h1>
          <p className="text-center text-light-text-secondary dark:text-dark-text-secondary mb-12 text-lg">
            Tools and technologies I work with
          </p>
          
          <div className="space-y-12">
            {techCategories.map((category, index) => (
              <div key={index}>
                <h2 className="font-heading text-2xl mb-6 text-accent-blue">
                  {category.category}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {category.techs.map((tech) => (
                    <div
                      key={tech}
                      className="bg-light-surface dark:bg-dark-surface px-6 py-3 rounded-lg border border-light-text-secondary/20 dark:border-dark-text-secondary/20 hover:border-accent-blue/50 transition-colors"
                    >
                      <span className="font-body text-lg">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default TechStack