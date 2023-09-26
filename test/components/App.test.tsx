import React from "react";
import { render } from "@testing-library/react";
import { App } from "../../src/components/App";

describe("App test suite", () => {
  test("render component correctly", () => {
    const { getByText } = render(<App />);
    const helloText = getByText(/Welcome to Home/i);
    expect(helloText).toBeInTheDocument();
  });

  test("get label Login", () => {
    const { getByText } = render(<App />);
    const helloText = getByText(/Login/i);
    expect(helloText).toBeInTheDocument();
  });
});
