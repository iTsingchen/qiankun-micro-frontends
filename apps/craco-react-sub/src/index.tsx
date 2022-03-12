import React from "react";
import ReactDOM from "react-dom";

import "./public-path";

import reportWebVitals from "./reportWebVitals";
import createLifecycle from "./qiankun";
import { App, AppProps } from "./app";

const render = (props: AppProps, element: Element) => {
  ReactDOM.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>,
    element
  );
};

if (window.__POWERED_BY_QIANKUN__) {
  // @ts-ignore
  window[process.env.__LIFECYCLE_NAME_FOR_QIANKUN__] = createLifecycle(render);
} else {
  render({}, document.getElementById("sub-root")!);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
