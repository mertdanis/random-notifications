import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MainContext } from "./Context/MainContext";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&family=Plus+Jakarta+Sans:wght@500;800&display=swap');
</style>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContext>
    <App />
  </MainContext>
);

reportWebVitals();
