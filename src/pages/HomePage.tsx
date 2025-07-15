import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { personalInfo } from '../data/personalInfo';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{personalInfo.title}</title>
        <meta name="description" content={personalInfo.description} />
        <meta name="keywords" content={personalInfo.keywords} />
        <meta name="author" content={personalInfo.name} />
        
        {/* Open Graph */}
        <meta property="og:title" content={personalInfo.title} />
        <meta property="og:description" content={personalInfo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={personalInfo.website} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={personalInfo.title} />
        <meta name="twitter:description" content={personalInfo.description} />
      </Helmet>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants}>
          <Hero />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomePage; 