import "../../../App.css";
import React, { useState } from "react";

import Modal from "../../../components/modal/modal";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import infographic from "../../../img/infographic.png";

import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default (props) => {
     const pgTitle = "Infographic";
     const [closeModal, setCloseModal] = useState(true);
     return (
          <section className='container'>
               <h2 className='pgTitle'>{pgTitle}</h2>

               <div className='container-lg'>
                    <div className='infographic'>
                         <img src={infographic} className='infographic' />
                    </div>
               </div>
          </section>
     );
};
