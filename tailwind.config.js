/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Healthcare theme colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Backgrounds
        background: {
          light: '#ffffff',
          dark: '#f8fafc',
        },
        // Text
        text: {
          primary: '#1e293b',
          secondary: '#64748b',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
      },
    },
  },
  safelist: [
    'bg-primary-900',
    'text-primary-900',
    'bg-secondary-600',
    'text-secondary-600',
    'bg-background-light',
    'bg-background-dark',
    'text-text-primary',
    'text-text-secondary',
    'hover:bg-primary-700',
    'focus:ring-primary-300',
    'focus:ring-secondary-300',
    'bg-white\/80',
    'hover:bg-gray-50',
    'hover:text-primary-600',
  ],
  plugins: [],
}