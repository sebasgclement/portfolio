module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          glow: "pulseGlow 6s ease-in-out infinite",
        },
        keyframes: {
          pulseGlow: {
            "0%, 100%": {
              transform: "translateX(-50%) scale(1)",
              opacity: "0.1",
            },
            "50%": {
              transform: "translateX(-50%) scale(1.15)",
              opacity: "0.15",
            },
          },
        },
      },
    },
    plugins: [],
  };
  