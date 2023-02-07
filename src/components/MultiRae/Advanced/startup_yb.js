import React, { useEffect, useState, useRef } from "react";
import { YB_Calib_Start } from "./screens_yb_multicalib_01";
import { YB_Calib_Sensor_Warmup } from "./screens_yb_multicalib_02";
import { YB_Calib_Calibrating } from "./screens_yb_multicalib_03";
import { YB_Calib_Calibrate_SO2 } from "./screens_yb_multicalib_04";
import { YB_Calib_Apply_Gas_SO2 } from "./screens_yb_multicalib_05";
import { YB_Calib_Calibrating_SO2 } from "./screens_yb_multicalib_06";
import { YB_Calib_CL2 } from "./screens_yb_multicalib_07";
import { YB_Calib_Apply_Gas_CL2 } from "./screens_yb_multicalib_08";
import { YB_Calib_Calibrating_CL2 } from "./screens_yb_multicalib_09";
import { YB_Calib_VOC } from "./screens_yb_multicalib_10";
import { YB_Calib_Apply_Gas_VOC } from "./screens_yb_multicalib_11";
import { YB_Calib_Calibrating_VOC } from "./screens_yb_multicalib_12";
import { YB_Calib_Complete } from "./screens_yb_multicalib_13";

import power from "../../../img/powerBtn/power.png";
import nBtn from "../../../img/powerBtn/N-.png";
import yBtn from "../../../img/powerBtn/Y+.png";
import "./index.css";
const images = YB_Calib_Start;
// const images = YB_Calib_Sensor_Warmup;
// const images = YB_Calib_Calibrating;
// const images = YB_Calib_Calibrate_SO2;
// const images = YB_Calib_Apply_Gas_SO2;
// const images = YB_Calib_Calibrating_SO2;
// const images = YB_Calib_CL2;
// const images = YB_Calib_Apply_Gas_CL2;
// const images = YB_Calib_Calibrating_CL2;
// const images = YB_Calib_VOC;
// const images = YB_Calib_Apply_Gas_VOC;
// const images = YB_Calib_Calibrating_VOC;
// const images = YB_Calib_Complete;
export default function StartUp_YB() {
     const [currentStartUpImage, setCurrentStartUpImage] = useState(
          YB_Calib_Start[0].url
     );
     const [currentIndex, setCurrentIndex] = useState(1);
     const secondButtonRef = useRef();
     const handleFirstButtonClick = (e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
               secondButtonRef.current.click();
          }
     };
     const handleSecondButtonClick = (e) => {
          if (e.key === "ArrowLeft" && e.key === "ArrowRight") {
               alert("Second button was clicked.");
               const intervalId = setInterval(() => {
                    if (currentIndex === images.length - 1) {
                         setCurrentIndex(0);
                    } else {
                         setCurrentIndex(currentIndex + 1);
                    }
                    setCurrentStartUpImage(images[currentIndex].url);
               }, 5000);
               return () => clearInterval(intervalId);
          }
     };

     useEffect(() => {
          document.addEventListener("keydown", detectKeyDown, true);
     }, []);

     const detectKeyDown = (e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
               console.log("selected key " + e.key);
               const intervalId = setInterval(() => {
                    setCurrentStartUpImage(
                         images[Math.floor(Math.random() * images.length)].url
                    );
               }, 5000);
               return () => clearInterval(intervalId);
               secondButtonRef.current.click();
          }
     };

     // useEffect((e) => {
     //      const intervalId = setInterval(() => {
     //           setCurrentStartUpImage(
     //                images[Math.floor(Math.random() * images.length)].url
     //           );
     //      }, 2000);
     //      return () => clearInterval(intervalId);
     // }, []);

     return (
          <div className='multirae_screen'>
               <img src={currentStartUpImage} alt='Screen' />
          </div>
     );

     // const [currentIndex, setCurrentIndex] = useState(1);
     // const [currentStartUpImage, setCurrentStartUpImage] = useState(null);

     // useEffect(() => {
     //      const intervalId = setInterval(() => {
     //           if (currentIndex === images.length - 1) {
     //                setCurrentIndex(0);
     //           } else {
     //                setCurrentIndex(currentIndex + 1);
     //           }
     //           setCurrentStartUpImage(images[currentIndex].url);
     //      }, 5000);
     //      return () => clearInterval(intervalId);
     // }, [currentIndex]);
     return (
          <div className='multirae_screen'>
               <img src={currentStartUpImage} />
               <div className='multiRae-yellow-boot'>
                    <img
                         alt='Y+'
                         src={yBtn}
                         className='powerBtn-set Y+'
                         onClick={() => handleFirstButtonClick()}
                    />
                    <img src={power} className='powerBtn-set power' />
                    <img
                         alt='N-'
                         src={nBtn}
                         className='powerBtn-set N-'
                         onClick={() => handleSecondButtonClick()}
                         ref={secondButtonRef}
                    />
               </div>
          </div>
     );
}
