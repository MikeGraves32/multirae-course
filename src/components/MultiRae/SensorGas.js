import React, { memo } from "react";
import { useDrag } from "react-dnd";

const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
};
function SensorGas({ id, url, name }) {
  // export const SensorGas = memo(function SensorDrag({
  //   name,
  //   type,
  //   isDropped,
  //   url,
  //   id,
  // }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    // isDropped,
    url,
    id,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    //   ref={drag}
    //   id={id}
    //   name={name}
    //   style={{ ...style, opacity }}
    //   data-testid={id}>
    <>
      <div className="sensorDraggable">
        <img
          ref={drag}
          id={id}
          src={url}
          alt={name}
          width="110em"
          style={{ border: isDragging ? "1px solid pink" : "0px" }}
        />
        <p className="sensorLabel">{name}</p>
      </div>{" "}
    </>
    //   {/* {isDropped ? <s>Testing {name}</s> : name} */}
  );
}

export default SensorGas;
