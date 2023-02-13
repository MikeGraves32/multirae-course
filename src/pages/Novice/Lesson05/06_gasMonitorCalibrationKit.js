import "../../../App.css";
import React from "react";
import AnimSlider from "../../../components/Slider/AnimSlider";

import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ConfigMultiRae } from "../../../data/sliderContent/GasMonitor_CalibrationKit";

const sliderContent = ConfigMultiRae;
const sliderHeader = "Gas Monitor Calibration Kit";

// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Gas Monitor Calibration Kit";
  return (
    <section className=" main-content">
      <h2 className="pgTitle">{pgTitle}</h2>
      <AnimSlider content={sliderContent} slideHeader={sliderHeader} />
    </section>
  );
};
