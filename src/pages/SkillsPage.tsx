import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Code, Zap, Target, Award } from 'lucide-react';
import { skills } from '../data/skills';
import { personalInfo } from '../data/personalInfo';
import BackgroundElements from '../components/BackgroundElements';

// Certifications from HTML
const certifications = [
  {
    title: 'Social Media Data Analytics (University of Washington)',
    url: 'https://coursera.org/share/6ca40e4dc61de09da096517b70e2deeb',
  },
  {
    title: 'Data Visualization in Power BI (DataCamp)',
    url: 'https://www.datacamp.com/statement-of-accomplishment/course/0f8d1d975d197f10ab31dfdd8137f38593ca5372?raw=1',
  },
  {
    title: 'AWS Cloud Technology and Services (DataCamp)',
    url: 'https://www.datacamp.com/statement-of-accomplishment/course/49578e068ec6f8d2caaf190740455471782151e3?raw=1',
  },
  {
    title: 'Understanding Prompt Engineering (DataCamp)',
    url: 'https://www.datacamp.com/statement-of-accomplishment/course/ab2e407ab8f96a77adfe32e46ddbfaf99cbdd23a?raw=1',
  },
  {
    title: 'Implementing AI Solutions in Business (DataCamp)',
    url: 'https://www.datacamp.com/statement-of-accomplishment/course/2935ca270b7f1655870dec026abe22c01e7dd670?raw=1',
  },
  {
    title: 'Brand Management: Aligning Business, Brand, and Behaviour (University of London)',
    url: 'https://coursera.org/share/a790b13f4f961c8b5874b7c9b06c1cdb',
  },
  {
    title: 'Foundations of Project Management (Google)',
    url: 'https://coursera.org/share/4fecbd06ad16a89b64fe201ba07dc293',
  },
  {
    title: 'Fundamentals of Digital Marketing (Google)',
    url: 'https://coursera.org/share/4fecbd06ad16a89b64fe201ba07dc293',
  },
  {
    title: 'Introduction to Azure (DataCamp)',
    url: 'https://www.datacamp.com/statement-of-accomplishment/course/7e0f83f0609cd68b506f06b5dc749c6da226f624?raw=1',
  },
  {
    title: 'Intermediate ChatGPT (DataCamp)',
    url: 'https://www.datacamp.com/statement-of-accomplishment/course/b30e7e3e1640037b525fc93b7f7c871c2d6df593?raw=1',
  },
];



const AnimatedNeonBackground = () => (
  <motion.div
    className="absolute inset-0 -z-30"
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
          'linear-gradient(120deg, rgba(34,211,238,0.25) 0%, rgba(59,130,246,0.25) 50%, rgba(139,92,246,0.25) 100%)',
        backgroundSize: '200% 200%'
      }}
    />
    {/* Animated Orbs */}
    <motion.div
      className="absolute w-96 h-96 rounded-full blur-3xl bg-cyan-400/40 left-[-10%] top-[-10%]"
      animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-80 h-80 rounded-full blur-2xl bg-indigo-400/30 right-[-8%] bottom-[-8%]"
      animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.div>
);





const SkillsPage = () => {
  return (
    <>
      <Helmet>
        <title>Skills & Certifications - {personalInfo.name}</title>
        <meta name="description" content="Explore the technical skills and certifications of Pranab Dash in data analytics, business intelligence, and machine learning." />
      </Helmet>

      <div className="min-h-screen py-20 bg-black font-mono relative overflow-hidden flex flex-col items-center justify-center">
        <BackgroundElements />
        {/* Remove the following block: Animated Background Grid (keep for extra depth) */}
        {/* <div className="absolute inset-0 -z-25">
          <div className="absolute inset-0 opacity-8">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.4) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)`,
              backgroundSize: '100px 100px, 150px 150px'
            }}></div>
          </div>
          {/* Matrix-like dots */}
          {/* <div className="absolute inset-0 opacity-15">
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
        </div> */}

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent neon-text uppercase">SKILLS & CERTIFICATIONS</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl text-blue-200 max-w-3xl mx-auto font-light"
            >
              {personalInfo.skillsDescription}
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.03 }}
                className="px-5 py-2 bg-cyan-900/20 border border-cyan-500/30 rounded-lg text-cyan-200 font-mono text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
              >
                {skill.name}
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 mb-8 text-center tracking-wide">
              CERTIFICATIONS
            </h2>
            <div className="flex flex-col gap-5">
              {certifications.map((cert, idx) => (
                <motion.a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.08 }}
                  className="flex items-center gap-4 p-5 bg-black/60 border border-cyan-500/30 rounded-xl shadow-lg hover:shadow-xl hover:bg-cyan-900/20 transition-all duration-300 group"
                >
                  <Award size={32} className="text-cyan-300 flex-shrink-0" />
                  <span className="text-cyan-100 font-mono text-base md:text-lg group-hover:underline">
                    {cert.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage; 