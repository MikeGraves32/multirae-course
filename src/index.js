import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./pages/LandingPage";
import LandingPage from "./pages/LandingPage";
import Novice from "./pages/Novice";
import Intermediate from "./pages/Intermediate";
import Advance from "./pages/Advance";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pages/LandingPage" element={<LandingPage />} />
      <Route path="/pages/Novice" element={<Novice />} />
      <Route path="/pages/Intermediate" element={<Intermediate />} />
      <Route path="/pages/Advance" element={<Advance />} />
    </Routes>
  </BrowserRouter>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
