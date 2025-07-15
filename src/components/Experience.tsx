import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      title: "Senior Business Analyst",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "Bhubaneswar, India",
      description: "Leading data-driven initiatives and providing strategic insights to drive business growth. Implemented advanced analytics solutions resulting in 25% improvement in operational efficiency.",
      skills: ["SQL", "Python", "Tableau", "Power BI", "Statistical Analysis"],
      achievements: [
        "Reduced data processing time by 40% through automation",
        "Developed predictive models with 85% accuracy",
        "Led cross-functional teams of 8+ members"
      ]
    },
    {
      title: "Business Analyst",
      company: "DataFlow Analytics",
      period: "2021 - 2022",
      location: "Mumbai, India",
      description: "Analyzed complex business processes and created comprehensive reports for stakeholders. Collaborated with development teams to implement data-driven solutions.",
      skills: ["Excel", "SQL", "R", "Data Visualization", "Process Optimization"],
      achievements: [
        "Improved reporting efficiency by 60%",
        "Created 15+ interactive dashboards",
        "Streamlined data collection processes"
      ]
    },
    {
      title: "Junior Data Analyst",
      company: "InsightTech",
      period: "2020 - 2021",
      location: "Bangalore, India",
      description: "Performed data analysis and created visualizations to support business decisions. Assisted in developing data models and maintaining data quality standards.",
      skills: ["Python", "Pandas", "Matplotlib", "Excel", "Data Cleaning"],
      achievements: [
        "Automated 10+ manual reporting processes",
        "Improved data accuracy by 30%",
        "Created monthly KPI dashboards"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey in transforming data into business value
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="p-6 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-primary-400" />
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    </div>
                    
                    <div className="text-lg font-medium text-primary-400 mb-2">
                      {exp.company}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-primary-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 