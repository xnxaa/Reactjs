import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "./config/index";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./component/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={config.google.clientId}>
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
);
