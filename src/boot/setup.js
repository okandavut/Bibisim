import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./configureStore";
import App from "../App";
const { store, storePersistor } = configureStore();

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
          persistor={storePersistor}
        >
          <App />
        </PersistGate>
      </Provider>
    );
  }
}