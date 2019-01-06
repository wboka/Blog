module.exports = {
	siteMetadata: {
		title: `Boka's Solutions`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "Boka's Blog",
				short_name: "Boka's Blog",
				start_url: "/",
				background_color: "#6b37bf",
				theme_color: "#6b37bf",
				display: "standalone",
				icon: "src/images/wb.png"
			}
		},
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve:"@weknow/gatsby-remark-codepen",
						options: {
							theme: "dark",
							height: 400
						}
					},
					`gatsby-remark-prismjs`,
				]
			}
		},
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`
			}
		}
	]
};
