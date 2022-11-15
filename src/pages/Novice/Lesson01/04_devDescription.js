import "../../../App.css";
import React from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import multirae_yellow from "../../../img/multirae_front_01.png";
import multirae_black from "../../../img/multirae_front_02.png";

import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default () => {
  const pgTitle = "Description of the MultiRAE Devices";
  return (
    <section className="container">
      <h2 className="pgTitle">{pgTitle}</h2>
      <div className="container-lg">
        <div className="multiRae-yellowX col-4">
          <img src={multirae_yellow} className="multiRae-yellowX" />
        </div>
        <div className="multiRae-yellowX col-6">
          <img src={multirae_black} className="multiRae-black" />
        </div>
      </div>
    </section>
  );
};
