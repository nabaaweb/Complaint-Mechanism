/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('../public/logo.png')",
        'complaint': "url('../public/complaint.png')",
        'protection': "url('../public/protection.png')",
        'email': "url('../public/email.png')",
        'hotline': "url('../public/hotline.png')",
      }
    },
  },
  plugins: [],
}

