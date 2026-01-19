import PageTransition from "../components/PageTransition.jsx";
import { FaTrophy, FaMedal, FaAward, FaNewspaper } from 'react-icons/fa'

function BeyondCode() {
  const workExperience = [
    {
      id: 1,
      title: "Annotation and AI Developer",
      company: "Recyclorobo.ai",
      period: "June 2024 - Present",
      description: "Annotating and labeling data for AI model training. Collaborating with AI engineers to refine annotation guidelines and conducting quality checks."
    },
    {
      id: 2,
      title: "Typist & Proofreader",
      company: "Apars Classroom",
      period: "June 2023 - Present",
      description: "Typing and proofreading educational materials with accuracy. Collaborating with instructors to meet deadlines and maintaining organized file systems."
    }
  ]

  const leadership = [
    {
      id: 1,
      title: "President",
      organization: "Interact Club Of Dhaka Divine",
      period: "July 2023 - Present",
      highlights: ["Led community service projects", "Increased membership by 25%", "Fostered partnerships with local organizations"]
    },
    {
      id: 2,
      title: "Senior Advisor",
      organization: "MUBC Photography Club",
      period: "September 2023 - Present",
      highlights: ["Providing strategic guidance", "Planning photography events", "Previously Administration Secretary (2021-2023)"]
    },
    {
      id: 3,
      title: "Office Secretary",
      organization: "DCCDS (Debating Society)",
      period: "May 2024 - June 2024",
      highlights: ["Oversaw administrative operations", "Coordinated schedules for competitions", "Assistant Office Secretary (Oct 2023 - May 2024)"]
    },
    {
      id: 4,
      title: "Cadet Lance Corporal (LCPL)",
      organization: "BNCC - DCC Platoon",
      period: "October 2023 - June 2024",
      highlights: ["Participated in maritime training exercises", "Demonstrated safety protocol expertise", "Participated in BNCC Flotilla Camp 2023"]
    },
    {
      id: 5,
      title: "Maintenance Executive",
      organization: "MSCLC (Monipur High School & College Language Club)",
      period: "July 2021 - February 2023",
      highlights: ["Managed technical equipment", "Organized language events", "Supported club activities and logistics"]
    },
    {
      id: 6,

      title: "Admin & Advisor",
      organization: "Coding Para",
      period: "June 2021 - Present",
      highlights: ["Technical guidance and mentorship", "Boosted community engagement by 60%", "Event scheduling and communication"]
    }
  ]

  const awards = [
    {
      id: 1,
      title: "Business Project Competition",
      result: "Winner",
      event: "32nd Annual Intramural Sports and Cultural Competition",
      organizer: "Dhaka Commerce College",
      date: "November 2023",
      icon: FaTrophy
    },
    {
      id: 2,
      title: "TV Show Quiz",
      result: "1st Runner-up",
      event: "BCIC College 2nd Science Festival",
      organizer: "BCIC College",
      date: "July 2023",
      icon: FaMedal
    },
    {
      id: 3,
      title: "The Excelist (Excel Competition)",
      result: "Winner (College Level)",
      event: "Powered by Vumi",
      organizer: "United International University",
      date: "2022",
      icon: FaAward,
      featured: {
        outlet: "The Business Standard",
        link: "https://www.tbsnews.net/economy/corporates/excelist-2022-held-uiu-554454"
      }
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading text-5xl mb-4 text-center">Beyond Code</h1>
          <p className="text-center text-accent-purple italic mb-16 text-lg">
            Leadership, community, and the experiences that shape how I build
          </p>
          
          {/* Work Experience Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl mb-6 text-accent-blue">Work Experience</h2>
            <div className="space-y-6">
              {workExperience.map((work) => (
                <div 
                  key={work.id}
                  className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-text-secondary/20 dark:border-dark-text-secondary/20"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="font-heading text-xl mb-1">{work.title}</h3>
                      <p className="text-accent-blue font-medium">{work.company}</p>
                    </div>
                    <span className="text-sm text-accent-amber font-medium mt-2 md:mt-0">{work.period}</span>
                  </div>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                    {work.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl mb-6 text-accent-blue">Leadership & Volunteer Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((role) => (
                <div 
                  key={role.id}
                  className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-text-secondary/20 dark:border-dark-text-secondary/20 hover:border-accent-blue/30 transition-colors"
                >
                  <div className="mb-3">
                    <h3 className="font-heading text-xl mb-1">{role.title}</h3>
                    <p className="text-accent-blue font-medium mb-1">{role.organization}</p>
                    <span className="text-sm text-accent-amber">{role.period}</span>
                  </div>
                  <ul className="space-y-1">
                    {role.highlights.map((highlight) => (
                      <li 
                        key={highlight}
                        className="text-sm text-light-text-secondary dark:text-dark-text-secondary flex items-start"
                      >
                        <span className="text-accent-blue mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Awards & Competitions Section */}
          <section>
            <h2 className="font-heading text-3xl mb-6 text-accent-blue">Awards & Competitions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award) => {
                const IconComponent = award.icon
                return (
                  <div 
                    key={award.id}
                    className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-text-secondary/20 dark:border-dark-text-secondary/20 text-center hover:border-accent-amber/50 transition-colors"
                  >
                    <IconComponent className="text-5xl mx-auto mb-4 text-accent-amber" />
                    <h3 className="font-heading text-lg mb-2">{award.title}</h3>
                    <p className="text-accent-amber font-bold mb-2">{award.result}</p>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-1">
                      {award.event}
                    </p>
                    <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mb-3">
                      {award.organizer} • {award.date}
                    </p>
                    
                    {/* Featured badge */}
                    {award.featured && (
                      <a 
                        href={award.featured.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs bg-accent-blue/10 text-accent-blue px-3 py-1.5 rounded-full hover:bg-accent-blue/20 transition-colors"
                      >
                        <FaNewspaper />
                        <span>Featured in {award.featured.outlet}</span>
                      </a>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  )
}

export default BeyondCode