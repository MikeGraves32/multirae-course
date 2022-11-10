import "../../../App.css";
import React from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DragDrop from "../../../components/DragDrop";
import { LoremIpsum } from "react-lorem-ipsum";
export default () => {
  const pgTitle = "MultiRAE Device Yellow Boot): Sensor Placement";
  return (
    <section className="container">
      <h2 className="pgTitle">{pgTitle}</h2>
      <div className="container-lg">
        <DragDrop />
      </div>
    </section>
  );
};
