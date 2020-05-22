import React from "react";
import renderer from "react-test-renderer";

import Bio from "../src/components/bio";

describe("Bio", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<Bio className="hello" />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
