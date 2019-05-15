import React, { Component } from "react";
import { Route } from "react-router-dom";
import Container from "pages/container";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Route render={({ location }) =>
        <Route
          location={location}
          key={location.pathname}
          path="/:name/:query?"
          component={Container}
          exact
          strict
        />
      } />
    );
  }
}