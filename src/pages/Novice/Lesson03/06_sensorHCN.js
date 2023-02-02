import "../../../App.css";
import React from "react";
import AnimSlider from "../../../components/Slider/AnimSlider";

import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ConfigMultiRae } from "../../../data/sliderContent/ConfigurationSensor_HCN";

const sliderContent = ConfigMultiRae;
const sliderHeader = "Hydrogen Cyanide (HCN): Black Boot Cover";

// const Div = styled("div")``;
export default (props) => {
     const pgTitle = "MultiRAE TIC Vapor Detector Specific Sensors - HCN";
     return (
          <section className='container main-content'>
               <h2 className='pgTitle'>{pgTitle}</h2>
               <AnimSlider content={sliderContent} slideHeader={sliderHeader} />
          </section>
     );
};
