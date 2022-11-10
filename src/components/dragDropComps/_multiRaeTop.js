import update from "immutability-helper";
import { memo, useCallback, useState } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import { Sensor } from "../Sensor.js";
import { SensorImg } from "./SensorImg.js";
// import { SensorImg } from "../SensorImg.js";
import { SensorSlot } from "./SensorSlot.js";
import { SensorTypes } from "./SensorTypes.js";
import { SensorList } from "./SensorList.js";
import sensor_bl_01 from "../../img/sensor_bl_01.png";
import sensor_br_01 from "../../img/sensor_br_01.png";
import sensor_ctr_01 from "../../img/sensor_ctr_01.png";
import sensor_tl_01 from "../../img/sensor_tl_01.png";
import sensor_tr_01 from "../../img/sensor_tr_01.png";
export const MultiRaeTop = memo(function MultiRaeTop() {
  const [sensorSlots, setSensorSlots] = useState([
    { accepts: [SensorTypes.LEL], lastDroppedItem: null },
    { accepts: [SensorTypes.SO2], lastDroppedItem: null },
    { accepts: [SensorTypes.O2], lastDroppedItem: null },
    {
      accepts: [SensorTypes.CL2],
      lastDroppedItem: null,
    },
    {
      accepts: [SensorTypes.PID],
      lastDroppedItem: null,
    },
  ]);
  const [sensors] = useState([
    {
      name: "Sulfur Dioxide",
      type: SensorTypes.SO2,
      id: 2,
      url: sensor_br_01,
    },
    {
      name: "Lower Explosive Limit",
      type: SensorTypes.LEL,
      id: 1,
      url: sensor_bl_01,
    },
    {
      name: "Photo Ionization Detector",
      type: SensorTypes.PID,
      id: 5,
      url: sensor_tr_01,
    },
    {
      name: "Oxygen",
      type: SensorTypes.O2,
      id: 3,
      url: sensor_ctr_01,
      name: "Oxygen",
    },
    { name: "Chlorine", type: SensorTypes.CL2, id: 4, url: sensor_tl_01 },
  ]);
  const [droppedSensorNames, setDroppedSensorNames] = useState([]);
  function isDropped(sensorName) {
    return droppedSensorNames.indexOf(sensorName) > -1;
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedSensorNames(
        update(droppedSensorNames, name ? { $push: [name] } : { $push: [] })
      );
      setSensorSlots(
        update(sensorSlots, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        })
      );
    },
    [droppedSensorNames, sensorSlots]
  );
  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        {sensorSlots.map(({ accepts, lastDroppedItem }, index) => (
          <SensorSlot
            accept={accepts}
            //   lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: "hidden", clear: "both" }}>
        {SensorList.map((sensor, { name, type }, index) => {
          return (
            <sensor
              url={sensor.url}
              id={sensor.id}
              name={sensor.name}
              type={sensor.type}
              isDropped={isDropped(sensor.name)}
              key={sensor.id}
            />
          );
        })}
      </div>
    </div>
  );
});
