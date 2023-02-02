import "../../../App.css";
import React from "react";
import AnimSlider from "../../../components/Slider/AnimSlider";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ConfigMultiRae } from "../../../data/sliderContent/ConfigMultiRae";

import blackBootYkey from "../../../img/blackBoot_yKey01.png";
const sliderContent = ConfigMultiRae;
const sliderHeader = "Testing Alarm Indicators";
// const Div = styled("div")``;
export default (props) => {
     return (
          <div className=''>
               <img src={blackBootYkey} className='' alt='blackBootYkey' />
          </div>
     );
};
