/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				sage: '#BFCC94',
				babyPower: '#F0F4EF',
				powderBlue: '#B4CDED',
			},
		},
	},
	plugins: [],
};
