/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 163, 184, 0.14), 0 20px 60px rgba(15, 23, 42, 0.28)',
      },
      colors: {
        ink: '#0f172a',
        paper: '#f8fafc',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(59, 130, 246, 0.24), transparent 42%), radial-gradient(circle at right, rgba(14, 165, 233, 0.18), transparent 30%), linear-gradient(180deg, #f8fafc 0%, #eff6ff 52%, #e2e8f0 100%)',
      },
    },
  },
  plugins: [],
};
