import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Code, Globe, Terminal, Monitor, BarChart3, TrendingUp, Target, Sparkles, Zap } from 'lucide-react';

const BackgroundElements = () => {
  const floatingElements = [
    { icon: Cpu, delay: 0, x: 20, y: -20, color: 'text-cyan-400' },
    { icon: Database, delay: 0.5, x: -30, y: 10, color: 'text-blue-400' },
    { icon: Code, delay: 1, x: 25, y: 30, color: 'text-indigo-400' },
    { icon: Globe, delay: 1.5, x: -20, y: -10, color: 'text-sky-400' },
    { icon: Terminal, delay: 2, x: 15, y: 25, color: 'text-cyan-300' },
    { icon: Monitor, delay: 2.5, x: -25, y: -15, color: 'text-blue-300' },
    { icon: BarChart3, delay: 3, x: 35, y: -15, color: 'text-purple-400' },
    { icon: TrendingUp, delay: 3.5, x: -35, y: 25, color: 'text-green-400' },
    { icon: Target, delay: 4, x: 10, y: -35, color: 'text-orange-400' },
    { icon: Sparkles, delay: 4.5, x: -15, y: 35, color: 'text-pink-400' },
    { icon: Zap, delay: 5, x: 40, y: 15, color: 'text-yellow-400' },
    { icon: Cpu, delay: 5.5, x: -40, y: -25, color: 'text-teal-400' }
  ];

  return (
    <>
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
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

      {/* Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-30"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-35"
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-25"
        />
        <motion.div
          animate={{ y: [0, -18, 0], x: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full opacity-30"
        />
        <motion.div
          animate={{ y: [0, 22, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2/3 left-1/5 w-1 h-1 bg-orange-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [0, -12, 0], x: [0, 15, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/5 w-1 h-1 bg-pink-400 rounded-full opacity-35"
        />
        <motion.div
          animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-25"
        />
      </div>
    </>
  );
};

export default BackgroundElements; 