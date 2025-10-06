import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
import SignInApp from "./SignInApp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<SignInApp />} />
        <Route path="/signin" element={<SignInApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
