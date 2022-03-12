import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./app";
import bootstrap from "./qiankun";
import reportWebVitals from "./reportWebVitals";

const render = (loading: boolean) =>
  ReactDOM.render(
    <React.StrictMode>
      <App loading={loading} />
    </React.StrictMode>,
    document.getElementById("main-root")
  );

bootstrap(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
