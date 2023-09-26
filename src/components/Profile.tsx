import React from "react";
import { User, UserAttribute } from "../model/Model";
import { AuthService } from "../services/AuthService";
import { Link } from "react-router-dom";

interface ProfileProps {
  user: User | undefined;
  authService: AuthService;
}

interface ProfileState {
  userAttributes: UserAttribute[];
}

export class Profile extends React.Component<ProfileProps, ProfileState> {
  state: ProfileState = {
    userAttributes: [],
  };

  async componentDidMount() {
    if (this.props.user) {
      const userArts = await this.props.authService.getUserAttribute(
        this.props.user
      );
      this.setState({
        userAttributes: userArts,
      });
    }
  }

  private renderUserAttributes() {
    const rows = [];
    for (const userAttribute of this.state.userAttributes) {
      rows.push(
        <tr key={userAttribute.Name}>
          <td>{userAttribute.Name}</td>
          <td>{userAttribute.Value}</td>
        </tr>
      );
    }
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  render() {
    let profileSpace;
    if (this.props.user) {
      profileSpace = (
        <div>
          <h3>Hello {this.props.user.userName}</h3>
          Here are your attributes:
          {this.renderUserAttributes()}
        </div>
      );
    } else {
      profileSpace = (
        <div>
          Please <Link to="login">Login</Link>
        </div>
      );
    }
    return <div>Welcome to Profile {profileSpace}</div>;
  }
}
