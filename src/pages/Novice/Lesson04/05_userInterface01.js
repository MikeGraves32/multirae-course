import "../../../App.css";
import React, { useState } from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import audio_05 from "../../../assets/media/novice/L4-NC_audio/05_userInterface01.mp3";
import AudioImage from "../../../components/mediaPlayer/audioSync";
import multirae_front from "../../../img/multirae_front_02.png";

const interfaceLbls = [
  "External Filter",
  "Gas Inlet",
  "[Mode] Key",
  "[Y/+] Key",
  "Alarm LED",
  "Alarm LEDs",
  "Display",
  "[N/-] Key",
  "Alarm Buzzer",
  "Alarm LED",
];

// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "User Interface";
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
        <AudioImage
          imageSrc={multirae_front}
          audioSrc={audio_05}
          labels={interfaceLbls}
        />
      </div>
    </section>
  );
};
