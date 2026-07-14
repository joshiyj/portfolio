/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Courier New', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#ff5722',
          hover: '#ff784e',
          muted: 'rgba(255, 87, 34, 0.1)',
          glow: 'rgba(255, 87, 34, 0.15)',
          border: 'rgba(255, 87, 34, 0.4)',
        },
        bg: {
          primary: '#0a0b0e',
          secondary: '#11141a',
          card: 'rgba(22, 27, 34, 0.65)',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 87, 34, 0.4)',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          muted: '#64748b',
        },
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #ff5722 0%, #ff8a50 100%)',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
        full: '9999px',
      },
      boxShadow: {
        'accent-sm': '0 4px 14px rgba(255, 87, 34, 0.3)',
        'accent-md': '0 6px 20px rgba(255, 87, 34, 0.45)',
        'accent-glow': '0 0 40px rgba(255, 87, 34, 0.06)',
        'card': '0 20px 40px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 30px 60px rgba(0, 0, 0, 0.4), 0 0 50px rgba(255, 87, 34, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [],
}
