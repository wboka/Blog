import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import containerStyles from "./blog-post.module.css";

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
		<Layout>
			<div className={containerStyles.container}>
				<h1 className={`animated tada`}>{post.frontmatter.title}</h1>
				<div className={`animated jello`} dangerouslySetInnerHTML={{ __html: post.html }} />
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
			}
		}
	}
`;
