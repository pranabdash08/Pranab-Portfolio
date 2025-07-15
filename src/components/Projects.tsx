import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Comprehensive dashboard analyzing sales performance across multiple regions with predictive analytics and trend forecasting.",
      category: "Data Visualization",
      image: "/project1.jpg",
      technologies: ["Tableau", "SQL", "Python", "Power BI"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Real-time data integration", "Predictive analytics", "Interactive filters", "Mobile responsive"]
    },
    {
      title: "Customer Churn Prediction Model",
      description: "Machine learning model to predict customer churn with 85% accuracy using historical transaction data.",
      category: "Machine Learning",
      image: "/project2.jpg",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Feature engineering", "Model validation", "API integration", "Automated retraining"]
    },
    {
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain analysis and optimization solution reducing costs by 25%.",
      category: "Business Intelligence",
      image: "/project3.jpg",
      technologies: ["SQL", "Excel", "Power BI", "R"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Cost analysis", "Route optimization", "Inventory management", "Performance tracking"]
    },
    {
      title: "Financial Risk Assessment Tool",
      description: "Advanced risk assessment platform for financial institutions with real-time monitoring capabilities.",
      category: "Analytics",
      image: "/project4.jpg",
      technologies: ["Python", "SQL", "Tableau", "Statistical Analysis"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Risk scoring", "Real-time alerts", "Compliance reporting", "Data visualization"]
    },
    {
      title: "E-commerce Analytics Platform",
      description: "Comprehensive analytics platform for e-commerce businesses with customer behavior insights.",
      category: "Data Visualization",
      image: "/project5.jpg",
      technologies: ["Python", "Tableau", "SQL", "A/B Testing"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Customer segmentation", "Conversion tracking", "A/B testing", "Revenue analysis"]
    },
    {
      title: "Healthcare Data Analysis",
      description: "Healthcare analytics solution for patient outcome prediction and resource optimization.",
      category: "Machine Learning",
      image: "/project6.jpg",
      technologies: ["Python", "R", "Statistical Modeling", "Data Mining"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Patient analytics", "Resource optimization", "Predictive modeling", "Compliance reporting"]
    }
  ]

  const categories = ['All', 'Data Visualization', 'Machine Learning', 'Business Intelligence', 'Analytics']

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my expertise in data analysis, visualization, and business intelligence
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group relative overflow-hidden rounded-lg glass-effect hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                <div className="text-6xl">📊</div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-dark-700 rounded-full hover:bg-primary-500 transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="text-gray-300 hover:text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-dark-700 rounded-full hover:bg-primary-500 transition-colors duration-300"
                    >
                      <Github size={16} className="text-gray-300 hover:text-white" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-dark-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-primary-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 