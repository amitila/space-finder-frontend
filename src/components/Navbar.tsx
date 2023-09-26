import React from "react";
import { User } from "../model/Model";
import { Link } from "react-router-dom";

export class Navbar extends React.Component<{ user: User | undefined }> {
  render() {
    let loginLogOut: any;
    if (this.props.user) {
      loginLogOut = (
        <Link className="login" to="/logout">
          {this.props.user.userName}
        </Link>
      );
    } else {
      loginLogOut = (
        <Link data-testid="login-link" className="login" to="/login">
          Login
        </Link>
      );
    }

    return (
      <div className="navbar">
        <Link data-testid="home-link" className="link" to="/">
          Home
        </Link>
        <Link data-testid="profile-link" className="link" to="/profile">
          Profile
        </Link>
        <Link data-testid="spaces-link" className="link" to="/spaces">
          Spaces
        </Link>
        <span>{loginLogOut}</span>
      </div>
    );
  }
}
