import React from "react";
import ReactDOM from "react-dom";
import App from "app";
import "utils/flexible";
import { HashRouter } from "react-router-dom";
import routerWillLeave from "utils/router-will-leave";
import "static/common.less";

ReactDOM.render((
  <HashRouter getUserConfirmation={routerWillLeave}>
    <App />
  </HashRouter>
), document.getElementById("react-root"));