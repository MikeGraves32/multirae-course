import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { isTemplateExpression } from "typescript";
import Button from "react-bootstrap/Button";

import LsnPage01 from "./pages/Lesson00/01_introSplash";
import LsnPage02 from "./pages/Lesson00/02_vidSlide";
import LsnPage03 from "./pages/Lesson00/03_introduction";
import LsnPage04 from "./pages/Lesson00/04_choosePath";
import LsnPage05 from "./pages/Lesson00/05_avatarEnter";
import LsnPage06 from "./pages/Lesson00/06_avatarOption";
import LsnPage07 from "./pages/Lesson00/07_courseWelcome";
import LsnPage08 from "./pages/Lesson00/08_theoryOpsBook";

const lsnContent = [
  { id: 1, component: <LsnPage01 />, isVisible: true },

  { id: 2, component: <LsnPage02 />, isVisible: false },

  { id: 3, component: <LsnPage03 />, isVisible: false },

  { id: 4, component: <LsnPage04 />, isVisible: false },

  { id: 5, component: <LsnPage05 />, isVisible: false },

  { id: 6, component: <LsnPage06 />, isVisible: false },

  { id: 7, component: <LsnPage07 />, isVisible: false },

  { id: 8, component: <LsnPage08 />, isVisible: false },
];

const PgContent = () => {
  const [pgComponents, setPgComponents] = useState(lsnContent);
  const [currentId, setCurrentId] = useState(null);

  const [currentComponent, setCurrentComponent] = useState(1);

  const backClick = (id) => {
    console.log("id " + id);

    if (currentComponent === id) {
      console.log("back " + (currentComponent - 1));
      setCurrentComponent(currentComponent - 1);
    }
  };
  const nextClick = (id) => {
    console.log("id " + id);

    if (currentComponent === id) {
      console.log("next " + (currentComponent + 1));
      setCurrentComponent(currentComponent + 1);
    }
  };

  const btnClick = (number) => {
    const showPgs = pgComponents.map((pgComponent) => {
      if (pgComponent.id !== number) {
        pgComponent.isVisible = !pgComponent.isVisible;
      }
      console.log("id " + pgComponent.id);
      return pgComponent;
    });
    setPgComponents(showPgs);
  };
  //   const thisClick = () => setShowPgComponent(!showPgComponent);

  //   //   const [currentPgId, setCurrentPgId] = useState(null);

  //   const handelClick = (number) => {
  //     const changeContent = pgComponents.map(({id,component, isVisible}) => {
  //       if (pgComponent.id !== number) {
  //         pgComponent.isVisible = !pgComponent.isVisible;
  //       }
  //       console.log("pgComponent " + pgComponent.id);
  //       return pgComponent;
  //     });
  //     setPgComponents(changeContent);
  //   };

  //   const renderPage = (component) => {
  //     const onNext = () => {
  //       setCurrentId(component.id);
  //       setPgComponents(!pgComponents);
  //     };

  // return (
  //   <div>
  //     {pgComponents.map(({ id, component, isVisible }) => (
  //       <div key={id}>
  //         {/* <span onClick={handelClick}>
  //           {pgComponents ? (
  //             <i className="fas fa-angle-up"></i>
  //           ) : (
  //             <i className="fas fa-angle-down m-1"></i>
  //           )}
  //         </span> */}
  //         {component.component}
  //         {/* {currentId === component.id && pgComponents === true && (
  //           <p>{component.component}</p>
  //         )} */}
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <>
      <div className="row">
        {currentComponent == 1 && <LsnPage01 />}
        {currentComponent == 2 && <LsnPage02 />}
        {currentComponent == 3 && <LsnPage03 />}
        {currentComponent == 4 && <LsnPage04 />}
        {currentComponent == 5 && <LsnPage05 />}
        {currentComponent == 6 && <LsnPage06 />}
        {currentComponent == 7 && <LsnPage07 />}
        {currentComponent == 8 && <LsnPage08 />}
        {/* {lsnContent.map(({ id, component, isVisible }) => (
        <div key={id} onClick={() => btnClick(id)} hidden={!isVisible}>
          {component}
        </div>
      ))} */}
      </div>
      <div className="courseFooter row">
        <footer className="row">
          <div className="btnPrev col-1">
            <Button
              className="btn btn-primary btn-sm btn-prev"
              onClick={() => backClick(currentComponent)}>
              Back
            </Button>
          </div>
          <div className="btnNext col-1">
            <Button
              className="btn btn-primary btn-sm btn-next"
              onClick={() => nextClick(currentComponent)}>
              Next
            </Button>
          </div>
          <div>
            <p>This site is the footer area of the GUI</p>
            <p>&copy; L2 Defense 2022</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PgContent;
