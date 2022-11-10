import { memo } from "react";
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
export const Sensor = memo(function Sensor({ name, type, isDropped, url, id }) {
  const [{ isDragging }, { opacity }, drag] = useDrag(
    () => ({
      type: "image",
      item: { name },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type, url, id]
  );
  //  const [{ opacity }, drag] = useDrag(
  //       () => ({
  //            type,
  //            item: { name },
  //            collect: (monitor) => ({
  //                 opacity: monitor.isDragging() ? 0.4 : 1,
  //            }),
  //       }),
  //       [name, type]
  //  );
  return (
    <div
      ref={drag}
      id={id}
      name={name}
      style={{ ...style, opacity }}
      data-testid="sensor">
      <img
        // ref={drag}
        id={name}
        alt={name}
        name={name}
        src={url}
        width="110em"
        style={{ border: isDragging ? "5px solid pink" : "0px" }}
      />
      {isDropped ? <s>Testing {name}</s> : name}
    </div>
  );
});
