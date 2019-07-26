import React from "react";
import Container from "./container";
import { Helmet } from "react-helmet";
import { StaticQuery, Link, graphql, withPrefix } from "gatsby";
import {
  FaHome,
  FaUserSecret,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaTwitter,
  FaBitbucket,
  FaRss
} from "react-icons/fa";
import "../../static/layout.css";
import Bio from "../components/bio";

const ListLink = props => (
  <li className="mr-4 p-2 text-lg uppercase block sm:inline-block hover:bg-teal-900 rounded">
    <Link to={props.to} className="no-hover">{props.children}</Link>
  </li>
);

const ListLink2 = ({ children }) => (
  <li className="mr-4 p-2 text-lg uppercase block sm:inline-block no-hover hover:bg-teal-900 rounded">
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
      <Container>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta
            name="description"
            content="Web Development Blog by Wayne Boka"
          />
          <title>{data.site.siteMetadata.title}</title>
          <link rel="canonical" href="https://blog.bokasolutions.com" />

          <script src="https://unpkg.com/core-js-bundle@3.1.4/minified.js" />
          <script src={withPrefix("rollbar-integration.js")} />
        </Helmet>
        <div className="flex flex-wrap">
          <header className="bg-teal-700 text-white py-4 w-full xl:w-1/4 p-4">
            <Link to={`/`} className="no-hover">
              <h1 className="text-center">{data.site.siteMetadata.title}</h1>
            </Link>
            <ul className="list-none text-center">
              <ListLink to={`/`}>
                <FaHome className="inline-block mr-1" /> Home
              </ListLink>
              <ListLink to={`/about/`}>
                <FaUserSecret className="inline-block mr-1" /> About
              </ListLink>
            </ul>

            <Bio className="hidden xl:block" />
          </header>

          <div className="container mx-auto p-4 w-full xl:w-3/4">
						{children}
          </div>
        </div>

        <div className="text-center mt-4 sm:mt-0 p-2 bg-teal-700 text-white">
          <ul className="list-none">
            <ListLink2>
              <a
								href="https://www.twitter.com/wtboka/"
								className="hover:bg-teal-900 rounded no-hover"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTwitter className="inline-block mr-1" /> Twitter
              </a>
            </ListLink2>
            <ListLink2>
              <a
								href="https://www.bitbucket.org/wboka/"
								className="hover:bg-teal-900 rounded no-hover"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaBitbucket className="inline-block mr-1" /> BitBucket
              </a>
            </ListLink2>
            <ListLink2>
              <a
								href="https://www.linkedin.com/in/wayneboka/"
								className="hover:bg-teal-900 rounded no-hover"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin className="inline-block mr-1" /> Linkedin
              </a>
            </ListLink2>
            <ListLink2>
              <a
								href="https://www.github.com/wboka"
								className="hover:bg-teal-900 rounded no-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="inline-block mr-1" /> Github
              </a>
            </ListLink2>
            <a href="/rss.xml" className="mr-4 p-2 text-lg uppercase block sm:inline-block hover:bg-teal-900 rounded no-hover">
              <FaRss className="inline-block mr-1" /> RSS
            </a>
            <ListLink2>
              <a
								href="https://www.bokasolutions.com"
								className="hover:bg-teal-900 rounded no-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe className="inline-block mr-1" /> Boka Solutions
              </a>
            </ListLink2>
          </ul>
        </div>
      </Container>
    )}
  />
);
