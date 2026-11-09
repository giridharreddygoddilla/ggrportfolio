/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FBFBF9',
          100: '#F5F5F1',
          200: '#EBEAE4',
          300: '#DEDCD4',
          400: '#C9C6BC',
        },
        obsidian: {
          950: '#090B10',
          900: '#0F121A',
          850: '#151922',
          800: '#1C212D',
          700: '#2A3142',
          600: '#4B5565',
        },
        cobalt: {
          50: '#F0F5FF',
          100: '#E0EBFF',
          200: '#BAD3FF',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E3A8A',
          900: '#0F275A',
          accent: '#1859F5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.03em',
        wider: '0.08em',
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
