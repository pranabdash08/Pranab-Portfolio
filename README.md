# Pranab Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- ⚡ Built with React and TypeScript
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-friendly interface
- 🚀 Fast performance with Vite
- 🎯 SEO optimized

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Pranab-Portfolio.git
cd Pranab-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## Deployment

This project is configured for automatic deployment to GitHub Pages. The deployment process is handled by GitHub Actions.

### Manual Deployment Steps

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository named `Pranab-Portfolio`
   - Make sure it's public (required for GitHub Pages)

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/Pranab-Portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site

4. **Access Your Site**
   - Your portfolio will be available at: `https://yourusername.github.io/Pranab-Portfolio/`

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your project when you push to the main branch
- Deploy the built files to GitHub Pages
- Update your live site

## Project Structure

```
src/
├── components/     # Reusable React components
├── data/          # Static data and content
├── pages/         # Page components
├── App.tsx        # Main app component
└── main.tsx       # App entry point
```

## Customization

- Update personal information in `src/data/personalInfo.ts`
- Modify projects in `src/data/projects.ts`
- Customize skills in `src/data/skills.ts`
- Update experience in `src/data/experience.ts`
- Modify contact information in `src/data/contactInfo.ts`

## License

This project is open source and available under the [MIT License](LICENSE). 