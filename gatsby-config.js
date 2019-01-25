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
				background_color: "#ffffff",
				theme_color: "#2b4b7c",
				display: "standalone",
				icon: "src/images/wb.png",
				legacy: true
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
						resolve: "@weknow/gatsby-remark-codepen",
						options: {
							theme: "dark",
							height: 400
						}
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							showLineNumbers: true
						}
					}
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
