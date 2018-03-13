import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducers";

import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer, applyMiddleware(thunk));

const AppRobot = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppRobot />, document.getElementById("root"));
registerServiceWorker();
