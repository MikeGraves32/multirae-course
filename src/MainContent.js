import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { isTemplateExpression } from "typescript";
import Button from "react-bootstrap/Button";
import LsnContent00 from "./data/pgContent/lsn00";
import LsnContent01 from "./data/pgContent/lsn01";
import LsnContent02 from "./data/pgContent/lsn02";
// import LsnContent03 from "./data/pgContent/lsn03";
// import LsnContent04 from "./data/pgContent/lsn04";
// import LsnContent05 from "./data/pgContent/lsn05";
// import LsnContent06 from "./data/pgContent/lsn06";
// import LsnContent07 from "./data/pgContent/lsn07";
// import LsnContent08 from "./data/pgContent/lsn08";
// import LsnPage01 from "./pages/Lesson00/01_introSplash";
// import LsnPage02 from "./pages/Lesson00/02_vidSlide";
// import LsnPage03 from "./pages/Lesson00/03_introduction";
// import LsnPage04 from "./pages/Lesson00/04_choosePath";
// import LsnPage05 from "./pages/Lesson00/05_avatarEnter";
// import LsnPage06 from "./pages/Lesson00/06_avatarOption";
// import LsnPage07 from "./pages/Lesson00/07_courseWelcome";
// import LsnPage08 from "./pages/Lesson00/08_theoryOpsBook";
import FooterImg from "./img/gui/chem-characters.png";
import LogoImg from "./img/gui/l2-logo.png";

const courseLsn = [
  {
    lsnId: 0,
    lessonNum: "Lesson00",
    lesson: LsnContent00,
  },
  {
    lsnId: 1,
    lessonNum: "Lesson01",
    lesson: LsnContent01,
  },
  {
    lsnId: 2,
    lessonNum: "Lesson02",
    lesson: LsnContent02,
  },
  //   {
  //     id: 3, lessonNum: "Lesson00",
  //     lesson: LsnContent03,
  //   },
  //   {
  //     id: 4, lessonNum: "Lesson00",
  //     lesson: LsnContent04,
  //   },
  //   {
  //     id: 5, lessonNum: "Lesson00",
  //     lesson: LsnContent05,
  //   },
  //   {
  //     id: 6, lessonNum: "Lesson00",
  //     lesson: LsnContent06,
  //   },
  //   {
  //     id: 7, lessonNum: "Lesson00",
  //     lesson: LsnContent07,
  //   },
  //   {
  //     id: 8, lessonNum: "Lesson00",
  //     lesson: LsnContent08,
  //   },
];

// const lsn01 = [
//   { id: 1, component: <LsnPage01 />, isVisible: true },

//   { id: 2, component: <LsnPage02 />, isVisible: false },

//   { id: 3, component: <LsnPage03 />, isVisible: false },

//   { id: 4, component: <LsnPage04 />, isVisible: false },

//   { id: 5, component: <LsnPage05 />, isVisible: false },

//   { id: 6, component: <LsnPage06 />, isVisible: false },

//   { id: 7, component: <LsnPage07 />, isVisible: false },

//   { id: 8, component: <LsnPage08 />, isVisible: false },
// ];

const PgContent = () => {
  //   const [lsnPages, setLsnPages] = useState();
  //   console.log("set currentPgComponent " + currentPgComponent);
  //   console.log("pgComponents length " + pgComponents.length);

  const [currentPgComponent, setCurrentPgComponent] = useState(0);
  const [currentLsnId, setCurrentLsnId] = useState(courseLsn[0].lsnId);
  const [pgComponents, setPgComponents] = useState(
    courseLsn[currentLsnId].lesson
  );

  //   useEffect(()=>{

  //   }
  //   )

  const backClick = (id, lessonId) => {
    if (currentPgComponent === id && currentPgComponent > 0) {
      setCurrentPgComponent(currentPgComponent - 1);
    } else if (currentLsnId > 0 && currentPgComponent === 0) {
      console.log(" currentLsnId " + currentLsnId);

      setCurrentLsnId(Number(currentLsnId - 1));
      setPgComponents(courseLsn[currentLsnId].lesson);
      console.log(
        "inside here setPgComponents and currentLsnId " +
          pgComponents +
          " currentLsnId " +
          currentLsnId
      );

      console.log("outside here " + pgComponents.length);

      //   setCurrentPgComponent(Number(pgComponents.length) - 1);
    }
  };

  const nextClick = (id, lessonId) => {
    console.log(
      "next id, currentPgComponent,  pgComponents.length" +
        id +
        ", " +
        currentPgComponent +
        ", " +
        pgComponents.length
    );

    if (
      currentPgComponent === id &&
      currentPgComponent < pgComponents.length - 1
    ) {
      setCurrentPgComponent(Number(currentPgComponent) + 1);
    } else {
      setPgComponents(courseLsn[Number(currentLsnId) + 1].lesson);
      setCurrentLsnId(Number(currentLsnId) + 1);
      setCurrentPgComponent(0);
    }
    console.log("new currentLsnId " + currentLsnId);
    console.log("data length " + courseLsn[currentLsnId].lesson.length);
    console.log("data " + courseLsn[currentLsnId].lesson);
    console.log("new currentPgComponent " + currentPgComponent);
  };

  //   const btnClick = (number) => {
  //     const showPgs = pgComponents.map((pgComponent) => {
  //       if (pgComponent.id !== number) {
  //         pgComponent.isVisible = !pgComponent.isVisible;
  //       }
  //       console.log("id " + pgComponent.id);
  //       return pgComponent;
  //     });
  //     setPgComponents(showPgs);
  //   };
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
  //       setCurrentLsnId(component.id);
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
  //         {/* {currentLsnId === component.id && pgComponents === true && (
  //           <p>{component.component}</p>
  //         )} */}
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <section id="component-section">
      <div id="component-container" className="row main-row">
        {pgComponents.map(({ id, component, isVisible }) => (
          <div id={"component-container-" + id}>
            {currentPgComponent === id && component}
          </div>
        ))}

        {/* {currentPgComponent == {id} && {pgComponent}} */}

        {/* {currentPgComponent == 1 && <LsnPage01 />}
        {currentPgComponent == 2 && <LsnPage02 />}
        {currentPgComponent == 3 && <LsnPage03 />}
        {currentPgComponent == 4 && <LsnPage04 />}
        {currentPgComponent == 5 && <LsnPage05 />}
        {currentPgComponent == 6 && <LsnPage06 />}
        {currentPgComponent == 7 && <LsnPage07 />}
        {currentPgComponent == 8 && <LsnPage08 />} */}
        {/* {lsn01.map(({ id, component, isVisible }) => (
        <div key={id} onClick={() => btnClick(id)} hidden={!isVisible}>
          {component}
        </div>
      ))} */}
      </div>
      <div className="courseFooter row">
        <footer className="row">
          <div className="footer-nav">
            <img src={LogoImg} alt="L2 Defense Logo" />
            <img src={FooterImg} alt="Chemical Hazmat Team" />
            <div className="btnPrev col-1">
              <Button
                className="btn btn-primary btn-sm btn-prev"
                onClick={() => backClick(currentPgComponent, currentLsnId)}>
                Back
              </Button>
            </div>
            <div className="btnNext col-1">
              <Button
                className="btn btn-primary btn-sm btn-next"
                onClick={() => nextClick(currentPgComponent, currentLsnId)}>
                Next
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default PgContent;
