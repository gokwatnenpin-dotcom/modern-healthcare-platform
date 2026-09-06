# Modern Healthcare Platform

A fully functional, responsive healthcare platform website built with React and Tailwind CSS.

## Features

- Clean, professional design with healthcare-appropriate color scheme
- Fully responsive layout for mobile, tablet, and desktop
- Modern UI components with proper spacing, padding, and button sizing
- Healthcare-focused color palette (blues and greens)
- Accessible design with proper contrast ratios
- Interactive elements with hover and focus states

## Color Scheme

- **Primary**: Blues (trust, professionalism, healthcare)
  - Primary-50: #f0f9ff
  - Primary-100: #e0f2fe
  - Primary-500: #0ea5e9
  - Primary-900: #0c4a6e
- **Secondary**: Greens (health, growth, vitality)
  - Secondary-50: #f0fdf4
  - Secondary-100: #dcfce7
  - Secondary-500: #22c55e
  - Secondary-900: #14532d
- **Neutrals**: Grays for text and backgrounds
- **Backgrounds**: Light and dark variants for sections

## Components

1. **Header**: Navigation menu with login/signup buttons
2. **Hero Section**: Main headline, subtext, and call-to-action buttons
3. **Services Section**: Grid of healthcare service offerings
4. **Features Section**: Key platform benefits and features
5. **Call to Action**: Prominent section encouraging users to start a free trial
6. **Footer**: Company information, resources, and contact details

## Getting Started

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`

## Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Technology Stack

- **React**: Frontend library for building user interfaces
- **Vite**: Fast development server and build tool
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **PostCSS**: CSS processing with autoprefixer

## Design Principles

- **Consistency**: Uniform spacing, typography, and color usage
- **Accessibility**: Proper color contrast, focus states, and semantic HTML
- **Responsiveness**: Mobile-first approach with breakpoints at sm, md, lg
- **User Experience**: Clear visual hierarchy, intuitive navigation, and prominent CTAs
- **Performance**: Optimized for fast loading and smooth interactions

## File Structure

```
modern-healthcare-platform/
├── src/
│   ├── assets/          # Static assets (images, icons)
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global CSS and Tailwind imports
│   └── main.jsx         # Entry point
├── public/              # Static public assets
├── tailwind.config.js   # Tailwind configuration with custom colors
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies and scripts
└── README.md            # This file
```

## Customization

To modify the color scheme or other design tokens, edit the `tailwind.config.js` file. The healthcare-specific colors are defined in the `theme.extend.colors` section.

## Browser Support

This application supports all modern browsers that support CSS custom properties and Flexbox/Grid layouts.

## License

MIT License - feel free to use this as a starting point for your healthcare projects.