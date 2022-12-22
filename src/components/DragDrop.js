import update from "immutability-helper";
import React, { memo, useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import Sensor from "./Sensor";
import SensorBox from "./dragDropComps/SensorBox.js";
import sensor_bl_01 from "../img/sensor_bl_01.png";
import sensor_br_01 from "../img/sensor_br_01.png";
import sensor_ctr_01 from "../img/sensor_ctr_01.png";
import sensor_tl_01 from "../img/sensor_tl_01.png";
import sensor_tr_01 from "../img/sensor_tr_01.png";
import { SensorSlot } from "./dragDropComps/SensorSlot.js";
import { SensorList_Gas } from "./dragDropComps/SensorList_Gas.js";
import "../css/sensorDnd.css";
import { DndContext } from "react-dnd";

// const SensorList_Gas = [s
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
    { accepts: [SensorList_Gas.LEL], lastDroppedItem: null },
    { accepts: [SensorList_Gas.SO2], lastDroppedItem: null },
    { accepts: [SensorList_Gas.O2], lastDroppedItem: null },
    { accepts: [SensorList_Gas.CL2], lastDroppedItem: null },
    { accepts: [SensorList_Gas.PID], lastDroppedItem: null },
  ]);

  const [sensors] = useState([
    { id: 0, name: "Sulfur Dioxide", type: SensorList_Gas.SO2 },
    { id: 1, name: "Lower Explosive Limit", type: SensorList_Gas.LEL },
    { id: 2, name: "Photo Ionization Detector", type: SensorList_Gas.PID },
    { id: 3, name: "Oxygen", type: SensorList_Gas.O2 },
    { id: 4, name: "Chlorine", type: SensorList_Gas.CL2 },
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
    const sensorList = SensorList_Gas.filter((sensor) => id === sensor.id);
    setMultiRaeTop((multiRaeTop) => [...multiRaeTop, sensorList[0]]);
    console.log(id);
  };
  return (
    <>
      <div className="Sensors">
        {SensorList_Gas.map((sensor) => {
          return <Sensor url={sensor.url} id={sensor.id} />;
        })}
      </div>
      <div className="MultiRaeTop" ref={drop}>
        <div className="SensorDropBox col-12">
          {SensorList_Gas.map((sensorDropBox) => {
            return <SensorBox id={sensorDropBox.id} />;
          })}
        </div>
        {multiRaeTop.map((sensor) => {
          return <>{/* <Sensor url={sensor.url} id={sensor.id} /> */}</>;
        })}

        {/* <div style={{ overflow: "hidden", clear: "both" }}>
                            {sensorSlots.map(
                              ({ accepts, lastDroppedItem }, index) => (
                                   <SensorSlot
                                        accept={accepts}
                                        lastDroppedItem={lastDroppedItem}
                                        onDrop={(item) =>
                                             handleDrop(index, item)
                                        }
                                        key={index}
                                   />
                              )
                         )}
                    </div> */}

        {/* {sensors.map((sensor) => {
                         return <Sensor url={sensor.url} id={sensor.id} />;
                    })} */}
      </div>
    </>
  );
}
export default DragDrop;
