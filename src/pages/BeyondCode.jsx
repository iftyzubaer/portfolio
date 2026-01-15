import PageTransition from "../components/PageTransition.jsx";

function BeyondCode() {
  const experiences = [
    {
      id: 1,
      icon: "📊",
      title: "BNCC Board Member",
      description: "Organized campus-wide events, coordinated teams of 15+"
    },
    {
      id: 2,
      icon: "🏆",
      title: "Business Competition Winner",
      description: "Led winning team pitch, judged by industry professionals"
    },
    {
      id: 3,
      icon: "📈",
      title: "Excel Competition Winner",
      description: "Speed and accuracy under pressure"
    },
  ]

  return (
    <PageTransition>
        <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl mb-8 text-center">Beyond Code</h1>
            <p className="text-center text-dark-text-secondary mb-12 text-lg">
            Leadership, competitions, and experiences that shape how I build software
            </p>
            
            <div className="space-y-6">
            {experiences.map((exp) => (
                <div 
                key={exp.id}
                className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-text-secondary/20 dark:border-dark-text-secondary/20 hover:border-accent-blue/50 transition-colors"
                >
                <div className="flex items-start gap-4">
                    <span className="text-4xl">{exp.icon}</span>
                    <div>
                    <h3 className="font-heading text-2xl mb-2">{exp.title}</h3>
                    <p className="text-dark-text-secondary">{exp.description}</p>
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