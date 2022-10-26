import "../../App.css";
import * as React from "react";
import SensorCharacteristics from "../../components/tab/Tabs";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { LoremIpsum } from "react-lorem-ipsum";

export default (props) => {
     const pgTitle = "Sensor Characteristic Definitions";
     return (
          <section className='container'>
               <h2 className='pgTitle'>{pgTitle}</h2>
               {/* <Typography variant='h5' color='textPrimary' component='h1'>
                    Novice
               </Typography> */}
               {/* <section className='VideoSection'>
                    <video controls autostart autoPlay src={Video} type="video/mp4" /> */}
               {/* <Player playsInline poster="../images/poster.png" src={Video} />
                    <Video />
               </section>*/}

               <div className='container-lg'>
                    <SensorCharacteristics />
               </div>
          </section>
     );
};
