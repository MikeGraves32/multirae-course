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
  const pgTitle = "Lesson 1 - Sensors";
  return (
    <section className="">
      <h2 className="pgTitle">{pgTitle}</h2>
      {/* <Typography variant='h5' color='textPrimary' component='h1'>
                    Novice
               </Typography> */}
      {/* <section className='VideoSection'>
                    <video controls autostart autoPlay src={Video} type="video/mp4" /> */}
      {/* <Player playsInline poster="../images/poster.png" src={Video} /> 
                    <Video />
               </section>*/}
      <div className="container-lg">
        <div>
          <p>
            Each monitor is configured with five sensors. Each sensor is
            designated for a specific slot to revent cross-sensitivity.
          </p>
        </div>
        <div>
          <h3>Gas Monitor (Yellow Boot)</h3>
          <ol>
            <li>Lower Explosive Limet (LEL)</li>
            <li>
              Sulfur Dioxide (SO<sub>2</sub>)
            </li>
            <li>
              Oxygen (O<sub>2</sub>)
            </li>
            <li>
              Chlorine (Cl<sub>2</sub>)
            </li>
            <li>Photo Ionization Detector</li>
          </ol>
        </div>
        <div>
          <h3>TIC Vapor (Black Boot)</h3>
          <ol>
            <li>Lower Explosive Limet (LEL)</li>
            <li>
              Ammonia (NH<sub>3</sub>)
            </li>
            <li>Hydrogen Cyanide (HCN)</li>
            <li>
              Oxygen (O<sub>2</sub>)
            </li>
            <li>
              Hydrogen Sulfide (H<sub>2</sub>S)/Carbon Monoxide (CO)
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
