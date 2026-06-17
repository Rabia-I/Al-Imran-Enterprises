import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0b2341",
        steel: "#31516f",
        signal: "#f97316",
        ink: "#111827"
      },
      boxShadow: {
        industrial: "0 18px 50px rgba(11,35,65,0.12)"
      }
    }
  },
  plugins: []
};

export default config;
