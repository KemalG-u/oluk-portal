import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E6",
        "cream-light": "#FAF8F3",
        teal: "#0D4F4F",
        "teal-light": "#1A6B6B",
        "teal-dark": "#083838",
        gold: "#C9A962",
        "gold-muted": "#D4BC7D",
        "gold-light": "#E8D9A8",
        "gold-dark": "#B8944D",
        sage: "#7A9E7E",
        "sage-light": "#A8C4AB",
        rose: "#C4A4A4",
        "rose-light": "#D9C5C5",
        "text-dark": "#2C2C2C",
        "text-muted": "#5A5A5A",
        'deep-teal': {
          DEFAULT: '#0D4F4F',
          light: '#1a6b6b',
          dark: '#0a3a3a',
        },
        'warm-gold': {
          DEFAULT: '#C9A962',
          light: '#d4b87a',
          dark: '#b8944d',
        },
        'soft-cream': {
          DEFAULT: '#F5F0E6',
          light: '#FAF8F3',
          dark: '#EDE5D6',
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-source)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        float: "float 8s ease-in-out infinite",
        "float-slow": "floatSlow 10s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        spin: "spin 3s linear infinite",
        "sound-wave": "soundWave 1s ease-in-out infinite",
        "compass-wobble": "compassWobble 4s ease-in-out infinite",
        drip: "drip 2s ease-in-out infinite",
        "sand-flow": "sandFlow 2s linear infinite",
        pulse: "pulse 8s ease-in-out infinite",
        shimmer: "shimmer 1.5s infinite",
        "glow-teal": "glowTeal 2s ease-in-out infinite",
        "glow-gold": "glowGold 2s ease-in-out infinite",
        "fire-glow": "fireGlow 1.5s ease-in-out infinite",
        "badge-unlock": "badgeUnlock 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(45deg)" },
          "50%": { transform: "translateY(-15px) rotate(50deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.3)", opacity: "1" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        soundWave: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(0.5)" },
          "50%": { opacity: "1", transform: "scaleY(1)" },
        },
        compassWobble: {
          "0%, 100%": { transform: "translate(-50%, -50%) rotate(-30deg)" },
          "50%": { transform: "translate(-50%, -50%) rotate(-25deg)" },
        },
        drip: {
          "0%, 100%": { height: "10px", opacity: "1" },
          "50%": { height: "15px", opacity: "0.5" },
        },
        sandFlow: {
          "0%": { opacity: "1", height: "15px" },
          "50%": { opacity: "0.5", height: "8px" },
          "100%": { opacity: "1", height: "15px" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.1)", opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glowTeal: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(13, 79, 79, 0.5)" },
          "50%": { boxShadow: "0 0 30px rgba(13, 79, 79, 0.8)" },
        },
        glowGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201, 169, 98, 0.5)" },
          "50%": { boxShadow: "0 0 30px rgba(201, 169, 98, 0.8)" },
        },
        fireGlow: {
          "0%, 100%": { textShadow: "0 0 10px #ff6b00, 0 0 20px #ff6b00" },
          "50%": { textShadow: "0 0 20px #ff6b00, 0 0 30px #ff6b00, 0 0 40px #ff0000" },
        },
        badgeUnlock: {
          "0%": { transform: "scale(0) rotate(-180deg)", opacity: "0" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
