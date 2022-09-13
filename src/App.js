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

function App() {
     return (
          <DndProvider backend={HTML5Backend}>
               <div className='App container-md'>
                    <div className='row'>
                         <h1>Welcome to the MultiRae Course</h1>
                         <LoremIpsum p={1} />
                         <br />
                         <Link to='/pages/LandingPage'>Landing Page</Link>
                    </div>
                    <div className='row'>
                         <Questions />
                    </div>
                    <div className='row'>
                         <div className='col-6'>{/* <Accordion /> */}</div>
                         <div className='col-6'>{/* <Video /> */}</div>
                         <div className='col-6'>
                              <Carousel images={images} />
                         </div>
                    </div>
                    <div className='row'>
                         {/* <DragDropBase /> */}
                         <div className='col-6'>
                              <DragDrop />
                         </div>
                    </div>
               </div>
          </DndProvider>
     );
}

export default App;
