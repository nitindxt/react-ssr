import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const container = document.getElementById("root");
const element = (
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
);
// syntax: hydrateRoot(element, container[, options])
hydrateRoot(element, container);
// Unlike the createRoot method, you don't need a separate root.render() call here.
