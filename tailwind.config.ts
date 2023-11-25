import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				black: 'linear-gradient(180deg, #001E24 0%, #000811 100%);',
			},
			fontFamily: {
				lexend: ['var(--font-lexend)'],
			},
		},
	},
	plugins: [],
};
export default config;
