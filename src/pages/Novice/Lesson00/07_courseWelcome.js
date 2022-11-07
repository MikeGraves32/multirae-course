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
  const pgTitle = "Welcome";
  return (
    <section className="container">
      <h2 className="pgTitle">{pgTitle}</h2>
      {/* <Typography variant='h5' color='textPrimary' component='h1'>
                    Novice
               </Typography> */}
      {/* <section className='VideoSection'>
                    <video controls autostart autoPlay src={Video} type="video/mp4" /> */}
      {/* <Player playsInline poster="../images/poster.png" src={Video} /> 
                    <Video />
               </section>*/}
      <div className="card-content">
        <div className="content">
          <div className="card">
            Welcome to L2 Defense’s Gas Monitor and TIC Vapor Detector
            (Multi-Rae Pro) Training – Novice Level
          </div>
        </div>
      </div>
      <div className="container-lg">
        <LoremIpsum p={2} />
      </div>
    </section>
  );
};
