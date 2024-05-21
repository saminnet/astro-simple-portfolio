/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				horizonAnimated: "url('/assets/svg/backgrounds/horizon-animated.svg')",
				horizon: "url('/assets/svg/backgrounds/horizon.svg')",
			},
			keyframes: {
				'zoom-in': {
					'0%': {
						opacity: 0,
						transform: 'scale(0.75)',
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
				'zoom-in-out': {
					'0%': {
						transform: 'scale(1.1)',
					},
					'100%': {
						transform: 'scale(1)',
					},
				},
				'fade-up': {
					from: {
						opacity: 0,
						transform: 'translateY(1.5rem)',
					},
					to: {
						opacity: 1,
						transform: 'none',
					},
				},
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				'fade-up': 'fade-up 700ms ease 300ms',
				'fade-in': 'fade-in 700ms ease 300ms',
				'zoom-in': 'zoom-in 500ms ease 300ms',
				'zoom-in-out': 'zoom-in-out 700ms ease',
			},
		},
	},
	plugins: [],
};
