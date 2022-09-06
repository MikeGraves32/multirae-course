import update from "immutability-helper";
import React, { memo, useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";
import Sensor from "./Sensor";
import sensor_bl_01 from "../img/sensor_bl_01.png";
import sensor_br_01 from "../img/sensor_br_01.png";
import sensor_ctr_01 from "../img/sensor_ctr_01.png";
import sensor_tl_01 from "../img/sensor_tl_01.png";
import sensor_tr_01 from "../img/sensor_tr_01.png";
import { SensorSlot } from "./dragDropComps/SensorSlot.js";
import { SensorList } from "./dragDropComps/SensorList.js";
import "../css/sensorDnd.css";
import { DndContext } from "react-dnd";

// const SensorList = [
//   {
//     id: 1,
//     url: sensor_bl_01,
//   },
//   {
//     id: 2,
//     url: sensor_br_01,
//   },
//   {
//     id: 3,
//     url: sensor_ctr_01,
//   },
//   {
//     id: 4,
//     url: sensor_tl_01,
//   },
//   {
//     id: 5,
//     url: sensor_tr_01,
//   },
// ];

function DragDrop() {
  const [sensorSlots, setSensorSlots] = useState([
    { accepts: [SensorList.LEL], lastDroppedItem: null },
    { accepts: [SensorList.SO2], lastDroppedItem: null },
    { accepts: [SensorList.O2], lastDroppedItem: null },
    { accepts: [SensorList.CL2], lastDroppedItem: null },
    { accepts: [SensorList.PID], lastDroppedItem: null },
  ]);

  const [sensors] = useState([
    { name: "Sulfur Dioxide", type: SensorList.SO2 },
    { name: "Lower Explosive Limit", type: SensorList.LEL },
    { name: "Photo Ionization Detector", type: SensorList.PID },
    { name: "Oxygen", type: SensorList.O2 },
    { name: "Chlorine", type: SensorList.CL2 },
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

  const [multiRaeTop, setMultiRaeTop] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addSensor(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addSensor = (id) => {
    const sensorList = SensorList.filter((sensor) => id === sensor.id);
    setMultiRaeTop((multiRaeTop) => [...multiRaeTop, sensorList[0]]);
    console.log(id);
  };
  return (
    <>
      <div className="Sensors">
        {SensorList.map((sensor) => {
          return <Sensor url={sensor.url} id={sensor.id} />;
        })}
      </div>
      <div className="MultiRaeTop" ref={drop}>
        {/* <div style={{ overflow: "hidden", clear: "both" }}>
          {sensorSlots.map(({ accepts, lastDroppedItem }, index) => (
            <SensorSlot
              accept={accepts}
              lastDroppedItem={lastDroppedItem}
              onDrop={(item) => handleDrop(index, item)}
              key={index}
            />
          ))}
        </div> */}

        {/* {sensors.map((sensor) => {
          return <Sensor url={sensor.url} id={sensor.id} />;
        })} */}
      </div>
    </>
  );
}
export default DragDrop;
