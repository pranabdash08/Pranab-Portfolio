import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, Code, BarChart3, Database, Cpu } from 'lucide-react';
import { projects } from '../data/projects';
import { personalInfo } from '../data/personalInfo';

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

const ProjectsPage = () => {
  useEffect(() => {
    document.body.classList.add('font-mono');
    return () => document.body.classList.remove('font-mono');
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects - {personalInfo.name}</title>
        <meta name="description" content="Explore the portfolio of data analytics and business intelligence projects by Pranab Dash." />
      </Helmet>

      <AnimatedNeonBackground />
      <div className="min-h-screen py-20 relative">
        <AnimatedDotsBackground />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6 tracking-widest drop-shadow-lg uppercase font-mono">
              Projects Portfolio
            </h1>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto font-mono">
              A collection of data-driven projects showcasing my expertise in business analytics, data visualization, and machine learning.
            </p>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-cyan-200 mb-8 text-center font-mono">
              All Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white/10 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 glassmorphic-card mx-auto font-mono w-full max-w-2xl"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-100 mb-2 font-mono">
                        {project.title}
                      </h3>
                      <p className="text-cyan-300 font-mono mb-1">
                        {project.category}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-cyan-900/30 rounded-lg hover:bg-cyan-800/60 transition-colors border border-cyan-400/20"
                        >
                          <Github size={20} className="text-cyan-300" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-cyan-900/30 rounded-lg hover:bg-cyan-800/60 transition-colors border border-cyan-400/20"
                        >
                          <ExternalLink size={20} className="text-cyan-400" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-cyan-100 mb-6 leading-relaxed font-mono">
                    {project.description}
                  </p>
                  {project.features && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-200 mb-3 font-mono">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                            className="flex items-start space-x-2 text-cyan-100 font-mono"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-200 mb-3 flex items-center font-mono">
                      <Code size={20} className="mr-2 text-indigo-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.4, delay: techIndex * 0.04 }}
                          className="px-3 py-1 bg-cyan-900/30 border border-cyan-400/30 rounded-full text-cyan-200 font-mono text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-cyan-900/10 to-indigo-900/10 dark:from-cyan-900/20 dark:to-indigo-900/20 rounded-2xl p-8 shadow-xl backdrop-blur-md border border-cyan-400/10"
          >
            <h2 className="text-3xl font-bold text-cyan-200 mb-8 text-center font-mono">
              Project Statistics
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2 font-mono">
                  {projects.length}
                </div>
                <div className="text-cyan-200 font-mono">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2 font-mono">
                  {projects.filter(p => p.live).length}
                </div>
                <div className="text-cyan-200 font-mono">Live Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2 font-mono">
                  {new Set(projects.flatMap(p => p.technologies)).size}
                </div>
                <div className="text-cyan-200 font-mono">Technologies Used</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2 font-mono">
                  100%
                </div>
                <div className="text-cyan-200 font-mono">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage; 