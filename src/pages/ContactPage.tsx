import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare, Send } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';
import { personalInfo } from '../data/personalInfo';

const AnimatedNeonBackground = () => (
  <motion.div
    className="fixed inset-0 -z-30 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="absolute inset-0"
      animate={{
        backgroundPosition: [
          '0% 50%',
          '100% 50%',
          '0% 50%'
        ]
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        background:
          'linear-gradient(120deg, rgba(34,211,238,0.12) 0%, rgba(59,130,246,0.12) 50%, rgba(139,92,246,0.12) 100%)',
        backgroundSize: '200% 200%'
      }}
    />
    <motion.div
      className="absolute w-96 h-96 rounded-full blur-3xl bg-cyan-400/20 left-[-10%] top-[-10%]"
      animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-80 h-80 rounded-full blur-2xl bg-indigo-400/10 right-[-8%] bottom-[-8%]"
      animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.div>
);

const AnimatedDotsBackground = () => (
  <div className="absolute inset-0 pointer-events-none -z-20">
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
);

const ContactPage = () => {
  useEffect(() => {
    document.body.classList.add('font-mono');
    return () => document.body.classList.remove('font-mono');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: MapPin,
      title: "Location",
      value: contactInfo.location,
      link: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.location)}`,
      color: "from-purple-600 to-purple-700"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      url: contactInfo.linkedin,
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      title: "GitHub",
      url: contactInfo.github,
      color: "from-gray-600 to-gray-700"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - {personalInfo.name}</title>
        <meta name="description" content="Get in touch with Pranab Dash for business analytics opportunities and collaborations." />
      </Helmet>

      <AnimatedNeonBackground />
      <AnimatedDotsBackground />
      <div className="min-h-screen py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6 tracking-widest drop-shadow-lg uppercase font-mono">
              Get In Touch
            </h1>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto font-mono">
              I'm always interested in new opportunities and collaborations. Let's discuss how we can work together to drive data-driven success.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center gap-12"
            >
              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl font-bold text-cyan-200 mb-6 font-mono">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <motion.a
                        key={method.title}
                        href={method.link}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-white/10 dark:bg-gray-900/60 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/60 font-mono"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-lg flex items-center justify-center`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-cyan-100 font-mono">
                            {method.title}
                          </h3>
                          <p className="text-cyan-200 font-mono">
                            {method.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-2xl font-bold text-cyan-200 mb-6 font-mono">
                  Connect With Me
                </h2>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.title}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className={`w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon size={24} className="text-white" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 glassmorphic-card font-mono flex flex-col justify-center"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-lg flex items-center justify-center mr-4">
                  <MessageSquare size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-cyan-200 font-mono">Send a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-cyan-100 font-mono mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-cyan-900/20 border border-cyan-400/20 text-cyan-200 font-mono focus:outline-none focus:border-cyan-400 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-cyan-100 font-mono mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-cyan-900/20 border border-cyan-400/20 text-cyan-200 font-mono focus:outline-none focus:border-cyan-400 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-cyan-100 font-mono mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-cyan-900/20 border border-cyan-400/20 text-cyan-200 font-mono focus:outline-none focus:border-cyan-400 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-cyan-100 font-mono mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-cyan-900/20 border border-cyan-400/20 text-cyan-200 font-mono focus:outline-none focus:border-cyan-400 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-white font-bold font-mono shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Send size={20} /> Send Message
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage; 