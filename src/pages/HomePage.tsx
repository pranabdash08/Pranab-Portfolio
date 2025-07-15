import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { personalInfo } from '../data/personalInfo';

const HomePage = () => {
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.div>
    </>
  );
};

export default HomePage; 