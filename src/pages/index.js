import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <h2 className="text-center">Blog</h2>
      <p className="text-lg text-center italic">
        <span className="bg-blue-400 text-white rounded-full px-2 py-1">
          {data.allMarkdownRemark.totalCount}
        </span>{" "}
        Posts
      </p>
      <hr className="border my-4" />
      <div className="flex flex-wrap">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <p className="italic p-2">{node.frontmatter.date}</p>

						<div className="flex flex-wrap p-2">
							{
								node.frontmatter.categories ? node.frontmatter.categories.map(category => {
									return <span className="mr-2 mb-2 bg-teal-600 text-white p-2 rounded leading-none flex items-center">{category}</span>
								}) : null
							}
						</div>

            <div className="border border-teal-600 hover:bg-teal-600 m-2 text-white rounded shadow-lg">
              <Link to={node.fields.slug} className="no-hover">
                <h3 className="bg-teal-800 hover:bg-transparent rounded-t p-2">
                  {node.frontmatter.title}
                </h3>

								<div className="bg-teal-200 hover:bg-transparent text-black p-2">

	                <p>
	                  {node.excerpt}
	                </p>

									<div className="flex flex-wrap">
										{
											node.frontmatter.tags ? node.frontmatter.tags.map(tag => {
												return <span className="mr-2 mb-2 bg-teal-600 text-white p-2 rounded leading-none flex items-center">{tag}</span>
											}) : null
										}
									</div>
								</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
						date(formatString: "MMMM DD, YYYY"),
						categories
						tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
