import { Link } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.min.css";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import images from "./images";
import Carousel from "./Carousel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import DragDropBase from "./components/DragDropBase";
import Video from "./components/Video";
import Accordion from "./Accordion";
import QuizStart from "./components/QuizStart";
import Question from "./components/Question";
import Questions from "./components/Questions";
import kcLsn01 from "./data/lsn01KC.json";
import CheckOnLearning01 from "./pages/Lesson01/09_checkOnLearning01";
import Header from "./Header";
import Footer from "./Footer";
// import LsnContent00 from "./pages/novLsn00";

function App() {
     return (
          <DndProvider backend={HTML5Backend}>
               <div className='App container'>
                    <Header />
                    <div className='row'>
                         <h1>Welcome to the MultiRae Course</h1>
                         <LoremIpsum p={1} />
                         <br />
                         <Link to='/pages/LandingPage'>Landing Page</Link>
                         <Link to='/pages/novLsn00'>Course Intro</Link>
                    </div>
                    <div className='row'>
                         {/* <CheckOnLearning01 /> */}
                         {/* <Sensor url={sensor.url} id={sensor.id} /> */}
                         {/* <Questions questionData={kcLsn01} /> */}
                    </div>
                    <div className='row'>
                         <div className='col-6'>
                              <Accordion />
                         </div>
                         {/*<div className='col-6'> <Video /> </div>*/}
                         <div className='col-6'>
                              <Carousel images={images} />
                         </div>
                    </div>
                    <div className='row'>
                         <div className='col-6'>
                              <DragDropBase />
                         </div>
                         <div className='col-6'>
                              <DragDrop />
                         </div>
                    </div>
               </div>
               <Footer />
          </DndProvider>
     );
}

export default App;
