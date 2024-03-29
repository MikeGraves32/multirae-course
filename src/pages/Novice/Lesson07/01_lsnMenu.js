import "../../../App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const pgTitle = "Lesson Menu: Lesson 7 - Device Operation";
  return (
    <>
      <section className="">
        <h2 className="pgTitle">{pgTitle}</h2>
        <ul className="nav">
          <div className="lsnMenu-card">
            <div className="lsnMenu-card-content">
              <div className="content">
                {/* <div className='container'> */}
                <li className="nav-item row align-items-start">
                  <Link to="../pages/novLsn01">
                    Lesson 1 - MultiRAE Overview
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="lsnMenu-card">
            <div className="lsnMenu-card-content">
              <div className="content">
                <li className="nav-item">
                  <Link to="../pages/novLsn02">
                    Lesson 2 - Yellow Boot Configuration
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="lsnMenu-card">
            <div className="lsnMenu-card-content">
              <div className="content">
                <li className="nav-item">
                  <Link to="../pages/novLsn03">
                    Lesson 3 - Black Boot Configuration
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="lsnMenu-card">
            <div className="lsnMenu-card-content">
              <div className="content">
                <li className="nav-item row align-items-start">
                  <Link to="../pages/novLsn04">
                    Lesson 4 - Capabilities &amp; Limitations
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="lsnMenu-card">
            <div className="lsnMenu-card-content">
              <div className="content">
                <li className="nav-item">
                  <Link to="../pages/novLsn05">
                    Lesson 5 - Controls &amp; Indicators
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="lsnMenu-card">
            <div className="lsnMenu-card-content">
              <div className="content">
                <li className="nav-item">
                  <Link to="\.\./pages/novLsn06">
                    Lesson 6 - Operate the MultiRAE
                  </Link>
                </li>
              </div>
            </div>
          </div>

          <div className="lsnMenu-card">
            <div className="lsnMenu-card-content">
              <div className="content">
                <li className="nav-item">
                  <Link to="\.\./pages/novLsn07">Lesson 7 - Results</Link>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </section>
    </>
  );
};
