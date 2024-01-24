/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,jsx,mdx,tsx}'],
    plugins: [],
    theme: {
        extend: {
            fontFamily: {
                sans: 'Poppins, ui-sans-serif, system-ui',
            },
        },
    },
};
