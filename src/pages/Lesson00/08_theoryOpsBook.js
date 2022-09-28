import "../../App.css";
import React, { useState } from "react";
import DemoBlock from "../../components/book/book";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default (props) => {
     const pgTitle = "Theory of Operations";
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
               <div className='container-lg'>{/* <DemoBlock /> */}</div>
          </section>
     );
};
