import "../../../App.css";
import React from "react";
import AnimSlider from "../../../components/Slider/AnimSlider";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ConfigMultiRae } from "../../../data/sliderContent/ConfigMultiRae";

import blackBootModekey from "../../../img/blackBoot_modeKey01.png";
const sliderContent = ConfigMultiRae;
const sliderHeader = "Turning Off the Multi-RAE";
// const Div = styled("div")``;
export default (props) => {
     return (
          <div className=''>
               <img
                    src={blackBootModekey}
                    className=''
                    alt='blackBootModekey'
               />
          </div>
     );
};
