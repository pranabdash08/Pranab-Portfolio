import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Target, TrendingUp, Award } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    {
      icon: <User className="w-6 h-6" />,
      label: "Years Experience",
      value: "3+",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      label: "Projects Completed",
      value: "25+",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "Data Insights",
      value: "100+",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Certifications",
      value: "8+",
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full p-1">
                  <div className="w-full h-full bg-dark-900 rounded-full flex items-center justify-center">
                    <div className="text-8xl">👨‍💼</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-6 glass-effect rounded-lg"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center text-white`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Passionate Business Analyst
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {personalInfo.about}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {personalInfo.skillsDescription}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What I Bring:</h4>
              <div className="grid gap-3">
                {[
                  "🔍 Deep analytical thinking and problem-solving skills",
                  "📊 Expertise in data visualization and storytelling",
                  "🤝 Strong stakeholder management and communication",
                  "🚀 Proven track record of driving business impact",
                  "📈 Experience with predictive analytics and modeling",
                  "🛠️ Proficiency in modern data tools and technologies"
                ].map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <span className="text-primary-400">•</span>
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Location and Contact */}
            <div className="flex items-center space-x-4 text-gray-400">
              <span>📍 {personalInfo.location}</span>
              <span>•</span>
              <span>📧 {personalInfo.email}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 