// tailwind.config.js

module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your theme extensions...
    },
  },
  plugins: [require("daisyui")],
};
