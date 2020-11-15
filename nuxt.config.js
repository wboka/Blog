export default {
	target: 'static',
	head: {
		titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk} - Boka's Solutions` : `Boka's Solutions`),
	},
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{
			hid: 'description',
			name: 'description',
			content: process.env.npm_package_description || '',
		},
	],
	link: [
		{ rel: 'icon', type: 'image/png', href: '/images/wb.png' },
	],
	modules: ['@nuxt/content'],
	buildModules: [
		'@nuxtjs/tailwindcss',
		[
			'@nuxtjs/google-fonts',
			{
				display: 'swap',
				families: {
					Boogaloo: true,
					Nunito: true,
				},
			},
		],
		'@nuxtjs/pwa'
	],
	css: [],
	components: true,
};
