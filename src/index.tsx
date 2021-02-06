import React from "react";
import ReactDOM from "react-dom";
import MetaTags from "react-meta-tags";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import logo from "./static/images/logoWedding.jpg";

ReactDOM.render(
  <React.StrictMode>
    <MetaTags>
      <title>懷倫-冠陵婚禮邀請函-20210228</title>
      <meta name="description" content="懷倫-冠陵婚禮邀請函-20210228" />
      <meta property="og:title" content="懷倫-冠陵婚禮邀請函" />
      <meta
        property="og:image"
        content="https://www.flaticon.com/premium-icon/icons/svg/769/769582.svg"
      />
    </MetaTags>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
