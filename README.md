# Sono

An interactive web-based physics presentation about the **sonometer** - exploring sound, vibration, and standing waves in stringed instruments. Created for Semiconductors and Optoelectronic Devices course.

🔗 **[Live Demo](http://omsingh.me/sono/)**

## Features

- 🎨 Beautiful slide transitions with curtain reveal effect
- ⌨️ Keyboard navigation (Arrow keys, Space)
- 🎭 Multiple slide variants (title, light, dark)
- 📱 Responsive design
- ⚡ Fast and smooth animations
- 🎵 Physics concepts visualized for the sonometer

## Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing fast development
- **Tailwind CSS** for styling
- **Radix UI** components
- **React Router** for navigation
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm

### Installation

```sh
# Clone the repository
git clone https://github.com/omsingh02/sono.git

# Navigate to the project directory
cd sono

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build

```sh
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `/src/components/Presentation` - Core presentation components and slide content
- `/src/components/ui` - Reusable UI components
- `/src/pages` - Route pages
- `/config` - Configuration files (Vite, Tailwind, TypeScript, etc.)

## Deployment

This project is automatically deployed to GitHub Pages via GitHub Actions on every push to `main`.

## License

MIT
