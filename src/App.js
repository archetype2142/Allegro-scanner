import React, { Component } from "react";
import { Provider } from "unstated";
import { Switch, Route } from "react-router-dom";
// import { anyContainer } from "./containers/any";
import LandingPage from './views/LandingPage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: true
    };
  }

  render() {
    return (
      <div>
        <Provider>
          <Switch>
            <Route
              exact
              path="/"
              component={LandingPage}
            />
            {/* <Route path="/register" component={RegisterPage} /> */}
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
