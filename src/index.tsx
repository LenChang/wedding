import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ReactComponent as Svg } from "./logo.svg";
import reportWebVitals from "./reportWebVitals";
import MetaTags from "react-meta-tags";

ReactDOM.render(
  <React.StrictMode>
    <MetaTags>
      <title>Test1234</title>
      <meta name="description" content="Some description for Test1234" />
      <meta property="og:title" content="MyApp for Test1234" />
    </MetaTags>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
