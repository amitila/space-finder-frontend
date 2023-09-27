import React from "react";
import { create } from "react-test-renderer";
import { SpaceComponent } from "../../src/components/spaces/SpaceComponent";

describe("Space component snapshot testing", () => {
  const reserveSpaceMock = jest.fn();

  test("initial test", () => {
    const snap = create(
      <SpaceComponent
        location={"someLocation"}
        name={"someName"}
        reserveSpace={reserveSpaceMock}
        spaceId={"123"}
        photoUrl={"some.url"}
      />
    );
    expect(snap).toMatchSnapshot();
  });
});
