import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default ({data}) => (
	<Layout>
		<Header headerText={data.site.siteMetadata.title} />
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
`
