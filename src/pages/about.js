import React from "react";
import Layout from "../components/layout";
import Bio from "../components/bio";

export default () => (
	<Layout>
		<h2 className="text-center">Hello, I'm Wayne!</h2>

		<Bio />

		<h2>Skills and Interests</h2>

		<h3>Languages</h3>

		<ul>
			<li>HTML5</li>
			<li>CSS3</li>
			<li>JavaScript</li>
			<li>ColdFusion / Lucee</li>
			<li>Python</li>
			<li>Oracle</li>
			<li>MySQL</li>
		</ul>

		<h3>Libraries</h3>

		<ul>
			<li>Django</li>
			<li>jQuery</li>
			<li>Vue</li>
			<li>Bootstrap</li>
		</ul>
	</Layout>
);
