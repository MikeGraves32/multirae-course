import "../../../App.css";
import React from "react";
import AnimSlider from "../../../components/Slider/AnimSlider";
import Video from "../components/Video";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ConfigMultiRae } from "../../../data/sliderContent/ConfigMultiRae";

const sliderContent = ConfigMultiRae;
const sliderHeader = "Cross Sensitivity";
// const Div = styled("div")``;
export default (props) => {
  return (
    // <section className='w-100'>
    <section className="VideoSection">
      <video controls autostart autoPlay src={Video} type="video/mp4" />
    </section>

    // <AnimSlider content={sliderContent} slideHeader={sliderHeader} />
    // </section>
  );
};
