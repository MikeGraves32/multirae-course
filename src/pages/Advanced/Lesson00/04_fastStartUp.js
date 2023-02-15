import "../../../App.css";
import React, { useState } from "react";

import YellowBootCalibStartUp from "../../../components/MultiRae/Advanced/startup_yb";

// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Operate the MultiRAE Pro - Calibration";
  return (
    <section className="container">
      <h2 className="pgTitle">{pgTitle}</h2>
      <div className="container-lg">
        <div>Calibrate the MultiRAE Pro Yellow Boot Device</div>
        <div>
          <YellowBootCalibStartUp />
        </div>
      </div>
    </section>
  );
};
