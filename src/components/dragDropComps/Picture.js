import React from "react";
import { useDrag } from "react-dnd";

function Picture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      alt="sensor"
      ref={drag}
      src={url}
      width="110px"
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
    />
  );
}

export default Picture;
