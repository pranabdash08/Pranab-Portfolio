import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

interface ExploreMenuProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const menuItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const ExploreMenu: React.FC<ExploreMenuProps> = ({ open, onClose, onNavigate }) => {
  React.useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent | TouchEvent) => {
      const menu = document.getElementById('explore-menu');
      if (menu && !menu.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handle);
    document.addEventListener('touchstart', handle);
    return () => {
      document.removeEventListener('mousedown', handle);
      document.removeEventListener('touchstart', handle);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-lg flex flex-col pointer-events-auto"
        >
          <motion.div
            id="explore-menu"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, type: 'spring', damping: 25, stiffness: 300 }}
            className="flex flex-col items-center justify-center flex-1 px-4"
          >
            <div className="relative bg-black/90 border border-cyan-400/50 rounded-2xl shadow-2xl p-4 sm:p-8 max-w-sm sm:max-w-md w-full backdrop-blur-md mx-4">
              {/* Close button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 bg-cyan-600/20 border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-600/40 transition-all duration-200 z-[100000] pointer-events-auto"
              >
                <X size={16} />
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
                {menuItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExploreMenu; 