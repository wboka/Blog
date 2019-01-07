import React from "react";
import { Helmet } from "react-helmet";
import { css } from "@emotion/core";
import { StaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import { FaHome, FaUserSecret, FaLinkedin, FaGithub, FaTwitter, FaBitbucket } from "react-icons/fa";

const ListLink = props => (
	<li style={{ display: `inline-block`, marginRight: `1rem` }}>
		<Link to={props.to}>{props.children}</Link>
	</li>
);

const ListLink2 = ({children}) => (
	<li style={{ display: `inline-block`, marginRight: `1rem` }}>
		{children}
	</li>
);

export default ({ children }) => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<div
				css={css`
					margin: 0 auto;
					max-width: 700px;
					padding: ${rhythm(2)};
					padding-top: ${rhythm(1.5)};
				`}
			>
				<Helmet>
					<html lang="en" />
					<meta charSet="utf-8" />
					<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
					<meta name="description" content="Web Development Blog by Wayne Boka" />
					<title>{data.site.siteMetadata.title}</title>
					<link rel="canonical" href="https://blog.bokasolutions.com" />
				</Helmet>
				<header style={{ marginBottom: `1.5rem` }}>
					<Link to={`/`} style={{ textShadow: `none`, backgroundImage: `none` }}>
						<h1
							css={css`
								margin-bottom: ${rhythm(2)};
								text-align: center;
							`}
						>
							{data.site.siteMetadata.title}
						</h1>
					</Link>
					<ul style={{ listStyle: `none`, textAlign: `center` }}>
						<ListLink to={`/`}>
							<FaHome /> Home
						</ListLink>
						<ListLink to={`/about/`}>
							<FaUserSecret /> About
						</ListLink>
					</ul>
				</header>
				{children}
				<ul style={{ listStyle: `none`, textAlign: `center` }}>
					<ListLink2>
						<a href="https://www.twitter.com/wtboka/" rel="noopener noreferrer" target="_blank">
							<FaTwitter /> <span>Twitter</span>
						</a>
					</ListLink2>
					<ListLink2>
						<a href="https://www.bitbucket.org/wboka/" rel="noopener noreferrer" target="_blank">
							<FaBitbucket /> <span>BitBucket</span>
						</a>
					</ListLink2>
					<ListLink2>
						<a href="https://www.linkedin.com/in/wayneboka/" rel="noopener noreferrer" target="_blank">
							<FaLinkedin /> <span>Linkedin</span>
						</a>
					</ListLink2>
					<ListLink2>
						<a href="https://www.github.com/wboka" target="_blank" rel="noopener noreferrer">
							<FaGithub /> <span>Github</span>
						</a>
					</ListLink2>
					<ListLink2>
						<a href="https://www.bokasolutions.com" target="_blank" rel="noopener noreferrer">
							<FaGlobe /> <span>Boka Solutions</span>
						</a>
					</ListLink2>
				</ul>
			</div>
		)}
	/>
);
