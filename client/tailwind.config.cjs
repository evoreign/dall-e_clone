module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
      animation: {
        flash: 'flash 1s linear infinite', // Define the flashing animation
      },
      keyframes: {
        flash: {
          '0%, 100%': { color: '#ff3131' }, // Red color
          '50%': { color: 'white' }, // White color in the middle of the animation
        },
      },
    },
  },
  plugins: [],
};
