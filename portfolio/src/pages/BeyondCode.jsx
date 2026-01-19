import PageTransition from "../components/PageTransition.jsx";

function BeyondCode() {
  const experiences = [
    {
      id: 1,
      icon: "👥",
      title: "President, Interact Club Of Dhaka Divine",
      period: "July 2023 - Present",
      description: "Led community service projects and fundraisers. Fostered partnerships with local organizations. Increased club membership by 25% through targeted recruitment strategies."
    },
    {
      id: 2,
      icon: "📸",
      title: "Senior Advisor, MUBC Photography Club",
      period: "September 2023 - Present",
      description: "Providing strategic guidance and mentorship to club members. Assisting in planning photography events and workshops. Previously served as Administration Secretary (2021-2023)."
    },
    {
      id: 3,
      icon: "🎤",
      title: "Office Secretary, Dhaka Commerce College Debating Society",
      period: "May 2024 - June 2024",
      description: "Oversaw administrative operations and coordinated schedules for meetings and competitions. Maintained records and ensured smooth logistical execution of society events."
    },
    {
      id: 4,
      icon: "⚓",
      title: "Cadet Lance Corporal (LCPL), BNCC - DCC Platoon",
      period: "October 2023 - June 2024",
      description: "Led cadets in maritime training exercises focusing on naval operations. Demonstrated expertise in maritime safety protocols and emergency response procedures."
    },
    {
      id: 5,
      icon: "💻",
      title: "Admin & Advisor, Coding Para",
      period: "June 2021 - Present",
      description: "Overseeing administrative tasks and providing technical guidance to coding enthusiasts. Boosted community engagement by 60% through strategic outreach."
    },
    {
      id: 6,
      icon: "🏆",
      title: "Competition Winner",
      period: "2022 - 2023",
      description: "Winner: Business Project Competition (DCC, 2023), The Excelist Excel Competition (UIU, 2022). 1st Runner-up: TV Show Quiz (BCIC College, 2023)."
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading text-5xl mb-4 text-center">Beyond Code</h1>
          <p className="text-center text-accent-purple italic mb-12 text-lg">
            Leadership, community, and the experiences that shape how I build
          </p>
          
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-text-secondary/20 dark:border-dark-text-secondary/20 hover:border-accent-blue/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{exp.icon}</span>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-heading text-xl md:text-2xl">{exp.title}</h3>
                      <span className="text-sm text-accent-amber font-medium">{exp.period}</span>
                    </div>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default BeyondCode