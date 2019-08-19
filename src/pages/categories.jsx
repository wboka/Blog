import React from "react";
import PropTypes from "prop-types";
// Utilities
import kebabCase from "lodash/kebabCase";
// Components
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <Helmet title={title} />
    <div>
      <h1>Categories</h1>
      <ul className="list-none">
        {group.map(category => (
          <li key={category.fieldValue} className="block">
            <Link to={`/categories/${kebabCase(category.fieldValue)}/`} className="block border border-teal-500 bg-teal-400 text-white mr-2 mb-2 p-4 no-hover rounded-lg hover:shadow-lg focus:shadow-lg">
							<h2>
								{category.fieldValue} <span className="bg-teal-600 text-white px-2 py-1 rounded">{category.totalCount}</span>
							</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);
CategoriesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired
        }).isRequired
      )
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  })
};
export default CategoriesPage;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`;
