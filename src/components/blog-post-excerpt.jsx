import React from "react";
import { Link } from "gatsby";
import { FaLayerGroup, FaTag } from "react-icons/fa";

const _ = require("lodash");

export default ({ post }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <p className="italic p-2">{post.frontmatter.date}</p>

    <div className="flex flex-wrap p-2">
      {post.frontmatter.categories
        ? post.frontmatter.categories.map(category => {
            return (
              <Link
                key={category}
                to={"/categories/" + _.kebabCase(category)}
                className="no-hover"
              >
                <span
                  key={category}
                  className="mr-2 mb-2 bg-teal-600 text-white p-2 rounded leading-none flex items-center shadow-md hover:shadow-lg"
                >
                  <FaLayerGroup />&nbsp;{category}
                </span>
              </Link>
            );
          })
        : null}
    </div>

    <Link to={post.fields.slug} className="no-hover">
      <div className="border border-teal-600 bg-teal-400 hover:bg-yellow-500 hover:border-yellow-500 m-2 text-white rounded shadow-md hover:shadow-lg lift">
        <h3 className="text-black rounded-t p-2">{post.frontmatter.title}</h3>

        <div className="text-black p-2">
          <p>{post.excerpt}</p>
        </div>
      </div>
    </Link>
    <div className="flex flex-wrap p-2">
      {post.frontmatter.tags
        ? post.frontmatter.tags.map(tag => {
            return (
              <Link
                key={tag}
                to={"/tags/" + _.kebabCase(tag)}
                className="no-hover"
              >
                <span className="mr-2 mb-2 bg-blue-600 text-white p-2 rounded leading-none flex items-center shadow-md hover:shadow-lg">
                  <FaTag />&nbsp;{tag}
                </span>
              </Link>
            );
          })
        : null}
    </div>
  </div>
);
