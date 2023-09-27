import React from "react";
import { create } from "react-test-renderer";
import { Home } from "../../src/components/Home";

describe("Home component snapshot testing", () => {
  test("initial test", () => {
    const snap = create(<Home />);
    expect(snap).toMatchSnapshot();
  });
});
