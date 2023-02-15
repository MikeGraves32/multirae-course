import "../../../App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// import Lesson01 from "../novLsn00";
// import Lesson02 from "../novLsn02";
// import Lesson03 from "../novLsn03";
// import Lesson04 from "../novLsn04";
// import Lesson05 from "../novLsn05";
// import Lesson06 from "../novLsn06";
// import Lesson07 from "../novLsn07";
// import Lesson08 from "../novLsn08";

// import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const pgTitle = "Final Exam";
  return (
    <>
      <section className="">
        <h2 className="pgTitle">{pgTitle}</h2>
        <ul className="nav">
          <div className="card">
            <div className="card-content">
              <div className="content">
                {/* <div className='container'> */}
                <li className="nav-item row align-items-start">Final Exam</li>
              </div>
            </div>
          </div>
        </ul>
      </section>
    </>
  );
};
