import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        screens: {
            xs: "475px",
        },
        colors: {
            primary: {
                "100": "#FFE8F0",
                DEFAULT: "#EE2B69",
            },
            secondary: "#FBE843",
            black: {
                "100": "#333333",
                "200": "#141413",
                "300": "#7D8087",
                DEFAULT: "#000000"
            },
            white: {
                "100": "#F7F7F7",
            },
        }
    },
  },
  plugins: [],
}
export default config 