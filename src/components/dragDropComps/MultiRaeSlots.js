import update from "immutability-helper";
import { memo, useCallback, useState } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import { SensorDrag } from "./SensorDrag.js";
import { SensorSlot } from "./SensorSlot.js";
import { SensorTypes_BB } from "./SensorTypes_BB";
import SensorGas from "./SensorGas";
import sensor_NH3 from "./img/sensor_NH3.png";
import sensor_LEL from "./img/sensor_LEL.png";
import sensor_HCN from "./img/sensor_HCN.png";
import sensor_O2 from "./img/sensor_O2.png";
import sensor_H2S from "./img/sensor_H2S.png";
import { drop } from "lodash";
export const MultiRaeSlots = memo(function MultiRaeSlots() {
  const [sensorSlots, setSensorSlots] = useState([
    {
      accept: ["image"],
      lastDroppedItem: null,
      // url: [sensor_NH3, sensor_LEL, sensor_HCN, sensor_O2, sensor_H2S],
      url: sensor_O2,
      id: 4,
    },
    {
      accept: ["image"],
      lastDroppedItem: null,
      // url: [sensor_NH3, sensor_LEL, sensor_HCN, sensor_O2, sensor_H2S],
      url: sensor_NH3,
      id: 2,
    },

    {
      accept: ["image"],
      lastDroppedItem: null,
      // url: [sensor_NH3, sensor_LEL, sensor_HCN, sensor_O2, sensor_H2S],
      url: sensor_HCN,
      id: 3,
    },
    {
      accept: ["image"],
      lastDroppedItem: null,
      // url: [sensor_NH3, sensor_LEL, sensor_HCN, sensor_O2, sensor_H2S],
      url: sensor_H2S,
      id: 5,
    },
    {
      accept: ["image"],
      lastDroppedItem: null,
      // url: [sensor_NH3, sensor_LEL, sensor_HCN, sensor_O2, sensor_H2S],
      url: sensor_LEL,
      id: 1,
    },
  ]);
  const [SensorDrags] = useState([
    {
      name: "Lower Explosive Limit",
      // type: "Lower Explosive Limit",
      id: 1,
      dropurl: sensor_LEL,
    },
    {
      name: "Ammonia",
      // type: "Ammonia",
      id: 2,
      dropurl: sensor_NH3,
    },
    {
      name: "Hydrogen Cyanide",
      // type: "Hydrogen Cyanide",
      id: 3,
      dropurl: sensor_HCN,
    },
    {
      name: "Oxygen",
      // type: "Oxygen",
      id: 4,
      dropurl: sensor_O2,
    },
    {
      name: "Hydrogen Sulfide",
      // type: "Hydrogen Sulfide",
      id: 5,
      dropurl: sensor_H2S,
    },
  ]);
  const [droppedSensorNames, setDroppedSensorNames] = useState([]);
  const [sensorNames, setSensorName] = useState(sensorSlots);
  const [sensorDragId, setSensorDragId] = useState();
  function isDropped(sensorDropName) {
    // setSensorDragId(sensorDraggingId - 1);
    console.log("sensorDropName " + sensorDropName);
    return droppedSensorNames.indexOf(sensorDropName) > -1;
  }

  const getSenorId = (objId) => {
    const sensorItems = sensorNames.map((sensorNames) => {
      // if (SensorDrags[objId - 1].id !== objId) {
      //   console.log(
      //     "not the same: SensorDrags[objId].id " +
      //       SensorDrags[objId - 1].id +
      //       " " +
      //       objId
      //   );
      // }
      // return sensorNames;
    });
    // setSensorName(sensorItems);
  };

  const handleDrop = (index, item, objId, id) => {
    // const sensorObj = SensorDrags.filter((sensor) => id === sensor.id);
    const { name } = item;

    setDroppedSensorNames(
      update(droppedSensorNames, name ? { $push: [name] } : { $push: [] })
    );
    // const setId = parseInt(id - 1);
    console.log("objId " + objId + " index " + index + " id " + id);
    // console.log("sensorDragId " + sensorDragId);
    // console.log("sensorNames " + sensorNames[setId].accept);
    // console.log("sensorObj " + sensorObj[id - 1].name);
    if (id === objId) {
      setSensorSlots(
        update(sensorSlots, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        })
      );
      alert(
        SensorDrags[id - 1].name + "is the correct Sensor for this slot " + id
      );
    } else {
      alert(
        "Incorrect! The " +
          SensorDrags[objId - 1].name +
          " sensor is not the correct sensor for slot " +
          id
      );
    }
  };
  // [droppedSensorNames, sensorSlots, SensorDrags, sensorDragId]
  // );
  return (
    <div className="grid-2-col">
      <div
        className="MultiRaeTop"
        style={{ overflow: "hidden", clear: "both" }}>
        {sensorSlots.map(({ accepts, lastDroppedItem, url, id }, index) => (
          <SensorSlot
            id={id}
            accept={accepts}
            url={url}
            // url={SensorDrags[index].dropurl}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => {
              handleDrop(index, item, item.id, id);
              // getSenorId(sensorDragId);
            }}
            key={index}
          />
        ))}
      </div>

      <div class="sensorDrag" style={{ overflow: "hidden", clear: "both" }}>
        {SensorDrags.map((sensor) => {
          return (
            <>
              <SensorGas
                url={sensor.dropurl}
                id={sensor.id}
                name={sensor.name}
              />
              <div>
                <p>{sensor.name}</p>
              </div>
            </>
          );
        })}

        {/* {SensorDrags.map(({ name, type, id, dropurl }, index) => (
          <SensorDrag
            name={name}
            type={type}
            // isDropped={getSenorId(id)}
            isDropped={isDropped(name)}
            // sensorDragId={setSensorDragId(id)}
            dropurl={dropurl}
            id={id}
            key={index}
          />
        ))} */}
      </div>
    </div>
  );
});
