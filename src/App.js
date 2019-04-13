import React, { Component } from "react";
import { Provider } from "unstated";
import { Switch, Route } from "react-router-dom";
// import { anyContainer } from "./containers/any";
import { UnloggedHeader } from "./components/UnloggedHeader"
import { LoggedHeader } from "./components/LoggedHeader"
import HandleBarcode from "./components/HandleBarcode"

import RegisterPage from "./views/RegisterPageView"
import LoginPage from "./views/LoginPageView"
import LandingPage from './views/LandingPage'

import { esteticContainer } from "./containers/estetics"
import Cookies from "universal-cookie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: true,
      isLoggedIn: true
    };
    this.cookies = new Cookies()

  }

  isLoggedIn() {
    if (this.cookies.get('Access-Token')) {
      return false
    } else {
      return true
    }
  }

  getProperRoute() {
    if (!this.isLoggedIn()) {
      return (
        <Route
          exact
          path="/"
          href={window.location.href = "https://tardis-back.herokuapp.com/scanner"}
        />)
    } else {
      return (
        <Route
          exact
          path="/"
          component={LandingPage}
        />)
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
                component={LandingPage}
              />
              {/* {this.getProperRoute()} */}
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/scanner" href={window.location.href = "https://tardis-back.herokuapp.com/scanner"} />
              <Route path="/:barcode" component={HandleBarcode} />
              <Route path="/home" component={LandingPage} />
            </Switch>
          </div>
        </Provider>
      </div >
    );
  }
}

export default App;
