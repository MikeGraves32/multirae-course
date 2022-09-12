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

import Container from "react-bootstrap/Container";

// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

return (
     <DndProvider backend={HTML5Backend}>
          <div className='App container-md'>
               <div className='row'>
                    <h1>Welcome to the MultiRae Course</h1>
                    <LoremIpsum p={1} />
                    <br />
                    <Link to='/pages/LandingPage'>Landing Page</Link>
               </div>

               {/* <Accordion /> */}
               <div className='row'>
                    <div className='col-6'>
                         <Video />
                    </div>

                    <div className='col-6'>
                         <Carousel images={images} />
                    </div>
               </div>
               <div className='row'>
                    <div className='col-6'>
                         {" "}
                         <DragDropBase />
                    </div>

                    <div className='col-6'>
                         <DragDrop />
                    </div>
               </div>
          </div>
     </DndProvider>
);

export default App;
