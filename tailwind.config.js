import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                switzer: ['Switzer', 'sans-serif'],
            },
            colors: {
                black: '#0e0e10',
                white: '#f7f7f8',
                gray: '#1b1b1d',
            },
            container: {
                center: true,
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            defaultTheme: 'dark',
            defaultExtendTheme: 'dark',
        }),
    ],
};
