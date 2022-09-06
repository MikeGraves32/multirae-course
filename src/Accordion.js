import React from "react";
import "./css/components/accordion.css";
import "./App.css";
import Accordion from "./components/Accordion";

export default (props) => {
  return (
    <div className="main">
      <h1>React Accordion</h1>
      <div className="accordion">
        <Accordion
          title="Item 1 - Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="Item 2 - Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="Item 3 - Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="Item 4 - Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
      </div>
    </div>
  );
};
