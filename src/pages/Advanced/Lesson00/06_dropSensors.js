import "../../../App.css";
import React, { useState } from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { MultiRaeSlots } from "../../../components/dragDropComps/MultiRaeSlots";

import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "MultiRAE Device - Yellow Boot Sensor Placement";
  return (
    <section className="">
      <h2 className="pgTitle">{pgTitle}</h2>
      <div className="container-lg">
        <MultiRaeSlots />
      </div>
    </section>
  );
};
