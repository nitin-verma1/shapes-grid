import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shape_filters_reducer } from "./reducers";
import App from "./components/App";
import './assets/styles.css';
import "bootstrap/dist/css/bootstrap.css";

const store = createStore(shape_filters_reducer);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));