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
import TabGroup from "../../../data/tabContent/TopTabs";
import Capability from "../../../components/tab/Capability";

// import { LoremIpsum } from "react-lorem-ipsum";

export default (props) => {
  const pgTitle = "Capabilities";
  return (
    <section className="container">
      <h2 className="pgTitle">{pgTitle}</h2>
      <div className="container-lg">
        <TabGroup types={Capability} />
      </div>
    </section>
  );
};
