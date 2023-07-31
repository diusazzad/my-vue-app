/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6EC1E4",
                secondary: "#54595F",
                text: "#7A7A7A",
                accent: "#61CE70",
            },
            fontFamily: {
                primary: ["Roboto", "sans-serif"],
                secondary: ["Roboto Slab", "serif"],
                text: ["Roboto", "sans-serif"],
                accent: ["Roboto", "sans-serif"],
            },
            fontWeight: {
                primary: 600,
                secondary: 400,
                text: 400,
                accent: 500,
            },
            zIndex: {
                '999': 999,
            },
        },
    },
    plugins: [],
}



