import React from "react";

export default function SensorBox({ black, children }) {
     const fill = black ? "white" : "black";
     const stroke = black ? "black" : "white";

     return (
          <div
               style={{
                    backgroundColor: fill,
                    color: stroke,
                    width: "110px",
                    height: "110px",
                    // padding: "24px",
                    margin: "24px",
                    // min-width: "1rem",
                    // min-height: "5rem",
                    // margin-left: "24px",
                    // margin-right: "24px",
               }}
          >
               {children}
          </div>
     );
}
