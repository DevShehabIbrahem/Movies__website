import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
