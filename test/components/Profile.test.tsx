import { User, UserAttribute } from "../../src/model/Model";
import { AuthService } from "../../src/services/AuthService";
import { Profile } from "../../src/components/Profile";
import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";
describe("Profile test suite", () => {
  let container: HTMLDivElement;

  const user: User = {
    userName: "userName",
    email: "ami@gmail.com",
  };

  const authServiceMock = {
    login: jest.fn(),
    getUserAttribute: jest.fn(),
  };

  const userAttributes: UserAttribute[] = [
    {
      Name: "description",
      Value: "Best user ever",
    },
    {
      Name: "job",
      Value: "engineer",
    },
    {
      Name: "age",
      Value: "25",
    },
    {
      Name: "experience",
      Value: "3 years",
    },
  ];

  test("Setup test with user", () => {
    authServiceMock.getUserAttribute.mockResolvedValueOnce(userAttributes);
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <Profile user={user} authService={authServiceMock} />,
      container
    );
  });

  test("renders component with user correctly", () => {
    const table = container.querySelector("table");
    expect(table!.rows.length).toBe(4);
  });

  test("teardown test with user", () => {
    document.body.removeChild(container);
    container.remove();
    jest.clearAllMocks();
  });

  test("Setup test without user", () => {
    authServiceMock.getUserAttribute.mockResolvedValueOnce(userAttributes);
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <StaticRouter>
        <Profile user={undefined} authService={authServiceMock} />
      </StaticRouter>,
      container
    );
  });

  test("renders component without user correctly", () => {
    expect(authServiceMock.getUserAttribute).toBeCalledTimes(0);
    const table = container.querySelector("table");
    expect(table).toBeNull();
  });

  test("teardown test without user", () => {
    document.body.removeChild(container);
    container.remove();
  });
});

export {};
