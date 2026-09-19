/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk color palette
        'cyber-dark': '#0a0a0a',
        'cyber-gray': '#1a1a1a',
        'cyber-purple': '#6366f1',
        'cyber-pink': '#ec4899',
        'cyber-blue': '#3b82f6',
        'cyber-green': '#10b981',
        'cyber-red': '#ef4444',
        'cyber-yellow': '#f59e0b',
        'neon-purple': '#a855f7',
        'neon-pink': '#f472b6',
        'neon-blue': '#60a5fa',
        // Background gradients
        'gradient-dark': '#0f172a',
        'gradient-purple': '#1e1b4b',
        'gradient-pink': '#be185d',
      },
      fontFamily: {
        'cyber': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #6366f1, 0 0 10px #6366f1, 0 0 15px #6366f1' },
          '100%': { boxShadow: '0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
        'matrix-rain': 'linear-gradient(transparent 0%, rgba(99, 102, 241, 0.1) 50%, transparent 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(99, 102, 241, 0.5)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'cyber-glow': '0 0 40px rgba(99, 102, 241, 0.3)',
      },
      backdropBlur: {
        'cyber': 'blur(16px)',
      },
    },
  },
  plugins: [],
};