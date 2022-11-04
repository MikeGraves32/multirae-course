import "../../App.css";
import React, { useState } from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import multirae_front from "../../img/multirae_front_01.png";
import sensor_Oxygen from "../../img/sensors/sensor_Oxygen.png";
import sensor_ChlorineCl2 from "../../img/sensors/sensor_ChlorineCl2.png";
import sensor_SulfurDioxideSO2 from "../../img/sensors/sensor_SulfurDioxideSO2.png";
import sensor_PID from "../../img/sensors/sensor_PID.png";
import sensor_LEL from "../../img/sensors/sensor_LEL.png";

import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Configuration of the Multi-RAE Gas Monitor";
  return (
    <section className="container main-content">
      <h2 className="pgTitle">{pgTitle}</h2>
      {/* <Typography variant='h5' color='textPrimary' component='h1'>
                    Novice
               </Typography> */}
      {/* <section className='VideoSection'>
                    <video controls autostart autoPlay src={Video} type="video/mp4" /> */}
      {/* <Player playsInline poster="../images/poster.png" src={Video} /> 
                    <Video />
               </section>*/}
      <div className="row">
        <div class="col-4 courseLeftBox">
          <div>
            <h2>Multi-RAE Gas Monitor</h2>
          </div>
          <div className="multiRae-yellow">
            <img src={multirae_front} className="multiRae-yellow" />
          </div>
        </div>
        <div class="col-8">
          <div>
            <h2>Yellow Boot Cover</h2>
          </div>
          <div>
            <img src={sensor_ChlorineCl2} />
            <span>
              4. Chlorine (Cl<sub>2</sub>)
            </span>
          </div>
          <div>
            <img src={sensor_PID} />
            5. Photo Ionization Detector (PID)
          </div>
          <div>
            <img src={sensor_Oxygen} />
            3. Oxygen (O<sub>2</sub>)
          </div>
          <div>
            <img src={sensor_SulfurDioxideSO2} />
            2. Sulfur Dioxide (SO<sub>2</sub>)
          </div>

          <div>
            <img src={sensor_LEL} />
            1. Lower Explosive Limit (LEL)
          </div>
        </div>
      </div>
    </section>
  );
};
