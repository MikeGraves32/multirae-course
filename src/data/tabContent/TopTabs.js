import React, { useState } from "react";
import styled from "styled-components";
// import Capability from "./Capability";
const Tab = styled.button`
  font-size: 20px;
  // padding: 10px 60px;
  border-radius: 50%;
  width: 177px;
  height: 177px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;

// const types = Capability;
export default function TabGroup({ types }) {
  const [active, setActive] = useState(types[0]);
  const [description, setDescription] = useState("");
  return (
    <>
      <ButtonGroup className="tab-circle-grp">
        {types.map((type) => (
          <Tab
            key={type.id}
            active={active === type.id}
            description={type.description}
            className="tab-circle"
            // setDescription={type.description}
            onClick={() => {
              setActive(type.id);
              setDescription(type.description);
            }}>
            {type.id}
          </Tab>
        ))}
      </ButtonGroup>
      <p className="tab-description">{description}</p>
      {/* <p> Your payment selection: {active} </p> */}
    </>
  );
}
// Usage
<TabGroup />;
