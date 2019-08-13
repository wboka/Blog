import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const _ = require("lodash");

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
		<Layout>
			<h2>{post.frontmatter.title}</h2>
			<div className="flex flex-wrap my-2">
				{post.frontmatter.categories ? <span className="mr-2 mb-2 py-2">Filed under:</span> : null}
				{post.frontmatter.categories
					? post.frontmatter.categories.map(category => {
							return (
								<Link key={category} to={"/categories/" + _.kebabCase(category)} className="no-hover">
									<span className="mr-2 mb-2 bg-teal-600 text-white p-2 rounded leading-none flex items-center">
										{category}
									</span>
								</Link>
							);
					  })
					: null}
			</div>
			<div className="blog-post" dangerouslySetInnerHTML={{ __html: post.html }} />

			{post.frontmatter.tags ? <h3>Tags</h3> : null}

			<div className="flex flex-wrap my-2">
				{post.frontmatter.tags
					? post.frontmatter.tags.map(tag => {
							return (
								<Link key={tag} to={"/tags/" + _.kebabCase(tag)} className="no-hover">
									<span className="mr-2 mb-2 bg-blue-600 text-white p-2 rounded leading-none flex items-center">
										{tag}
									</span>
								</Link>
							);
					  })
					: null}
			</div>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				categories
				tags
			}
		}
	}
`;
