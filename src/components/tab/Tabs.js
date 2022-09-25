import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import TabList from "./TabList";

// import Sonnet from "../../components/Sonnet";
const types = TabList;
function LeftTabsExample() {
     const [active, setActive] = useState(types[0]);
     return (
          <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
               <Row>
                    <Col sm={3}>
                         <Nav variant='pills' className='flex-column'>
                              {types.map((type) => (
                                   <Nav.Item>
                                        <Nav.Link
                                             eventKey={type.id}
                                             active={active === type.item}
                                             onClick={() =>
                                                  setActive(type.item)
                                             }
                                        >
                                             {type.item}
                                        </Nav.Link>
                                   </Nav.Item>
                              ))}
                         </Nav>
                    </Col>
                    <Col sm={9}>
                         <Tab.Content>
                              {types.map((type) => (
                                   <Tab.Pane eventKey={type.id}>
                                        {type.description}
                                   </Tab.Pane>
                              ))}
                         </Tab.Content>
                    </Col>
               </Row>
          </Tab.Container>
     );
}

export default LeftTabsExample;
