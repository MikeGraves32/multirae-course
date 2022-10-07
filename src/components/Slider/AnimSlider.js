import React from "react";
// import { render } from "react-dom";
// import Header from './header';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./slider-styles.css";

const content = [
     {
          title: "Positive Cross Sensitivity",
          description:
               "Positive cross sensitivity means this sensor will read HIGHER than the concentration of the cross sensitive gas, causing EARLY alarms and HIGHER readings than the actual level of the present cross sensitive gas.",
          button: "More Information",
          image: "https://i.imgur.com/ZXBtVw7.jpg",
          user: "Luan Gjokaj",
          userProfile: "https://i.imgur.com/JSW6mEk.png",
     },
     {
          title: "Negative Cross Sensitivity",
          description:
               "Negative cross sensitivity means the sensor will read LOWER than the concentration of the cross sensitive gas, causing LATE alarms and LOWER readings than the actual level of the cross sensitive gas. This can be dangerous if the user does not have a sensor specific to the cross sensitive gas, as the concentration could be hazardous to the user before the alarm goes off. See the Cross Sensitivity Table.",
          button: "Discover",
          image: "https://i.imgur.com/DCdBXcq.jpg",
          user: "Erich Behrens",
          userProfile: "https://i.imgur.com/0Clfnu7.png",
     },
];

function AnimSlider() {
     return (
          <div>
               {/* <Header /> */}
               <div className='wrapper'>
                    <h1>Cross Sensitivity</h1>
                    {/* <p>
                         <a href='https://circleci.com/gh/erichbehrens/react-animated-slider/tree/master'>
                              <img
                                   src='https://circleci.com/gh/erichbehrens/react-animated-slider/tree/master.svg?style=shield'
                                   alt='CircleCI'
                              />
                         </a>
                         <a href='https://www.npmjs.com/package/react-animated-slider'>
                              <img
                                   src='https://img.shields.io/npm/v/react-animated-slider.svg'
                                   alt='version'
                              />
                         </a>
                         <a href='https://www.npmjs.com/package/react-animated-slider'>
                              <img
                                   src='https://img.shields.io/npm/dt/react-animated-slider.svg'
                                   alt='downloads'
                              />
                         </a>
                         <a href='https://github.com/erichbehrens/react-animated-slider'>
                              <img src='https://img.shields.io/github/stars/erichbehrens/react-animated-slider.svg?style=social&amp;label=Stars' />
                         </a>
                    </p> */}
               </div>
               <Slider className='slider-wrapper'>
                    {content.map((item, index) => (
                         <div
                              key={index}
                              className='slider-content'
                              style={{
                                   background: `url('${item.image}') no-repeat center center`,
                              }}
                         >
                              <div className='inner'>
                                   <h1>{item.title}</h1>
                                   <p>{item.description}</p>
                              </div>
                              <section>
                                   <button>{item.button}</button>
                                   {/*   <img
                                        src={item.userProfile}
                                        alt={item.user}
                                   />
                                   <span>
                                        Posted by <strong>{item.user}</strong>
                                   </span>*/}
                              </section>
                         </div>
                    ))}
               </Slider>
          </div>
     );
}

export default AnimSlider;
