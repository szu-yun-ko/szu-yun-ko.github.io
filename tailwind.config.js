/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        spectral: {
          50: '#fee08b',   // pale yellow
          100: '#e6f598',  // light yellow-green
          200: '#abdda4',  // light mint green
          300: '#66c2a5',  // medium teal
          400: '#3288bd',  // medium blue
          500: '#5e4fa2',  // deep purple
          600: '#9e0142',  // deep crimson
          700: '#d53e4f',  // dusty rose
          800: '#f46d43',  // vibrant orange
          900: '#fdae61',  // soft orange
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'reigo': ['Reigo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
