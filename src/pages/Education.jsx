import PageTransition from '../components/PageTransition'

function Education() {
  const journey = [
    {
      year: "2023 - Present",
      title: "Bachelor of Software Engineering and Management",
      institution: "Göteborg Universitiet x Chalmers tekniska högskola",
      description: "Studying the intersection of software development and business management"
    },
    {
      year: "Earlier",
      title: "Self-Taught Web Development",
      institution: "Online Learning",
      description: "Built foundations in MERN before formal education"
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl mb-8 text-center">Education & Journey</h1>
          <p className="text-center text-light-text-secondary dark:text-dark-text-secondary mb-12 text-lg">
            From curious self-learner to structured engineering student
          </p>
          
          <div className="space-y-8">
            {journey.map((item, index) => (
              <div 
                key={index}
                className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-text-secondary/20 dark:border-dark-text-secondary/20"
              >
                <span className="text-sm text-accent-amber font-medium">{item.year}</span>
                <h3 className="font-heading text-2xl mt-2 mb-1">{item.title}</h3>
                <p className="text-accent-blue mb-3">{item.institution}</p>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Education