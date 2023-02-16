import "../../../App.css";
import React, { useState } from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Video from "../../../assets/video/Full Span 02.mp4";
import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Use of The MultiRAE - Video";
  return (
    <section className="container">
      <h2 className="pgTitle">{pgTitle}</h2>

      <div className="container-lg">
        {" "}
        <section className="VideoSection">
          <video controls autostart autoPlay src={Video} type="video/mp4" />
        </section>
      </div>
    </section>
  );
};
