import React, { useState, useDrag } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const style = {
  border: "1px solid gray",
  height: "8rem",
  width: "8rem",
  padding: "2rem",
  textAlign: "center",
  float: "left",
};

const Droppable = ({ accept, lastDroppedItem, onDrop, children }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "image",
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        ...style,
        backgroundColor: isOver && canDrop ? "blue" : "white",
      }}>
      {children}
      {isOver && !canDrop && <div>Can't drop here</div>}
      {!isOver && canDrop && <div>Drag here</div>}
      {isOver && canDrop && <div>Dropped</div>}
    </div>
  );
};

const Draggable = ({ id, name, children, url }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, name, type: ItemTypes.IMAGE },
    url,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ ...style, opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

const targetData = [
  { id: 1, name: "Target 1" },
  { id: 2, name: "Target 2" },
  { id: 3, name: "Target 3" },
  { id: 4, name: "Target 4" },
  { id: 5, name: "Target 5" },
];

const initialData = [
  { id: 1, name: "Target 1" },
  { id: 2, name: "Target 2" },
  { id: 3, name: "Target 3" },
  { id: 4, name: "Target 4" },
  { id: 5, name: "Target 5" },
];

const TwoColumnDragAndDrop = () => {
  const [droppedTargets, setDroppedTargets] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleDrop = (item) => {
    setDroppedTargets([...droppedTargets, item.id]);
  };

  const handleSubmit = () => {
    const allTargetsDropped = droppedTargets.length === 5;
    if (!allTargetsDropped) {
      setFeedback("Please drop all targets");
    } else {
      const allTargetsMatched = initialData.every(
        (target) =>
          target.name === initialData[droppedTargets.indexOf(target.id)].name
      );
      setFeedback(
        allTargetsMatched ? "All targets matched" : "Targets did not match"
      );
    }
    setModalVisible(true);
  };

  const handleReset = () => {
    setDroppedTargets([]);
    setModalVisible(false);
  };

  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <div style={{ float: "left", width: "40%" }}>
          {targetData.map((target) => (
            <Droppable
              accept={ItemTypes.IMAGE}
              onDrop={handleDrop}
              key={target.id}>
              {target.name}
            </Droppable>
          ))}
        </div>
        <div style={{ float: "right", width: "60%" }}>
          {initialData.map((target, index) => (
            <Draggable
              id={target.id}
              name={target.name}
              src={target.url}
              key={target.id}>
              Image {target.id}
            </Draggable>
          ))}
        </div>
      </div>
      <button onClick={handleSubmit} style={{ marginTop: "2rem" }}>
        Submit
      </button>
      <button
        onClick={handleReset}
        style={{ marginLeft: "2rem", marginTop: "2rem" }}>
        Reset
      </button>
      {modalVisible && (
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "1rem",
            }}>
            {feedback}
            <button onClick={handleReset} style={{ marginTop: "2rem" }}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TwoColumnDragAndDrop;
