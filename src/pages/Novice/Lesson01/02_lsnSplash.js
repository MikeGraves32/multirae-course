import "../../../App.css";
import React from "react";

// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Lesson 1 - MultiRAE Overview";
  return (
    <div className="lsn-splash">
      <div className="container-pgTitle">
        {/* <col className='col-4'> */}
        <h2 className="pgTitle">{pgTitle}</h2>
        {/* </col> */}
      </div>
    </div>
  );
};
