import React from "react";
import { create } from "react-test-renderer";
import { Profile } from "../../src/components/Profile";
import { StaticRouter } from "react-router-dom";

describe("Profile component snapshot testing", () => {
  test("initial test", () => {
    const snap = create(
      <StaticRouter>
        <Profile user={undefined} authService={{} as any} />
      </StaticRouter>
    );
    expect(snap).toMatchSnapshot();
  });
});
