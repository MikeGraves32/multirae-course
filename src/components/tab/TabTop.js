import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Capability from "./Capability";

const types = Capability;
function ControlledTabsExample() {
  const [active, setActive] = useState(types[0]);
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={12} id="tabOptions">
          <Nav variant="pills" className="mb-3">
            {types.map((type) => (
              <Nav.Item key={type.id}>
                <Nav.Link
                  eventKey={type.id}
                  active={active === type.item}
                  onClick={() => setActive(type.item)}>
                  {type.item}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={12} id="tabData">
          <Tab.Content>
            {types.map((type) => (
              <Tab.Pane key={type.id} eventKey={type.id}>
                {type.description}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default ControlledTabsExample;
