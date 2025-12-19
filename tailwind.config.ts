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
        sage: "#7A9E7E",
        "sage-light": "#A8C4AB",
        rose: "#C4A4A4",
        "rose-light": "#D9C5C5",
        "text-dark": "#2C2C2C",
        "text-muted": "#5A5A5A",
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
      },
    },
  },
  plugins: [],
};

export default config;
