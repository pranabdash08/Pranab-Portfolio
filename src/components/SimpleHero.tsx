import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

const SimpleHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black font-mono">
      {/* Simple background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 font-mono tracking-wider"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            PRANAB
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            DASH
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <div className="text-2xl md:text-3xl font-medium text-cyan-300 font-mono tracking-wide">
            <span className="text-cyan-400">$</span> Business Analyst
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-base sm:text-lg text-blue-200 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-2"
        >
          {personalInfo.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-8 sm:mb-12"
        >
          <div className="text-sm text-cyan-400 mb-3 sm:mb-4 font-mono tracking-wide">
            TECH_STACK
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs text-gray-400 px-2">
            <span className="px-2 sm:px-3 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">SQL</span>
            <span className="px-2 sm:px-3 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">Python</span>
            <span className="px-2 sm:px-3 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">Power BI</span>
            <span className="px-2 sm:px-3 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">Tableau</span>
            <span className="px-2 sm:px-3 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">Excel</span>
            <span className="px-2 sm:px-3 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">R</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SimpleHero; 