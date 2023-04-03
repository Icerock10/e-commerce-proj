import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../styles/index.scss";
import "../styles/media.scss";
import "../i18/i18n";
import { Provider } from "react-redux";
import { store } from "./reducers/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
