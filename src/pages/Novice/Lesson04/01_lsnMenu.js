import "../../../App.css";
import React from "react";

// import "@fontsource/roboto";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

export default (props) => {
  const pgTitle = "Gas Monitor and TIC Vapor Detector (MultiRAE)";
  return (
    <div className="lsn-splash">
      <div className="row">
        {/* <col className='col-4'> */}
        <h2 className="pgTitle">{pgTitle}</h2>
        {/* </col> */}
      </div>
    </div>
  );
};
