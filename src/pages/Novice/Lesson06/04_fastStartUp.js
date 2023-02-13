import "../../../App.css";
import React from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import Accordion from "react-bootstrap/Accordion";
import multirae_front from "../../../img/multirae_front_02.png";
// import "../../../css/components/accordion.scss";
import Accordion from "../../../components/Accordion";

export default () => {
  const pgTitle = "Fast Start-Up, Fresh Air Calibration, and Bump Test";
  return (
    <section className="">
      <h2 className="pgTitle">{pgTitle}</h2>
      <div className="multiRae-yellow">
        <img src={multirae_front} className="multiRae-yellow" />
      </div>
      <div className="accordion">
        <Accordion
          title="Fast Start-Up"
          text="Fast Startup reduces the amount of time between when the instrument is turned on and is ready for use. It skips showing you many settings and is best suited to environments where the MultiRAE is turned on and off very often during a given day."
        />
        <Accordion
          title="Fresh Air Calibration"
          text="Fresh Air Calibration determines the zero point of the sensor calibration curve for all the sensors that require a zero calibration. For the oxygen sensor, Fresh Air calibration sets the point equal to the concentration of oxygen in ambient air (approximately 20.9% volume). Note: Fresh air calibration is performed on all enabled gas sensors at the same time."
        />
        <Accordion
          title="Bump Test"
          text="A bump test is a brief exposure of the unit to a calibration gas to show response and trigger the lowest alarm set point for each sensor."
        />
      </div>
    </section>
  );
};
