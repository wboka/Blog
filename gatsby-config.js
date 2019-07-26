module.exports = {
  siteMetadata: {
    title: `Boka's Solutions`,
    description: `Wayne Boka is your hometown website developer based in Westfield, Pa. Specializing in website development, social media marketing, and online presence management`,
    siteUrl: `https://blog.bokasolutions.com`,
    author: `Wayne Boka`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
					{
						site {
							siteMetadata {
								title
								description
								author
								siteUrl
								site_url: siteUrl
							}
						}
					}
				`,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  author: site.siteMetadata.author,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
							{
								allMarkdownRemark(
									limit: 1000,
									sort: { order: DESC, fields: [frontmatter___date] }
								) {
									edges {
										node {
											excerpt
											html
											fields { slug }
											frontmatter {
												title
												date
											}
										}
									}
								}
							}
						`,
            output: "/rss.xml",
            title: "Wayne Boka's Blog RSS Feed"
          }
        ]
      }
    },
    `gatsby-plugin-netlify-cms`
  ]
};
