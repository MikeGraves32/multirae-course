import { Monitor } from "@mui/icons-material";
import React from "react";
import { useDrag } from "react-dnd";

function Sensor({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      ref={drag}
      src={url}
      width="110em"
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
    />
  );
}

export default Sensor;
