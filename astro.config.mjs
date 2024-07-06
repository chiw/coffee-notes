import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://chiw.github.io',
    base: 'coffee-notes',
	integrations: [
		starlight({
			favicon: '/assets/misc/favicon/coffee-notes-favicon.svg',
			title: 'Coffee Notes',
			logo: {
				light: './src/assets/logo-dark-100-contrailone.svg',
				dark: './src/assets/logo-light-100-contrailone.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/chiw/coffee-notes',
			},
			editLink: {
				baseUrl: 'https://github.com/chiw/coffee-notes/edit/master',
			},
			// sidebar: [
			// 	{
			// 		label: 'Guides',
			// 		items: [
			// 			// Each item here is one entry in the navigation menu.
			// 			{ label: 'Example Guide', link: '/guides/example/' },
			// 		],
			// 	},
			// 	{
			// 		label: 'Reference',
			// 		autogenerate: { directory: 'reference' },
			// 	},
			// ],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
				// Supports weights 200-900
				'@fontsource-variable/noto-serif-tc'
			],
		}),
	],
});
