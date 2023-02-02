import "../App.css";
import React, { useState } from "react";
import LsnPg01 from "./Lesson00/01_introSplash";
import LsnPg02 from "./Lesson00/02_vidSlide";
import LsnPg03 from "./Lesson00/03_introduction";
import LsnPg04 from "./Lesson00/04_choosePath";
import LsnPg05 from "./Lesson00/05_avatarEnter";
import LsnPg06 from "./Lesson00/06_courseWelcome.";
import LsnPg07 from "./Lesson00/07_theoryOpsBook";
// const Div = styled("div")``;
const lsnTitle = "Introduction";
export default (props) => {
     return (
          <section className='container'>
               <div className='row'>
                    <div className='col-12'>
                         <h1 className='lsnTitle'>{lsnTitle}</h1>
                    </div>
               </div>
               <div className='row'>
                    <div className='col-8'>
                         <LsnPg01 />
                    </div>
               </div>
               <div className='row'>
                    <LsnPg02 />
               </div>
               <div className='row'>
                    <LsnPg03 />
               </div>
               <div className='row'>
                    <LsnPg04 />
               </div>
               <div className='row'>
                    <LsnPg05 />
               </div>
               <div className='row'>
                    <LsnPg06 />
               </div>
               {/* <div className='row'>
                    <LsnPg07 />
               </div> */}

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
     );
};
// export default PgContent;
