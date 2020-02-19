import React from "react";
import Layout from "../components/layout";

export default ({ data }) => (
	<Layout>
		<h2 className="text-center">Say Hi!</h2>

		<form action="https://formspree.io/wayne@bokasolutions.com" method="post" className="w-full sm:w-1/2 md:w-1/3 mx-auto">
			<label htmlFor="name" required className="block font-bold">
				Name
				<input type="text" name="name" className="block w-full border-2 rounded" />
			</label>

			<label htmlFor="_replyto" required className="block font-bold">
				Email
				<input type="email" name="_replyto" className="block w-full border-2 rounded" />
			</label>

			<label htmlFor="message" className="block font-bold">
				Message
				<textarea name="message" required className="block w-full border-2 rounded" />
			</label>

			<input type="hidden" name="_next" value="/thanks" />
			<input type="text" className="hidden" name="_gotcha" value="" />

			<hr className="m-3 border-teal-600" />

			<input type="submit" value="Send" className="p-3 rounded bg-teal-700 w-full text-white" />
		</form>
	</Layout>
);
