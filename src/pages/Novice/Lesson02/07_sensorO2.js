import "../../../App.css";
import React from "react";
import AnimSlider from "../../../components/Slider/AnimSlider_left";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ConfigMultiRae } from "../../../data/sliderContent/ConfigurationSensor_CL2";

const sliderContent = ConfigMultiRae;
const sliderHeader = "Chlorine (Cl2) Sensor: Yellow Boot Cover";

// const Div = styled("div")``;
export default (props) => {
     const pgTitle = "MultiRAE Gas Monitor Specific Sensors - Cl2";
     return (
          <section className='container main-content'>
               <h2 className='pgTitle'>{pgTitle}</h2>
               <AnimSlider content={sliderContent} slideHeader={sliderHeader} />
          </section>
     );
};
