/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "580px",
        mobile: { max: "640px" },
        tablet: { min: "640px", max: "1024px" },
        desktop: { min: "1024px" },
      },
      backgroundImage: {
        dark_bg: "url('/public/assets/night_bg.png')",
        cloud:"url('/public/assets/cld.png')",
        light_bg: "url('/public/assets/weather_day.jpg')",
        night_home: "url('/public/assets/weather_night_home.png')",
        forecast_card_bg: "url('/public/assets/forecast_bg.png')",
      },
    },
  },
  plugins: [],
};
