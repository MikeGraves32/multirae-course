import "../../../App.css";
import * as React from "react";
import SensorCharacteristics from "../../../components/tab/Tabs";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import blackBootUI from "../../../img/blackBoot_UI03.png";

export default (props) => {
     const pgTitle = "Keys and Interface: 3 Panes";
     return (
          <div className=''>
               <img src={blackBootUI} className='' alt='blackBootUI' />
          </div>
     );
};
