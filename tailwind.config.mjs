/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#15803d', // was green-700
					secondary: '#b91c1c', // was red-700
					dark: '#0f172a', // was slate-900
					light: '#f0fdf4', // was green-50
				},
			},
			fontFamily: {
				sans: ['Outfit', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
	],
}
