import PageTransition from '../components/PageTransition'

function Education() {
  const journey = [
    {
      id: "bsc-software-engineering",
      year: "2024 - Present",
      title: "BSc in Software Engineering and Management",
      institution: "Göteborg Universitet x Chalmers tekniska högskola",
      description: "First-year student combining software engineering with technical project management. Completed Python, Java OOP, and discrete mathematics. Led agile development in team-based inventory system project. Currently studying database management (SQL, MongoDB) and requirements engineering.",
      location: "Gothenburg, Sweden"
    },
    {
      id: "hsc-science",
      year: "2024",
      title: "Higher Secondary Certificate (HSC) in Science",
      institution: "Dhaka Commerce College",
      description: "Completed with GPA 5.00. Active member of BNCC, Debating Society, and Arts & Photography Society.",
      location: "Dhaka, Bangladesh"
    },
    {
      id: "ssc-science",
      year: "2022",
      title: "Secondary School Certificate (SSC) in Science",
      institution: "Monipur High School & College, Branch-1",
      description: "Completed with GPA 5.00. Served as Maintenance Executive at Language Club, and Administration Secretary following Senior Advisior at Photography Club.",
      location: "Dhaka, Bangladesh"
    },
    {
      id: "self-taught-web-dev",
      year: "2020 - Present",
      title: "Self-Taught Web Development",
      institution: "Online Learning & Practice",
      description: "Built foundations in HTML, CSS, JavaScript, and grew into the MERN stack. Completed courses from Programming Hero, HackerRank certifications, and Google Digital Marketing.",
      location: "Independent Study"
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl mb-4 text-center">Education & Journey</h1>
          <p className="text-center text-accent-purple italic mb-12 text-lg">
            From curious self-learner to structured engineering student
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-amber"></div>
            
            <div className="space-y-12">
              {journey.map((item) => (
                <div key={item.id} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-accent-blue border-4 border-light-bg dark:border-dark-bg"></div>
                  
                  <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-text-secondary/20 dark:border-dark-text-secondary/20">
                    <span className="text-sm text-accent-amber font-medium">{item.year}</span>
                    <h3 className="font-heading text-2xl mt-1 mb-2">{item.title}</h3>
                    <p className="text-accent-blue font-medium mb-1">{item.institution}</p>
                    <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mb-3 italic">{item.location}</p>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Education