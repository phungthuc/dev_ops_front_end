export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  gameUrl: string;
  category: string;
  technologies: string[];
  releaseDate: string;
}

export const games: Game[] = [
  {
    id: "space-invaders",
    title: "Space Invaders",
    description: "A modern take on the classic arcade game. Defend Earth from alien invaders in this action-packed shooter with power-ups and multiple levels.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    gameUrl: "https://example.com/games/space-invaders",
    category: "Action",
    technologies: ["HTML5 Canvas", "JavaScript", "Web Audio API"],
    releaseDate: "2024-01-15"
  },
  {
    id: "puzzle-master",
    title: "Puzzle Master",
    description: "Challenge your mind with this addictive puzzle game featuring 100+ levels of increasing difficulty. Match colors, solve patterns, and unlock achievements.",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    gameUrl: "https://example.com/games/puzzle-master",
    category: "Puzzle",
    technologies: ["React", "TypeScript", "CSS Grid"],
    releaseDate: "2023-11-20"
  },
  {
    id: "racing-champions",
    title: "Racing Champions",
    description: "High-speed racing game with stunning 3D graphics. Compete against AI opponents on challenging tracks with realistic physics and dynamic weather.",
    thumbnail: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
    gameUrl: "https://example.com/games/racing-champions",
    category: "Racing",
    technologies: ["Three.js", "WebGL", "Web Audio API"],
    releaseDate: "2023-09-10"
  },
  {
    id: "adventure-quest",
    title: "Adventure Quest",
    description: "Embark on an epic RPG adventure with turn-based combat, character customization, and an immersive storyline spanning multiple worlds.",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    gameUrl: "https://example.com/games/adventure-quest",
    category: "RPG",
    technologies: ["React", "Redux", "Web Storage API"],
    releaseDate: "2023-06-05"
  },
  {
    id: "platform-jumper",
    title: "Platform Jumper",
    description: "A challenging platformer with precise controls and physics. Jump, dash, and collect power-ups across 50+ handcrafted levels.",
    thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop",
    gameUrl: "https://example.com/games/platform-jumper",
    category: "Platformer",
    technologies: ["Phaser.js", "Web Audio API", "Local Storage"],
    releaseDate: "2023-03-15"
  },
  {
    id: "strategy-empire",
    title: "Strategy Empire",
    description: "Build your empire in this strategic city-building game. Manage resources, expand your territory, and compete with other players online.",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    gameUrl: "https://example.com/games/strategy-empire",
    category: "Strategy",
    technologies: ["React", "Socket.io", "MongoDB"],
    releaseDate: "2022-12-01"
  }
]; 