import "../../App.css";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Novice from "../tracks/Novice";
// import Intermediate from "../tracks/Intermediate";
// import Advance from "../tracks/Advance";
// import Video from "../components/Video";
// import "@fontsource/roboto";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import { LoremIpsum } from "react-lorem-ipsum";
import Typography from "@mui/material/Typography";
// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Lesson 2 - Yellow Boot Configuration";
  return (
    <div className="lsn-splash">
      <div className="row">
        {/* <col className='col-4'> */}
        <h2 className="pgTitle">{pgTitle}</h2>
        {/* </col> */}
      </div>
      {/* <Typography variant='h5' color='textPrimary' component='h1'>
                    Novice
               </Typography> */}
      {/* <section className='VideoSection'>
                    <video controls autostart autoPlay src={Video} type="video/mp4" /> */}
      {/* <Player playsInline poster="../images/poster.png" src={Video} /> 
                    <Video />
               </section>*/}
      {/* <div className='container-lg'>
                    <LoremIpsum p={2} />
               </div> */}
    </div>
  );
};
