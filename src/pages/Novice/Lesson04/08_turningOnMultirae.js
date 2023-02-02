import "../../../App.css";
import React from "react";
import AnimSlider from "../../../components/Slider/AnimSlider";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ConfigMultiRae } from "../../../data/sliderContent/ConfigMultiRae";

import blackBootDisplay from "../../../img/blackBoot_display01.png";
const sliderContent = ConfigMultiRae;
const sliderHeader = "Turning On the MultiRAE";
// const Div = styled("div")``;
export default (props) => {
     return (
          <div className=''>
               <img
                    src={blackBootDisplay}
                    className=''
                    alt='blackBootDisplay'
               />
          </div>
     );
};
