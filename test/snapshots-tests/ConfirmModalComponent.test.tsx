import React from "react";
import { create } from "react-test-renderer";
import { ConfirmModalComponent } from "../../src/components/spaces/ConfirmModalComponent";

describe("Confirm modal snapshot testing", () => {
  const closeMock = jest.fn();

  test("initial test", () => {
    const snap = create(
      <ConfirmModalComponent
        show={true}
        content={"show content"}
        close={closeMock}
      />
    );
    expect(snap).toMatchSnapshot();
  });
});
