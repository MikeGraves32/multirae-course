import { Link } from "react-router-dom";
import "./App.css";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import images from "./images";
import Carousel from "./Carousel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import DragDropBase from "./components/DragDropBase";
import Video from "./components/Video";
import Accordion from "./Accordion";

function App() {
     return (
          <DndProvider backend={HTML5Backend}>
               <div className='App'>
                    <h1>Welcome to the MultiRae Course</h1>
                    <LoremIpsum p={1} />
                    <br />
                    <Link to='/pages/LandingPage'>Landing Page</Link>
                    {/* <Accordion /> */}
                    {/* <Video /> */}
                    <Carousel images={images} />
                    <DragDropBase />
                    {/* <DragDrop /> */}
               </div>
          </DndProvider>
     );
}

export default App;
