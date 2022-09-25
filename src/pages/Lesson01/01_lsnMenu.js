import "../../App.css";
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

//simport { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const pgTitle = "Lesson Menu";
  return (
    <>
      <section className="container">
        <h2 className="pgTitle">{pgTitle}</h2>
        <ul className="nav">
          <div className="card">
            <div className="card-content">
              <div className="content">
                {/* <div className='container'> */}
                <li className="nav-item row align-items-start">
                  <Link to="../pages/novLsn01">
                    Lesson 1 - Device Comparison
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item">
                  <Link to="../pages/novLsn02">
                    Lesson 2 - Yellow Boot Configuration
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item">
                  <Link to="../pages/novLsn03">
                    Lesson 3 - Black Boot Configuration
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item row align-items-start">
                  <Link to="../pages/novLsn04">
                    Lesson 4 - Capabilities &amp; Limitations
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item">
                  <Link to="../pages/novLsn05">
                    Lesson 5 - Controls &amp; Indicators
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item">
                  <Link to="../pages/novLsn06">Lesson 6 - Components</Link>
                </li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item ">
                  <Link to="../pages/novLsn07">
                    Lesson 7 - Device Operation
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item">
                  <Link to="../pages/novLsn08">Lesson 8 - Results</Link>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </section>
    </>
  );
};
