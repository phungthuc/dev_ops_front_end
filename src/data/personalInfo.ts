export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  socialLinks: SocialLinks;
  avatar: string;
  cvUrl: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export const personalInfo: PersonalInfo = {
  name: "Alex Chen",
  title: "Game Developer",
  bio: "Passionate game developer with 5+ years of experience creating engaging HTML5 games and interactive experiences. I specialize in React, TypeScript, and modern web technologies to build games that are both fun and technically impressive.",
  skills: [
    "Game Development",
    "React",
    "TypeScript",
    "HTML5 Canvas",
    "WebGL",
    "Node.js",
    "Three.js",
    "Phaser.js",
    "Unity",
    "Git"
  ],
  experience: [
    {
      title: "Senior Game Developer",
      company: "PixelPlay Studios",
      period: "2022 - Present",
      description: "Lead developer for multiple HTML5 games with over 1M+ players. Implemented advanced game mechanics and optimized performance for mobile devices."
    },
    {
      title: "Game Developer",
      company: "IndieGame Lab",
      period: "2020 - 2022",
      description: "Developed 10+ browser-based games using React and Canvas API. Collaborated with designers to create engaging user experiences."
    },
    {
      title: "Frontend Developer",
      company: "TechStart Inc",
      period: "2019 - 2020",
      description: "Built interactive web applications and contributed to game development projects using modern JavaScript frameworks."
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      description: "Specialized in Game Development and Interactive Media. Graduated with honors."
    }
  ],
  socialLinks: {
    github: "https://github.com/alexchen-dev",
    linkedin: "https://linkedin.com/in/alexchen-dev",
    twitter: "https://twitter.com/alexchen_dev",
    email: "alex@alexchen.dev"
  },
  avatar: "/images/thuc.jpg",
  cvUrl: "/cv-alex-chen.pdf"
}; 