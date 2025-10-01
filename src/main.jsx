import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBar } from "./NavBar.jsx";
import SignInApp from "./SignInApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <SignInApp />
  </React.StrictMode>
);
