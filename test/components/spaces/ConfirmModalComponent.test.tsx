import React from "react";
import { ConfirmModalComponent } from "../../../src/components/spaces/ConfirmModalComponent";
import ReactDOM from "react-dom";
import { fireEvent } from "@testing-library/react";

describe("Confirm modal test suite", () => {
  let container: HTMLDivElement;
  const closeMock = jest.fn();

  test("Setup test showing modal", () => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <ConfirmModalComponent
        show={true}
        content={"show content"}
        close={closeMock}
      />,
      container
    );
  });

  test("showing modal text correctly", () => {
    const modalContent = container.querySelector("h3");
    expect(modalContent!.textContent).toBe("show content");
  });

  test("modal button action", () => {
    const modalButton = container.querySelector("button");
    expect(modalButton!.textContent).toBe("Ok, close");
    fireEvent.click(modalButton!);
    expect(closeMock).toBeCalled();
  });

  test("teardown test with show", () => {
    document.body.removeChild(container);
    container.remove();
  });

  test("Setup test hiding modal", () => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <ConfirmModalComponent
        show={false}
        content={"show content"}
        close={closeMock}
      />,
      container
    );
  });

  test("hiding modal", () => {
    expect(container).toBeEmptyDOMElement();
  });
});
