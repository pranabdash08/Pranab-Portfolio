import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Award, BookOpen, Target, Users, TrendingUp } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import BackgroundElements from '../components/BackgroundElements';

const features = [
  {
    icon: Target,
    title: "Data-Driven Decision Making",
    description: "Specializing in transforming complex data into actionable insights that drive business success."
  },
  {
    icon: TrendingUp,
    title: "Business Analytics Expertise",
    description: "Expert in SQL, Python, Tableau, and Power BI for comprehensive data analysis and visualization."
  },
  {
    icon: Users,
    title: "Stakeholder Collaboration",
    description: "Strong communication skills to bridge the gap between technical teams and business stakeholders."
  },
  {
    icon: Award,
    title: "Certified Professional",
    description: "Holding certifications in data analytics and business intelligence tools."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Committed to staying updated with the latest trends in data analytics and business intelligence."
  }
];

const approachSteps = [
  {
    number: 1,
    title: 'Data Collection & Cleaning',
    desc: 'Gathering relevant data from multiple sources and ensuring data quality and integrity.'
  },
  {
    number: 2,
    title: 'Analysis & Insights',
    desc: 'Applying statistical methods and analytical techniques to extract meaningful insights.'
  },
  {
    number: 3,
    title: 'Visualization & Reporting',
    desc: 'Creating compelling visualizations and reports to communicate findings effectively.'
  }
];



const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About - {personalInfo.name}</title>
        <meta name="description" content="Learn more about Pranab Dash, a passionate Business Analyst with expertise in data-driven insights and business analytics." />
      </Helmet>

      <div className="min-h-screen py-20 bg-black font-mono relative overflow-hidden flex flex-col items-center justify-center">
        <BackgroundElements />

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent neon-text uppercase">ABOUT ME</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl text-blue-200 max-w-3xl mx-auto font-light"
            >
              {personalInfo.about}
            </motion.p>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="flex flex-col items-center w-full max-w-2xl mb-20 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-black/60 border border-cyan-500/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-900/30 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-200 mb-2 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-blue-200">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Information - My Approach */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl p-8 border border-cyan-500/20 bg-black/60 mt-12 w-full max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-cyan-200 mb-8 text-center tracking-wide">
              MY APPROACH TO BUSINESS ANALYTICS
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {approachSteps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.3 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-cyan-900/30 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-cyan-300 font-bold text-xl">{step.number}</span>
                  </div>
                  <h4 className="font-semibold text-cyan-200 mb-2 tracking-wide">{step.title}</h4>
                  <p className="text-blue-200 text-sm">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutPage; 