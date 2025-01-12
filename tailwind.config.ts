import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ["navbar-light"]: "url('/bg/navbar-waves-light.svg')",
        ["navbar-dark"]: "url('/bg/navbar-waves-dark.svg')",
        ["footer-light"]: "url('/bg/footer-waves-light.svg')",
        ["footer-dark"]: "url('/bg/footer-waves-dark.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
