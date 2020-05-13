import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogPostExcerpt from "../components/blog-post-excerpt";

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
          <BlogPostExcerpt key={node.id} post={node} />
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
            date(formatString: "MMMM DD, YYYY")
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
