import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import TabList from "./TabList";

import multirae_yellow from "../../img/multirae_front_01.png";
import multirae_black from "../../img/multirae_front_02.png";
const types = TabList;
function DrawTabsLeft() {
  const [active, setActive] = useState(types[0]);
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3} id="tabOptions">
          <Nav variant="pills" className="flex-column">
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
        <Col sm={9} id="tabData">
          <Tab.Content key={active}>
            {/* <div className="multiRae-yellowX col-4">
              <img src={multirae_yellow} className="multiRae-yellowX" />
            </div>
            <div className="multiRae-yellowX col-6">
              <img src={multirae_black} className="multiRae-black" />
            </div> */}

            {types.map((type) => (
              <Tab.Pane key={type.id} eventKey={type.id}>
                {type.description}
                <div class="tab-grid">
                  {" "}
                  <div className="multiRae-yellowX item-left">
                    <img
                      src={multirae_yellow}
                      className="multiRae-yellowX smSize"
                      alt="MultiRAE-Yellow Boot"
                    />
                  </div>
                  <div className="multiRae-yellowX item-right">
                    <img
                      src={multirae_black}
                      className="multiRae-black smSize"
                      alt="MultiRAE-Yellow Boot"
                    />
                  </div>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default DrawTabsLeft;
