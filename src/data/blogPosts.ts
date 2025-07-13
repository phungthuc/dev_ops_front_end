export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  thumbnail: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "optimizing-html5-games-performance",
    title: "Optimizing HTML5 Games for Mobile Performance",
    excerpt: "Learn the essential techniques for optimizing HTML5 games to run smoothly on mobile devices, including canvas optimization, memory management, and battery efficiency.",
    content: "Mobile gaming has become increasingly popular, and as a game developer, ensuring your HTML5 games perform well on mobile devices is crucial. Here are some key strategies I've learned from developing games that have reached millions of players...",
    author: "Alex Chen",
    publishDate: "2024-01-20",
    readTime: "8 min read",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    tags: ["Performance", "Mobile", "HTML5", "Optimization"]
  },
  {
    id: "building-games-with-react",
    title: "Building Interactive Games with React and Canvas",
    excerpt: "Discover how to combine React's component-based architecture with HTML5 Canvas to create engaging and maintainable games.",
    content: "React and HTML5 Canvas might seem like an unlikely pair, but they can work together beautifully to create interactive games. In this post, I'll share my approach to building games that leverage React's component system while maintaining the performance benefits of Canvas rendering...",
    author: "Alex Chen",
    publishDate: "2023-12-15",
    readTime: "12 min read",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    tags: ["React", "Canvas", "Game Development", "JavaScript"]
  },
  {
    id: "future-of-web-gaming",
    title: "The Future of Web Gaming: WebGPU and Beyond",
    excerpt: "Explore the upcoming WebGPU standard and how it will revolutionize web-based gaming with near-native performance and advanced graphics capabilities.",
    content: "The web gaming landscape is on the cusp of a major transformation with the introduction of WebGPU. This new graphics API promises to bring near-native performance to web browsers, opening up possibilities that were previously only available in native applications...",
    author: "Alex Chen",
    publishDate: "2023-11-30",
    readTime: "15 min read",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    tags: ["WebGPU", "Graphics", "Performance", "Future"]
  },
  {
    id: "game-design-principles",
    title: "Essential Game Design Principles for Web Developers",
    excerpt: "Learn the fundamental principles of game design that every web developer should know when creating interactive experiences.",
    content: "As web developers venturing into game development, understanding core game design principles is crucial. These principles help create engaging, enjoyable experiences that keep players coming back...",
    author: "Alex Chen",
    publishDate: "2023-10-25",
    readTime: "10 min read",
    thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop",
    tags: ["Game Design", "Psychology", "Accessibility", "UX"]
  }
]; 