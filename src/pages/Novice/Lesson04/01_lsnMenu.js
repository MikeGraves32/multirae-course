import "../../../App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Lesson Menu: Lesson 03 - Black Boot Configuration";
  return (
    <section className="container">
      <h2 className="pgTitle">{pgTitle}</h2>
      <ul className="nav">
        <div className="card">
          <div className="card-content">
            <div className="content">
              {/* <div className='container'> */}
              <li className="nav-item row align-items-start">
                Lesson 1 - MultiRAE Overview
              </li>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <li className="nav-item selected">
                {/* <Link to='../novLsn02'> */}
                Lesson 2 - Yellow Boot Configuration
                {/* </Link> */}
              </li>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <li className="nav-item">
                <Link to="../novLsn03">
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
                {/* <Link to='../novLsn04'> */}
                Lesson 4 - Capabilities &amp; Limitations
                {/* </Link> */}
              </li>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <li className="nav-item">
                {/* <Link to='../novLsn05'> */}
                Lesson 5 - Controls &amp; Indicators
                {/* </Link> */}
              </li>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <li className="nav-item">
                {/* <Link to='../novLsn06'> */}
                Lesson 6 - Components
                {/* </Link> */}
              </li>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <li className="nav-item ">
                {/* <Link to='../novLsn07'> */}
                Lesson 7 - Device Operation
                {/* </Link> */}
              </li>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <li className="nav-item">
                {/* <Link to='../novLsn08'> */}
                Lesson 8 - Results
                {/* </Link> */}
              </li>
            </div>
          </div>
        </div>
      </ul>
    </section>
  );
};
