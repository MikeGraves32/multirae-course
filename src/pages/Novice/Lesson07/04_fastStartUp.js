import "../../../App.css";
import React from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default () => {
  const pgTitle = "Fast Start-Up, Fresh Air Calibration, and Bump Test";
  return (
    <section className="container">
      <h2 className="pgTitle">{pgTitle}</h2>
      <div className="container-lg">
        <LoremIpsum p={2} />
      </div>
    </section>
  );
};
