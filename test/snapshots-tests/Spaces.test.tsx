import React from "react";
import { create } from "react-test-renderer";
import { Spaces } from "../../src/components/spaces/Spaces";
import { Space } from "../../src/model/Model";

describe("Spaces snapshot testing", () => {
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

  test("initial test", () => {
    dataServiceMock.getSpaces.mockResolvedValue(someSpaces);
    const snap = create(<Spaces dataService={dataServiceMock as any} />);
    expect(snap).toMatchSnapshot();
  });
});
