import PageTransition from '../components/PageTransition'

function TechStack() {
  const techCategories = [
    {
      category: "MERN Stack",
      techs: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      category: "Frontend",
      techs: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "DaisyUI", "React Native", "Framer Motion"]
    },
    {
      category: "Backend & Database",
      techs: ["Express.js", "MongoDB", "JWT", "Firebase"]
    },
    {
      category: "Languages",
      techs: ["JavaScript", "Python", "Java (OOP)", "C"]
    },
    {
      category: "Tools & Platforms",
      techs: ["Git", "GitHub", "VS Code", "Netlify", "Vercel"]
    },
    {
      category: "Other Skills",
      techs: ["Adobe Premiere Pro", "Canva", "Microsoft Office", "Agile Methodologies"]
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading text-5xl mb-4 text-center">Tech Stack</h1>
          <p className="text-center text-accent-purple italic mb-12 text-lg">
            Tools that help me build, create, and ship
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {techCategories.map((category) => (
              <div key={category.category} className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-text-secondary/20 dark:border-dark-text-secondary/20">
                <h2 className="font-heading text-2xl mb-4 text-accent-blue">
                  {category.category}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm bg-accent-blue/10 text-accent-blue rounded-full border border-accent-blue/30 hover:bg-accent-blue/20 transition-colors"
                    >
                      {tech}
                    </span>
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