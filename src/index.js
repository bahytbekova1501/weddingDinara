import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductContext from "./Context/ProductContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContext>
    <App />
  </ProductContext>
);
