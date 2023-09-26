import React from "react";
import { User } from "../model/Model";
import { AuthService } from "../services/AuthService";
import { Login } from "./Login";
import { Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Spaces } from "./spaces/Spaces";
import { DataService } from "../services/DataService";
import history from "../utils/history";

interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();
  private dataService: DataService = new DataService();

  constructor(props: any) {
    super(props);
    this.state = { user: undefined };
    this.setUSer = this.setUSer.bind(this);
  }

  private setUSer(user: User) {
    console.log("user ", user);
    this.setState({
      user: user,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Router history={history}>
          <div>
            <Navbar user={this.state.user} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login">
                <Login authService={this.authService} setUser={this.setUSer} />
              </Route>
              <Route exact path="/profile">
                <Profile
                  authService={this.authService}
                  user={this.state.user}
                />
              </Route>
              <Route exact path="/spaces">
                <Spaces dataService={this.dataService} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
