import React from "react";
import { create } from "react-test-renderer";
import { Navbar } from "../../src/components/Navbar";
import { StaticRouter } from "react-router-dom";

describe("Navbar component snapshot testing", () => {
  test("initial test", () => {
    const snap = create(
      <StaticRouter>
        <Navbar user={undefined} />
      </StaticRouter>
    );
    expect(snap).toMatchSnapshot();
  });
});
