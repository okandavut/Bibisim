import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../reducers";

const persistConfiguration = {
  key: "root",
  storage: storage
};

const cpersistReducer = persistReducer(persistConfiguration, reducers);
const logger = createLogger({});

export default function configureStore(onComplete: () => void): any {
  const reduxCompose = compose(applyMiddleware(thunk, logger));
  const store = createStore(cpersistReducer, reduxCompose);
  let storePersistor = persistStore(store);

  return { store, storePersistor };
}