import * as React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import IndexContainer from "./containers/IndexContainer";

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={"/home/:id"} component={HomeContainer} />
        <Route path={"/"} component={IndexContainer} />
      </Switch>
    );
  }
}