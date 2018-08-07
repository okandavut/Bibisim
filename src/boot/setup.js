import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./configureStore";
import App from "../App";
let { store, persistStore } = configureStore();

export interface Props {}
export interface State {
  store: Object;
  isLoading: boolean;
}

export default class Setup extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<p>App is loading...</p>}
          persistor={persistStore}
        >
          <App />
        </PersistGate>
      </Provider>
    );
  }
}