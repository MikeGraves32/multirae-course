import "../App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Novice from "../tracks/Novice";
// import Intermediate from "../tracks/Intermediate";
// import Advance from "../tracks/Advance";
import Video from "../components/Video";
// import "@fontsource/roboto";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import { LoremIpsum } from "react-lorem-ipsum";
import Typography from "@mui/material/Typography";
import LsnPg01 from "./Lesson01/01_lsnMenu";
import LsnPg02 from "./Lesson01/02_introSplash";
import LsnPg03 from "./Lesson01/03_objectives";
import LsnPg04 from "./Lesson01/04_devDescription";
import LsnPg05 from "./Lesson01/05_devFeatures";
import LsnPg06 from "./Lesson01/06_devDescriptionStatic";
import LsnPg07 from "./Lesson01/07_sensorCharacteristics";
import LsnPg08 from "./Lesson01/08_crossSensitivity";
import LsnPg09 from "./Lesson01/09_checkOnLearning01";

// const Div = styled("div")``;
const lsnTitle = "Lesson 1 - Device Comparison";
const Lesson01 = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="lsnTitle">{lsnTitle}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <LsnPg01 />
            <Link to="./pages/novLsn01">Novice</Link>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <LsnPg02 />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <LsnPg03 />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <LsnPg04 />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <LsnPg05 />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <LsnPg06 />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <LsnPg07 />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <LsnPg08 />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <LsnPg09 />
          </div>
        </div>

        {/*   <Typography variant='h5' color='textPrimary' component='h1'>
                    Novice
               </Typography>
               <section className='VideoSection'>
                    <video controls autostart autoPlay src={Video} type="video/mp4" /> */}
        {/* <Player playsInline poster="../images/poster.png" src={Video} />
                    <Video /> 
               </section>
               <div className='container-lg'>
                    <LoremIpsum p={2} />
               </div>*/}
      </section>
    </>
  );
};
export default Lesson01;
