import React from "react";
import { Spaces } from "../../../src/components/spaces/Spaces";
import ReactDOM from "react-dom";
import { Space } from "../../../src/model/Model";
import { fireEvent, waitFor } from "@testing-library/react";
describe("Spaces component test suite", () => {
  let container: HTMLDivElement;
  const dataServiceMock = {
    getSpaces: jest.fn(),
    reverseSpace: jest.fn(),
  };

  const someSpaces: Space[] = [
    {
      location: "Paris",
      name: "Best Location",
      spaceId: "123",
    },
    {
      location: "Paris",
      name: "Best Location",
      spaceId: "124",
    },
  ];

  beforeEach(() => {
    dataServiceMock.getSpaces.mockResolvedValue(someSpaces);
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Spaces dataService={dataServiceMock as any} />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
    jest.clearAllMocks();
  });

  test("Renders all spaces", () => {
    const spaces = document.getElementsByClassName("spaceComponent");
    expect(spaces!.length).toBe(2);
  });

  test("Correctly calls for reservation all spaces", () => {
    const buttons = document.querySelectorAll("button");
    expect(buttons!.length).toBe(2);
    fireEvent.click(buttons[0]);
    expect(dataServiceMock.reverseSpace).toBeCalledWith("123");
  });

  test("Correctly displays modal with reservation", async () => {
    dataServiceMock.reverseSpace.mockResolvedValueOnce("5555");
    const buttons = document.querySelectorAll("button");
    fireEvent.click(buttons[0]);
    expect(dataServiceMock.reverseSpace).toBeCalledWith("123");

    const modalValue = await waitFor(() =>
      document.getElementsByClassName("modalText")
    );
    expect(modalValue[0]).toHaveTextContent(
      "You reserved the space with id 123 and got the reservation number 5555"
    );
  });

  test("Correctly displays modal without reservation", async () => {
    dataServiceMock.reverseSpace.mockResolvedValueOnce(undefined);
    const buttons = document.querySelectorAll("button");
    fireEvent.click(buttons[0]);
    expect(dataServiceMock.reverseSpace).toBeCalledWith("123");

    const modalValue = await waitFor(() =>
      document.getElementsByClassName("modalText")
    );
    expect(modalValue[0]).toHaveTextContent(
      "You cannot reserve the space with id 123"
    );
  });

  test("Correctly closes modal", async () => {
    dataServiceMock.reverseSpace.mockResolvedValueOnce(undefined);
    const buttons = document.querySelectorAll("button");
    fireEvent.click(buttons[0]);
    expect(dataServiceMock.reverseSpace).toBeCalledWith("123");

    const btnClose = await waitFor(() =>
      document.getElementsByClassName("btnClose")
    );
    // fireEvent.click(modalValue as HTMLButtonElement);
    expect(btnClose[0]).toHaveTextContent("Ok, close");

    const modalValue = await waitFor(() =>
      document.getElementsByClassName("modalText")
    );
    expect(modalValue[0]).not.toBeUndefined();
  });
});
