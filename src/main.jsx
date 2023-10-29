import React from "react";
import ReactDOM from "react-dom/client";
import { createPortal } from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./styles/styles.css";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import { MyProfile } from "./components/others/MyProfile.jsx";
import store from "./services/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
    {createPortal(<MyProfile />, document.body)}
  </React.StrictMode>
);
