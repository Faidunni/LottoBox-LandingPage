/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Navbtn-bg": "#249137",
        "subnav-bg": "#65CC35",
        "nav-text": "#479024",
        "Navborder-color": "#479024",
        "text-color": "#767676",
        "btn-color": "#6E2490",
        "card-bg": "#F5F5F5",
        "shape-color": "##D9D9D9",
        "footer-text": "#5E5D60",
        "promo-code": "#69A507",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #479024 0%, #94DB72 100%)",
        "background-color": "linear-gradient(90deg, #6E2490 0%, #BA72DB 100%)",
        "hero-background":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('../assets/Images/hero.jpg')",
        "card-gradient": "linear-gradient(90deg, #F6F6F6 0%, #FCFCFC 100%);",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        "DM Sans": ["DM Sans", "sans-serif"],
      },
      padding: {
        "nav-padding": "16px 160px",
        "subnav-padding": "90px 96px",
        "navbtn-padding": "12px 24px;",
      },
      fontWeight: {
        normal: "600",
        bold: "700",
        semibold: "800",
        bolder: "900",
      },
    },
  },
  plugins: [],
};
