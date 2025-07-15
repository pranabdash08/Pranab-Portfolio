import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, Code } from 'lucide-react';
import { projects } from '../data/projects';
import { personalInfo } from '../data/personalInfo';
import BackgroundElements from '../components/BackgroundElements';



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

      <BackgroundElements />
      <div className="min-h-screen py-20 relative">
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


        </div>
      </div>
    </>
  );
};

export default ProjectsPage; 