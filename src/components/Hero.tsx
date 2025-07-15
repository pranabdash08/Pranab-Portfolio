import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles, Zap, Target, TrendingUp, Cpu, Database, Code, Globe, Terminal, Monitor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { personalInfo } from '../data/personalInfo';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const roles = [
    'Business Analyst',
    'Data Scientist',
    'Power BI Developer',
    'Tableau Expert',
    'Python Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);
    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentText];
    setTypingText('');
    
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < currentRole.length) {
        setTypingText(currentRole.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentText]);

  // Handle click outside for menu
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const menu = document.getElementById('explore-menu');
      const btn = document.getElementById('explore-btn');
      if (menu && !menu.contains(e.target as Node) && btn && !btn.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [menuOpen]);

  const handleScrollTo = (id: string) => {
    setMenuOpen(false);
    // Navigate to the appropriate page based on the id
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
  };

  const floatingElements = [
    { icon: Cpu, delay: 0, x: 20, y: -20, color: 'text-cyan-400' },
    { icon: Database, delay: 0.5, x: -30, y: 10, color: 'text-blue-400' },
    { icon: Code, delay: 1, x: 25, y: 30, color: 'text-indigo-400' },
    { icon: Globe, delay: 1.5, x: -20, y: -10, color: 'text-sky-400' },
    { icon: Terminal, delay: 2, x: 15, y: 25, color: 'text-cyan-300' },
    { icon: Monitor, delay: 2.5, x: -25, y: -15, color: 'text-blue-300' }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black font-mono">
      {/* Terminal-style background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
            backgroundSize: '100px 100px, 150px 150px'
          }}></div>
        </div>
        
        {/* Matrix-like dots */}
        <div className="absolute inset-0 opacity-10">
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
        
        {/* Floating Elements */}
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, element.x, 0],
                y: [0, element.y, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 8,
                delay: element.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute ${element.color} drop-shadow-[0_0_10px_currentColor]`}
              style={{
                left: `${50 + element.x}%`,
                top: `${50 + element.y}%`
              }}
            >
              <Icon size={24} />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Name with Glitch Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 font-mono tracking-wider relative"
        >
          <span className={`bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent neon-text ${glitchActive ? 'animate-glitch' : ''}`}>
            PRANAB
          </span>
          <br />
          <span className={`bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent neon-text ${glitchActive ? 'animate-glitch' : ''}`}>
            DASH
          </span>
          
          {/* Glitch overlay */}
          {glitchActive && (
            <>
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, -2, 2, 0] }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent opacity-80"
                style={{ filter: 'blur(0.5px)' }}
              >
                PRANAB
                <br />
                DASH
              </motion.span>
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 2, -2, 0] }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent opacity-60"
                style={{ filter: 'blur(0.5px)' }}
              >
                PRANAB
                <br />
                DASH
              </motion.span>
            </>
          )}
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <div className="text-2xl md:text-3xl font-medium text-cyan-300 font-mono tracking-wide">
            <span className="text-cyan-400">$</span> {typingText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-1 text-cyan-400"
            >
              _
            </motion.span>
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

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex justify-center items-center mb-16 px-4"
        >
          <div className="relative">
            <motion.button
              id="explore-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              onClick={() => setMenuOpen((v) => !v)}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold text-base sm:text-lg overflow-hidden border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.3)] font-mono min-w-[140px] sm:min-w-[160px]"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center space-x-2">
                <span>EXPLORE</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </motion.div>
              </span>
            </motion.button>
            
            <AnimatePresence>
              {menuOpen && (
                <>
                  {/* Full screen overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    onClick={() => setMenuOpen(false)}
                  />
                  
                  {/* Menu content */}
                  <motion.div
                    id="explore-menu"
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 50 }}
                    transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 300 }}
                    className="fixed inset-0 flex items-center justify-center z-50 p-4"
                  >
                    <div className="relative bg-black/90 border border-cyan-400/50 rounded-2xl shadow-2xl p-4 sm:p-8 max-w-sm sm:max-w-md w-full backdrop-blur-md mx-4">
                      {/* Close button */}
                      <motion.button
                        onClick={() => setMenuOpen(false)}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 bg-cyan-600/20 border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-600/40 transition-all duration-200"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </motion.button>
                      
                      {/* Menu title */}
                      <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono"
                      >
                        EXPLORE
                      </motion.h3>
                      
                      {/* Menu buttons */}
                      <div className="space-y-3 sm:space-y-4">
                        {[
                          { label: 'About', id: 'about' },
                          { label: 'Skills', id: 'skills' },
                          { label: 'Experience', id: 'experience' },
                          { label: 'Projects', id: 'projects' },
                          { label: 'Contact', id: 'contact' },
                        ].map((item, idx) => (
                          <motion.button
                            key={item.id}
                            onClick={() => handleScrollTo(item.id)}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-cyan-800/60 to-blue-800/60 text-white rounded-xl font-mono font-semibold text-base sm:text-lg border border-cyan-500/30 shadow-lg hover:from-cyan-700 hover:to-blue-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm group"
                          >
                            <span className="flex items-center justify-between">
                              <span>{item.label}</span>
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.3 }}
                                className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200"
                              >
                                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                              </motion.div>
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>

      {/* Parallax Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-indigo-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"></div>
      </motion.div>
    </div>
  );
};

export default Hero; 