import "../../../App.css";
import React, { useState } from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default (props) => {
     const pgTitle = "Learning Objectives";
     return (
          <section className='container'>
               <h2 className='pgTitle'>{pgTitle}</h2>
               <p>This lesson has the following learning objectives:</p>
               <div className='container-lg'>
                    <div className='card'>
                         <div className='card-content'>
                              <div className='content'>
                                   Identify the controls and indicators of the
                                   MultiRAE devices
                              </div>
                         </div>
                    </div>
                    <div className='card'>
                         <div className='card-content'>
                              <div className='content'>
                                   Describe how to turn the MultiRAE device on
                                   and off
                              </div>
                         </div>
                    </div>
                    <div className='card'>
                         <div className='card-content'>
                              <div className='content'>
                                   Describe how to test the alarm indicators
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
