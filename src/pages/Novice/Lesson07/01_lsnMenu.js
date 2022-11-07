import "../../../App.css";
import React from "react";
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
      <section className="container">
        <h2 className="pgTitle">{pgTitle}</h2>
        <ul className="nav">
          <div className="card">
            <div className="card-content">
              <div className="content">
                {/* <div className='container'> */}
                <li className="nav-item row align-items-start">
                  Lesson 1 - Device Comparison
                </li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item">
                  Lesson 2 - Yellow Boot Configuration
                </li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item">
                  Lesson 3 - Black Boot Configuration
                </li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item row align-items-start">
                  Lesson 4 - Capabilities &amp; Limitations
                </li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item">
                  Lesson 5 - Controls &amp; Indicators
                </li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item">Lesson 6 - Components</li>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <li className="nav-item selected">
                  Lesson 7 - Device Operation
                </li>
              </div>
            </div>
          </div>
        </ul>
      </section>
    </>
  );
};
