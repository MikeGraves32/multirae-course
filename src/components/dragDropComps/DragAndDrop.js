import React, { useState, useRef } from "react";
import { useDrop, useDrag } from "react-dnd";

const types = {
  ITEM: "item",
};

const draggableStyles = {
  display: "inline-block",
  cursor: "pointer",
  padding: "0.5rem 1rem",
  marginRight: "1rem",
  marginBottom: "1rem",
  backgroundColor: "#fff",
  border: "1px solid #000",
  borderRadius: "5px",
};

const droppableStyles = {
  width: "20%",
  height: "10rem",
  border: "1px solid #000",
  borderRadius: "5px",
  textAlign: "center",
  margin: "1rem",
  display: "inline-block",
  verticalAlign: "top",
};

const Item = ({
  id,
  name,
  isDragging,
  connectDragSource,
  connectDropTarget,
}) => {
  const ref = useRef(null);
  connectDragSource(ref);
  connectDropTarget(ref);

  return (
    <div
      ref={ref}
      style={{
        ...draggableStyles,
        opacity: isDragging ? 0.5 : 1,
      }}>
      {id} - {name}
    </div>
  );
};

const DraggableItem = ({ id, name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, name, type: types.ITEM },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Item
      id={id}
      name={name}
      isDragging={isDragging}
      connectDragSource={drag}
    />
  );
};

const DroppableTarget = ({ id, name, isOver, canDrop, onDrop }) => {
  const [{ isOver: isDroppableOver }, drop] = useDrop({
    accept: types.ITEM,
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        ...droppableStyles,
        backgroundColor: isOver && canDrop ? "lightgreen" : "lightgrey",
      }}>
      <p>
        {id} - {name}
      </p>
    </div>
  );
};

const DragAndDrop = () => {
  const [targets, setTargets] = useState([
    { id: 1, name: "Target 1", content: null },
    { id: 2, name: "Target 2", content: null },
    { id: 3, name: "Target 3", content: null },
    { id: 4, name: "Target 4", content: null },
    { id: 5, name: "Target 5", content: null },
  ]);

  const [draggables, setDraggables] = useState([
    { id: 1, name: "Target 1" },
    { id: 2, name: "Target 2" },
    { id: 3, name: "Target 3" },
    { id: 4, name: "Target 4" },
    { id: 5, name: "Target 5" },
  ]);

  const handleDrop = (item) => {
    const updatedTargets = targets.map((target) => {
      if (target.content) {
        return target;
      }
      return { ...target, content: item };
    });
    setTargets(updatedTargets);
  };

  const handleSubmit = () => {
    let feedback = "All targets matched successfully!";
    targets.forEach((target) => {
      if (!target.content || target.content.name !== target.name) {
        feedback = "Some targets did not match.";
      }
    });
    alert(feedback);
  };

  const handleReset = () => {
    setTargets([
      { id: 1, name: "Target 1", content: null },
      { id: 2, name: "Target 2", content: null },
      { id: 3, name: "Target 3", content: null },
      { id: 4, name: "Target 4", content: null },
      { id: 5, name: "Target 5", content: null },
    ]);
  };

  return (
    <div>
      <h2>Drag and Drop</h2>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%", marginRight: "2%", verticalAlign: "top" }}>
          {draggables.map((draggable) => (
            <DraggableItem
              key={draggable.id}
              id={draggable.id}
              name={draggable.name}
            />
          ))}
        </div>
        <div style={{ width: "70%" }}>
          {targets.map((target) => (
            <DroppableTarget
              key={target.id}
              id={target.id}
              name={target.name}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset} style={{ marginLeft: "1rem" }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default DragAndDrop;
