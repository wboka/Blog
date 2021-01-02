export default {
	target: "static",
	head: {
		titleTemplate: (titleChunk) =>
			titleChunk ? `${titleChunk} - Boka's Solutions` : `Boka's Solutions`,
	},
	meta: [
		{ charset: "utf-8" },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{
			hid: "description",
			name: "description",
			content: process.env.npm_package_description || "",
		},
	],
	link: [{ rel: "icon", type: "image/png", href: "/images/wb.png" }],
	modules: ["@nuxt/content", "@nuxtjs/sitemap"],
	buildModules: [
		"@nuxtjs/tailwindcss",
		[
			"@nuxtjs/google-fonts",
			{
				display: "swap",
				families: {
					Boogaloo: true,
					Nunito: true,
				},
			},
		],
		"@nuxtjs/pwa",
	],
	css: [],
	components: true,
	sitemap: {
		hostname: "https://blog.bokasolutions.com",
		gzip: true,
		routes: async () => {
			const { $content } = require("@nuxt/content");

			const posts = await $content("blog-posts")
				.where({ draft: false })
				.only(["slug"])
				.sortBy("date", "desc")
				.fetch();

			return posts.map((p) => `/posts/${p.slug}`);
		},
		xslUrl: "sitemap.xsl",
	},
	pwa: {
		meta: {
			theme_color: "#2c7a7b",
		},
	},
};
