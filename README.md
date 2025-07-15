# Pranab Dash - Business Analyst Portfolio

A modern, professional portfolio website built with cutting-edge technologies to showcase business analytics expertise and data-driven insights.

## 🚀 Features

- **Modern Design**: Sleek, professional UI with dark theme and gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **Interactive**: Engaging user interactions and hover effects
- **Performance**: Optimized for fast loading and smooth performance
- **SEO Optimized**: Proper meta tags and structured data
- **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icon toolkit

### Libraries & Tools
- **React Intersection Observer** - Trigger animations on scroll
- **React Type Animation** - Typing animations
- **React Scroll** - Smooth scrolling navigation
- **React Hot Toast** - Beautiful toast notifications
- **React Helmet Async** - Document head management

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Experience.tsx  # Experience timeline
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   └── LoadingScreen.tsx # Loading animation
├── data/               # Static data
│   ├── personalInfo.ts # Personal information
│   ├── navigation.ts   # Navigation items
│   └── skills.ts       # Skills data
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#3b82f6 to #1d4ed8)
- **Secondary**: Cyan gradient (#0ea5e9 to #0284c7)
- **Accent**: Purple gradient (#d946ef to #a21caf)
- **Dark Theme**: Professional dark backgrounds

### Animations
- **Page Transitions**: Smooth fade-in animations
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover states
- **Loading Animation**: Custom loading screen
- **Typing Effect**: Animated text in hero section

### Components
- **Glass Effect**: Modern glassmorphism design
- **Gradient Text**: Eye-catching gradient text effects
- **Interactive Cards**: Hover animations and scaling
- **Timeline**: Animated experience timeline
- **Skill Bars**: Animated progress bars
- **Project Grid**: Filterable project showcase

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pranab-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Personal Information
Edit `src/data/personalInfo.ts` to update:
- Name and title
- Contact information
- Social media links
- About description

### Skills
Modify `src/data/skills.ts` to:
- Add/remove skills
- Update skill levels
- Change categories
- Customize colors

### Projects
Update the projects array in `src/components/Projects.tsx` to:
- Add your projects
- Include project descriptions
- Add technology tags
- Link to live demos and GitHub

### Styling
- **Colors**: Update color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `index.html` and `tailwind.config.js`
- **Animations**: Modify animation timings in components

## 🎯 Sections

### Hero Section
- Animated name and title
- Typing animation for roles
- Call-to-action buttons
- Social media links
- Scroll indicator

### About Section
- Personal introduction
- Statistics cards
- Key highlights
- Professional photo placeholder

### Skills Section
- Categorized skills
- Interactive filtering
- Animated progress bars
- Skill descriptions

### Experience Section
- Timeline layout
- Company information
- Role descriptions
- Key achievements
- Technology tags

### Projects Section
- Project cards with images
- Category filtering
- Technology stacks
- Live demo links
- GitHub repositories

### Contact Section
- Contact form
- Contact information
- Social media links
- Location details

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Performance Optimizations

- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Images and components load on demand
- **Optimized Animations**: Hardware-accelerated animations
- **Minified Assets**: Production builds are optimized
- **Caching**: Proper cache headers for static assets

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure build settings

### GitHub Pages
1. **Install gh-pages dependency:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json:**
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Save the settings

5. **Your site will be available at:**
   `https://yourusername.github.io/pranab-portfolio/`

**Note:** Make sure your repository is named `pranab-portfolio` for the base path to work correctly.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: pranab.dash@example.com
- **LinkedIn**: [Pranab Dash](https://www.linkedin.com/in/pranab-dash-bbsr/)
- **GitHub**: [pranabdash](https://github.com/pranabdash)

---

Made with ❤️ by Pranab Dash using React, TypeScript, and Tailwind CSS 

# Netlify Deployment

To deploy this project on Netlify:

1. **Push your code to GitHub.**
2. **Sign in to [Netlify](https://netlify.com) and click 'Add new site' > 'Import an existing project'.**
3. **Connect your GitHub repository.**
4. **Set the build command:**
   
   ```
   npm run build
   ```
   or
   ```
   yarn build
   ```
   
   **Publish directory:**
   ```
   dist
   ```
   or (for Create React App or Vite):
   ```
   build
   ```
5. **Add a `netlify.toml` file to the root of your project with the following content:**

   ```toml
   [build]
     command = "npm run build"
     publish = "build"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

   This ensures proper routing for single-page applications (SPA).

6. **Deploy!**

---

- GitHub: [https://github.com/pranabdash24](https://github.com/pranabdash24)
- Email: dashpranab24@gmail.com 