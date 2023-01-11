/** @jsxImportSource @emotion/react */
import React from "react";
import "bulma/css/bulma.min.css";
import "./App.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import { LoremIpsum, Avatar } from "react-lorem-ipsum";
// import { Link } from "react-router-dom";
// import images from "./images";
// import SliderImg from "./sliderImg";
// import Carousel from "./Carousel";
import DragDrop from "./components/DragDrop";
// import DragDropBase from "./components/DragDropBase";
// import Video from "./components/Video";
// import Accordion from "./Accordion";
// import QuizStart from "./components/QuizStart";
// import Question from "./components/Question";
// import Questions from "./components/Questions";
// import { MultiRae } from "./components/MultiRae";
// import MultiCalibration from "./components/MultiRae/Advanced/multiCalibration";
// import lsn01KC from "./data/lsn01KC.json";
// import CheckOnLearning01 from "./pages/Lesson01/09_checkOnLearning01";
// import CourseStart from "./pages/Lesson00/01_introSplash";
// import ChoosePath from "./pages/Lesson00/04_choosePath";
// import TheoryOps from "./pages/Lesson00/08_theoryOpsBooks";
// import SensorCharacteristics from "./pages/Lesson01/07_sensorCharacteristics";
// import Objectives02 from "./pages/Lesson02/03_objectives";
// import ConfigMultiRae from "./pages/Lesson02/04_configMultiRae";
// import CrossSensitivity from "./pages/Lesson01/08_crossSensitivity";
// import DemoBlock from "./components/book/book";
// import LsnPg01 from "./Lesson00/01_introSplash";
// import Header from "./Header";
// import Footer from "./Footer";
// import CardFlip from "./components/flipCard/CardFlip";
// import BasicExample from "./components/AccordionMain";
import Slider from "./components/Slider/Slider";
// import GrabPage from "./GrabPage";
// import FlipPages from "./components/book/mainBook";
// import LsnContent00 from "./pages/novLsn00";
// import TopTab from "./components/tab/TopTabs";
// import TabTop from "./components/tab/TabTop";
// import NoviceLsn01 from "./data/noviceComp";

// import Button from "react-bootstrap/Button";

// import LsnPage01 from "./pages/Lesson00/01_introSplash";
// import LsnPage02 from "./pages/Lesson00/02_vidSlide";
// import LsnPage03 from "./pages/Lesson00/03_introduction";
// import LsnPage04 from "./pages/Lesson00/04_choosePath";
// import LsnPage05 from "./pages/Lesson00/05_avatarEnter";
// import LsnPage06 from "./pages/Lesson00/06_avatarOption";
// import LsnPage07 from "./pages/Lesson00/07_courseWelcome";
// import LsnPage08 from "./pages/Lesson00/08_theoryOpsBook";
import Novice from "./ContentNovice";
import Intermediate from "./ContentIntermediate";
import AccordionMain from "./components/AccordionMain";
import TabGroup from "./data/tabContent/TopTabs";
import Capability from "./components/tab/Capability";
import Dnd from "./components/DraggableDrop";
// const array = [
//   { id: 1, component: <LsnPage01 />, isVisible: true },

//   { id: 2, component: <LsnPage02 />, isVisible: false },

//   { id: 3, component: <LsnPage03 />, isVisible: false },

//   { id: 4, component: <LsnPage04 />, isVisible: false },

//   { id: 5, component: <LsnPage05 />, isVisible: false },

//   { id: 6, component: <LsnPage06 />, isVisible: false },

//   { id: 7, component: <LsnPage07 />, isVisible: false },

//   { id: 8, component: <LsnPage08 />, isVisible: false },
// ];

function App() {
  console.log("rendering");
  // const [items, setItems] = useState(array);

  // const handleClickBack = (number) => {
  //   const triggeredItems = items.map((item) => {
  //     if (item.id !== number) {
  //       item.isVisible = !item.isVisible;
  //     }

  //     return (
  //       //   <div className="main-content">
  //       //   <div className="row">{contentComponent}</div>
  //       // </div>

  //       <div className="main-content">
  //         <div className="row">
  //           {items.map(({ id, component, isVisible, info }) => (
  //             <div> {item}</div>
  //           ))}{" "}
  //         </div>
  //       </div>
  //     );
  //   });

  //   setItems(triggeredItems);
  // };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App container">
        {/* <Header /> */}
        <div className="main-content">
          {/* <div className="row"> */}
          {/* <TabGroup types={Capability} /> */}
          {/* <AccordionMain /> */}
          {/* <Slider /> */}
          {/* <DragDrop /> */}
          <Novice />
          {/* <Dnd /> */}
          {/* <Intermediate /> */}
          {/* <MultiCalibration />*/}
          {/* </div> */}
        </div>
        {/* <Footer /> */}
        {/* <div className="courseFooter row">
          <footer className="row">
            <div className="btnPrev col-1">
              <Button className="btn btn-primary btn-sm btn-prev">Back</Button>
            </div>
            <div className="btnNext col-1">
              <Button className="btn btn-primary btn-sm btn-next">Next</Button>
            </div>
            <div>
              <p>This site is the footer area of the GUI</p>
              <p>&copy; L2 Defense 2022</p>
            </div>
          </footer>
        </div> */}
      </div>
    </DndProvider>
  );
}

export default App;
