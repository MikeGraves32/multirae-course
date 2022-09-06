import "../App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Novice from "./Novice";
import Intermediate from "./Intermediate";
import Advance from "./Advance";
// import "@fontsource/roboto";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import { Container } from "@mui/system";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <ul className="nav">
        <div className="container">
          <li className="nav-item row align-items-start">
            <Link to="../pages/Novice">Novice</Link>
          </li>
        </div>
        <div className="container">
          <li className="nav-item">
            <Link to="../pages/Intermediate">Intermediate</Link>
          </li>
        </div>
        <div className="container">
          <li className="nav-item">
            <Link to="../pages/Advance">Advance</Link>
          </li>
        </div>
      </ul>
      {/* <Grid container spacing={8}> */}
      {/* <SideNavbar /> */}
      {/*  <Route path="/" exact render={(props) => <App />} /> */}

      {/* <Routes>
        <Route path="./Novice" render={(props) => <Novice />} />
        <Route path="./Intermediate" render={(props) => <Intermediate />} />
        <Route path="./Advance" render={(props) => <Advance />} />
      </Routes> */}
      {/* </Grid> */}
    </div>
  );
};

export default LandingPage;
