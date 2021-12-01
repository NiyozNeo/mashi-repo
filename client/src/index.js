import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./Context/AuthContext";
import { Provider as Hello } from "./Context/AdminContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Hello>
        <Provider>
          <App />
        </Provider>
      </Hello>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
