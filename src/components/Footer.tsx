import { motion } from 'framer-motion'
import { Linkedin, Github, Mail } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 bg-cyan-900/20 rounded-lg hover:bg-cyan-600/20 transition-all duration-300 border border-cyan-500/30"
          >
            <Linkedin size={20} className="text-cyan-400 hover:text-cyan-300" />
          </motion.a>
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 bg-cyan-900/20 rounded-lg hover:bg-cyan-600/20 transition-all duration-300 border border-cyan-500/30"
          >
            <Github size={20} className="text-cyan-400 hover:text-cyan-300" />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 bg-cyan-900/20 rounded-lg hover:bg-cyan-600/20 transition-all duration-300 border border-cyan-500/30"
          >
            <Mail size={20} className="text-cyan-400 hover:text-cyan-300" />
          </motion.a>
        </div>

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-gray-400 text-sm font-mono">
             Built, Designed and Made With ❤️ By Pranab.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 