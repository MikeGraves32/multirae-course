import "../App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import LsnPg01 from "./Lesson00/01_introSplash";
import LsnPg02 from "./Lesson00/02_vidSlide";
import LsnPg03 from "./Lesson00/03_introduction";
import LsnPg04 from "./Lesson00/04_choosePath";
import LsnPg05 from "./Lesson00/05_avatarEnter";
import LsnPg06 from "./Lesson00/06_courseWelcome.";
import LsnPg07 from "./Lesson00/07_theoryOpsBook";
// const Div = styled("div")``;
const lsnTitle = "Introduction";
const CourseIntro = () => {
     return (
          <>
               <div className='container'>
                    <div className='row'>
                         <div className='col-12'>
                              <h1 className='lsnTitle'>{lsnTitle}</h1>
                         </div>
                    </div>
                    <div className='row'>
                         <div className='col-12'>
                              <LsnPg01 />
                         </div>
                    </div>
                    <div className='row'>
                         <div className='col-12'>
                              <LsnPg02 />
                         </div>
                    </div>
                    <div className='row'>
                         <div className='col-12'>
                              <LsnPg03 />
                         </div>
                    </div>
                    <div className='row'>
                         <div className='col-12'>
                              <LsnPg04 />
                         </div>
                    </div>
                    <div className='row'>
                         <div className='col-12'>
                              <LsnPg05 />
                         </div>
                    </div>
                    <div className='row'>
                         <div className='col-12'>
                              <LsnPg06 />
                         </div>
                    </div>
                    <div className='row'>
                         <div className='col-12'>
                              <LsnPg07 />
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
               </div>
          </>
     );
};
export default CourseIntro;
