import "../../../App.css";
import * as React from "react";
import SensorCharacteristics from "../../../components/tab/Tabs";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { LoremIpsum } from "react-lorem-ipsum";

export default (props) => {
     const pgTitle = "Common Definitions";
     return (
          <section className='container'>
               <h2 className='pgTitle'>{pgTitle}</h2>
               <div className='container-lg'>
                    <SensorCharacteristics />
               </div>
          </section>
     );
};
