import React from "react";
import renderer from "react-test-renderer";

import Container from "../src/components/container";

describe("Container", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(
				<Container>
					<p>Hello</p>
				</Container>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
