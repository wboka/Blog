import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";

// Components
import { Link, graphql } from "gatsby";
import { FaTags } from "react-icons/fa";

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges, totalCount } = data.allMarkdownRemark;
	const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;
	return (
		<Layout>
			<h1>{tagHeader}</h1>
			<ul className="list-none">
				{edges.map(({ node }) => {
					const { slug } = node.fields;
					const { date, title } = node.frontmatter;
					return (
						<li key={slug}>
							<Link
								to={slug}
								className="block border border-teal-600 bg-teal-700 text-white mr-2 mb-2 p-4 no-hover rounded-lg hover:shadow-lg focus:shadow-lg"
							>
								<h2>{title}</h2>
								<h3>{date}</h3>
							</Link>
						</li>
					);
				})}
			</ul>

			<Link to="/tags" className="no-hover">
				<span className="mr-2 mb-2 bg-teal-600 text-white p-2 rounded leading-none flex items-center lift">
					<FaTags />
					&nbsp;View All Tags
				</span>
			</Link>
		</Layout>
	);
};
Tags.propTypes = {
	pageContext: PropTypes.shape({
		tag: PropTypes.string.isRequired
	}),
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						frontmatter: PropTypes.shape({
							title: PropTypes.string.isRequired
						}),
						fields: PropTypes.shape({
							slug: PropTypes.string.isRequired
						})
					})
				}).isRequired
			)
		})
	})
};
export default Tags;
export const pageQuery = graphql`
	query($tag: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY @ HH:mm:ss")
					}
				}
			}
		}
	}
`;
