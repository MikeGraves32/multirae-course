import "../App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "@fontsource/roboto";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";
import { LoremIpsum } from "react-lorem-ipsum";
import { styled } from "@mui/material/styles";
import Container from "react-bootstrap/Container";

// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../custom.scss";
import Video from "../assets/video/MVI_0338.mp4";
// import { Player } from "video-react";
import LsnContent01 from "../pages/novLsn01";
import LsnContent02 from "../pages/novLsn02";
import LsnContent03 from "../pages/novLsn03";
import LsnContent04 from "../pages/novLsn04";
import LsnContent05 from "../pages/novLsn05";
import LsnContent06 from "../pages/novLsn06";
import LsnContent07 from "../pages/novLsn07";
import LsnContent08 from "../pages/novLsn08";
const Div = styled("div")``;

const Novice = () => {
     return (
          <>
               {/* <LsnContent00 /> */}
               <LsnContent01 />
               <LsnContent02 />
               <LsnContent03 />
               <LsnContent04 />
               <LsnContent05 />
               <LsnContent06 />
               <LsnContent07 />
               <LsnContent08 />
          </>
     );
};

export default Novice;
