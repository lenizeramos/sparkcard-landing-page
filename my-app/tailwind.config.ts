import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
        courier: ['Courier Prime', 'monospace'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
