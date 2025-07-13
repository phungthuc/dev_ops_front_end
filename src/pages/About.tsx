import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiTwitter, FiMail, FiCalendar } from 'react-icons/fi';
import Button from '../components/Button';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  const socialLinks = [
    { icon: FiGithub, href: personalInfo.socialLinks.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, href: personalInfo.socialLinks.twitter, label: 'Twitter' },
    { icon: FiMail, href: `mailto:${personalInfo.socialLinks.email}`, label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Avatar and Basic Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-2xl p-8 text-center">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-cyan-500/30 object-cover max-w-full"
                />
                <h2 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h2>
                <p className="text-cyan-400 font-medium mb-4">{personalInfo.title}</p>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-gray-400">
                    <FiMail className="w-4 h-4" />
                    <span className="text-sm">{personalInfo.socialLinks.email}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-700"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Download CV Button */}
                <Button
                  href={personalInfo.cvUrl}
                  variant="outline"
                  size="md"
                  icon={<FiDownload />}
                  className="w-full"
                >
                  Download CV
                </Button>
              </div>
            </div>

            {/* Skills */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {personalInfo.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-700 px-4 py-3 rounded-lg text-center hover:bg-gray-600 transition-colors duration-200"
                    >
                      <span className="text-white font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Experience</h3>
            <div className="space-y-8">
              {personalInfo.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 mt-2 md:mt-0">
                      <FiCalendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Education</h3>
            <div className="space-y-8">
              {personalInfo.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                      <p className="text-cyan-400 font-medium">{edu.institution}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 mt-2 md:mt-0">
                      <FiCalendar className="w-4 h-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/contact"
                  size="lg"
                >
                  Get In Touch
                </Button>
                <Button
                  href="/games"
                  variant="outline"
                  size="lg"
                >
                  View My Games
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 