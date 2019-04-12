import React, { Component } from "react";
import { Provider } from "unstated";
import { Switch, Route } from "react-router-dom";
// import { anyContainer } from "./containers/any";
<<<<<<< HEAD
import { UnloggedHeader } from "./components/UnloggedHeader"
import { LoggedHeader } from "./components/LoggedHeader"

import RegisterPage from "./views/RegisterPageView"
import LoginPage from "./views/LoginPageView"
=======
import LandingPage from './views/LandingPage'
>>>>>>> frontend/ux

import { esteticContainer } from "./containers/estetics"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: true,
      isLoggedIn: true
    };

  }

  isLoggedIn() {
    if (window.sessionStorage.getItem('Access-Token')) {
      return false
    } else {
      return true
    }
  }

  getProperHeader() {
    if (this.isLoggedIn()) {
      return (
        <UnloggedHeader
          refresh={() => {
            this.setState({ refresh: !this.state.refresh });
          }}
        />)
    } else {
      return (
        <LoggedHeader
          refresh={() => {
            this.setState({ refresh: !this.state.refresh });
          }}
        />)
    }
  }

  render() {
    return (
      <div>
        <Provider>
          {this.getProperHeader()}
          <div className="switch" style={{ backgroundColor: esteticContainer.getColor("background") }}>
            <Switch >
              <Route
                exact
                path="/"
                component={this.isLoggedIn() ? LandingPage : LoginPage}
              />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </Switch>
          </div>
        </Provider>
      </div >
    );
  }
}

export default App;
