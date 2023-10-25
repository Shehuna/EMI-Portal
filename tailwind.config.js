module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGray: "#4D4D4D",
        brandPrimary: "#1E90FF",
        neutralGray: "#717171",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
