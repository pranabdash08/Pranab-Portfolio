import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'HOME', icon: Home },
    { path: '/about', label: 'ABOUT', icon: User },
    { path: '/skills', label: 'SKILLS', icon: Code },
    { path: '/experience', label: 'EXP', icon: Briefcase },
    { path: '/projects', label: 'PROJECTS', icon: Code },
    { path: '/contact', label: 'CONTACT', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.2)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="w-10"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 justify-center flex-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group font-mono text-sm ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                        : 'text-cyan-300 hover:text-cyan-400 hover:bg-cyan-900/20 border border-cyan-500/20'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={18} />
                    </motion.div>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden px-5 py-2 bg-gradient-to-r from-cyan-700 to-blue-700 text-cyan-200 font-mono font-bold rounded-xl border border-cyan-400/40 shadow-lg tracking-widest text-base transition-all duration-300"
          >
            MENU
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

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
  console.log('App component is rendering with navigation');
  
  return (
    <Router>
      <Navigation />
      <div className="min-h-screen bg-black pt-16">
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