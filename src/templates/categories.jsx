import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";

// Components
import { Link, graphql } from "gatsby";
import { FaLayerGroup } from "react-icons/fa";

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } categorized with "${category}"`;
  return (
    <Layout>
      <h1>{categoryHeader}</h1>
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
      {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
      <Link to="/categories" className="no-hover">
        <span className="mr-2 mb-2 bg-teal-600 text-white p-2 rounded leading-none flex items-center lift">
          <FaLayerGroup />
          &nbsp;View All Categories
        </span>
      </Link>
    </Layout>
  );
};
Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired
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
export default Categories;
export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
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
