import React from "react";

const fadeImages = [
  {
    url: "imgs/sensor_bl_01.png",
    caption: "First Sensor",
  },
  {
    url: "imgs/sensor_ctr_01.png",
    caption: "Second Sensor",
  },
  {
    url: "imgs/sensor_tl_01.png",
    caption: "Third Sensor",
  },
];

function ToggleImages() {
  return (
    <>
      <h1>Toggle images</h1>
      <div className="toggle-wrapper">
        <img
          className="active"
          src={fadeImages[0].url}
          alt={fadeImages[0].caption}
        />
        <img
          className="inactive"
          src={fadeImages[1].url}
          alt={fadeImages[1].caption}
        />
        <img
          className="inactive"
          src={fadeImages[2].url}
          alt={fadeImages[2].caption}
        />
      </div>
    </>
  );
}

export default ToggleImages;
