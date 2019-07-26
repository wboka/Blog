import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default ({ data }) => (
  <Layout>
    <h2>{data.site.siteMetadata.title}</h2>
    <p>No dice. Try again.</p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
