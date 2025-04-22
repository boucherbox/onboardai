import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // New color palette
        olivine: {
          DEFAULT: '#89AF72',
          100: '#1b2515',
          200: '#364a2a',
          300: '#52703f',
          400: '#6d9554',
          500: '#89af72',
          600: '#a2c08f',
          700: '#b9d0ab',
          800: '#d0dfc7',
          900: '#e8efe3'
        },
        'fern-green': {
          DEFAULT: '#547D52',
          100: '#111911',
          200: '#223321',
          300: '#334c32',
          400: '#446542',
          500: '#547d52',
          600: '#70a06d',
          700: '#94b892',
          800: '#b7cfb6',
          900: '#dbe7db'
        },
        asparagus: {
          DEFAULT: '#679961',
          100: '#151e13',
          200: '#293d27',
          300: '#3e5b3a',
          400: '#527a4e',
          500: '#679961',
          600: '#85ae80',
          700: '#a3c2a0',
          800: '#c2d6c0',
          900: '#e0ebdf'
        },
        'tea-green': {
          DEFAULT: '#BFD6A6',
          100: '#273418',
          200: '#4d6930',
          300: '#749d48',
          400: '#9abf73',
          500: '#bfd6a6',
          600: '#cddfb9',
          700: '#d9e7cb',
          800: '#e6efdc',
          900: '#f2f7ee'
        },
        'olivine-2': {
          DEFAULT: '#A0B96C',
          100: '#212713',
          200: '#424e26',
          300: '#627639',
          400: '#839d4c',
          500: '#a0b96c',
          600: '#b3c689',
          700: '#c6d4a6',
          800: '#d9e2c4',
          900: '#ecf1e1'
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
