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
import CourseIntro from "./pages/novLsn00";
import Lesson01 from "./pages/novLsn01";
import Lesson02 from "./pages/novLsn02";
import Lesson03 from "./pages/novLsn03";
import Lesson04 from "./pages/novLsn04";
import Lesson05 from "./pages/novLsn05";
import Lesson06 from "./pages/novLsn06";
import Lesson07 from "./pages/novLsn07";
import Lesson08 from "./pages/novLsn08";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <BrowserRouter>
          <Routes>
               <Route path='/' element={<App />} />
               <Route path='/pages/LandingPage' element={<LandingPage />} />
               <Route path='/pages/novLsn00' element={<CourseIntro />} />
               <Route path='/pages/novLsn01' element={<Lesson01 />} />
               <Route path='/pages/novLsn02' element={<Lesson02 />} />
               <Route path='/pages/novLsn03' element={<Lesson03 />} />
               <Route path='/pages/novLsn04' element={<Lesson04 />} />
               <Route path='/pages/novLsn05' element={<Lesson05 />} />
               <Route path='/pages/novLsn06' element={<Lesson06 />} />
               <Route path='/pages/novLsn07' element={<Lesson07 />} />
               <Route path='/pages/novLsn08' element={<Lesson08 />} />
               <Route path='/pages/Novice' element={<Novice />} />
               <Route path='/pages/Intermediate' element={<Intermediate />} />
               <Route path='/pages/Advance' element={<Advance />} />
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
