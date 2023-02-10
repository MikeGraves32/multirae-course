import React from "react";
// import { render } from "react-dom";
// import Header from './header';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./slider-styles.css";
import { styled } from "@mui/material/styles";

const Div = styled("div")``;
// import { ConfigMultiRae } from "../../../../data/sliderContent/ConfigMultiRae";

// const sliderContent = ConfigMultiRae;
// // const content = [
// //   {
// //     title: "Positive Cross Sensitivity",
// //     description:
// //       "Positive cross sensitivity means this sensor will read HIGHER than the concentration of the cross sensitive gas, causing EARLY alarms and HIGHER readings than the actual level of the present cross sensitive gas.",
// //     button: "More Information",
// //     image: BaseImage,
// //     panelImage: PanelImage,
// //     user: "Luan Gjokaj",
// //     userProfile: "https://i.imgur.com/JSW6mEk.png",
// //   },
// //   {
// //     title: "Negative Cross Sensitivity",
// //     description:
// //       "Negative cross sensitivity means the sensor will read LOWER than the concentration of the cross sensitive gas, causing LATE alarms and LOWER readings than the actual level of the cross sensitive gas. This can be dangerous if the user does not have a sensor specific to the cross sensitive gas, as the concentration could be hazardous to the user before the alarm goes off. See the Cross Sensitivity Table.",
// //     button: "Discover",
// //     image: BaseImage,
// //     panelImage: PanelImage,
// //     user: "Erich Behrens",
// //     userProfile: "https://i.imgur.com/0Clfnu7.png",
// //   },
// // ];
// const sliderHeader = "Cross Sensitivity";
function AnimSlider({ content, slideHeader, slideClass, imgAlt }) {
  return (
    <section className="w-100">
      {/* <Header /> */}
      {/*<div className='wrapper'> <h1>{slideHeader}</h1> </div>*/}
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}>
            <div className="inner">
              <h1>{item.title}</h1>
              <div className="row">
                <div className="col-6">
                  <Div className={slideClass}>
                    <img src={item.panelImage} alt={imgAlt} />
                  </Div>
                </div>
                <div className="col-6">
                  {/* <p>{item.description}</p> */}
                  <img src={item.description} alt={imgAlt} />
                </div>
              </div>
            </div>
            <section>{/* <button>{item.button}</button> */}</section>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default AnimSlider;
