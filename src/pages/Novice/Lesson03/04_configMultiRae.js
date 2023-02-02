import "../../../App.css";
import React, { useState } from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import multirae_front from "../../../img/multirae_front_01.png";
import sensor_Oxygen from "../../../img/sensors/sensor_Oxygen.png";
import sensor_HCN from "../../../img/sensors/sensor_HCN.png";
import sensor_AmmoniaNH3 from "../../../img/sensors/sensor_AmmoniaNH3.png";
import sensor_H2S_CO from "../../../img/sensors/sensor_H2S_CO.png";
import sensor_LEL from "../../../img/sensors/sensor_LEL.png";

import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default (props) => {
     const pgTitle = "Configuration of the MultiRAE TIC Vapor Detector";
     return (
          <section className='container main-content'>
               <h2 className='pgTitle'>{pgTitle}</h2>
               {/* <Typography variant='h5' color='textPrimary' component='h1'>
                    Novice
               </Typography> */}
               {/* <section className='VideoSection'>
                    <video controls autostart autoPlay src={Video} type="video/mp4" /> */}
               {/* <Player playsInline poster="../images/poster.png" src={Video} /> 
                    <Video />
               </section>*/}
               <div className='row'>
                    <div class='col-4 courseLeftBox'>
                         <div>
                              <h2>MultiRAE Gas Monitor</h2>
                         </div>
                         <div className='multiRae-yellow'>
                              <img
                                   src={multirae_front}
                                   className='multiRae-yellow'
                              />
                         </div>
                    </div>
                    <div class='col-8'>
                         <div>
                              <h2>Black Boot Cover</h2>
                         </div>
                         <div>
                              <img src={sensor_Oxygen} />
                              4. Oxygen (O<sub>2</sub>)
                         </div>
                         <div>
                              <img src={sensor_H2S_CO} />
                              5. Hydrogen Sulfice (H<sub>2</sub>S)/Carbon
                              Monoxide (CO)
                         </div>
                         <div>
                              <img src={sensor_HCN} />
                              3. Hydrogen Cyanide (HCN)
                         </div>
                         <div>
                              <img src={sensor_AmmoniaNH3} />
                              2. Ammonia (NH<sub>3</sub>)
                         </div>

                         <div>
                              <img src={sensor_LEL} />
                              1. Lower Explosive Level
                         </div>
                    </div>
               </div>
          </section>
     );
};
