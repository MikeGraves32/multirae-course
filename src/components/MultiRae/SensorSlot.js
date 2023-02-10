import { memo } from "react";
import { useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";
const style = {
  height: "7rem",
  width: "7rem",
  border: "0px solid rgba(227, 227, 228, 1)",
  borderRadius: "60px",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  // padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};
export const SensorSlot = memo(function SensorSlot({
  accept,
  lastDroppedItem,
  onDrop,
  url,
  id,
  name,
}) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ["image", NativeTypes.FILE],
    drop: onDrop,
    url: url,
    name: name,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <div
      ref={drop}
      // style={{ backgroundColor }}
      data-testid={"slot_" + id}
      className={"sensorSlot sensorSlot_" + id}
      id={id}>
      {/* {isActive ? "Insert Sensor" : `Sensor Slot: ${accept.join(", ")}`} */}
      {lastDroppedItem && <img alt="sensor" src={url} width="110em" />}
    </div>
  );
});
