import "../App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";
import { LoremIpsum } from "react-lorem-ipsum";
import { styled } from "@mui/material/styles";
import Container from "react-bootstrap/Container";

// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../custom.scss";
import Video from "../assets/video/MVI_0338.mp4";
// import { Player } from "video-react";
import PageContent from "../pages/PgContent";
const Div = styled("div")``;

export default (props) => {
  return (
    <PageContent>
      <section className="Novice">
        All my novice stuff will be from here!
        <Typography variant="h5" color="textPrimary" component="h1">
          Novice
        </Typography>
        <section className="VideoSection">
          {/* <video controls autostart autoPlay src={Video} type="video/mp4" /> */}
          {/* <Player playsInline poster="../images/poster.png" src={Video} /> */}
        </section>
        <Div className="container-lg">
          <LoremIpsum p={2} />
        </Div>
      </section>
    </PageContent>
  );
};
