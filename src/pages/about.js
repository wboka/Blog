import React from "react";

import Layout from "../components/layout";
import headshot from "../images/wb-profile250.jpg";

export default () => (
  <Layout>
    <img
      src={headshot}
      className={`animated jackInTheBox`}
      style={{
        width: 250,
        borderRadius: `50%`,
        margin: `2em auto`,
        display: `block`
      }}
      alt="Headshot of Wayne Boka, Web Developer"
    />

    <p className={`animated bounceInRight`}>
      Hello! My name is Wayne and I am a website developer based out of
      Westfield, PA. I have been building websites and web applications since
      2011. <a href="https://m.me/bokasolutions">Send me a Facebook message</a>{" "}
      or <a href="mailto:wayne@bokasolutions.com">email me</a> to discuss how I
      can help build your online presence.
    </p>

    <h2 className={`animated bounceInLeft`}>Skills and Interests</h2>

    <h3 className={`animated bounceInRight`}>Languages</h3>

    <ul className={`animated bounceInLeft`}>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>ColdFusion / Lucee</li>
      <li>Python</li>
      <li>Oracle</li>
      <li>MySQL</li>
    </ul>

    <h3 className={`animated bounceInRight`}>Libraries</h3>

    <ul className={`animated bounceInLeft`}>
      <li>Django</li>
      <li>jQuery</li>
      <li>Vue</li>
      <li>Bootstrap</li>
    </ul>
  </Layout>
);
