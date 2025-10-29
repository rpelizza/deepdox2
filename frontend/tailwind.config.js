/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts,scss}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [require('tailwindcss-primeui')],
};
