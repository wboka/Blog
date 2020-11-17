<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9" version="1.0">
	<xsl:template match="/">
		<html>
			<head>
				<title>Sitemap - Wayne Boka, Web Developer</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
				<style type="text/css">
					body, html {
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; } li { padding: 0.25em 0; font-size: 1em;
					}
				</style>
			</head>
			<body>
				<h2>Sitemap</h2>
				<p>
					You can use our sitemap to easily navigate to any section of our website.
					If you still cannot find the information you need don't hesitate to <a href="https://m.me/bokasolutions">message</a> or <a href="mailto:wayne@bokasolutions.com">email</a> me.
				</p>
				<ol>
					<xsl:for-each select="sm:urlset/sm:url/sm:loc">
						<li class="{@level}">
							<a href="{.}">
								<xsl:value-of select="."/>
							</a>
						</li>
					</xsl:for-each>
				</ol>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
