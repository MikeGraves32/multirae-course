import "../../../App.css";
import React, { useState } from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Learning Objectives";
  return (
    <section className="">
      <h2 className="pgTitle">{pgTitle}</h2>
      <p>This lesson has the following learning objectives:</p>
      <ul className="nav">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <li className="nav-item row align-items-start">
                Identify the characteristics/features of each device
              </li>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <li className="nav-item row">
                Identify common definitions associated with each device
              </li>{" "}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <li className="nav-item row">
                Identify the capabilities/limitations of the MultiRAE devices
              </li>
            </div>
          </div>
        </div>
      </ul>
    </section>
  );
};
