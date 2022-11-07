import "../../../App.css";
import React from "react";
import AnimSlider from "../../../components/Slider/AnimSlider";

import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ConfigMultiRae } from "../../../data/sliderContent/ConfigMultiRae";

const sliderContent = ConfigMultiRae;
const sliderHeader = "Oxygen (O2) Sensor: Yellow Boot Cover";

// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Multi-RAE Gas Monitor Specific Sensors - O2";
  return (
    <section className="container main-content">
      <h2 className="pgTitle">{pgTitle}</h2>
      <AnimSlider content={sliderContent} slideHeader={sliderHeader} />
    </section>
  );
};