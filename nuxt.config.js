const createFeedItems = async function (feed, args) {
	const [file] = args;

	feed.options = {
		title: `Boka's Solutions`,
		link: `https://blog.bokasolutions.com/${file}`,
		description: process.env.npm_package_description || "",
	};

	const { $content } = require("@nuxt/content");

	const posts = await $content("blog-posts")
		.where({ draft: false })
		.sortBy("date", "desc")
		.fetch();

	posts.forEach(async (post) => {
		feed.addItem({
			title: post.title,
			date: new Date(post.updatedAt),
			id: post.slug,
			link: `https://blog.bokasolutions.com/posts/${post.slug}`,
		});
	});

	feed.addCategory("Web Development");

	feed.addContributor({
		name: "Wayne Boka",
		email: "wayne+blog@bokasolutions.com",
		link: "https://www.bokasolutions.com",
	});
}

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
	modules: ["@nuxt/content", "@nuxtjs/sitemap", "@nuxtjs/feed"],
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
	feed: [
		{
			path: "atom.xml",
			create: createFeedItems,
			cacheTime: 1000 * 60 * 15,
			type: "atom1",
			data: ['atom.xml']
		},
		{
			path: "feed.json",
			create: createFeedItems,
			cacheTime: 1000 * 60 * 15,
			type: "json1",
			data: ['feed.json']
		},
		{
			path: "rss.xml",
			create: createFeedItems,
			cacheTime: 1000 * 60 * 15,
			type: "rss2",
			data: ['rss.xml']
		},
	],
	pwa: {
		meta: {
			theme_color: "#2c7a7b",
		},
	},
};
