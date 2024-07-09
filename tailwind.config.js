import {colors, nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|button|checkbox|chip|dropdown|image|input|link|navbar|select|tabs|divider|ripple|spinner|menu|popover|listbox|scroll-shadow).js",
  ],
  theme: {
    extend: {
      colors:{
        primaryPink: "#FFC2FE",
        primaryBlue: "#327EFF",
      },
      backgroundImage: {
          "linear-pink-gradient":
          "linear-gradient(180deg, rgba(255, 194, 254, 0.35) 30.43%, rgba(255, 255, 255, 1) 100%)",

      }
    },
    fontFamily:{
      oswald: ["Oswald"]
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}
