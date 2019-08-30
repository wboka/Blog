import React from "react";
import headshot from "../images/wb-profile250.jpg";

export default props => (
  <div className={props.className}>
    <img
      src={headshot}
      className="rounded-full w-1/2 sm:w-1/4 my-2 mx-auto shadow-lg"
      alt="Headshot of Wayne Boka, Web Developer"
      onClick={e => (e.detail === 3 ? (window.location.href = `/admin`) : null)}
      onTouch={e => (e.detail === 3 ? (window.location.href = `/admin`) : null)}
    />

    <p>
      Hello! My name is Wayne and I am a website developer based out of
      Westfield, PA. I have been building websites and web applications since
      2011.{" "}
      <a
        href="https://m.me/bokasolutions"
        className="border-b-4 border-blue-500 hover:bg-blue-500 px-2 pt-2 no-hover rounded inline-block"
      >
        Send me a Facebook message
      </a>{" "}
      or{" "}
      <a
        href="mailto:wayne@bokasolutions.com"
        className="border-b-4 border-blue-500 hover:bg-blue-500 px-2 pt-2 no-hover rounded inline-block"
      >
        email me
      </a>{" "}
      to discuss how I can help build your online presence.
    </p>
  </div>
);
