/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				appleChancery: ['"Apple Chancery"', 'cursive'],
			},
			colors: {
				sage: '#BFCC94',
				babyPower: '#F0F4EF',
				powderBlue: '#B4CDED',
				indigo: '#344966',
				richBlack: '#0D1821',
			},
		},
	},
	plugins: [],
};
