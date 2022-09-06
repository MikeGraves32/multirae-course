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
import PageContent from "../pages/PgContent";
const Div = styled("div")``;

const Novice = () => {
  return <PageContent />;
};

export default Novice;
