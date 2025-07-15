import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Simple test components
const HomePage = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Welcome to My Portfolio</h1>
      <p className="text-gray-300">Home Page - Working!</p>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">About Me</h1>
      <p className="text-gray-300">About Page - Working!</p>
    </div>
  </div>
);

const SkillsPage = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Skills</h1>
      <p className="text-gray-300">Skills Page - Working!</p>
    </div>
  </div>
);

const ExperiencePage = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Experience</h1>
      <p className="text-gray-300">Experience Page - Working!</p>
    </div>
  </div>
);

const ProjectsPage = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Projects</h1>
      <p className="text-gray-300">Projects Page - Working!</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Contact</h1>
      <p className="text-gray-300">Contact Page - Working!</p>
    </div>
  </div>
);

const App = () => {
  console.log('App component is rendering with routing');
  
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 