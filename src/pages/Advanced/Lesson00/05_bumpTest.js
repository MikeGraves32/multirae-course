import "../../../App.css";
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
import YellowBootCalib_Bump from "../../../components/MultiRae/Advanced/bump_yb";

// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Operate the MultiRAE Pro - Bump Test";
  return (
    <section className="container">
      <h2 className="pgTitle">{pgTitle}</h2>
      <div className="container-lg">
        <div>Perform a Bump Test on the MultiRAE Pro Yellow Boot Device</div>
        <div>
          <YellowBootCalib_Bump />
        </div>
      </div>
    </section>
  );
};
