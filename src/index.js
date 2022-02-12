import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/index.css";
import App from "./views/App.js";
import NftSel from './views/NftSel.js';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/app"
        render={(props) => <App {...props} />}
      />
      <Route path="/" element={<App/>} />
      <Route path="/:id" element={<NftSel/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);