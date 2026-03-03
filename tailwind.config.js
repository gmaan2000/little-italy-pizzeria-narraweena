/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#C41E3A', // Sicilian Red (Slightly deeper, more premium)
                secondary: '#2D3E33', // Deep Pesto/Basil (Darker, more sophisticated)
                background: '#F9F7F2', // Cream Silk (Lighter, more airy)
                accent: '#E6A15C', // Aged Parmigiano (Golden accent)
                textDark: '#0A0A0A', // Onyx Black
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'], // Premium Serif
                sans: ['"Outfit"', 'sans-serif'], // Professional Sans
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            borderRadius: {
                '2xl': '2rem',
                '3xl': '3rem',
            }
        },
    },
    plugins: [],
}
