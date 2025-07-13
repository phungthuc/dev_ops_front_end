import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
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
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Thoughts, tutorials, and insights about game development, web technologies, 
              and the future of interactive experiences.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="bg-gray-800 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {blogPosts.length}
                </div>
                <div className="text-gray-400">Total Posts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).length}
                </div>
                <div className="text-gray-400">Topics Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {blogPosts.reduce((total, post) => {
                    const minutes = parseInt(post.readTime.split(' ')[0]);
                    return total + minutes;
                  }, 0)}
                </div>
                <div className="text-gray-400">Minutes of Reading</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {new Date(blogPosts[0].publishDate).getFullYear()}
                </div>
                <div className="text-gray-400">Started Writing</div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Get notified when I publish new articles about game development, 
                web technologies, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog; 