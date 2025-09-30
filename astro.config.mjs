import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Required for sitemap -> Replace with your site's URL
	site: 'https://astro-simple-portfolio.pages.dev/',
	output: 'static',
	integrations: [sitemap()],
	adapter: cloudflare({
		imageService: 'cloudflare',
		platformProxy:{
			enabled: true
		}
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});
