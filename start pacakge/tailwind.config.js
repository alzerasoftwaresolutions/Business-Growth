/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: 'rgb(var(--color-navy-950) / <alpha-value>)', // Primary dark / hero / footer
          900: 'rgb(var(--color-navy-900) / <alpha-value>)',
          800: 'rgb(var(--color-navy-800) / <alpha-value>)', // Heading / body dark
        },
        gold: {
          400: 'rgb(var(--color-gold-400) / <alpha-value>)',
          500: 'rgb(var(--color-gold-500) / <alpha-value>)', // Accent / brand gold
          600: 'rgb(var(--color-gold-600) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)', // Page background
          dim: 'rgb(var(--color-surface-dim) / <alpha-value>)', // Alt section background
          container: 'rgb(var(--color-surface-container) / <alpha-value>)',
          low: 'rgb(var(--color-surface-low) / <alpha-value>)',
          lowest: 'rgb(var(--color-surface-lowest) / <alpha-value>)',
        },
        slate: {
          600: 'rgb(var(--color-slate-600) / <alpha-value>)', // Muted body
          700: 'rgb(var(--color-slate-700) / <alpha-value>)', // Secondary text
        },
        border: {
          light: 'rgb(var(--color-border-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        subtle: 'var(--shadow-subtle)',
        card: 'var(--shadow-card)',
      },
      maxWidth: {
        container: 'var(--container-width)',
      },
    },
  },
  plugins: [],
};
