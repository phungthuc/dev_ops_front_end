import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import Button from '../components/Button';
import { personalInfo } from '../data/personalInfo';

const Home = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Avatar */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-32 h-32 rounded-full border-4 border-cyan-500/30 shadow-2xl object-cover max-w-full"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🎮</span>
                </div>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">{personalInfo.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                {personalInfo.title}
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/games"
                size="lg"
                className="group"
                icon={<FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />}
              >
                Explore My Games
              </Button>
              <Button
                href="/about"
                variant="outline"
                size="lg"
              >
                Learn More About Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center space-x-6">
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
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-3 rounded-full hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <FiArrowRight className="w-6 h-6 transform rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I specialize in modern web technologies and game development frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {personalInfo.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-lg">
                    {skill.charAt(0)}
                  </span>
                </div>
                <h3 className="text-white font-medium">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Play?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Check out my latest games and see what I've been working on
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/games"
                size="lg"
                icon={<FiArrowRight />}
              >
                View All Games
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 