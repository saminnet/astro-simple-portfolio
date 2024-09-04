/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	trailingComma: 'all',
	singleQuote: true,
	tabWidth: 2,
	printWidth: 100,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
