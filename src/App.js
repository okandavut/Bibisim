import * as React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={"/"} component={HomeContainer} />
      </Switch>
    );
  }
}