import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Briefcase, Calendar, MapPin, Building, Award, Users } from 'lucide-react';
import { experience } from '../data/experience';
import { personalInfo } from '../data/personalInfo';
import BackgroundElements from '../components/BackgroundElements';

const AnimatedNeonBackground = () => (
  <motion.div
    className="fixed inset-0 -z-30 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="absolute inset-0"
      animate={{
        backgroundPosition: [
          '0% 50%',
          '100% 50%',
          '0% 50%'
        ]
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        background:
          'linear-gradient(120deg, rgba(34,211,238,0.12) 0%, rgba(59,130,246,0.12) 50%, rgba(139,92,246,0.12) 100%)',
        backgroundSize: '200% 200%'
      }}
    />
    <motion.div
      className="absolute w-96 h-96 rounded-full blur-3xl bg-cyan-400/20 left-[-10%] top-[-10%]"
      animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-80 h-80 rounded-full blur-2xl bg-indigo-400/10 right-[-8%] bottom-[-8%]"
      animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.div>
);

const AnimatedDotsBackground = () => (
  <div className="absolute inset-0 pointer-events-none -z-20">
    {Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          delay: Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

const ExperiencePage = () => {
  useEffect(() => {
    document.body.classList.add('font-mono');
    return () => document.body.classList.remove('font-mono');
  }, []);
  return (
    <>
      <Helmet>
        <title>Experience - {personalInfo.name}</title>
        <meta name="description" content="Explore the professional experience and career journey of Pranab Dash in business analytics and data science." />
      </Helmet>
      <BackgroundElements />
      <div className="min-h-screen py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6 tracking-widest drop-shadow-lg uppercase">
              Professional Experience
            </h1>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto font-mono">
              My journey in business analytics and data science, working with diverse organizations to drive data-driven decisions.
            </p>
          </motion.div>

          {/* Modern Vertical Timeline */}
          <div className="relative flex flex-col items-center">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-indigo-400 opacity-60 rounded-full"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative w-full flex flex-col items-center mb-16"
              >
                {/* Glowing Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
                  <span className="block w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-400 shadow-[0_0_24px_8px_rgba(34,211,238,0.5)] animate-pulse border-4 border-black"></span>
                </div>
                {/* Content Card */}
                <div className="w-full max-w-3xl bg-white/10 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 glassmorphic-card mx-auto">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-2xl font-bold text-cyan-200 mb-1 tracking-wide font-mono">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-cyan-300 text-base font-mono">
                        <span className="flex items-center gap-1"><Building size={16} />{exp.company}</span>
                        <span className="flex items-center gap-1"><MapPin size={16} />{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-base">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-cyan-100 mb-6 leading-relaxed font-mono text-base">
                    {exp.description}
                  </p>
                  {/* Key Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-200 mb-3 flex items-center font-mono">
                        <Award size={20} className="mr-2 text-cyan-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: achievementIndex * 0.08 }}
                            className="flex items-start space-x-2 text-cyan-100 font-mono"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Skills Used */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-200 mb-3 flex items-center font-mono">
                        <Briefcase size={20} className="mr-2 text-indigo-400" />
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: skillIndex * 0.04 }}
                            className="px-3 py-1 bg-cyan-900/30 border border-cyan-400/30 rounded-full text-cyan-200 font-mono text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-cyan-900/10 to-indigo-900/10 dark:from-cyan-900/20 dark:to-indigo-900/20 rounded-2xl p-8 mt-16 shadow-xl backdrop-blur-md border border-cyan-400/10"
          >
            <h2 className="text-3xl font-bold text-cyan-200 mb-8 text-center font-mono">
              Career Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-cyan-100 mb-2 font-mono">
                  Team Leadership
                </h3>
                <p className="text-cyan-200 font-mono">
                  Successfully led cross-functional teams and mentored junior analysts in data-driven methodologies.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-cyan-100 mb-2 font-mono">
                  Project Excellence
                </h3>
                <p className="text-cyan-200 font-mono">
                  Delivered high-impact projects for major organizations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Briefcase size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-cyan-100 mb-2 font-mono">
                  Technical Expertise
                </h3>
                <p className="text-cyan-200 font-mono">
                  Advanced proficiency in SQL, Python, Tableau, Power BI, and machine learning algorithms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ExperiencePage; 
