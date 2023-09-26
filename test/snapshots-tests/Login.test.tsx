import { create } from "react-test-renderer";
import { Login } from "../../src/components/Login";
import React from "react";

describe("Login component snapshot testing", () => {
  test("initial test", () => {
    const snap = create(<Login authService={{} as any} setUser={{} as any} />);
    expect(snap).toMatchSnapshot();
  });
});
