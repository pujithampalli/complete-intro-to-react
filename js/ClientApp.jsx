import React from "react";
import { render } from "react-dom";
// import Perf from "react-addons-perf";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app")
  );
};

renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
