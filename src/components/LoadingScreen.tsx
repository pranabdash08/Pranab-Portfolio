import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { personalInfo } from '../data/personalInfo'
import { AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [loadingText, setLoadingText] = useState('')
  const [showComplete, setShowComplete] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  const bootSteps = [
    'Initializing system...',
    'Loading core modules...',
    'Establishing database connections...',
    'Configuring data analytics engine...',
    'Loading Power BI components...',
    'Initializing Tableau interface...',
    'Setting up Python environment...',
    'Loading business intelligence tools...',
    'Configuring user interface...',
    'System ready...'
  ]

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < bootSteps.length - 1) {
          return prev + 1
        } else {
          clearInterval(stepInterval)
          setTimeout(() => setShowComplete(true), 200) // Reduced from 500ms
          return prev
        }
      })
    }, 150) // Reduced from 300ms

    return () => clearInterval(stepInterval)
  }, [])

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const currentStepText = bootSteps[currentStep]
        if (prev.length < currentStepText.length) {
          return currentStepText.slice(0, prev.length + 1)
        }
        return prev
      })
    }, 25) // Reduced from 50ms

    return () => clearInterval(textInterval)
  }, [currentStep])

  // Auto-exit after showing completion message
  useEffect(() => {
    if (showComplete) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true)
      }, 800) // Show completion message for 800ms before exiting
      return () => clearTimeout(exitTimer)
    }
  }, [showComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50 font-mono"
    >
      <motion.div 
        className="w-full max-w-4xl mx-8"
        animate={{ 
          scale: isExiting ? 0.95 : 1,
          y: isExiting ? -20 : 0
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="text-cyan-400 text-sm mb-2">
            <span className="text-green-400">●</span> SYSTEM BOOT SEQUENCE INITIATED
          </div>
          <div className="text-cyan-400 text-xs">
            Pranab Dash Portfolio v2.0.24 | Build: 2024.12.19
          </div>
        </motion.div>

        {/* Boot Steps */}
        <div className="space-y-2 mb-8">
          {bootSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: index <= currentStep ? 1 : 0,
                x: index <= currentStep ? 0 : -20
              }}
              transition={{ delay: index * 0.05 }} // Reduced from 0.1
              className={`text-sm ${
                index < currentStep 
                  ? 'text-green-400' 
                  : index === currentStep 
                    ? 'text-cyan-400' 
                    : 'text-gray-600'
              }`}
            >
              {index < currentStep && <span className="text-green-400 mr-2">✓</span>}
              {index === currentStep && <span className="text-cyan-400 mr-2">●</span>}
              {index > currentStep && <span className="text-gray-600 mr-2">○</span>}
              {index === currentStep ? loadingText : step}
              {index === currentStep && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  _
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / bootSteps.length) * 100}%` }}
          transition={{ duration: 0.2 }} // Reduced from 0.3
          className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full mb-8 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        />

        {/* System Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }} // Reduced from 1
          className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-400 mb-8"
        >
          <div>
            <div className="text-cyan-400 mb-1">SYSTEM STATUS</div>
            <div className="text-green-400">● ONLINE</div>
          </div>
          <div>
            <div className="text-cyan-400 mb-1">MEMORY USAGE</div>
            <div className="text-blue-400">● 47.2%</div>
          </div>
          <div>
            <div className="text-cyan-400 mb-1">NETWORK</div>
            <div className="text-green-400">● CONNECTED</div>
          </div>
        </motion.div>

        {/* Completion Message */}
        <AnimatePresence>
          {showComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-cyan-400 mb-2">
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="text-green-400 mr-2"
                >
                  ✓
                </motion.span>
                SYSTEM READY
              </div>
              <div className="text-sm text-gray-400">
                Welcome to {personalInfo.name}'s Portfolio
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Matrix Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
            backgroundSize: '100px 100px, 150px 150px'
          }}></div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => ( // Reduced from 8 to 4 elements
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 3, // Reduced from 4
                repeat: Infinity,
                delay: i * 0.3, // Reduced from 0.5
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(34,211,238,0.8)]"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen 