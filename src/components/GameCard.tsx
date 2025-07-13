import { motion } from 'framer-motion';
import { FiPlay, FiExternalLink } from 'react-icons/fi';
import type { Game } from '../data/games';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Game Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-cyan-500 text-white p-3 rounded-full shadow-lg"
          >
            <FiPlay className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {game.category}
          </span>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
          {game.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {game.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {game.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
          {game.technologies.length > 3 && (
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs">
              +{game.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">
            {formatDate(game.releaseDate)}
          </span>
          
          <motion.a
            href={game.gameUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
          >
            <FiPlay className="w-4 h-4" />
            <span>Play Now</span>
            <FiExternalLink className="w-3 h-3" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard; 