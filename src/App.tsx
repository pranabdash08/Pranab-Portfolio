import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Mail, Phone, Sparkles } from 'lucide-react';
import { createPortal } from 'react-dom';
import LoadingScreen from './components/LoadingScreen';
import ExploreMenu from './components/ExploreMenu';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const Navigation = () => {
  const [exploreMenuOpen, setExploreMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when ExploreMenu is open
  useEffect(() => {
    if (exploreMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [exploreMenuOpen]);

  // Optionally: Close other overlays (like Hero Explore modal) here if you have a global state for it

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
      className={`fixed top-0 left-0 right-0 z-[1000000] pointer-events-auto transition-all duration-300 ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.2)]' 
          : 'bg-transparent'
      }`} // z-[1000000] and pointer-events-auto for always-on-top clickable nav
    >
      {/* Tech Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          backgroundSize: '100px 100px, 150px 150px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Empty space for centering */}
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
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl -z-10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile menu button (MENU) */}
          <motion.button
            onClick={() => setExploreMenuOpen(true)}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(34, 211, 238, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden px-5 py-2 bg-gradient-to-r from-cyan-700 to-blue-700 text-cyan-200 font-mono font-bold rounded-xl border border-cyan-400/40 shadow-lg tracking-widest text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:from-cyan-500 hover:to-blue-500 hover:text-white"
            style={{ letterSpacing: '0.15em' }}
          >
            MENU
          </motion.button>
        </div>

        {/* ExploreMenu overlay for mobile */}
        {createPortal(
          <ExploreMenu
            open={exploreMenuOpen}
            onClose={() => setExploreMenuOpen(false)}
            onNavigate={(id) => {
              setExploreMenuOpen(false);
              switch (id) {
                case 'about':
                  navigate('/about');
                  break;
                case 'skills':
                  navigate('/skills');
                  break;
                case 'experience':
                  navigate('/experience');
                  break;
                case 'projects':
                  navigate('/projects');
                  break;
                case 'contact':
                  navigate('/contact');
                  break;
                default:
                  break;
              }
            }}
          />,
          document.body
        )}
      </div>
    </motion.nav>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // Extended to 4.5 seconds to match the boot sequence

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      {/* Render Navigation in a portal to ensure it is always on top */}
      {createPortal(<Navigation />, document.body)}
      <div className="min-h-screen bg-black">
        <main className="pt-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 