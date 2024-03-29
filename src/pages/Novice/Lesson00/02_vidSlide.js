import "../../../App.css";
import React, { useState } from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Player } from "video-react";
import Video from "../../../assets/video/introScene.mp4";
import { MultiRaeTop } from "../../../components/dragDropComps/MultiRaeTop";
import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Hazardous Scenario";
  return (
    <section className="container">
      <h2 className="pgTitle">{pgTitle}</h2>
      <section className="VideoSection">
        <video controls autostart autoPlay src={Video} type="video/mp4" />
      </section>
    </section>
  );
};
