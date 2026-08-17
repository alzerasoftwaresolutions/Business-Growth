/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Design tokens are client-specific and come from the client design
    // manual (design/README.md). The core template must remain neutral.
    // Extend this file per client project; do not hardcode client brands here.
    extend: {},
  },
  plugins: [],
};
