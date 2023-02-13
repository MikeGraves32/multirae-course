import "../../../App.css";
import React, { useState } from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Lesson 2 - Sensor Cautions";
  return (
    <section className="">
      <h2 className="pgTitle">{pgTitle}</h2>
      <ol>
        <li>
          Using a sensor that is not designed for use in a specific monitor
          could cause erractic or erroneous readings by the detector.
        </li>
        <li>
          When inserting sensor into sensor conditioner socket never press down
          on topp of sensor.
        </li>
        <li>
          Ensure sensor alignment keys are properly aligned with the sensor
          socket alignment slots before attemptiong to seat the sensor.
        </li>
        <li>
          New sensors must be given enough time to properly condition, or
          erractic readings will be obtained: Electorchemical sensors require a
          minimum of six hours to achieve the required stabilization.
        </li>
        <li>
          Do not touch the PID lamp's window with bare fingers because the
          residual oils left behind will shorten the lamp's operating life.
        </li>
      </ol>
    </section>
  );
};
