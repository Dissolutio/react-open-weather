import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import App2 from "./App2/App2";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
ReactDOM.render(<App2 />, document.getElementById("root"));
registerServiceWorker();
