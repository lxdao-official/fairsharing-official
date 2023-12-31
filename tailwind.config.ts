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
				gradient: 'linear-gradient(281deg, #00C9FF -0.58%, #1DE9B6 47.72%, #92FE9D 97.04%);',
			},
			backgroundColor: {
				light: 'rgba(255, 0, 0, 0.1)',
			},
			fontFamily: {
				lexend: ['var(--font-lexend)'],
				roboto: ['var(--font-roboto)'],
			},
			colors: {
				main: '#0F172A',
			},
			fontSize: {
				base: '20px',
			},
			boxShadow: {
				drop: '0px 2px 10px 0px rgba(100, 116, 139, 0.10);',
			},
		},
	},
	plugins: [],
};
export default config;
