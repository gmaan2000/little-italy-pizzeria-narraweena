/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#E53E17',
                'primary-dark': '#C4310F',
                'primary-light': '#FF6B3D',
                gold: '#D4A843',
                'gold-light': '#E8C97A',
                green: '#2D7A3A',
                charcoal: '#1A1A1A',
                cream: '#F9F7F2',
                'cream-dark': '#F0EBE3',
                'text-light': '#FFFFFF',
                'text-dark': '#1E1E1E',
                'text-muted': '#6B6B6B',
                // Branch theme colors
                olive: '#4A6128',
                'olive-dark': '#2E3D18',
                'olive-light': '#6B8A3A',
                burgundy: '#9A0F0F',
                'burgundy-dark': '#6B0808',
                'burgundy-light': '#C41313',
            },
            fontFamily: {
                heading: ['"Bebas Neue"', 'sans-serif'],
                body: ['"Montserrat"', 'sans-serif'],
                accent: ['"Sacramento"', 'cursive'],
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to bottom, rgba(26,26,26,0.7), rgba(26,26,26,0.3))',
                'dark-fade': 'linear-gradient(to bottom, rgba(26,26,26,0.9), rgba(26,26,26,0.6))',
                'cream-gradient': 'linear-gradient(to bottom, #F9F7F2, #F0EBE3)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'ticker': 'ticker 40s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                ticker: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}
