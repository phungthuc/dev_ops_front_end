# Alex Chen - Game Developer Portfolio

A modern, responsive portfolio website for a game developer built with React, TypeScript, Vite, and Tailwind CSS. Features smooth animations, multiple routes, and a professional design optimized for both desktop and mobile devices.

## 🎮 Features

### Core Features
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Multiple Routes**: Home, About, Games, Blog, and Contact pages
- **Interactive Components**: Hover effects, animations, and engaging user interactions
- **Dark Theme**: Beautiful dark theme with cyan and purple accents

### Pages & Sections
- **Home**: Hero section with introduction, skills showcase, and call-to-action
- **About**: Detailed personal information, experience, education, and skills
- **Games**: Grid layout showcasing HTML5 games with filtering by category
- **Blog**: Blog posts with detailed views and related posts
- **Contact**: Contact form with social media links and contact information

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **React Router**: Client-side routing with dynamic routes
- **Framer Motion**: Smooth animations and page transitions
- **Tailwind CSS**: Utility-first styling with custom design system
- **React Icons**: Beautiful, consistent iconography
- **Responsive Images**: Optimized images with lazy loading

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 6.22.0
- **Animations**: Framer Motion 11.0.0
- **Icons**: React Icons 5.0.0
- **HTTP Client**: Axios 1.6.0
- **Linting**: ESLint 9.30.1

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dev_ops_front_end
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation bar with mobile menu
│   ├── Footer.tsx      # Footer with social links
│   ├── Button.tsx      # Customizable button component
│   ├── GameCard.tsx    # Game display card
│   ├── BlogCard.tsx    # Blog post card
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Page components
│   ├── Home.tsx        # Home page with hero section
│   ├── About.tsx       # About page with personal info
│   ├── Games.tsx       # Games showcase page
│   ├── Blog.tsx        # Blog listing page
│   ├── BlogPost.tsx    # Individual blog post page
│   └── Contact.tsx     # Contact page with form
├── data/               # Static data
│   ├── personalInfo.ts # Personal information
│   ├── games.ts        # Games data
│   └── blogPosts.ts    # Blog posts data
├── App.tsx             # Main app component with routing
└── main.tsx            # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: Dark gray (#1F2937)
- **Secondary**: Light gray (#374151)
- **Accent**: Cyan (#06B6D4) to Purple (#8B5CF6) gradient
- **Text**: White (#FFFFFF) and gray variations
- **Background**: Dark theme with subtle gradients

### Typography
- **Font Family**: System fonts (Inter, Poppins via Tailwind)
- **Headings**: Bold weights with responsive sizing
- **Body Text**: Regular weight with good line height

### Components
- **Cards**: Rounded corners with hover effects
- **Buttons**: Gradient backgrounds with hover animations
- **Forms**: Clean inputs with focus states
- **Navigation**: Fixed navbar with mobile hamburger menu

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Hamburger menu navigation
- Stacked layouts for better mobile experience
- Touch-friendly buttons and interactions
- Optimized images and performance

## 🎭 Animations

### Framer Motion Animations
- **Page Transitions**: Smooth fade-in effects
- **Hover Effects**: Scale and color transitions
- **Stagger Animations**: Sequential element animations
- **Scroll Animations**: Elements animate on scroll into view

### CSS Animations
- **Gradient Animations**: Subtle background movements
- **Loading States**: Smooth transitions for form submissions
- **Micro-interactions**: Button hover effects and feedback

## 🔧 Customization

### Personal Information
Update `src/data/personalInfo.ts` to customize:
- Name, title, and bio
- Skills and technologies
- Experience and education
- Social media links
- Avatar image

### Games Data
Modify `src/data/games.ts` to add your games:
- Game title and description
- Thumbnail images
- Game URLs
- Technologies used
- Categories

### Blog Posts
Edit `src/data/blogPosts.ts` to add blog content:
- Post titles and excerpts
- Full content
- Publication dates
- Tags and categories
- Featured images

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite project
3. Deploy with default settings

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please reach out:
- **Email**: alex@alexchen.dev
- **GitHub**: [@alexchen-dev](https://github.com/alexchen-dev)
- **LinkedIn**: [Alex Chen](https://linkedin.com/in/alexchen-dev)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
